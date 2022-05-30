import { createStore } from 'vuex';
import loginModule from './login/login';
import { IRootState } from './type';

const store = createStore<IRootState>({
  state: {
    name: '123',
  },
  modules: {
    loginModule,
  },
});

export function setupStore() {
  store.dispatch('loginModule/loadLocalLogin');
}

export default store;
