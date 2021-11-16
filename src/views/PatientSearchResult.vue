<template>

    <div v-for="post in posts" :key="post.id" class="media is-clickable" v-on:click="showPatientDetails">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">John Smith</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>
  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex"

export default defineComponent({
  name: "PatientSearchResult",
  setup() {

    const store = useStore()
    
    const posts = [
      {
        id: 1,
        firstname: "Blessings",
        lastname: "Chidambe",
      },
      {
        id: 2,
        firstname: "Blessings",
        lastname: "Chidambe",
      },
    ];

    const showPatientDetails = () =>{

        store.commit("VIEWING_PATIENT", true)
    }

    return { posts, showPatientDetails };
  },
});
</script>

<style></style>
