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
                class="pagination-previous is-disabled"
                title="This is the first page"
                >Previous</a
              >
              <a class="pagination-next">Next page</a>
              <ul class="pagination-list">
                <li>
                  <a
                    class="pagination-link is-current"
                    aria-label="Page 1"
                    aria-current="page"
                    >1</a
                  >
                </li>
                <li>
                  <a class="pagination-link" aria-label="Goto page 2">2</a>
                </li>
                <li>
                  <a class="pagination-link" aria-label="Goto page 3">3</a>
                </li>
              </ul>
            </nav>
          </tfoot>

          <tbody>
            <tr v-for="Test in Tests" :key="Test.id">
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
import { defineComponent, ref, watch } from "vue";
import GetVisitTypes from "@/composables/getVisitTypes";
import GetSpecimenTypes from "@/composables/getSpecimenTypes";
import GetWards from "@/composables/getWards";
import GetTests from "@/composables/getTests";

export default defineComponent({
  name: "PlaceOrder",
  components: {},
  setup() {
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

    const addOrder = () => {
      console.log(specimenTypes);
    };

    fetchVisitTypes();
    fetchSpecimenTypes();

    return {
      visitTypes,
      specimenTypes,
      selectedWard,
      selectedVisitType,
      selectedSpecimenType,
      Wards,
      Tests,
      addOrder,
    };
  },
});
</script>
