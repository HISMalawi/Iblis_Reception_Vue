<template>
  <dashboard-results-panel
    v-if="panelVisibility"
    :specimen="SelectedSpecimen"
    @CloseResultsPanel="ClosePanel"
  />
  <div class="dashboard tile is-10 is-parent">
    <article class="custom-height custom-bg tile is-child">
      <p class="pageTitle subtitle">Dashboard</p>

      <div class="field dashboard-panel-tool-bar">
        <div class="field is-horizontal tool-bar-date-field">
          <div class="field-label"></div>
          <div class="field-body">
            <div class="field">
              <div class="field has-addons">
                <p class="control">
                  <a class="button is-static"> From : </a>
                </p>
                <p class="control is-expanded">
                  <input class="input" type="date" v-model="fromDate" />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal tool-bar-date-field">
          <div class="field-label"></div>
          <div class="field-body">
            <div class="field">
              <div class="field has-addons">
                <p class="control">
                  <a class="button is-static"> To : </a>
                </p>
                <p class="control is-expanded">
                  <input class="input" type="date" v-model="toDate" />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="select is-normal filter">
          <select v-model="ResultsFilter">
            <option>All</option>
            <option>With Results</option>
            <option>Without Results</option>
          </select>
        </div>

        <span class="p-search">
        <div class="field has-addons">
          <div class="control">
            <input class="input" type="text" placeholder="Patient name" />
          </div>
          <div class="control">
            <a class="button"> Search </a>
          </div>
        </div>
        </span>


      </div>

      <div class="content has-text-left">
        <!-- Content -->

        <order-result @ShowResultsPanel="OpenPanel" />
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { watch, defineComponent, ref } from "vue";
import OrderResult from "@/views/OrderResult.vue";
import DashboardResultsPanel from "@/views/DashboardResultsPanel.vue";
import { Specimen } from "@/interfaces/Specimen";
import { ActionTypes, useStore } from "@/store";

export default defineComponent({
  name: "DashboardPanel",
  components: {
    OrderResult,
    DashboardResultsPanel,
  },
  setup() {
    const store = useStore();

    const ResultsFilter = ref<string>("All");

    const now = new Date()
      .toISOString()
      .replace(/T/, " ") // replace T with a space
      .replace(/\..+/, "")
      .substring(0, 10);

    const SelectedSpecimen = ref<Specimen | null>();

    const panelVisibility = ref<Boolean>(false);

    const fromDate = ref<string>();

    const toDate = ref<string>();

    fromDate.value = now;

    toDate.value = now;

    store.dispatch(ActionTypes.SET_FROM_DATE, fromDate.value);

    store.dispatch(ActionTypes.SET_TO_DATE, toDate.value);

    store.dispatch(ActionTypes.SET_RESULTS_FILTER, ResultsFilter.value);

    const OpenPanel = (Specimen: Specimen) => {
      SelectedSpecimen.value = Specimen;
      panelVisibility.value = true;
    };

    const ClosePanel = () => {
      panelVisibility.value = false;
    };

    watch(
      () => [fromDate.value],
      () => {
        store.dispatch(
          ActionTypes.SET_FROM_DATE,
          fromDate.value ? fromDate.value : now
        );
      }
    );

    watch(
      () => [toDate.value],
      () => {
        store.dispatch(
          ActionTypes.SET_TO_DATE,
          toDate.value ? toDate.value : now
        );
      }
    );

    watch(
      () => [ResultsFilter.value],
      () => {
        store.dispatch(ActionTypes.SET_RESULTS_FILTER, ResultsFilter.value);
      }
    );

    return {
      ResultsFilter,
      OpenPanel,
      ClosePanel,
      panelVisibility,
      SelectedSpecimen,
      fromDate,
      toDate,
    };
  },
});
</script>

<style>
.dashboard article {
  padding: 30px;
}

.dashboard-panel-tool-bar {
  text-align: left;
  padding-left: 35px;
}

.tool-bar-date-field {
  display: inline-block !important;
  margin-right: 20px;
  margin-bottom: 0px !important;
}
.filter {
  margin-right: 20px;
  margin-bottom: 0px !important;
 
}
.p-search {
  display: inline-block !important;
  margin-bottom: 0px !important;
}
</style>
