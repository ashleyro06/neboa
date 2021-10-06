import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PrimeVue from "primevue/config";

import "primeflex/primeflex.css";

const app = createApp(App).use(store).use(router);

// Import prrimevue and build an initial setup
app.use(PrimeVue, {
  ripple: true,
});

app.mount("#app");
