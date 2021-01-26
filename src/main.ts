import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Lazyload, Toast } from "vant";
import util from "./util/util";
// import VConsole from 'vconsole'
// new VConsole()
const app = createApp(App);
app.use(store).use(router);
app
  .use(Lazyload, {
    lazyComponent: true,
  })
  .use(Toast);
app.use(util);
app.mount("#app");
