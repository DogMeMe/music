import { IResponse } from "@/types/http";
export interface IVerifyResponse extends IResponse {
  data: boolean;
}

export interface IAccount {
  userId: number;
  bindingTime: number;
}

export interface IProfile {
  backgroundUrl: string;
  avatorUrl: string;
  nickname: string;
  defaultAvator: boolean;
  city: number;
  province: number;
  gender: number;
}

export interface ILoginResponse extends IResponse {
  account: IAccount;
  cookie: string;
  profile: IProfile;
  token: string;
}
