<template>
  <div class="content has-text-left">
    <div v-if="code !== ''" class="notification is-primary">
      <button class="delete"></button>
      {{ message }}
    </div>
    <form @submit.prevent="addOrder">
      <div class="field mb-5">
        <label class="label">Visit Type</label>
        <div class="control">
          <div
            class="select is-medium is-fullwidth"
            :class="errors.includes('visit_type') ? 'is-danger' : ''"
          >
            <select v-model="selectedVisitType">
              <option :value="selectedVisitType">
                {{ selectedVisitType.name }}
              </option>
              <option
                :value="visitType"
                v-for="visitType in visitTypes"
                :key="visitType.id"
              >
                {{ visitType.name }}
              </option>
            </select>
          </div>
        </div>
        <p v-if="errors.includes('visit_type')" class="help is-danger">
          Visit Type is required
        </p>
      </div>
      <div class="field mb-5">
        <label class="label">Requesting Ward / Location</label>
        <div class="control">
          <div
            class="select is-medium is-fullwidth"
            :class="errors.includes('requesting_location') ? 'is-danger' : ''"
          >
            <select v-model="selectedWard">
              <option :value="selectedWard">{{ selectedWard.name }}</option>
              <option :value="ward" v-for="ward in Wards" :key="ward.id">
                {{ ward.name }}
              </option>
            </select>
          </div>
        </div>
        <p v-if="errors.includes('requesting_location')" class="help is-danger">
          Requesting Ward / Location is required
        </p>
      </div>
      <div class="field mb-5">
        <label class="label">Requesting Physician</label>
        <div class="control has-icons-right">
          <input
            v-model="requestingPhysician"
            class="input is-success is-medium"
            :class="errors.includes('requesting_physician') ? 'is-danger' : ''"
            type="text"
          />

          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
        <p
          v-if="errors.includes('requesting_physician')"
          class="help is-danger"
        >
          Requesting Physician is required
        </p>
      </div>
      <div class="field mb-6">
        <label class="label">Specimen Type</label>
        <div class="control">
          <div
            class="select is-medium is-fullwidth"
            :class="errors.includes('specimen_type') ? 'is-danger' : ''"
          >
            <select v-model="selectedSpecimenType">
              <option :value="0">--- Select Specimen Type ---</option>
              <option
                :value="specimenType.id"
                v-for="specimenType in specimenTypes"
                :key="specimenType.id"
              >
                {{ specimenType.name }}
              </option>
            </select>
          </div>
        </div>
        <p v-if="errors.includes('specimen_type')" class="help is-danger">
          Specimen Type is required
        </p>
      </div>
      <div class="field mb-6">
        <label class="label">Select Test(s)</label>

        <table class="table custom-bg">
          <thead>
            <tr>
              <th>Tests</th>
              <th>Actions</th>
              <th>
                <div id="test-search-in-table" class="field has-addons">
                <div class="control">
                  <input v-model="testSearch"
                    class="input"
                    type="text"
                    placeholder="Search"
                  />
                </div>
              </div>
              </th>

              

            </tr>
          </thead>
          <tfoot>
            <nav
              class="pagination mb-4"
              role="navigation"
              aria-label="pagination"
            >
              <a
                v-if="page != 1"
                @click="page--"
                class="pagination-previous is-disabled"
                title="This is the first page"
                >Previous</a
              >
              <a
                v-if="
                  page < pages.length &&
                  numberOfPages > 1 &&
                  numberOfPages !== page
                "
                class="pagination-next"
                @click="page++"
                >Next page</a
              >
              <ul class="pagination-list">
                <li
                  v-for="pagex in numberOfPages"
                  :key="pagex"
                  @click="page = pagex"
                >
                  <a
                    :class="page == pagex ? 'is-current' : ''"
                    class="pagination-link"
                    aria-label="Page 1"
                    aria-current="page"
                    >{{ pagex }}</a
                  >
                </li>
              </ul>
            </nav>
          </tfoot>

          <tbody>
            <tr v-for="Test in paginatedTests" :key="Test.id">
              <td>
                <label class="order_tests" :for="Test.id">{{
                  Test.name
                }}</label>
              </td>
              <td>
                <input
                  class="order_tests cb"
                  type="checkbox"
                  :id="Test.id"
                  :value="Test"
                  v-model="checkedTests"
                />
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <p v-if="errors.includes('tests')" class="help is-danger">
          Test(s) is required
        </p>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button type="submit" class="button is-primary is-medium">
            Save
          </button>
        </div>
        <div class="control">
          <button
            @click="ClearForm"
            type="reset"
            class="button is-link is-light is-medium"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, ref, watch } from "vue";
import GetVisitTypes from "@/composables/getVisitTypes";
import GetSpecimenTypes from "@/composables/getSpecimenTypes";
import GetWards from "@/composables/getWards";
import GetTests from "@/composables/getTests";
import { Order } from "@/interfaces/Order";
import { Test } from "@/interfaces/Test";
import CreateOrder from "@/composables/createOrder";
import { useStore } from "@/store";
import { Patient } from "@/interfaces/Patient";
import { User } from "@/interfaces/User";
import { Ward } from "@/interfaces/Ward";
import { VisitType } from "@/interfaces/VisitType";

