export interface iLogin {
  email: string;
  password: string;
}
export interface iUser {
  id: string;
  name: string;
  email: string;
}
export interface iLoginResponse {
  accessToken: string;
  user: iUser;
}

export interface iRegister {
  name: string;
  email: string;
  password: string;
}
