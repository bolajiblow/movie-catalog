import { AuthCredentials, IUserSignUpDto } from "../interfaces/auth.interface";
import { HttpResponse } from "../interfaces/httpResponse.interface";
import { httpStatusCode } from "../interfaces/httpStatus.interface";
import { httpClient } from "./httpClient";

export const loginService = async ({ email, password }: AuthCredentials) => {
  let response = await httpClient.post<HttpResponse<any>>("/auth/login", {
    email,
    password,
  });
  if (response.data.statusCode === httpStatusCode.OK) {
    let data = response.data.data;
  }
  return response;
};

export const signupService = async (data: IUserSignUpDto) => {
  let response = await httpClient.post<HttpResponse<any>>("/auth/signup", data);
  if (response.data.statusCode === httpStatusCode.OK) {
    let data = response.data.data;
  }
  return response;
};

export const destroyUserSession = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("localRole");
};

export const getAuthToken = (): string | null => {
  let authToken: any;
  let payload = localStorage.getItem("payload");
  if (payload) {
    authToken = JSON.parse(payload);
    return authToken.token;
  }
  return "";
};

export const isAuthenticated = (): boolean => {
  let user = localStorage.getItem("user");
  let payload = localStorage.getItem("payload");
  if (user && payload) return true;
  return false;
};
