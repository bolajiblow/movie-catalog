export interface AuthCredentials {
  email: string;
  password: string;
}

export interface IUserSignUpDto {
  first: string;
  last: string;
  email: string;
  password: string;
}
export interface UserCreationRes {
  status: string;
  data: UserCreation;
}

export interface UserCreation {
  message: string;
}

export interface LoginRes {
  status: string;
  data: LoginData;
}

export interface LoginData {
  message: string;
  body: Login;
}

export interface Login {
  token: string;
}
