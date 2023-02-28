export interface Genre {
    id: number
    name: string
}

export interface MoviesRes {
    message: string
    body: IMovies
  }
  
  export interface IMovies {
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
    imageUrl: string
    genre: string
    description: string
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
  
  export interface CreateMovie {
    title: string,
    producer: string,
    releaseDate: Date,
    pgRating: Number,
    upvotes: Number,
    downvotes: Number,
    rating: Number,
    imageUrl: string | undefined,
    genre: string,
    description: string,
  }
 
  
  