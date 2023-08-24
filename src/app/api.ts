export enum EnumGet {
  SendLoginOTP = "api/wallet/msg/sms/send",
  Login = "api/user/getUserInfo2",
}

export enum EnumPost {
  UserInfo = "api/user/getUserInfo",
  Login = "api/auth/login",
  Login4 = "api/user/getUserInfo3",
}

export type ApiConstanst<T> = keyof T;
