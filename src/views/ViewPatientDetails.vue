<template>
  <div class="content has-text-left">
    <div class="field">
      <label class="label">External Patient No.</label>
      <div class="control has-icons-right">
        <input class="input is-success is-medium" type="text" v-model="$store.state.selectedPatient.external_patient_number" />

        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </div>
  
    </div>
    
    <div class="field">
      <label class="label">Date of Birth</label>
      <div class="control has-icons-right">
        <input class="input is-success is-medium" v-model="$store.state.selectedPatient.dob" type="text" />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </div>
 
    </div>
    <div class="field">
      <label class="label">Age</label>
      <div class="control has-icons-right">
        <input class="input is-success is-medium" type="text" />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </div>
    
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
        <input class="input is-success is-medium" v-model="$store.state.selectedPatient.address" type="text" />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <label class="label">Phone Number</label>
      <div class="control has-icons-right">
        <input class="input is-success is-medium" v-model="$store.state.selectedPatient.phone_number" type="text" />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </div>
     
    </div>
    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-right">
        <input class="input is-success is-medium" v-model="$store.state.selectedPatient.email"  type="email" />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-exclamation-triangle"></i>
        </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ViewPatientDetails",
});
</script>