export default defineComponent({
  name: "PlaceOrder",
  components: {},
  setup() {
    const store = useStore();

    let selectedPatient: Patient = store.getters.selectedPatient;

    const user: User = store.getters.user;

    const { save, message, code } = CreateOrder();

    const checkedTests = ref<Test[]>([]);
    const page = ref<number>(1);
    const perPage = ref<number>(15);
    const pages = ref<number[]>([]);
    const numberOfPages = ref<number>(0);

    const errors = ref<string[]>([]);

    const testSearch = ref('')

    const { fetchTests, Tests } = GetTests();

    const { visitTypes, fetchVisitTypes } = GetVisitTypes();

    const { fetchSpecimenTypes, specimenTypes } = GetSpecimenTypes();

    let selectedVisitType = ref<VisitType>({
      id: 0,
      name: "--- Select Visit Type ---",
      created_at: "",
      updated_at: "",
    });

    const selectedWard = ref<Ward>({
      id: 0,
      name: "--- Select Ward / Location ---",
    });

    const selectedSpecimenType = ref(0);

    const requestingPhysician = ref("");

    const { Wards, fetchWards } = GetWards();

    watch(
      () => [selectedVisitType.value],
      () => {
        removeError("visit_type");
        selectedWard.value.id = 0;

        fetchWards(selectedVisitType.value);
      }
    );

    watch(
      () => [selectedWard.value],
      () => {
        removeError("requesting_location");
      }
    );

    watch(
      () => [selectedSpecimenType.value],
      () => {
        if (selectedSpecimenType.value == 0) {
          Tests.value.length = 0;
          numberOfPages.value = 0;
        }

        removeError("specimen_type");

        checkedTests.value.length = 0;
        page.value = 1;

        fetchTests(selectedSpecimenType.value);
      }
    );

    watch(
      () => [Tests.value],
      () => {
        setPages();
      }
    );

    watch(
      () => [requestingPhysician.value],
      () => {
        removeError("requesting_physician");
      }
    );

    watch(
      () => [checkedTests.value],
      () => {
        removeError("tests");
      }
    );

    fetchVisitTypes();
    fetchSpecimenTypes();

    const setPages = () => {
      numberOfPages.value = Math.ceil(Tests.value.length / perPage.value);
      for (let index = 1; index <= numberOfPages.value; index++) {
        pages.value.push(index);
      }
    };

    const paginatedTests = computed(() => {
      let xpage: number = page.value;
      let xperPage = perPage.value;
      let from = xpage * xperPage - xperPage;
      let to = xpage * xperPage;
      return filterTests.value.slice(from, to);
    });

    const filterTests = computed(() => {
      return Tests.value.filter((test) => test.name.includes(testSearch.value))
    })


    onBeforeMount(() => {
      paginatedTests.value.length = 0;
    });

    const removeError = (value: string) => {
      const index = errors.value.indexOf(value);
      if (index > -1) {
        errors.value.splice(index, 1);
      }
    };

    const addOrder = () => {
      errors.value.length = 0;

      if (selectedVisitType.value.id == 0) {
        errors.value.push("visit_type");
      }

      if (selectedWard.value.id == 0) {
        errors.value.push("requesting_location");
      }

      if (requestingPhysician.value == "") {
        errors.value.push("requesting_physician");
      }

      if (selectedSpecimenType.value == 0) {
        errors.value.push("specimen_type");
      }

      if (checkedTests.value.length == 0) {
        errors.value.push("tests");
      }

      if (errors.value.length == 0) {
        let order: Order = {
          visit_type: selectedVisitType.value,
          requesting_location: selectedWard.value,
          requesting_physician: requestingPhysician.value,
          specimen_type_id: selectedSpecimenType.value,
          tests: checkedTests.value,
          patient: selectedPatient,
          user: user,
        };

        save(order);

        ClearForm();
      }
    };

    const ClearForm = () => {
      selectedVisitType.value = {
        id: 0,
        name: "--- Select Visit Type ---",
        created_at: "",
        updated_at: "",
      };

      selectedWard.value = {
        id: 0,
        name: "--- Select Ward / Location ---",
      };

      requestingPhysician.value = "";

      selectedSpecimenType.value = 0;

      checkedTests.value.length == 0;
    };

    return {
      visitTypes,
      specimenTypes,
      selectedWard,
      selectedVisitType,
      selectedSpecimenType,
      Wards,
      addOrder,
      numberOfPages,
      perPage,
      page,
      pages,
      paginatedTests,
      checkedTests,
      errors,
      requestingPhysician,
      message,
      code,
      ClearForm,
      testSearch
    };
  },
});
</script>
<style>
.order_tests:hover {
  cursor: pointer;
}

.cb {
  width: 17px;
  height: 17px;
}

.pagination-next {
  text-decoration: none !important;
}

.pagination-previous {
  text-decoration: none !important;
}

#test-search-in-table {
  float: right;
  
}


</style>
