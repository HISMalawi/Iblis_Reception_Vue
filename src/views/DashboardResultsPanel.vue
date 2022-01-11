<template>
  <div
    class="dashboard dashboard-results-panel tile is-parent is-4"
  >
    <article class="custom-height custom-bg tile is-child">
      <p class="pageTitle subtitle">Patient Details</p>

      <div class="content has-text-left">
        <!-- Content -->
        
        
      </div>
    </article>
  </div>
  <div
    class="dashboard dashboard-results-panel tile is-parent is-6"
  >
    <article class="custom-height custom-bg tile is-child">
      <p class="pageTitle subtitle">Results</p>

      <div class="content has-text-left">
        <!-- Content -->
        
        
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OrderResult from "@/views/OrderResult.vue";

export default defineComponent({
  name: "DashboardResultsPanel",
  components: {
    OrderResult,
  },
});
</script>

<style>
.dashboard article {
  padding: 30px;
}

</style>
