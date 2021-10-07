import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PrimeVue from "primevue/config";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "primeflex/primeflex.css";

const app = createApp(App).use(store).use(router);

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSun } from "@fortawesome/free-solid-svg-icons";
library.add(faSun);
// Import primevue and build an initial setup
app.use(PrimeVue, {
  ripple: true,
});
app.component("font-awesome-icon", FontAwesomeIcon);
import InputText from "primevue/inputtext";
app.component("InputText", InputText);
import Button from "primevue/button";
app.component("Button", Button);

app.mount("#app");
