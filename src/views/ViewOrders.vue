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

              <a class="panel-block"
                ><h5 class="title is-6">Patient :</h5>
                {{ order.patient[0].name }}</a
              >
              <a class="panel-block"
                ><h5 class="title is-6">Visit Type :</h5>
                {{ order.visit_type }}</a
              >
              <a class="panel-block"
                ><h5 class="title is-6">Requesting Ward / Location :</h5>
                {{ order.location }}</a
              >
              <a class="panel-block"
                ><h5 class="title is-6">Requesting Physician :</h5>
                {{ order.requesting_physician }}</a
              >
              <a class="panel-block"
                ><h5 class="title is-6">Specimen Type :</h5>
                {{ order.specimen_type }}</a
              >
              <a class="panel-block"
                ><h5 class="title is-6">Tests :</h5>
                <button
                  v-for="test in order.tests"
                  :key="test.id"
                  @click="ShowResults(test)"
                  class="button is-rounded is-small is-warning"
                >
                  {{ test.test_name }}
                </button></a
              >
      
          </nav>
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref, watch } from "vue";
import SearchOrder from "@/composables/searchOrder";
import toggleViews from "@/composables/toggleViews";
import { TestResult } from "@/interfaces/TestResult";
import { MutationTypes, useStore } from "@/store";

export default defineComponent({
  name: "ViewOrders",
  components: {},
  setup() {

    const store = useStore();

    const { OpenViewTestResults, CloseViewTestResults } = toggleViews()

    const searchString = ref<string>("");

    const { search, orders, message } = SearchOrder();


    onBeforeMount(() => {
      orders.value.length = 0;
    });

    const Search = () => {
      orders.value.length = 0;

      if (searchString.value == "") {
      } else {

       
        CloseViewTestResults()
    
       
        search(searchString.value);
      }
    };

    const ShowResults = (test: TestResult) => {

        store.commit(MutationTypes.SET_SELECTED_TEST, test);

        OpenViewTestResults()
    }

    return {
      orders,
      Search,
      searchString,
      ShowResults
    };
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

.order-results .title {
  position: relative;
  top: 6px;
  margin-right: 10px;
}
.order-results .button {
  position: relative;
  top: -5px;
  margin-right: 10px;
}
</style>
