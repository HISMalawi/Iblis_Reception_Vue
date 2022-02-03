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
      <div class="dash-p-details" v-for="Patient in Patients" :key="Patient.id">
        <h4 class="title is-4" v-if="Patient.specimen_id == Specimen.id">
          {{ Patient.name }}
          <span
            class="title is-5"
            v-if="Patient.specimen_id == Specimen.id && Patient.gender == 1"
          >
            (F)
          </span>

          <span
            class="title is-5"
            v-if="Patient.specimen_id == Specimen.id && Patient.gender == 0"
          >
            (M)
          </span>
        </h4>
      </div>
      
      <h4 class="title is-5 dash-acc-num">{{ Specimen.accession_number }}</h4>
      <hr class="dash-details-sep"/>
      <div class="dash-tests-container">

        <span  v-for="Test in Tests" :key="Test.id">
        <div class="dash-test" :class="Test.class" v-if="Test.specimen_id == Specimen.id"><span v-if="Test.short_name == null || Test.short_name == ''">{{Test.test_name}}</span><span v-if="Test.short_name != ''">{{Test.short_name}}</span></div>
        </span>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import GetSiteOrders from "@/composables/getSiteOrders";
import { useStore } from "@/store";
import { Specimen } from "@/interfaces/Specimen";

export default defineComponent({
  name: "OrderResult",
  emits: ["ShowResultsPanel"],
  setup(props, context) {
    const store = useStore();

    const dataChange = ref<Boolean>(false);

    const { fetchOrders, BGfetchOrders, Specimens, Patients, Tests } = GetSiteOrders();

    fetchOrders();

    BGfetchOrders();

    const showDetails = (Specimen: Specimen) => {
      context.emit("ShowResultsPanel", Specimen);
    };

    return { Specimens, showDetails, Patients, Tests };
  },
});
</script>

<style>
.order-result {
  padding-top: 15px;
}

.result-card {
  width: 400px;
  height: 190px;
  border-radius: 8px !important;
  text-align: center;
  padding: 15px 5px;
  cursor: pointer;
  margin: 10px 15px;
  display: inline-block;
  overflow: hidden;
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

.dash-acc-num{
  /* background-color: black; */
  position: relative;
  top: -12px;
}
.dash-details-sep {
  height: 1px;
  margin: 0px 35px;
  border-width: 0 !important;
  background-color: #b6b9bb81;
  padding: 0;
  position: relative;
  top: -25px;
}
.dash-tests-container{
  position: relative;
  top: -22px;
  padding: 0 10px;
}

.dash-test {
  height: 26px;
  background-color: #d1e3e785;
  padding: 1px 5px;
  display: inline-block;
  border-radius: 6px;
  margin-left: 10px;
  margin-bottom: 4px;
}

.has {
  background-color: rgba(46, 197, 46, 0.795) !important;
  color: white !important;
}
</style>
