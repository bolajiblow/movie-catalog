import { AuthCredentials } from "../interfaces/auth.model";
import { HttpResponse } from "../interfaces/httpResponse.model";
import { httpStatusCode } from "../interfaces/httpStatus.model";
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

export const destroyUserSession = () => {
  localStorage.removeItem("payload");
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
