import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
// custom css
import '@/assets/css/style.css';
import '@/assets/css/custom.css';

import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/index.js'
import { createPinia } from 'pinia'

// import the fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core'
// import font awesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import specific icons
import { faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faUser)

const app = createApp(App);
app
.use(createPinia())
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');