<template>
  <div class="order-result">
    <!-- <div class="card result-card" v-for="order in $store.state.createdOrdersTrackingNum" :key="order">
        <h4 class="title is-4">{{order}}</h4>
      </div> -->

    <!-- :class="$store.state.createdOrdersTrackingNum.includes(Specimen.accession_number) ? 'is-new' : 'from-db'" -->

    <div
      class="card result-card"
      :class="Specimen.class"
      v-for="Specimen in Specimens"
      :key="Specimen.id"
    >
      <h4 class="title is-4">{{ Specimen.accession_number }}</h4>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import GetSiteOrders from "@/composables/getSiteOrders";
import toggleViews from "@/composables/toggleViews";
import SearchPatient from "@/composables/searchPatient";
import { Patient } from "@/interfaces/Patient";
import { MutationTypes, useStore } from "@/store";

export default defineComponent({
  name: "OrderResult",
  setup() {
    const store = useStore();

    const { fetchOrders, Specimens } = GetSiteOrders();


    fetchOrders();



    return { Specimens};
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
