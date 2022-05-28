import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import register from './global';

import request from './network';

request
  .get<{ origin: string }>({
    url: '/ip',
  })
  .then((res) => {
    console.log(res);
  });

createApp(App).use(register).use(router).use(store).mount('#app');
