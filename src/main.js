import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app = createApp(App);
const pinia = createPinia();
app.config.warnHandler = function (err, vm, info) {
  throw new Error(`[Vue warn]: ${err}\nTrace: ${info}`);
};
app.use(router);
app.use(pinia);
app.use(Toast);
app.mount('#app');
