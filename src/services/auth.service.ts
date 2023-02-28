import {
  AuthCredentials,
  IUserSignUpDto,
  LoginData,
  LoginRes,
  UserCreation,
  UserCreationRes,
} from "../interfaces/auth.interface";
import { HttpResponse } from "../interfaces/httpResponse.interface";
import { httpStatusCode } from "../interfaces/httpStatus.interface";
import { httpClient } from "./httpClient";

export const loginService = async ({ email, password }: AuthCredentials) => {
  let response = await httpClient.post<HttpResponse<LoginData>>("/auth/login", {
    email,
    password,
  });

  let data = response.data.data;
  return data;
};

export const signupService = async (data: IUserSignUpDto) => {
  let response = await httpClient.post<HttpResponse<UserCreation>>(
    "/auth/signup",
    data
  );
  let datares = response.data.data;
  return datares;
};

export const destroyUserSession = () => {
  localStorage.removeItem("movie_token");
};

export const getAuthToken = (): string | null => {
  let payload = localStorage.getItem("movie_token");
  if (payload) {
    return payload;
  }
  return "";
};

export const isAuthenticated = (): boolean => {
  let user = localStorage.getItem("movie_token");

  if (user) return true;
  return false;
};
