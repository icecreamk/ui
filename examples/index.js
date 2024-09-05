import { createApp } from "vue";
import App from "./app.vue";
import TestUI from "components";

const app = createApp(App);
app.use(TestUI)
app.mount("#app");