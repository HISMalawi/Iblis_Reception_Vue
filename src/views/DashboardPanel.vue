<template>
  <div class="dashboard tile is-10 is-parent">
    <article class="custom-height custom-bg tile is-child">
      <p class="pageTitle subtitle">Dashboard</p>
    
        <div class="content has-text-left">
          <!-- Content -->
          <order-result />
        </div>
      
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OrderResult from "@/views/OrderResult.vue"

export default defineComponent({
  name: "PatientSearchResults",
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

