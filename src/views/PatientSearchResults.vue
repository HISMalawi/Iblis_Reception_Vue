<template>
  <div class="patients-serch-results tile is-5 is-parent">
    <article class="custom-height custom-bg tile is-child">
      <p class="pageTitle subtitle is-6">Search Results</p>
    
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

.patients-serch-results article {
  padding: 10px;
}

</style>

