<template>
  <router-view @mousemove="RefreshIdel" @keypress="RefreshIdel"/>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { MutationTypes, useStore } from "@/store";

export default defineComponent({
  setup() {

    const store = useStore();

    const isIdel = ref<boolean>(false)

    let lockTimeOut =  setInterval(() => {

      if (isIdel.value) store.commit(MutationTypes.LOGOUT, true);

      isIdel.value = true
      
    }, store.getters.lockTimeOut * 1000);

    watch(

      () => [store.getters.lockTimeOut],
      () => {

        clearInterval(lockTimeOut)

        lockTimeOut =  setInterval(() => {

          if (isIdel.value) store.commit(MutationTypes.LOGOUT, true);

          isIdel.value = true
          
        }, store.getters.lockTimeOut * 1000);

      }
    );
    
    const RefreshIdel = () => {

      isIdel.value = false

    }

    return { RefreshIdel }
  },
})
</script>

