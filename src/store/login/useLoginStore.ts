import { accountLoginRequest, requestUserInfoById } from '@/network/login/login';
import { IAccountLoginType } from '@/network/login/type';
import localCache from '@/utils/cache';
import { defineStore } from 'pinia';

export const useLoginStore = defineStore('loginStore', {
  state: () => ({ token: '', userInfo: {} }),
  actions: {
    async accountLoginAction(account: IAccountLoginType) {
      const res = await accountLoginRequest(account);
      const { id, token } = res.data;
      this.token = token;
      localCache.setCache('token', token);

      const userInfoResult = await requestUserInfoById(id);
      this.userInfo = userInfoResult.data;
      localCache.setCache('userInfo', userInfoResult.data);
    },
  },
});
