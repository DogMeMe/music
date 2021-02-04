import { ILoginResponse, IVerifyResponse } from "@/types/login";
import { Md5 } from "ts-md5/dist/md5";
import Api from ".";

export const phoneLogin = (
  phone: string,
  password: string
): Promise<ILoginResponse> => {
  const md5_password = Md5.hashStr(password);
  return Api(`/login/cellphone?phone=${phone}&md5_password=${md5_password}`);
};

export const getCode = (phone: string, ctcode?: number | string) => {
  return Api(`/captcha/sent?phone=${phone}&ctcode=${ctcode}`) as Promise<
    IVerifyResponse
  >;
};

export const codeVerify = (
  phone: string,
  captcha?: string,
  ctcode?: number | string
) => {
  return Api(
    `/captcha/verify?phone=${phone}&captcha=${captcha}&ctcode=${ctcode}`
  );
};

export const getLoginStatus = () => {
  return Api("/login/status");
};
