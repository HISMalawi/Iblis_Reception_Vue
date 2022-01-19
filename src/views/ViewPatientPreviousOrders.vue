<template>
  <div class="content has-text-left">

     <table class="table custom-bg">
          <thead>
            <tr>
              <th>Accession Number</th>
              <th>Results</th>
            </tr>

          </thead>


          <tbody>
            <tr class="is-clickable" v-for="Specimen in Specimens" :key="Specimen.id" @click="showDetails(Specimen)">
              <td>
                <label class="is-clickable">{{
                  Specimen.accession_number
                }}</label>
              </td>

              <td>
                <button v-if="Specimen.class == 'results-ready'" :class="Specimen.class" class="button is-small custom-btn">Available</button>
                <button v-if="Specimen.class == 'from-db'" :class="Specimen.class" class="button is-small custom-btn">Not Available</button>
              </td>
             
            </tr>
          </tbody>
        </table>
    
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import GetPatientOrders from "@/composables/getPatientOrders"

export default defineComponent({
  name: "ViewPatientPreviousOrders",
  setup(){

    const store = useStore();

    const { fetchOrders, Specimens } = GetPatientOrders()

    let patient = store.getters.selectedPatient

    fetchOrders(patient.id)

    return { patient, Specimens }
  },
});
</script>
<style>
  .custom-btn {

    width: 100px !important;
    color: white;
  }
</style>
