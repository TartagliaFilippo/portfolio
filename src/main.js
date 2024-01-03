import { createApp } from "vue";
import "./assets/scss/style.scss";
import * as Bootstrap from "bootstrap";

// font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faArrowDown,
  faGear,
  faCaretRight,
  faCaretLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faGoogle,
  faOctopusDeploy,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faArrowDown,
  faGithub,
  faLinkedin,
  faGoogle,
  faGear,
  faCaretRight,
  faCaretLeft,
  faOctopusDeploy
);

import App from "./App.vue";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
