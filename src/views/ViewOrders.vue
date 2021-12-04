<template>

  <div class="tile is-4 is-parent">
    <article class="patient-search-results custom-bg tile is-child notification">
      <p class="pageTitle subtitle">View Orders</p>
    
        <div class="content has-text-left">
          <!-- Content -->
          <div class="field is-grouped">
      <p class="control is-expanded">
        <input
          class="input is-medium"
          type="text"
          placeholder="Tracking Number"
          v-model="searchString"
        />
      </p>
      <p class="control">
        <a @click="Search" class="button is-primary is-medium"> Search </a>
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
          <tr v-for="order in orders" :key="order.id">
            <td>
              <label>{{order.tracking_number}}</label>
            </td>
            <td>
              <button class="button is-warning is-small" disabled>View Results</button>
            </td>
          </tr>

          <!-- <tr>
            <td>
              <label>63947063506702689260</label>
            </td>
            <td>
              <button class="button results-available is-small">View Results</button>
            </td>
          </tr> -->
        </tbody>
      </table>
    </div>
        </div>
      
    </article>
  </div>

</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SearchOrder from "@/composables/searchOrder";

export default defineComponent({
  name: "ViewOrders",
  components: {},
  setup(){
    const searchString = ref<string>("");

    const {search, orders, message} = SearchOrder()

    const Search = () => {

      orders.value.length = 0
      
      if (searchString.value == "") {
      } else {

        search(searchString.value);
      }

    };

    return {orders, Search, searchString}
  }
});
</script>
<style>

.results-available {
  background-color: rgb(39, 153, 39) !important;
  color: white !important;
}

</style>
