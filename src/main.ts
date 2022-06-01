import { createApp } from 'vue';
import App from './App.vue';
import 'normalize.css';
import './assets/css/index.less';
import router from './router';
import store, { setupStore, key } from './store';
import register from './global';

const app = createApp(App);
app.use(register);
app.use(store, key);
setupStore();
app.use(router);
app.mount('#app');
