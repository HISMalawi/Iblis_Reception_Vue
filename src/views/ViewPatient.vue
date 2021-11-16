<template>
  <div class="patient-details tile is-5 is-parent">
    <article
      class="search-results-card card tile is-child notification is-info"
    >
      <p class="subtitle">Patient Name</p>

      <div class="tabs is-medium">
        <ul>
          <li class="is-active"><a>Details</a></li>
          <li><a>Order</a></li>
          <li><a>View Order</a></li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ViewPatient",
});
</script>

<style>

.patient-details li a {
  
  text-decoration: none !important;

}
</style>
