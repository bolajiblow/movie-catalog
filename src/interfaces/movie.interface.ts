export interface Genre {
    id: number
    name: string
}

export interface MoviesRes {
    message: string
    body: Movies
  }
  
  export interface Movies {
    movies: Movie[]
  }
  
  export interface Movie {
    _id: string
    title: string
    producer: string
    releaseDate: string
    pgRating: number
    rating: number
    __v: number
    timestamp: string
  }

  export interface IMovieRes {
    status: string
    data: IMovieData
  }
  
  export interface IMovieData {
    message: string
    body: Body
  }
  
  export interface IMovie {
    movie: Movie
  }
  
 
  
  