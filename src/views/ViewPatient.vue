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
        </ul>
      </div>

      <place-order v-if="$store.state.createPatientOrder" />
      <view-patient-details v-if="$store.state.viewingPatientDetails" />
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import PlaceOrder from "@/views/PlaceOrder.vue";
import ViewPatientDetails from "@/views/ViewPatientDetails.vue";
import toggleViews from "@/composables/toggleViews";

export default defineComponent({
  name: "ViewPatient",
  components: {
    PlaceOrder,
    ViewPatientDetails,
  },
  setup() {
    const {
      OpenPatientDetails,
      OpenCreatePatientOrder,
    } = toggleViews();

    const OpenPatientDetailsIn = () => {
      OpenPatientDetails(true);
    };

    const OpenCreatePatientOrderIn = () => {
      OpenCreatePatientOrder(true);
    };

    return { OpenPatientDetailsIn, OpenCreatePatientOrderIn };
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
