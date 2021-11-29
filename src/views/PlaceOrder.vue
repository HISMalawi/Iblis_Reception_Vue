<template>
  <div class="content has-text-left">
    <form @submit.prevent="addOrder">
      <div class="field">
        <label class="label">Visit Type</label>
        <div class="control">
          <div class="select is-medium is-fullwidth">
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
      </div>
      <div class="field">
        <label class="label">Requesting Ward / Location</label>
        <div class="control">
          <div class="select is-medium is-fullwidth">
            <select v-model="selectedWard">
              <option :value="0">--- Select Ward / Location ---</option>
              <option :value="ward.id" v-for="ward in Wards" :key="ward.id">
                {{ ward.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label">Requesting Physician</label>
        <div class="control has-icons-right">
          <input class="input is-success is-medium" type="text" />

          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>
      <div class="field mb-6">
        <label class="label">Specimen Type</label>
        <div class="control">
          <div class="select is-medium is-fullwidth">
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
      </div>
      <div class="field mb-6">
        <label class="label">Select Test(s)</label>
        <table class="table">
          <thead>
            <tr>
              <th>Tests</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tfoot>
            <nav class="pagination" role="navigation" aria-label="pagination">
              <a
                v-if="page != 1"
                @click="page--"
                class="pagination-previous is-disabled"
                title="This is the first page"
                >Previous</a
              >
              <a
                v-if="page < pages.length && page !== pages.length"
                class="pagination-next"
                @click="page++"
                >Next page</a
              >
              <ul class="pagination-list">
                <li v-for="pagex in numberOfPages" :key="pagex" @click="page = pagex">
                  <a :class="page == pagex ? 'is-current' : ''"
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
              <td>{{ Test.name }}</td>
              <td><input type="checkbox" /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button type="submit" class="button is-link is-medium">Save</button>
        </div>
        <div class="control">
          <button class="button is-link is-light is-medium">Cancel</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import GetVisitTypes from "@/composables/getVisitTypes";
import GetSpecimenTypes from "@/composables/getSpecimenTypes";
import GetWards from "@/composables/getWards";
import GetTests from "@/composables/getTests";

export default defineComponent({
  name: "PlaceOrder",
  components: {},
  setup() {
    const page = ref<number>(1);
    const perPage = ref<number>(15);
    const pages = ref<number[]>([]);
    const numberOfPages = ref<number>(0);

    const { fetchTests, Tests } = GetTests();

    const { visitTypes, fetchVisitTypes } = GetVisitTypes();

    const { fetchSpecimenTypes, specimenTypes } = GetSpecimenTypes();

    const selectedVisitType = ref(0);

    const selectedWard = ref(0);

    const selectedSpecimenType = ref(0);

    const { Wards, fetchWards } = GetWards();

    watch(
      () => [selectedVisitType.value != selectedVisitType.value],
      () => {
        selectedWard.value = 0;

        fetchWards(selectedVisitType.value);
      }
    );

    watch(
      () => [selectedSpecimenType.value != selectedSpecimenType.value],
      () => {
        fetchTests(selectedSpecimenType.value);
      }
    );

    watch(
      () => [Tests.value != Tests.value],
      () => {
        setPages();
      }
    );

    const addOrder = () => {
      console.log(specimenTypes);
    };

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

    const test = () => {
      console.log("Test")
    }



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
      test,
    };
  },
});
</script>
