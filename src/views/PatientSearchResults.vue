<template>
  <div class="tile is-5 is-parent">
    <article
      class="patient-details-card card tile is-child notification is-primary"
    >
      <div class="content">
        <p class="subtitle">Search Results</p>
        <div class="content has-text-left">
          <!-- Content -->
          <patient-search-result/>

        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PatientSearchResult from '@/views/PatientSearchResult.vue'

export default defineComponent({
    name: "PatientSearchResults",
    components: {
      PatientSearchResult
    }
})
</script>

<style>

</style>
