<template>
  <div class="dashboard dashboard-results-panel tile is-parent is-4">
    <article class="custom-height custom-bg tile is-child">
      <p class="pageTitle subtitle">Patient Details</p>

      <div class="content has-text-left">
        <!-- Content -->
      </div>
    </article>
  </div>
  <div class="dashboard dashboard-results-panel tile is-parent is-6">
    <article class="custom-height custom-bg tile is-child">
      <p class="pageTitle subtitle">Results</p>
      <a class="button btn-close is-primary" @click="closeDetails"> Close </a>

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
  setup(props, context){

    const closeDetails = () => {
      context.emit('CloseResultsPanel')
    }

    return { closeDetails }
  }
});
</script>

<style>
.dashboard article {
  padding: 30px;
}

.btn-close {
  position: relative;
  top: -55px;
  float: right;
  margin-right: 6px;
}
</style>
