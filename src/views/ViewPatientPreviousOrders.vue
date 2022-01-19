<template>
  <div class="content has-text-left">

     <table class="table custom-bg">
          <thead>
            <tr>
              <th>Accession Number</th>
            </tr>
          </thead>


          <tbody>
            <tr v-for="Specimen in Specimens" :key="Specimen.id">
              <td>
                <label class="order_tests">{{
                  Specimen.accession_number
                }}</label>
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
