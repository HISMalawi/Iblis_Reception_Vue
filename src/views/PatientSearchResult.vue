<template>
  <div class="patient-search-result">
    <div
      v-for="patient in patients"
      :key="patient.id"
      class="media is-clickable py-5"
      v-on:click="showPatientDetails(patient)"
    >
      <div class="media-left" v-if="patient.gender == 0">
        <figure class="image is-48x48">
          <img
            src="../assets/male.png"
            alt="Placeholder image"
          />
        </figure>
      </div>

      <div class="media-left" v-if="patient.gender == 1">
        <figure class="image is-48x48">
          <img
            src="../assets/female.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{patient.name}}</p>
        <p class="subtitle is-6" v-if="patient.gender == 1">Female</p>
        <p class="subtitle is-6" v-if="patient.gender == 0">Male</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject} from "vue";
import toggleViews from "@/composables/toggleViews"
import SearchPatient from "@/composables/searchPatient"
import { Patient } from "@/interfaces/Patient";
import { MutationTypes, useStore } from "@/store";

export default defineComponent({
  name: "PatientSearchResult",
  setup() {

    const store = useStore();

    const { OpenPatientDetails } = toggleViews()

    const { patients } = SearchPatient()

    const showPatientDetails = (patient: Patient) => {

      store.commit(MutationTypes.SET_SELECTED_PATIENT, patient)

      OpenPatientDetails(true)

    };

    return { patients, showPatientDetails };
  },
});
</script>

<style>
  .patient-search-result {
    padding-top: 15px;
  }
</style>
