<template>
  <div class="search-card card tile is-child notification is-primary">
    <div class="card-content control has-icons-left has-icons-right">
      <div class="content">
        <div class="field has-addons">
          <div class="control">
            <input
              class="input is-medium"
              type="text"
              placeholder="Search Patient"
            />
          </div>
          <div class="control">
            <a
              @click="OpenPatientSearchResultsView"
              class="button is-info is-medium"
            >
              Search
            </a>
          </div>
        </div>
      </div>

      <span class="icon is-left">
        <i class="fas fa-envelope"></i>
      </span>
      <span class="icon is-right">
        <i class="fas fa-check"></i>
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import toggleViews from "@/composables/toggleViews"

export default defineComponent({
  name: "SearchPanel",
  setup() {

      const { OpenPatientSearchResultsView } = toggleViews()

      return { OpenPatientSearchResultsView }
  },
});
</script>
<style>

.search-card {
  max-height: 130px;
  max-width: 530px !important;
  margin: 0 auto;
}
</style>
