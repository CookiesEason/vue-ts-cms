import { Module } from 'vuex';
import router from '@/router';

import { ILoginState } from './type';
import { IRootState } from './../type';

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusById,
} from '@/network/login/login';
import { IAccountLoginType } from '@/network/login/type';

import localCache from '@/utils/cache';

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
    };
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccountLoginType) {
      const res = await accountLoginRequest(payload);
      const { id, token } = res.data;
      commit('changeToken', token);
      localCache.setCache('token', token);

      const userInfoResult = await requestUserInfoById(id);
      commit('changeUserInfo', userInfoResult.data);
      localCache.setCache('userInfo', userInfoResult.data);

      const userMenus = await requestUserMenusById(userInfoResult.data.role.id);
      commit('changeUserMenus', userMenus.data);
      localCache.setCache('userMenus', userMenus.data);

      router.push('/main');
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token');
      if (token) {
        commit('changeToken', token);
      }
      const userInfo = localCache.getCache('userInfo');
      if (userInfo) {
        commit('changeUserInfo', userInfo);
      }
      const userMenus = localCache.getCache('userMenus');
      if (userMenus) {
        commit('changeUserMenus', userMenus);
      }
    },
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo;
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus;
    },
  },
  getters: {},
};

export default loginModule;
