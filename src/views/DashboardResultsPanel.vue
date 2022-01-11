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
      <a class="button btn-close is-primary" @click="closeDetails"> Close </a>

      <div class="content has-text-left">
        <!-- Content -->
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import OrderResult from "@/views/OrderResult.vue";
import { Specimen } from "@/interfaces/Specimen";
import SearchOrder from "@/composables/searchOrder";

export default defineComponent({
  name: "DashboardResultsPanel",
  props: ['specimen'],
  emits: ['CloseResultsPanel'],
  components: {
    OrderResult,
  },
  setup(props, context){

    const { search, orders} = SearchOrder();

    let specimen = ref<Specimen>(props.specimen)

    search(specimen.value?.accession_number);

    const closeDetails = () => {

      context.emit('CloseResultsPanel')
    }

    return { closeDetails, orders }
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
  float: right;
  margin-right: 6px;
}
</style>
