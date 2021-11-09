import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

require("@/theme/global.sass");

createApp(App).use(router).mount('#app')
