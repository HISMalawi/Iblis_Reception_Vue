<template>
  <div class="home">
    <div class="content">
      <div class="tile is-ancestor">
        <div class="controlls-tile tile is-vertical is-3 media-right">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              
              <search-panel />

              <tool-panel/>

            </div>
          </div>
        </div>

        <register-patient v-if="$store.state.registeringPatient" />
        <patient-search-results v-if="$store.state.searchingPatient" />
        <view-patient v-if="$store.state.viewingPatient" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import { useStore } from "@/store";
import RegisterPatient from "@/views/RegisterPatient.vue";
import PatientSearchResults from "@/views/PatientSearchResults.vue";
import ViewPatient from "@/views/ViewPatient.vue";
import SearchPanel from "@/components/SearchPanel.vue"
import ToolPanel from "@/components/ToolPane.vue"
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Home",
  components: {
    RegisterPatient,
    PatientSearchResults,
    ViewPatient,
    SearchPanel,
    ToolPanel,
  },
  setup() {

    const store = useStore();
    const router = useRouter();

    const isLoggedIn = ref(store.getters.isLoggedIn);

    watchEffect(() => {
      if (!isLoggedIn.value) {
        router.push("/login");
      }
    });


  },
});
</script>

<style>
.home {
  height: calc(100% - 20%);
  width: 90%;
  padding: 10px;
}

</style>
