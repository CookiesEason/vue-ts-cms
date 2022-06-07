import { Module } from 'vuex';
import { IRootState } from '@/store/type';
import { ISystemState } from './type';
import { getPageListData } from '@/network/main/system/system';

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0,
    };
  },
  actions: {
    async getPageListAction({ commit }, payload) {
      let pageName = payload.pageName;
      let pageUrl = '';
      switch (pageName) {
        case 'user':
          pageUrl = '/users/list';
          break;
        case 'role':
          pageUrl = '/role/list';
          break;
      }
      const pageResult = await getPageListData(pageUrl, payload.queryInfo);
      const { list, totalCount } = pageResult.data;
      pageName = pageName.replace(pageName[0], pageName[0].toUpperCase());
      commit(`change${pageName}List`, list);
      commit(`change${pageName}Count`, totalCount);
    },
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList;
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount;
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList;
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount;
    },
  },
  getters: {
    getPageListData(state) {
      return (pageName: string) => {
        const key = `${pageName}List` as keyof ISystemState;
        return state[key];
      };
    },
    getPageListCountData(state) {
      return (pageName: string) => {
        const key = `${pageName}Count` as keyof ISystemState;
        return state[key];
      };
    },
  },
};

export default systemModule;
