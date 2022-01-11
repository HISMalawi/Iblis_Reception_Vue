<template>
  <dashboard-results-panel
    v-if="panelVisibility"
    :specimen="SelectedSpecimen"
    @CloseResultsPanel="ClosePanel"
  />
  <div class="dashboard tile is-10 is-parent">
    <article class="custom-height custom-bg tile is-child">
      <p class="pageTitle subtitle">Dashboard</p>
      <div class="dashboard-panel-tool-bar">

        <div class="field is-horizontal tool-bar-date-field">
          <div class="field-label"></div>
          <div class="field-body">
            <div class="field">
              <div class="field has-addons">
                <p class="control">
                  <a class="button is-static"> From : </a>
                </p>
                <p class="control is-expanded">
                  <input
                    class="input"
                    type="date"
                    v-model="fromDate"
                  />
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
                  <input
                    class="input"
                    type="date"
                    v-model="toDate"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="content has-text-left">
        <!-- Content -->

        <order-result @ShowResultsPanel="OpenPanel" />
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import OrderResult from "@/views/OrderResult.vue";
import DashboardResultsPanel from "@/views/DashboardResultsPanel.vue";
import { Specimen } from "@/interfaces/Specimen";

export default defineComponent({
  name: "DashboardPanel",
  components: {
    OrderResult,
    DashboardResultsPanel,
  },
  setup() { 

    const now = new Date()
      .toISOString()
      .replace(/T/, " ") // replace T with a space
      .replace(/\..+/, "").substring(0,10);

    const SelectedSpecimen = ref<Specimen | null>();

    const panelVisibility = ref<Boolean>(false);

    const fromDate = ref<string>()

    const toDate = ref<string>()

    fromDate.value = now

    toDate.value = now

    const OpenPanel = (Specimen: Specimen) => {
      SelectedSpecimen.value = Specimen;
      panelVisibility.value = true;
    };

    const ClosePanel = () => {
      panelVisibility.value = false;
    };

    return { OpenPanel, ClosePanel, panelVisibility, SelectedSpecimen, fromDate, toDate };
  },
});
</script>

<style>
.dashboard article {
  padding: 30px;
}

.dashboard-panel-tool-bar {
  position: relative;
  top: -55px;
  display: block !important;
  text-align: left;
  margin-left: 35px;
}

.tool-bar-date-field {
  display: inline-block !important;
  width: 300px;
  padding: 0px !important;
  margin-bottom: 0px !important;
  padding-bottom: 0px !important;
  margin-left: 0px !important;
  margin-right: 10px;
}
</style>
