<template>
  <div class="view-orders tile is-5 is-parent">
    <article class="custom-height panel custom-bg tile is-child">
      <p class="pageTitle subtitle">Test Results</p>

      <div class="content has-text-left">
        <a class="panel-block"
          ><h5 class="title is-6">{{ $store.state.selectedTest.test_name }}</h5>
        </a>

        <div v-if="code !== ''" class="notification is-primary">
          <button class="delete"></button>
          {{ message }}
        </div>

        <table v-if="Results.length > 0" class="table">
          <thead>
            <tr>
              <th>Test Name</th>
              <th>Result</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="Result in Results" :key="Result.measure_id">
              <td>{{ Result.measure_name }}</td>
              <td>
                {{ Result.result }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import { useStore } from "@/store";
import getTestResults from "@/composables/getTestResults";

export default defineComponent({
  name: "ViewResults",
  components: {},
  setup() {

    const { fetchTestResults, message, Results, code } = getTestResults();

    const errors = ref<string[]>([]);

    const store = useStore();

    watchEffect(() => {

        fetchTestResults(store.getters.selectedTest.id);
      
    });

    return { Results, code, message };
  },
});
</script>

<style></style>
