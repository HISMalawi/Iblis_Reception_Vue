<template>
  <ion-page>
    <ion-header :translucent="true">

      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :default-href="defaltBackButtonLink"></ion-back-button>
        </ion-buttons>
        
        <ion-title>{{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-buttons slot="start">
          <ion-back-button :default-href="defaltBackButtonLink"></ion-back-button>
        </ion-buttons>
        
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
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/vue';
import { defineComponent } from 'vue';
import { personAdd } from "ionicons/icons";
export default defineComponent({
    name: 'BaseLayout',
    props: ['pageTitle', 'defaltBackButtonLink'],
    components: {
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        IonBackButton,
        IonButtons,
    },
    setup(){

      return { personAdd }
    }

});
</script>

<style>
    #container {
      text-align: center;
      background-color: #eee;
      position: absolute;
      left: 0;
      right: 0;
      height: 100%;
      top: 150px;
      padding-bottom: 150px;
    
      /* transform: translateY(-50%); */
    }

</style>