<template>
  <div class="patient-details tile is-5 is-parent">
    <article
      class="search-results-card card tile is-child notification"
    >
      <p class="subtitle">{{ $store.state.selectedPatient.name }}</p>

      <div class="tabs is-medium">
        <ul>
          <li @click="OpenPatientDetailsIn" class="is-active"><a>Details</a></li>
          <li @click="OpenCreatePatientOrderIn" ><a>Order</a></li>
          <li @click="OpenViewPatientOrdersIn"><a>View Order</a></li>
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
import PlaceOrder from "@/views/PlaceOrder.vue"
import ViewPatientDetails from "@/views/ViewPatientDetails.vue"
import ViewOrders from "@/views/ViewOrders.vue"
import toggleViews from "@/composables/toggleViews"

export default defineComponent({
  name: "ViewPatient",
  components : {
    PlaceOrder, 
    ViewPatientDetails,
    ViewOrders 
  },
  setup() {

    const { OpenPatientDetails, OpenCreatePatientOrder, OpenViewPatientOrders } = toggleViews()

    const OpenPatientDetailsIn = () => {

          OpenPatientDetails(true)
    }

    const OpenCreatePatientOrderIn = () => {

         OpenCreatePatientOrder(true)
    }

    const OpenViewPatientOrdersIn = () => {

        OpenViewPatientOrders(true)
    }
      
    
    return { OpenPatientDetailsIn, OpenCreatePatientOrderIn, OpenViewPatientOrdersIn }
  }
});
</script>

<style>

.patient-details li a {
  
  text-decoration: none !important;

}
</style>
