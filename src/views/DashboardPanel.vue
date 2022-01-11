<template>
  <dashboard-results-panel v-if="panelVisibility"/>
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

    const panelVisibility = ref<Boolean>(false)

    const OpenPanel = (Specimen: Specimen) => {

      panelVisibility.value = true
      console.log(Specimen)
    }

    return { OpenPanel, panelVisibility }
  }
});
</script>

<style>

.dashboard article {
  padding: 30px;
}

</style>

