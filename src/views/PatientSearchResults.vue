<template>
  <div class="tile is-4 is-parent">
    <article class="patient-search-results tile is-child notification">
      <p class="pageTitle subtitle card">Search Results</p>
    
        <div class="content has-text-left">
          <!-- Content -->
          <patient-search-result />
        </div>
      
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PatientSearchResult from "@/views/PatientSearchResult.vue";

export default defineComponent({
  name: "PatientSearchResults",
  components: {
    PatientSearchResult,
  },
});
</script>

<style>
.patient-search-results {
  background: none !important;
  
}

.patient-search-results .pageTitle {
  padding: 20px 10px;
  margin-top: 0px;
}

.patient-search-results .content{

  overflow-y: auto;
  height: 1600px;
}

</style>
