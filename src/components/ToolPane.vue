<template>
  <div class="tool-card is-child panel  custom-bg">
    <ul class="tools is-primary">
      <li @click="OpenPatientRegForm" class="is-clickable"><button class="button is-rounded is-primary">Register Patient</button></li>
      <li @click="OpenViewOrdersView" class="is-clickable"><button class="button is-rounded is-primary">View Order</button></li>
    </ul>

    <button @click="Logout" id="logout-btn" class="button is-rounded is-danger">Logout</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import toggleViews from "@/composables/toggleViews";
import { MutationTypes, useStore } from "@/store";

export default defineComponent({
  name: "ToolPanel",
  setup() {

    const store = useStore()

    const { OpenPatientRegForm, ClosePatientRegForm, OpenViewOrdersView } = toggleViews();

    const Logout = () => {

      store.commit(MutationTypes.LOGOUT, true);
      console.log("Logout..")

    }

    return { Logout, OpenPatientRegForm, ClosePatientRegForm, OpenViewOrdersView };
  },
});
</script>

<style>

.tool-card {
  height: 150px;
}

.tools {
  list-style: none;
  text-align: left;
  padding: 0px !important;
  margin: 15px 20px !important;
}

.tool-card {
  max-width: 530px;
  background: none !important;
}

.tools li {
  display: inline-block;
  margin-right: 10px;
}


#logout-btn{
  position: relative;
  bottom: -20px;
  float: left;
  left: 20px;
}

</style>
