<template>
  <div class="patient-details tile is-5 is-parent">
    <article
      class="search-results-card card tile is-child notification"
    >
      <p class="subtitle">{{ $store.state.selectedPatient.name }}</p>

      <div class="tabs is-medium">
        <ul>
          <li :class="linkDetails ? 'is-active' : ''" @click="OpenPatientDetailsIn"><a>Details</a></li>
          <li :class="linkOrder ? 'is-active' : ''" @click="OpenCreatePatientOrderIn" ><a>Order</a></li>
          <li :class="linkViewOrder ? 'is-active' : ''" @click="OpenViewPatientOrdersIn"><a>View Order</a></li>
        </ul>
      </div>

      <place-order v-if="$store.state.createPatientOrder"/>
      <view-patient-details v-if="$store.state.viewingPatientDetails"/>
      <view-orders v-if="$store.state.viewPatientOrders"/>
      
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
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

    const linkDetails = ref(true)
    const linkOrder = ref(false)
    const linkViewOrder = ref(false)

    const { OpenPatientDetails, OpenCreatePatientOrder, OpenViewPatientOrders } = toggleViews()

    const OpenPatientDetailsIn = () => {

          OpenPatientDetails(true)
          linkDetails.value = true

          linkOrder.value = false
          linkViewOrder.value = false
          
    }

    const OpenCreatePatientOrderIn = () => {

         OpenCreatePatientOrder(true)
         linkOrder.value = true

         linkViewOrder.value = false
         linkDetails.value = false
    }

    const OpenViewPatientOrdersIn = () => {

        OpenViewPatientOrders(true)
        linkViewOrder.value = true

        linkOrder.value = false
        linkDetails.value = false
    }

    
    return { OpenPatientDetailsIn, OpenCreatePatientOrderIn, OpenViewPatientOrdersIn, linkDetails, linkOrder, linkViewOrder}
  }
});
</script>

<style>

.patient-details li a {
  
  text-decoration: none !important;

}
</style>
