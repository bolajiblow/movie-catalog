import { HttpResponse } from "../interfaces/httpResponse.interface";
import { httpStatusCode } from "../interfaces/httpStatus.interface";
import { IMovieRes, IMovies, MoviesRes } from "../interfaces/movie.interface";
import { httpClient } from "./httpClient";

export const createMovie = async (data: any) => {
  let response = await httpClient.post<HttpResponse<any>>(
    "/movies/create",
    data
  );
  return response;
};

export const getmovie = async (id: string | undefined) => {
  let response = await httpClient.get<HttpResponse<IMovieRes>>(`/movies/${id}`);
  let datares = response.data;
  console.log(response)
  return datares;
};

export const getMovies = async (url: any) => {
  let response = await httpClient.get<HttpResponse<MoviesRes>>(
    `/movies`
  );
  console.log(response)
  let datares = response
  return datares;
};
