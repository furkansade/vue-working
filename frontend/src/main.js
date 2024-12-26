import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
// custom css
import "@/assets/css/style.css";
import "@/assets/css/custom.css";

import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router/index.js";
import { createPinia } from "pinia";

import { useProjectStore } from "./stores/projectStore.js";

// import the fontawesome core
import { library } from "@fortawesome/fontawesome-svg-core";
// import font awesome icon component
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// import specific icons
import { faUser } from "@fortawesome/free-solid-svg-icons";

library.add(faUser);

const pinia = createPinia();

const projectStore = useProjectStore(pinia);

projectStore.fetchProjects().then(() => {
  const app = createApp(App);
  app
    .use(pinia)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");
});
