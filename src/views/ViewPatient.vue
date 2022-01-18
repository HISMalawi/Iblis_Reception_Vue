<template>
  <div class="patient-details tile is-5 is-parent">
    <article
      class="custom-bg card tile is-child"
    >
      <p class="subtitle">{{ $store.state.selectedPatient.name }}</p>

      <div class="tabs is-medium">
        <ul>
          <li
            :class="$store.state.viewingPatientDetails ? 'is-active' : ''"
            @click="OpenPatientDetailsIn"
          >
            <a>Details</a>
          </li>
          <li
            :class="$store.state.createPatientOrder ? 'is-active' : ''"
            @click="OpenCreatePatientOrderIn"
          >
            <a>Order</a>
          </li>
          <li
            :class="$store.state.viewingPatientPreviousOrders ? 'is-active' : ''"
            @click="OpenPatientPreviousOrdersIn"
          >
            <a>Previous Orders</a>
          </li>
        </ul>
      </div>

      <place-order v-if="$store.state.createPatientOrder" />
      <view-patient-details v-if="$store.state.viewingPatientDetails" />
      <view-patient-previous-orders v-if="$store.state.viewingPatientPreviousOrders" />
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import PlaceOrder from "@/views/PlaceOrder.vue";
import ViewPatientDetails from "@/views/ViewPatientDetails.vue";
import ViewPatientPreviousOrders from "@/views/ViewPatientPreviousOrders.vue";
import toggleViews from "@/composables/toggleViews";

export default defineComponent({
  name: "ViewPatient",
  components: {
    PlaceOrder,
    ViewPatientDetails,
    ViewPatientPreviousOrders,
  },
  setup() {
    const {
      OpenPatientDetails,
      OpenCreatePatientOrder,
      OpenPatientPreviousOrders,
    } = toggleViews();

    const OpenPatientDetailsIn = () => {
      OpenPatientDetails(true);
    };

    const OpenCreatePatientOrderIn = () => {
      OpenCreatePatientOrder(true);
    };

    const OpenPatientPreviousOrdersIn = () => {

      OpenPatientPreviousOrders(true);

    }

    return { OpenPatientDetailsIn, OpenCreatePatientOrderIn, OpenPatientPreviousOrdersIn };
  },
});
</script>

<style>
.patient-details li a {
  text-decoration: none !important;
}

.patient-details article {
  padding: 30px !important;
}
</style>
