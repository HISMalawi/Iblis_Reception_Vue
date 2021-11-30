<template>
  <div class="content has-text-left">
    <div class="field is-grouped">
      <p class="control is-expanded">
        <input
          class="input is-medium"
          type="text"
          placeholder="Tracking Number"
        />
      </p>
      <p class="control">
        <a class="button is-info is-medium"> Search </a>
      </p>
    </div>

    <div class="order-results field">
      <table class="table">
        <thead>
          <tr>
            <th>Tracking Number</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <label>63947062406702689260</label>
            </td>
            <td>
              <button class="button is-warning is-small" disabled>View Results</button>
            </td>
          </tr>

          <tr>
            <td>
              <label>63947063506702689260</label>
            </td>
            <td>
              <button class="button results-available is-small">View Results</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ViewOrders",
  components: {},
});
</script>
<style>

.results-available {
  background-color: rgb(39, 153, 39) !important;
  color: white !important;
}

</style>
