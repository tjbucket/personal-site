import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/main.css";
import { library } from "../node_modules/@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/vue-fontawesome";
import { faGithub } from "../node_modules/@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "../node_modules/@fortawesome/free-brands-svg-icons";
import { faJava } from "../node_modules/@fortawesome/free-brands-svg-icons";
import { faDatabase } from "../node_modules/@fortawesome/free-solid-svg-icons";

library.add(faGithub, faLinkedin, faJava, faDatabase);
createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
