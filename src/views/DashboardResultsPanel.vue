<template>
  <div class="dashboard dashboard-results-panel tile is-parent is-4">
    <article class="custom-height custom-bg tile is-child">
      <p class="pageTitle subtitle">Details</p>

      <div class="content has-text-left">
        <!-- Content -->
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
  <div class="dashboard dashboard-results-panel tile is-parent is-6">
    <article class="custom-height custom-bg tile is-child">
      <p class="pageTitle subtitle">Results</p>
      <div class="btn-close"><a class="button is-primary" @click="closeDetails"> Close </a></div>

      <div v-if="!Results.length && message != '' > 0" class="notification is-primary">
          <button class="delete"></button>
          Results not available!
      </div>
      

      <div v-if="Results.length" class="content has-text-left">
        <!-- Content -->
        <div v-for="test in tests" :key="test.id" class="order-results field">
          <nav>
            <p class="panel-heading">{{ test.test_name }}</p>
          </nav>
          <table v-if="Results.length > 0" class="table">
          <thead>
            <tr>
              <th>Test Name</th>
              <th>Result</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="Result in Results" :key="Result.measure_id">
              <td v-if="test.id == Result.test_id" >{{ Result.measure_name }}</td>
              <td v-if="test.id == Result.test_id">
                {{ Result.result }}
              </td>
            </tr>
            
          </tbody>
        </table>
        </div>

      </div>

    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import OrderResult from "@/views/OrderResult.vue";
import { Specimen } from "@/interfaces/Specimen";
import SearchOrder from "@/composables/searchOrder";
import getTestsResults from "@/composables/getTestsResults";

export default defineComponent({
  name: "DashboardResultsPanel",
  props: ['specimen'],
  emits: ['CloseResultsPanel'],
  components: {
    OrderResult,
  },
  setup(props, context){

    const { search, orders, tests} = SearchOrder();
    const { fetchTestResults, message, Results, code } = getTestsResults();

    let specimen = ref<Specimen>(props.specimen)

    search(specimen.value?.accession_number);

    const closeDetails = () => {

      context.emit('CloseResultsPanel')
      orders.value.length = 0
      Results.value.length = 0
      tests.value.length = 0
    }

    setTimeout(()=> {

      fetchTestResults(tests.value)

    }, 500)

    
 
    return { closeDetails, orders, Results, tests, message }
  }
});
</script>

<style>
.dashboard article {
  padding: 30px;
}

.btn-close {
  position: relative;
  top: -55px;
  display: block !important;
  text-align: right;
  margin-right: 6px;
}
</style>
