import { createApp } from 'vue';
import App from './App.vue';
import 'normalize.css';
import './assets/css/index.less';
import router from './router';
import store, { setupStore, key } from './store';
import register from './global';

createApp(App).use(register).use(router).use(store, key).mount('#app');

setupStore();
