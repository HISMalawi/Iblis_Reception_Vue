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
              v-model="searchString"
            />
          </div>
          <div class="control">
            <a @click="Search" class="button is-info is-medium"> Search </a>
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
import { defineComponent, provide, ref } from "vue";
import toggleViews from "@/composables/toggleViews";
import SearchPatient from "@/composables/searchPatient";

export default defineComponent({
  name: "SearchPanel",
  setup() {
    const searchString = ref<string>("");

    const { search, patients } = SearchPatient();

    const { OpenPatientSearchResultsView } = toggleViews();

    const Search = () => {
      search(searchString.value);
      OpenPatientSearchResultsView();
      console.log(patients);
    };


    return { Search, searchString };
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
