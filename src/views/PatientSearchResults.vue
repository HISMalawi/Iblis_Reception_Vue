<template>
  <div class="tile is-4 is-parent">
    <article
      class="patient-details-card tile is-child notification"
    >
      <div class="content">
        <p class="pageTitle subtitle card">Search Results</p>
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
.patient-details-card {
  background: none;
}

.patient-details-card .pageTitle{
  padding: 20px 10px;
  margin-top: 0px;
}

</style>
