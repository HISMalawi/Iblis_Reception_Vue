<template>
  <div class="patient-details tile is-5 is-parent">
    <article
      class="search-results-card card tile is-child notification"
    >
      <p class="subtitle">Patient Name</p>

      <div class="tabs is-medium">
        <ul>
          <li @click="OpenPatientDetails" class="is-active"><a>Details</a></li>
          <li @click="OpenCreatePatientOrder" ><a>Order</a></li>
          <li @click="OpenViewPatientOrders"><a>View Order</a></li>
        </ul>
      </div>

      <place-order v-if="$store.state.createPatientOrder"/>
      <view-patient-details v-if="$store.state.viewingPatientDetails"/>
      <view-orders v-if="$store.state.viewPatientOrders"/>
      
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useStore } from "vuex"
import PlaceOrder from "@/views/PlaceOrder.vue"
import ViewPatientDetails from "@/views/ViewPatientDetails.vue"
import ViewOrders from "@/views/ViewOrders.vue"

export default defineComponent({
  name: "ViewPatient",
  components : {
    PlaceOrder, 
    ViewPatientDetails,
    ViewOrders 
  },
  setup() {

    const store = useStore()

    const OpenPatientDetails = () => {

        store.commit("OPEN_PATIENT_VIEW_ORDERS", false)
        store.commit("OPEN_PATIENT_PLACE_ORDER", false)

        store.commit("OPEN_PATIENT_DETAILS", true)
    }



    const OpenCreatePatientOrder = () => {

        store.commit("OPEN_PATIENT_DETAILS", false)
        store.commit("OPEN_PATIENT_VIEW_ORDERS", false)

        store.commit("OPEN_PATIENT_PLACE_ORDER", true)
        
    }

    const OpenViewPatientOrders = () => {

        store.commit("OPEN_PATIENT_DETAILS", false)
        store.commit("OPEN_PATIENT_PLACE_ORDER", false)

        store.commit("OPEN_PATIENT_VIEW_ORDERS", true)
        
    }


    return { OpenPatientDetails, OpenCreatePatientOrder, OpenViewPatientOrders }
  }
});
</script>

<style>

.patient-details li a {
  
  text-decoration: none !important;

}
</style>
