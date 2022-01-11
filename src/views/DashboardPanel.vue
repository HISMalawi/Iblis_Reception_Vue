<template>
  <dashboard-results-panel v-if="panelVisibility" :specimen="SelectedSpecimen" @CloseResultsPanel="ClosePanel"/>
  <div class="dashboard tile is-10 is-parent">
    <article class="custom-height custom-bg tile is-child">
      <p class="pageTitle subtitle">Dashboard</p>
    
        <div class="content has-text-left">
          <!-- Content -->
          
          <order-result @ShowResultsPanel="OpenPanel" />
        </div>
      
    </article>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import OrderResult from "@/views/OrderResult.vue"
import DashboardResultsPanel from "@/views/DashboardResultsPanel.vue"
import { Specimen } from "@/interfaces/Specimen";

export default defineComponent({
  name: "DashboardPanel",
  components: {
    OrderResult,
    DashboardResultsPanel,
  },
  setup() {

    const SelectedSpecimen = ref<Specimen | null>()

    const panelVisibility = ref<Boolean>(false)

    const OpenPanel = (Specimen: Specimen) => {

      SelectedSpecimen.value = Specimen
      panelVisibility.value = true

    }

    const ClosePanel = () => {

      panelVisibility.value = false
      
    }

    return { OpenPanel, ClosePanel, panelVisibility, SelectedSpecimen }
  }
});
</script>

<style>

.dashboard article {
  padding: 30px;
}

</style>

