<template>
  <div class="dashboard tile is-5 is-parent">
    <article class="custom-height custom-bg tile is-child">
      <p class="pageTitle subtitle">Dashboard</p>
    
        <div class="content has-text-left">
          <!-- Content -->
          <!-- <patient-search-result /> -->
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
  },
});
</script>

<style>

.dashboard article {
  padding: 30px;
}

</style>

