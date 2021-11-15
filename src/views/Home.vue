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

        <div class="tile is-5 is-parent">
          <article
            class="
              patient-details-card
              card
              tile
              is-child
              notification
              is-primary
            "
          >
            <div class="content">
              <p class="subtitle">Register Patient</p>
              <div class="content has-text-left">
                <!-- Content -->

                <div class="field">
                  <label class="label">External Patient No.</label>
                  <div class="control has-icons-right">
                    <input
                      class="input is-success is-medium"
                      type="text"
                    />
                  
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                  </div>
                  <p class="help is-danger">This External No is invalid</p>
                </div>
                <div class="field">
                  <label class="label">First Name</label>
                  <div class="control has-icons-right">
                    <input
                      class="input is-success is-medium"
                      type="text"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                  </div>
                  <p class="help is-danger">This First Name is invalid</p>
                </div>
                <div class="field">
                  <label class="label">Last Name</label>
                  <div class="control has-icons-right">
                    <input
                      class="input is-success is-medium"
                      type="text"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                  </div>
                  <p class="help is-danger">This Last Name is invalid</p>
                </div>
                <div class="field">
                  <label class="label">Date of Birth</label>
                  <div class="control has-icons-right">
                    <input
                      class="input is-success is-medium"
                      type="text"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                  </div>
                  <p class="help is-danger">This DOB is invalid</p>
                </div>
                <div class="field">
                  <label class="label">Age</label>
                  <div class="control has-icons-right">
                    <input
                      class="input is-success is-medium"
                      type="text"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                  </div>
                  <p class="help is-danger">This Age is invalid</p>
                </div>
                <div class="field">
                  <label class="label">Sex</label>
                  <div class="control">
                    <label class="radio">
                      <input type="radio" name="question" />
                      Male
                    </label>
                    <label class="radio">
                      <input type="radio" name="question" />
                      Female
                    </label>
                  </div>
                </div>
                <div class="field">
                  <label class="label">Physical Address</label>
                  <div class="control has-icons-right">
                    <input
                      class="input is-success is-medium"
                      type="text"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                  </div>
                  <p class="help is-danger">This Physical address is invalid</p>
                </div>
                <div class="field">
                  <label class="label">Phone Number</label>
                  <div class="control has-icons-right">
                    <input
                      class="input is-success is-medium"
                      type="text"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                  </div>
                  <p class="help is-danger">This Phone Number is invalid</p>
                </div>

                <div class="field">
                  <label class="label">Email</label>
                  <div class="control has-icons-right">
                    <input
                      class="input is-danger is-medium"
                      type="email"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-exclamation-triangle"></i>
                    </span>
                  </div>
                  <p class="help is-danger">This email is invalid</p>
                </div>

                <div class="field is-grouped">
                  <div class="control">
                    <button class="button is-link is-medium">Save</button>
                  </div>
                  <div class="control">
                    <button class="button is-link is-light is-medium">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

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

export default defineComponent({
  name: "Home",
  components: {},
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
