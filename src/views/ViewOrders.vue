<template>
  <div class="view-orders tile is-4 is-parent">
    <article class="custom-height panel custom-bg tile is-child">
      <p class="pageTitle subtitle">View Orders</p>

      <div class="content has-text-left">
        <!-- Content -->
        <div class="mb-5 field is-grouped">
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
          <nav v-for="order in orders" :key="order.id">
            <p class="panel-heading">{{ order.tracking_number }}</p>
            <p class="panel-tabs">
              <a class="is-active">Overview</a>
              <a>Results</a>
            </p>
            <a class="panel-block is-active"> Visit Type : </a>
            <a class="panel-block"> Requesting Ward / Location :</a>
            <a class="panel-block"> Requesting Physician :</a>
            <a class="panel-block"> Specimen Type :</a>
            <a class="panel-block"> Tests :</a>
          </nav>

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
  setup() {
    const searchString = ref<string>("");

    const { search, orders, message } = SearchOrder();

    const Search = () => {
      orders.value.length = 0;

      if (searchString.value == "") {
      } else {
        search(searchString.value);
      }
    };

    return { orders, Search, searchString };
  },
});
</script>
<style>
.results-available {
  background-color: rgb(39, 153, 39) !important;
  color: white !important;
}

.view-orders article {
  padding: 30px;
}

.order-results .card {
  height: 200px;
}

.order-results-card .content {
  height: 100px !important;
}
</style>
