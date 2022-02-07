<template>
  <router-view/>
</template>
<script lang="ts">
import { defineComponent, watch } from 'vue'
import { MutationTypes, useStore } from "@/store";

export default defineComponent({
  setup() {

    const store = useStore();

    let lockTimeOut =  setInterval(() => {

      store.commit(MutationTypes.LOGOUT, true);
      
    }, store.getters.lockTimeOut * 1000);

    watch(

      () => [store.getters.lockTimeOut],
      () => {

        clearInterval(lockTimeOut)

        lockTimeOut =  setInterval(() => {

          store.commit(MutationTypes.LOGOUT, true);
          
        }, store.getters.lockTimeOut * 1000);

      }
    );
    
  },
})
</script>

