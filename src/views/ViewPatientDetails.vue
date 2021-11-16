<template>
  <div class="content has-text-left">
    <div class="field">
      <label class="label">External Patient No.</label>
      <div class="control has-icons-right">
        <input class="input is-success is-medium" type="text" />

        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </div>
      <p class="help is-danger">This External No is invalid</p>
    </div>
    <div class="field">
      <label class="label">First Name</label>
      <div class="control has-icons-right">
        <input class="input is-success is-medium" type="text" />
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
        <input class="input is-success is-medium" type="text" />
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
        <input class="input is-success is-medium" type="text" />
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
        <input class="input is-success is-medium" type="text" />
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
      <p class="help is-danger">This field is required</p>
    </div>
    <div class="field">
      <label class="label">Physical Address</label>
      <div class="control has-icons-right">
        <input class="input is-success is-medium" type="text" />
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
        <input class="input is-success is-medium" type="text" />
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
        <input class="input is-success is-medium" type="email" />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-exclamation-triangle"></i>
        </span>
      </div>
      <p class="help is-danger">This Email is invalid</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ViewPatientDetails",
});
</script>
