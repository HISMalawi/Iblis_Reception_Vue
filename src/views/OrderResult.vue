<template>
  <div class="order-result">
    <!-- :class="$store.state.createdOrdersTrackingNum.includes(Specimen.accession_number) ? 'is-new' : 'from-db'" -->

    <div
      v-if="!Specimens.length && Specimens.length != 0"
      class="loader-container"
    >
      <img src="../assets/loading.gif" />
    </div>

    <!-- <div v-if="dataChange" class="loader-container">
      <img src="../assets/loading.gif" />
    </div> -->

    <div
      class="card result-card"
      :class="Specimen.class"
      v-for="Specimen in Specimens"
      :key="Specimen.id"
      @click="showDetails(Specimen)"
    >
      <div v-for="Patient in Patients" :key="Patient.id">
        <h4 class="title is-4" v-if="Patient.specimen_id == Specimen.id">
          {{ Patient.name }}
        </h4>
        <h4
          class="title is-5"
          v-if="Patient.specimen_id == Specimen.id && Patient.gender == 1"
        >
          (Female)
        </h4>
        <h4
          class="title is-5"
          v-if="Patient.specimen_id == Specimen.id && Patient.gender == 0"
        >
          (Male)
        </h4>
      </div>
      <h4 class="title is-5">{{ Specimen.accession_number }}</h4>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import GetSiteOrders from "@/composables/getSiteOrders";
import { useStore } from "@/store";
import { Specimen } from "@/interfaces/Specimen";

export default defineComponent({
  name: "OrderResult",
  emits: ["ShowResultsPanel"],
  setup(props, context) {
    const store = useStore();

    const dataChange = ref<Boolean>(false);

    const { fetchOrders, Specimens, Patients } = GetSiteOrders();

    fetchOrders();

    const showDetails = (Specimen: Specimen) => {
      context.emit("ShowResultsPanel", Specimen);
    };

    return { Specimens, showDetails, Patients };
  },
});
</script>

<style>
.order-result {
  padding-top: 15px;
}

.result-card {
  width: 400px;
  height: 150px;
  border-radius: 8px !important;
  text-align: center;
  padding: 15px 5px;
  cursor: pointer;
  margin: 10px 15px;
  display: inline-block;
}

.result-card h4 {
  user-select: none;
}

.is-new {
  background-color: #3796ce !important;
}

.from-db {
  background-color: #999d9e !important;
  /* background-color: #2d81b3 !important; */
}

.results-ready {
  background-color: #3796ce !important;
}

.result-card:hover {
  background-color: #2d81b3 !important;
}

.result-card .title {
  color: white;
  margin-top: 10px;
}
.loader-container {
  display: block;
  text-align: center;
  padding-right: 45px;
}

.loader-container img {
  width: 100px;
}
</style>
