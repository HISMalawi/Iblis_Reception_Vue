<template>
  <div class="home">
    <div class="content">
      <div class="tile is-ancestor">
        <div class="controlls-tile tile is-vertical is-3 media-right">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <div
                class="search-card card tile is-child notification is-primary"
              >
                <div
                  class="card-content control has-icons-left has-icons-right"
                >
                  <div class="content">
                    <div class="field has-addons">
                      <div class="control">
                        <input
                          class="input is-medium"
                          type="text"
                          placeholder="Search Patient"
                        />
                      </div>
                      <div class="control">
                        <a @click="OpenPatientSearchResultsView" class="button is-info is-medium"> Search </a>
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

              <div class="tool-card is-child notification">
                <ul class="tools is-primary">
                  <li @click="OpenPatientRegForm" class="is-clickable">Register Patient</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <register-patient v-if="$store.state.registeringPatient" />
        <patient-search-results v-if="$store.state.searchingPatient" />
        <patient-details v-if="$store.state.viewingPatient"/>

        
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useStore } from "vuex"
import RegisterPatient from "@/views/RegisterPatient.vue"
import PatientSearchResults from "@/views/PatientSearchResults.vue"
import PatientDetails from "@/views/PatientDetails.vue"

export default defineComponent({
  name: "Home",
  components: {
    RegisterPatient,
    PatientSearchResults,
    PatientDetails
  },
  setup() {

    const store = useStore()

    const OpenPatientRegForm = () => {

        store.commit("SEARCHING_PATIENT", false)
        store.commit("VIEWING_PATIENT", false)
        store.commit("REGISTERING_PATIENT", true)
    }

    const ClosePatientRegForm = () => {

        store.commit("REGISTERING_PATIENT", false)
    }

    const OpenPatientSearchResultsView = () => {

        store.commit("REGISTERING_PATIENT", false)
        store.commit("SEARCHING_PATIENT", true)
    }

    return { OpenPatientRegForm, ClosePatientRegForm, OpenPatientSearchResultsView }
  }
});
</script>

<style>
.home {
  /* background-color: black; */
  height: calc(100% - 20%);
  width: 90%;
  padding: 10px;
}

.home .search-card {
  max-height: 130px;
  max-width: 530px;
  margin: 0 auto;
}

.home .tools {
  list-style: none;
  text-align: left;
  padding: 0px;
  margin: 0px;
}

.home .tool-card {
  max-width: 530px;
  background: none;
}

.home .tools li {
  display: inline-block;
  padding: 2px 14px;
  border: 3px solid #3796ce;
  border-radius: 40px;
  background-color: #3796ce;
  color: rgba(31, 27, 27, 0.685);
  margin-right: 10px;
  color: white;
}

/* .home .controlls-tile .tile {
  margin: 0 auto;
} */
</style>
