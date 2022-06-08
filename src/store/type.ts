import { ILoginState } from './login/type';
import { ISystemState } from './system/type';

export interface IRootState {
  entireDepartment: any[];
  entireRole: any[];
}

interface OtherState {
  loginModule: ILoginState;
  systemModule: ISystemState;
}

export type State = IRootState & OtherState;
