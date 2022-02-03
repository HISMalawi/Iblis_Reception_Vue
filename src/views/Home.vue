<template>
  <div class="home">
    <div class="theme-switch">
      <input type="checkbox" class="checkbox" checked id="checkbox" />
      <label @click="ChangeTheme" for="checkbox" class="label panel">
        <i class="fas fa-moon"></i>
        <i class="fas fa-sun"></i>
        <div class="ball panel"></div>
      </label>
    </div>

    <div class="settings-switch">
      <img
        aria-haspopup="true"
        aria-controls="dropdown-menu"
        src="../assets/settings_icon.png"
        @click="Popup"
      />

      <div id="settings-panel" @mouseleave="DelayPopup">

        <settings-popup :isClicked="showPopup"/>

      </div>
    </div>

    <div class="progress-content content">
      <progress
        v-if="$store.state.searchingInProgress"
        class="progress is-small is-primary"
        max="100"
      >
        15%
      </progress>
    </div>
    <div class="content ex">
      <div class="tile is-ancestor">
        <div class="controlls-tile tile is-vertical is-2 media-right">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <search-panel />

              <tool-panel />
            </div>
          </div>
        </div>

        <dashboard-results-panel
          v-if="viewResultPanelVisibility"
          :specimen="SelectedSpecimen"
          @CloseResultsPanel="ClosePanel"
        />
        <dashboard-panel v-if="$store.state.viewingDashboard" />
        <view-orders v-if="$store.state.viewingOrders" />
        <register-patient v-if="$store.state.registeringPatient" />
        <patient-search-results v-if="$store.state.searchingPatient" />
        <view-patient
          @OpenResultsPanel="OpenResultsPanel"
          v-if="$store.state.viewingPatient"
        />
        <view-results v-if="$store.state.viewingTestResults" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onMounted,
  ref,
  watchEffect,
} from "vue";
import { useStore } from "@/store";
import RegisterPatient from "@/views/RegisterPatient.vue";
import PatientSearchResults from "@/views/PatientSearchResults.vue";
import DashboardPanel from "@/views/DashboardPanel.vue";
import ViewOrders from "@/views/ViewOrders.vue";
import ViewPatient from "@/views/ViewPatient.vue";
import SearchPanel from "@/components/SearchPanel.vue";
import ToolPanel from "@/components/ToolPane.vue";
import { useRouter } from "vue-router";
import ViewResults from "@/views/ViewResults.vue";
import DashboardResultsPanel from "@/views/DashboardResultsPanel.vue";
import { Specimen } from "@/interfaces/Specimen";
import SettingsPopup from "@/components/SettingsPopup.vue"

export default defineComponent({
  name: "Home",
  components: {
    RegisterPatient,
    PatientSearchResults,
    ViewPatient,
    SearchPanel,
    ToolPanel,
    ViewOrders,
    ViewResults,
    DashboardPanel,
    DashboardResultsPanel,
    SettingsPopup,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const showPopup = ref<boolean>(false)

    const viewResultPanelVisibility = ref<Boolean>(false);

    const SelectedSpecimen = ref<Specimen | null>();

    const OpenPanel = (Specimen: Specimen) => {
      SelectedSpecimen.value = Specimen;
      viewResultPanelVisibility.value = true;
    };

    const ClosePanel = () => {
      viewResultPanelVisibility.value = false;
    };

    const theme = ref<string>("dark");

    const appDomElement = ref<HTMLElement | null>(
      document.createElement("div")
    );

    onMounted(() => {
      const DomElem = ref<HTMLElement | null>(document.getElementById("app"));

      appDomElement.value = DomElem.value;
    });

    watchEffect(() => {
      if (!store.getters.isLoggedIn) {
        router.push("/login");
      }
    });

    onBeforeMount(() => {
      if (!store.getters.isLoggedIn) {
        router.push("/login");
      }
    });

    const ChangeTheme = () => {
      if (theme.value == "dark") {
        appDomElement.value?.classList.remove("app-dark-mode");
        appDomElement.value?.classList.add("app-light-mode");
        theme.value = "light";
      } else {
        appDomElement.value?.classList.remove("app-light-mode");
        appDomElement.value?.classList.add("app-dark-mode");
        theme.value = "dark";
      }
    };

    const OpenResultsPanel = (Specimen: Specimen) => {
      SelectedSpecimen.value = Specimen;
      viewResultPanelVisibility.value = true;
    };

    const Popup = () => {

      showPopup.value = !showPopup.value

    }

    const DelayPopup = () => {

      setTimeout(() => {

        showPopup.value = !showPopup.value
        
      }, 300);

      

    }

    return {
      ChangeTheme,
      OpenResultsPanel,
      viewResultPanelVisibility,
      SelectedSpecimen,
      ClosePanel,
      Popup,
      DelayPopup,
      showPopup,
    };
  },
});
</script>

<style>
.home {
  height: calc(100% - 15%);
  width: 90%;
  padding: 10px;
}

.progress-content {
  position: absolute;
  padding: 0px !important;
  margin: 0px !important;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0.3;
}
.checkbox {
  opacity: 0;
  position: absolute;
}

.theme-switch .label {
  width: 50px;
  height: 26px;
  background-color: rgb(221, 217, 217);
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  transform: scale(1.5);
  cursor: pointer;
}

.theme-switch .ball {
  width: 20px;
  height: 20px;
  background-color: rgba(95, 93, 93, 0.849);
  position: absolute;
  top: 2px;
  left: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
}

/*  target the elemenent after the label*/
.theme-switch .checkbox:checked + .label .ball {
  transform: translateX(24px);
}

.theme-switch .fa-moon {
  color: pink;
}

.theme-switch .fa-sun {
  color: yellow;
}

.theme-switch {
  position: absolute;
  right: 200px;
  top: 10px;
}
.ex {
  overflow: hidden;
}

.settings-switch {
  width: 40px;
  height: 40px;
  background-color: rgb(221, 217, 217);
  position: absolute;
  right: 280px;
  top: 28px;
  border-radius: 50%;
  transition: transform 0.2s linear;
  padding: 5px;
}

.settings-switch img {
  cursor: pointer;
}

#settings-panel {
  position: relative;
  right: 215px;
  top: -15px;
}

</style>
