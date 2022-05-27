import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import register from './global';

createApp(App).use(register).use(router).use(store).mount('#app');
