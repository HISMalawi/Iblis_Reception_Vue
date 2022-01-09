<template>
  <div class="order-result">
    
      <!-- <div class="card result-card" v-for="order in $store.state.createdOrdersTrackingNum" :key="order">
        <h4 class="title is-4">{{order}}</h4>
      </div> -->

      <div class="card result-card" v-for="Specimen in Specimens" :key="Specimen.id">
        <h4 class="title is-4">{{Specimen.accession_number}}</h4>
      </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GetSiteOrders from "@/composables/getSiteOrders"
import toggleViews from "@/composables/toggleViews"
import SearchPatient from "@/composables/searchPatient"
import { Patient } from "@/interfaces/Patient";
import { MutationTypes, useStore } from "@/store";

export default defineComponent({
  name: "OrderResult",
  setup() {

    const store = useStore();

    const { fetchOrders, message, Specimens, code } = GetSiteOrders()

    fetchOrders()

    return { Specimens };
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
    background-color: #3796ce !important;
    text-align: center;
    padding: 15px 5px;
    cursor: pointer;
    margin:  10px 15px;
    display: inline-block;
  }

  .result-card:hover {
    background-color: #2d81b3 !important;
  }

  .result-card .title {
    color: white;
    margin-top: 10px;
  }

</style>
