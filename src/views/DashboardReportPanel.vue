<template>
  <div class="dashboard dashboard-results-panel tile is-parent is-10">
    <article class="custom-height custom-bg tile is-child">
      <p class="pageTitle subtitle">Client Result Report</p>
      <div class="btn-close">
        <a class="button is-primary mr-6" v-print="'#printReport'"> Print Report </a>
        <a class="button is-danger" @click="closePatientResultReport"> Close </a>  
      </div>

      <div class="content has-text-left" id="printReport">
        <!-- Content -->
        <patient-result-report :orders="orders" :results="results" :statuses="statuses" :users="users" :labSections="labSections" :accepted_by="accepted_by"
         :specimen_status="specimen_status" :printCount="printCount" :date_of_collection="date_of_collection"/>
      </div>
    </article>
  </div>
  
</template>

<script lang="ts">
import { defineComponent, ref, watch} from "vue";
import PatientResultReport from "@/components/PatientResultReport.vue";

export default defineComponent({
  name: "DashboardReportPanel",
  emits: ['closeReport'],
  components: {
    PatientResultReport
  },
  props: ['orders', 'Results', 'Statuses', 'tests', 'users', 'labSections', 'accepted_by','specimen','printCount'],
    setup(props, context){
      let orders = props.orders[0];
      let results = props.Results;
      let statuses = props.Statuses;
      let users = props.users;
      let labSections = props.labSections;
      let accepted_by = props.accepted_by;
      let specimen_status = props.specimen.specimen_status_id;
      let date_of_collection = props.specimen.date_of_collection;
      let printCount = props.printCount;
      if (specimen_status == 2){
        specimen_status = 'Accepted';
      }
      else if (specimen_status == 3){
        specimen_status = 'Rejected'
      }
      else{
        specimen_status = 'Not collected'
      }
      const closePatientResultReport = () =>{
        context.emit('closeReport')
      }
    

    return { closePatientResultReport, orders, results, statuses,users, labSections, accepted_by, specimen_status,printCount,date_of_collection }
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

.in-list {
  width: 100%;
}
</style>
