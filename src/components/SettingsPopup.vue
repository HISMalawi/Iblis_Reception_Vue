<template>
  <span class="dropdown is-active" v-if="showPopUp">
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <div>Settings</div>

        <hr class="dropdown-divider" />

        <div class="field is-horizontal settings-popup-field">
          <div class="field-body">
            <div class="field">
              <div class="field has-addons">
                <p class="control">
                  <a class="button is-static"> Timeout : </a>
                </p>
                <p class="control is-expanded">
                  <input class="input" type="number" placeholder="sec" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </span>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { MutationTypes, useStore } from "@/store";

export default defineComponent({
  name: "SettingsPopup",
  props: ['isClicked'],
  setup(props) {

    const store = useStore();

    const showPopUp = ref<boolean>(props.isClicked)

    watch(

    () => [props.isClicked],
    () => {

      showPopUp.value = props.isClicked

    }
);

   

    return { showPopUp };
  },
});
</script>

<style>
.settings-popup-field {
  width: 100%;
  padding: 0px 3px !important;
}
</style>
