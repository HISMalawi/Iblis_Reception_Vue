<template>
  <BaseLayout pageTitle="Home">
    <h1>This is the Home Page!</h1>
  </BaseLayout>
</template>

<script lang="ts">
import BaseLayout from '../components/base/BaseLayout.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    BaseLayout,
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>