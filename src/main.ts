import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


require("@/theme/global.sass");
require("@/theme/global.css");


// library.add(faUserSecret)

// App.component('font-awesome-icon', FontAwesomeIcon)

// App.config.productionTip = false

createApp(App).use(store).use(router).mount('#app')
