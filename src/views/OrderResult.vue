<template>
  <div class="order-result">
   
    <!-- :class="$store.state.createdOrdersTrackingNum.includes(Specimen.accession_number) ? 'is-new' : 'from-db'" -->

    <div
      class="card result-card"
      :class="Specimen.class"
      v-for="Specimen in Specimens"
      :key="Specimen.id"
      @click="showDetails(Specimen)"
    >
      <h4 class="title is-4">{{ Specimen.accession_number }}</h4>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import GetSiteOrders from "@/composables/getSiteOrders";
import { useStore } from "@/store";
import { Specimen } from "@/interfaces/Specimen";

export default defineComponent({
  name: "OrderResult",
  emits: ['ShowResultsPanel'],
  setup(props,context) {
    const store = useStore();

    const { fetchOrders, Specimens } = GetSiteOrders();


    fetchOrders();

    const showDetails = (Specimen: Specimen) => {
    
      context.emit('ShowResultsPanel', Specimen)
      
    }


    return { Specimens, showDetails};
  },
});
</script>

<style>
.order-result {
  padding-top: 15px;
}

.result-card {
  width: 422px;
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
</style>
