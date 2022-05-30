import { ILoginState } from './login/type';

export interface IRootState {
  name: string;
}

interface OtherState {
  loginModule: ILoginState;
}

export type State = IRootState & OtherState;
