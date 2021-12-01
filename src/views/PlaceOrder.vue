<template>
  <div class="content has-text-left">
    <form @submit.prevent="addOrder">
      <div class="field mb-5">
        <label class="label">Visit Type</label>
        <div class="control">
          <div class="select is-medium is-fullwidth" :class="errors.includes('visit_type') ? 'is-danger': ''">
            <select v-model="selectedVisitType">
              <option :value="0">--- Select Visit Type ---</option>
              <option
                :value="visitType.id"
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
          <div class="select is-medium is-fullwidth" :class="errors.includes('requesting_location') ? 'is-danger': ''">
            <select v-model="selectedWard">
              <option :value="0">--- Select Ward / Location ---</option>
              <option :value="ward.id" v-for="ward in Wards" :key="ward.id">
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
          <input v-model="requestingPhysician" class="input is-success is-medium" :class="errors.includes('requesting_physician') ? 'is-danger': ''" type="text" />

          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
        <p v-if="errors.includes('requesting_physician')" class="help is-danger">
          Requesting Physician is required
        </p>
      </div>
      <div class="field mb-6">
        <label class="label">Specimen Type</label>
        <div class="control">
          <div class="select is-medium is-fullwidth" :class="errors.includes('specimen_type') ? 'is-danger': ''">
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
            </tr>
          </thead>
          <tfoot>
            <nav class="pagination mb-4" role="navigation" aria-label="pagination">
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
                <label class= "order_tests" :for="Test.id">{{ Test.name }}</label>
              </td>
              <td>
                <input
                  class= "order_tests"
                  type="checkbox"
                  :id="Test.id"
                  :value="Test.id"
                  v-model="checkedTests"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <p v-if="errors.includes('tests')" class="help is-danger">
          Test(s) is required
        </p>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button type="submit" class="button is-primary is-medium">Save</button>
        </div>
        <div class="control">
          <button class="button is-link is-light is-medium">Cancel</button>
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

export default defineComponent({
  name: "PlaceOrder",
  components: {},
  setup() {
    const checkedTests = ref<number[]>([]);
    const page = ref<number>(1);
    const perPage = ref<number>(15);
    const pages = ref<number[]>([]);
    const numberOfPages = ref<number>(0);

    const errors = ref<string[]>([]);

    const { fetchTests, Tests } = GetTests();

    const { visitTypes, fetchVisitTypes } = GetVisitTypes();

    const { fetchSpecimenTypes, specimenTypes } = GetSpecimenTypes();

    const selectedVisitType = ref(0);

    const selectedWard = ref(0);

    const selectedSpecimenType = ref(0);

    const requestingPhysician = ref('');

    const { Wards, fetchWards } = GetWards();

    watch(
      () => [selectedVisitType.value != selectedVisitType.value],
      () => {

        removeError('visit_type')
        selectedWard.value = 0;

        fetchWards(selectedVisitType.value);
      }
    );

    watch(
      () => [selectedWard.value != selectedWard.value],
      () => {

        removeError('requesting_location')
      }
    );

    watch(
      () => [selectedSpecimenType.value != selectedSpecimenType.value],
      () => {
        if (selectedSpecimenType.value == 0) {
          Tests.value.length = 0;
          numberOfPages.value = 0;
        }

        removeError('specimen_type')

        checkedTests.value.length = 0;
        page.value = 1;

        fetchTests(selectedSpecimenType.value);
      }
    );

    watch(
      () => [Tests.value != Tests.value],
      () => {
        setPages();
      }
    );

    watch(
      () => [requestingPhysician.value != requestingPhysician.value],
      () => {
        removeError('requesting_physician')
      }
    );

    watch(
      () => [checkedTests.value != checkedTests.value],
      () => {
        removeError('tests')
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
      return Tests.value.slice(from, to);
    });

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

      if (selectedVisitType.value == 0) {
        errors.value.push("visit_type");
      }

      if (selectedWard.value == 0) {
        errors.value.push("requesting_location");
      }

      if (requestingPhysician.value == '') {
        errors.value.push("requesting_physician");
      }

      if (selectedSpecimenType.value == 0) {
        errors.value.push("specimen_type");
      }

      if (checkedTests.value.length == 0) {
        errors.value.push("tests");
      }
      
      if (errors.value.length == 0) {

        console.log("Add Order...")
        
      }
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
    };
  },
});
</script>
<style>
.order_tests:hover {
  cursor: pointer;
}

</style>
