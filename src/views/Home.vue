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
                        <a class="button is-info is-medium"> Search </a>
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

              <div class="tool-card card tile is-child notification is-success">
                <ul class="tools">
                  <li class="is-clickable">Register Patient</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
            <!-- Start FOrms -->
            <register-patient/>
        

        <div class="tile is-4 is-parent">
          <article
            class="search-results-card card tile is-child notification is-info"
          >
            <p class="subtitle">Patient Details</p>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RegisterPatient from "@/views/RegisterPatient.vue";

export default defineComponent({
  name: "Home",
  components: {
    RegisterPatient
  },
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

/* .home .search-results-card {
  height: calc(100vh - 53%);
  display:none;
}

.home .patient-details-card {
  height: calc(100vh - 83%);
  display:none;
} */
.home .tools {
  list-style: none;
  text-align: left;
  padding: 0px;
  margin: 0px;
}

.home .tool-card {
  max-width: 530px;
}

.home .tools li {
  display: inline-block;
  padding: 2px 14px;
  border: 2px solid rgb(248, 245, 245);
  border-radius: 40px;
  background-color: white;
  color: rgba(31, 27, 27, 0.685);
  margin-right: 10px;
}

/* .home .controlls-tile .tile {
  margin: 0 auto;
} */
</style>
