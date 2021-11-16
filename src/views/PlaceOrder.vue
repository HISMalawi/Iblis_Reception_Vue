<template>
  <div class="content has-text-left">
    <form @submit.prevent="">
      <div class="field">
        <label class="label">Visit Type</label>
        <div class="control">
          <div class="select is-medium is-fullwidth">
            <select>
              <option>--- Select Visit Type ---</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label">Requesting Ward / Location</label>
        <div class="control">
          <div class="select is-medium is-fullwidth">
            <select>
              <option>--- Select Ward / Location ---</option>
              <option>With options</option>
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "PlaceOrder",
  components: {},
});
</script>
