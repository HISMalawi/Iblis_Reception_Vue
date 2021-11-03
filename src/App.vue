<template>
  <ion-app>
    <BaseLayout>
    <ion-router-outlet />
    </BaseLayout>
  </ion-app>
</template>

<script lang="ts">

import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
});
</script>