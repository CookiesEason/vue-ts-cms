import { createStore, useStore as baseUseStore, Store } from 'vuex';
import loginModule from './login/login';
import { IRootState, State } from './type';
import { InjectionKey } from 'vue';

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

export function useStore() {
  return baseUseStore(key);
}

export const key: InjectionKey<Store<State>> = Symbol();

export default store;
