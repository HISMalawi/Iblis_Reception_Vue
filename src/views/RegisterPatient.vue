<template>
  <div class="tile is-4 is-parent">
    <article
      class="patient-details-card card tile is-child notification is-primary"
    >
      <div class="content">
        <p class="subtitle">Register Patient</p>
        <div class="content has-text-left">
          <!-- Content -->
          <form @submit.prevent="SavePatient">
            <div class="field">
              <label class="label">External Patient No.</label>
              <div class="control has-icons-right">
                <input
                  v-model="patientDetails.externalPatientNumber"
                  class="input is-success is-medium"
                  type="text"
                  :class="errors.includes('external_number') ? 'is-danger' : ''"
                />

                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </div>
              <p v-if="errors.includes('external_number')" class="help is-danger">This External No is invalid</p>
            </div>
            <div class="field">
              <label class="label">First Name</label>
              <div class="control has-icons-right">
                <input
                  v-model="patientDetails.firstname"
                  class="input is-success is-medium"
                  type="text"
                  :class="errors.includes('firstname') ? 'is-danger' : ''"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </div>
              <p v-if="errors.includes('firstname')" class="help is-danger">
                First Name is required
              </p>
            </div>
            <div class="field">
              <label class="label">Last Name</label>
              <div class="control has-icons-right">
                <input
                  v-model="patientDetails.lastname"
                  class="input is-success is-medium"
                  type="text"
                  :class="errors.includes('lastname') ? 'is-danger' : ''"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </div>
              <p v-if="errors.includes('lastname')" class="help is-danger">
                Last Name is required
              </p>
            </div>
            <div class="field">
              <label class="label">Date of Birth</label>
              <div class="control has-icons-right">
                <input
                  v-model="patientDetails.dob"
                  class="input is-success is-medium"
                  type="text"
                  :class="errors.includes('dob') ? 'is-danger' : ''"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </div>
              <p v-if="errors.includes('dob')" class="help is-danger">
                Date Of Birth is required
              </p>
            </div>
            <div class="field">
              <label class="label">Age</label>
              <div class="control has-icons-right">
                <input
                  v-model="patientDetails.age"
                  class="input is-success is-medium"
                  type="text"
                  :class="errors.includes('age') ? 'is-danger' : ''"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </div>
              <p v-if="errors.includes('age')" class="help is-danger">
                Age is required
              </p>
            </div>
            <div class="field">
              <label class="label">Gender</label>
              <div class="control">
                <label class="radio">
                  <input
                    v-model="patientDetails.gender"
                    value="0"
                    type="radio"
                    name="gender"
                  />
                  Male
                </label>
                <label class="radio">
                  <input
                    v-model="patientDetails.gender"
                    value="1"
                    type="radio"
                    name="gender"
                  />
                  Female
                </label>
              </div>
              <p v-if="errors.includes('gender')" class="help is-danger">
                Gender is required
              </p>
            </div>
            <div class="field">
              <label class="label">Physical Address</label>
              <div class="control has-icons-right">
                <input
                  v-model="patientDetails.physicalAddress"
                  class="input is-success is-medium"
                  type="text"
                  :class="errors.includes('address') ? 'is-danger' : ''"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </div>
              <p v-if="errors.includes('address')" class="help is-danger">
                Physical address is required
              </p>
            </div>
            <div class="field">
              <label class="label">Phone Number</label>
              <div class="control has-icons-right">
                <input
                  v-model="patientDetails.phoneNumber"
                  class="input is-success is-medium"
                  type="text"
                  :class="errors.includes('phone') ? 'is-danger' : ''"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </div>
              <p v-if="errors.includes('phone')" class="help is-danger">
                Phone Number is required
              </p>
            </div>
            <div class="field mb-6">
              <label class="label">Email</label>
              <div class="control has-icons-right">
                <input
                  v-model="patientDetails.email"
                  class="input is-success is-medium"
                  type="email"
                  :class="errors.includes('email') ? 'is-danger' : ''"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
              </div>
              <p v-if="errors.includes('email')" class="help is-danger">Email is required</p>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button type="submit" class="button is-link is-medium">
                  Save
                </button>
              </div>
              <div class="control">
                <button
                  @click="ClosePatientRegForm"
                  class="button is-link is-light is-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from "vue";
import toggleViews from "@/composables/toggleViews";
import { PatientReg } from "@/interfaces/PatientReg";

export default defineComponent({
  name: "RegisterPatient",
  components: {},
  setup() {
    const errors = ref<string[]>([]);

    const { ClosePatientRegForm } = toggleViews();

    const patientDetails: PatientReg = reactive({
      externalPatientNumber: "",
      firstname: "",
      lastname: "",
      dob: "",
      age: -1,
      gender: "",
      physicalAddress: "",
      phoneNumber: "",
      email: "",
    });

    const removeError = (value: string) => {
      const index = errors.value.indexOf(value);
      if (index > -1) {
        errors.value.splice(index, 1);
      }
    };

    watch(
      () => [patientDetails.externalPatientNumber != patientDetails.externalPatientNumber],
      () => {
        removeError("external_number");
      }
    );

    watch(
      () => [patientDetails.firstname != patientDetails.firstname],
      () => {
        removeError("firstname");
      }
    );

    watch(
      () => [patientDetails.lastname != patientDetails.lastname],
      () => {
        removeError("lastname");
      }
    );

    watch(
      () => [patientDetails.dob != patientDetails.dob],
      () => {
        removeError("dob");
        removeError("age");
      }
    );

    watch(
      () => [patientDetails.age != patientDetails.age],
      () => {
        removeError("age");
        removeError("dob");
      }
    );

    watch(
      () => [patientDetails.gender != patientDetails.gender],
      () => {
        removeError("gender");
      }
    );

    watch(
      () => [patientDetails.physicalAddress != patientDetails.physicalAddress],
      () => {
        removeError("address");
      }
    );

    watch(
      () => [patientDetails.phoneNumber != patientDetails.phoneNumber],
      () => {
        removeError("phone");
      }
    );

    watch(
      () => [patientDetails.email != patientDetails.email],
      () => {
        removeError("email");
      }
    );

    const SavePatient = () => {

      if (patientDetails.externalPatientNumber == "") {
        errors.value.push("external_number");
      }

      if (patientDetails.firstname == "") {
        errors.value.push("firstname");
      }

      if (patientDetails.lastname == "") {
        errors.value.push("lastname");
      }

      if (patientDetails.dob == "" && patientDetails.age == -1) {
        errors.value.push("dob");
      }

      if (patientDetails.age == -1 && patientDetails.dob == "") {
        errors.value.push("age");
      }

      if (patientDetails.gender == "") {
        errors.value.push("gender");
      }

      if (patientDetails.physicalAddress == "") {
        errors.value.push("address");
      }

      if (patientDetails.phoneNumber == "") {
        errors.value.push("phone");
      }

      if (patientDetails.email == "") {
        errors.value.push("email");
      }

      if (errors.value.length == 0) {

        console.log("Add Patient..")
        
      }
    };

    return { ClosePatientRegForm, patientDetails, errors, SavePatient };
  },
});
</script>

<style></style>
