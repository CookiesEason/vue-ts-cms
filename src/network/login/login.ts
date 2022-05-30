import request from '../index';
import { IAccountLoginType, IAccountLoginResultType } from './type';
import { IDataType } from '../type';

enum LoginAPI {
  AccountLogin = '/login',
  AccountLoginUserInfo = '/users/',
  UserMenus = '/role/',
}

export function accountLoginRequest(account: IAccountLoginType) {
  return request.post<IDataType<IAccountLoginResultType>>({
    url: LoginAPI.AccountLogin,
    data: account,
  });
}

export function requestUserInfoById(id: number) {
  return request.get<IDataType>({
    url: LoginAPI.AccountLoginUserInfo + id,
    showLoading: false,
  });
}

export function requestUserMenusById(id: number) {
  return request.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false,
  });
}
