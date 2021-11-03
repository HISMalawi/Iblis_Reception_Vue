<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>{{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ pageTitle }}</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
          
        <slot/>

      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'BaseLayout',
    props: ['pageTitle', 'defaltBackButtonLink'],
    components: {
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar
    },

});
</script>

<style>
    #container {
    text-align: center;
    background-color: #eee;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    }

</style>