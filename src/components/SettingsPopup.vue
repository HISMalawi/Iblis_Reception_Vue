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
                  <a class="button is-static"> Timeout (sec):</a>
                </p>
                <p class="control is-expanded">
                  <input v-model="Timeout" class="input" type="number" placeholder="sec" />
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
import { ActionTypes, useStore } from "@/store";

export default defineComponent({
  name: "SettingsPopup",
  props: ['isClicked'],
  setup(props) {

    const store = useStore();

    const Timeout = ref<number>(store.getters.lockTimeOut)

    const showPopUp = ref<boolean>(props.isClicked)

    watch(

      () => [Timeout.value],
      () => {

        store.dispatch(ActionTypes.SET_LOCK_TIMEOUT, Timeout.value);

      }
    );

    watch(

      () => [props.isClicked],
      () => {

        showPopUp.value = props.isClicked

      }
    );

    return { showPopUp, Timeout};
  },
});
</script>

<style>
.settings-popup-field {
  width: 100%;
  padding: 0px 3px !important;
}
</style>
