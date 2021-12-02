<template>
  <div class="tool-card is-child  custom-bg">
    <ul class="tools is-primary">
      <li @click="OpenPatientRegForm" class="is-clickable">Register Patient</li>
      <li @click="OpenViewOrdersView" class="is-clickable">View Order</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import toggleViews from "@/composables/toggleViews";

export default defineComponent({
  name: "ToolPanel",
  setup() {
    const { OpenPatientRegForm, ClosePatientRegForm, OpenViewOrdersView } = toggleViews();

    return { OpenPatientRegForm, ClosePatientRegForm, OpenViewOrdersView };
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
  padding: 0px;
  margin: 0px;
}

.tool-card {
  max-width: 530px;
  background: none !important;
}

.tools li {
  display: inline-block;
  padding: 2px 14px;
  border: 3px solid #3796ce;
  border-radius: 40px;
  background-color: #3796ce;
  color: rgba(31, 27, 27, 0.685);
  margin-right: 10px;
  color: white;
}

</style>
