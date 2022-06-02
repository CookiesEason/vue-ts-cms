import { createStore, useStore as baseUseStore, Store } from 'vuex';
import loginModule from './login/login';
import { IRootState, State } from './type';
import { InjectionKey } from 'vue';
import systemModule from './system/system';

const store = createStore<IRootState>({
  state: {
    name: '123',
  },
  modules: {
    loginModule,
    systemModule,
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
