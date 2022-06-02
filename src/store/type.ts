import { ILoginState } from './login/type';
import { ISystemState } from './system/type';

export interface IRootState {
  name: string;
}

interface OtherState {
  loginModule: ILoginState;
  systemModule: ISystemState;
}

export type State = IRootState & OtherState;
