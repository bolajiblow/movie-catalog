import { HttpResponse } from "../interfaces/httpResponse.interface";
import { httpStatusCode } from "../interfaces/httpStatus.interface";
import { IMovieRes, MoviesRes } from "../interfaces/movie.interface";
import { httpClient } from "./httpClient";

export const createMovie = async (data: any) => {
  let response = await httpClient.post<HttpResponse<any>>(
    "/movies/create",
    data
  );
  return response;
};

export const getmovie = async (id: any) => {
  let response = await httpClient.get<HttpResponse<IMovieRes>>(`/movies/${id}`);
  return response;
};

export const getMovies = async (url: any) => {
  let response = await httpClient.get<HttpResponse<MoviesRes>>(
    `/movies/${url}`
  );
  return response;
};
