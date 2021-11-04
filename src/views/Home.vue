<template>
  <BaseLayout pageTitle="Home">
  
  <div class="home max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
    <div class="max-w-3xl mx-auto">
      <!-- Content goes here -->
          <ion-nav-link router-link="/add_patient" class="bg-white shadow mb-10 relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <ion-icon :icon="personAdd"></ion-icon>
            <span class="mt-2 block text-lg font-bold text-gray-900">
              Add Patient
            </span>
          </ion-nav-link>


          <ion-nav-link router-link="/create_order" class="bg-white shadow mb-10 elative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <ion-icon :icon="fileTrayFull"></ion-icon>
            <span class="mt-2 block text-lg font-bold text-gray-900">
              Create Order
            </span>
          </ion-nav-link>

          <ion-nav-link router-link="/view_results" class="bg-white shadow mb-10 elative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <ion-icon :icon="clipboard"></ion-icon>
            <span class="mt-2 block text-lg font-bold text-gray-900">
              View Results
            </span>
          </ion-nav-link>

    </div>
  </div>



  


  </BaseLayout>
</template>

<script lang="ts">
import BaseLayout from '../components/base/BaseLayout.vue';
import { defineComponent } from 'vue';
import { IonIcon, IonNavLink} from "@ionic/vue";
import { personAdd , fileTrayFull, clipboard } from "ionicons/icons";
export default defineComponent({
  name: 'Home',
  components: {
    BaseLayout,
    IonIcon,
    IonNavLink,
  },
  setup(){


    return { personAdd, fileTrayFull, clipboard }
  }
});
</script>

<style>

.home ion-icon {

  font-size: 64px;
}

.home ion-nav-link {
    cursor: pointer;
}

</style>