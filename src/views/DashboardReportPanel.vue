<template>
  <div class="dashboard dashboard-results-panel tile is-parent is-10">
    <article class="custom-height custom-bg tile is-child">
      <p class="pageTitle subtitle">Client Result Report</p>

      <div class="content has-text-left">
        <!-- Content -->
        
        
      </div>
    </article>
  </div>
  
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "DashboardReportPanel",
  setup(){

    
 
    return {  }
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
  display: block !important;
  text-align: right;
  margin-right: 6px;
}

.in-list {
  width: 100%;
}
</style>
