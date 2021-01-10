import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Lazyload } from 'vant'

const app = createApp(App)
app.use(store).use(router)
app.use(Lazyload, {
    lazyComponent: true,
});
app.mount('#app')
