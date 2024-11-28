import { createApp } from "vue";
import App from "./app.vue";
import TestUI from "../packages/components";
import '../packages/components/dist/style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './reset.css'


const app = createApp(App);
app.use(TestUI)
app.use(ElementPlus)
app.mount("#app");