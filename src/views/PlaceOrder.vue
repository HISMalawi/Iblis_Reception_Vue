<template>
  <div class="content has-text-left">
    <form @submit.prevent="addOrder">
      <div class="field">
        <label class="label">Visit Type</label>
        <div class="control">
          <div class="select is-medium is-fullwidth">
            <select v-model="selectedVisitType">
              <option :value="0">--- Select Visit Type ---</option>
              <option :value="visitType.id" v-for="visitType in visitTypes" :key="visitType.id">{{visitType.name}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label">Requesting Ward / Location</label>
        <div class="control">
          <div class="select is-medium is-fullwidth">
            <select v-model="selectedWard">
              <option :value="0">--- Select Ward / Location ---</option>
              <option :value="ward.id" v-for="ward in Wards" :key="ward.id">{{ward.name}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label">Requesting Physician</label>
        <div class="control has-icons-right">
          <input class="input is-success is-medium" type="text" />

          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>
      <div class="field">
        <label class="label">Specimen Type</label>
        <div class="control has-icons-right">
          <input class="input is-success is-medium" type="text" />

          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button type="submit" class="button is-link is-medium">Save</button>
        </div>
        <div class="control">
          <button class="button is-link is-light is-medium">Cancel</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import GetVisitTypes from "@/composables/getVisitTypes";
import GetWards from "@/composables/getWards";

export default defineComponent({
  name: "PlaceOrder",
  setup() {

    const { visitTypes, fetch } = GetVisitTypes()

    const selectedVisitType = ref(0)

    const selectedWard = ref(0)

    const { Wards, fetchWards } = GetWards()

    watch(() => [selectedVisitType.value != selectedVisitType.value], () => {

      selectedWard.value = 0

      fetchWards(selectedVisitType.value)


    })


    const addOrder = () => {

      console.log("Add Order...")
    }

    fetch()

    return { visitTypes, selectedWard, selectedVisitType, Wards, addOrder}
  },
});
</script>
