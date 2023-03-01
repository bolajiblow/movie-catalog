import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "../interfaces/movie.interface";
import { useGlobalContext } from "../pages/movie-container";
import routes from "../pages/routes";
import { getMovies } from "../services/movies.service";
import { Image } from "./image";

interface Props {
  keyword: string;
  goToSearchPage: any;
}

export const SearchResult = (props: Props) => {
    let navigate = useNavigate()
  const [totalItem, setTotalItem] = useState(0);
  const [filteredmoviesList, setFilteredMovies] = useState<Movie[]>();

  useEffect(() => {
    let searchTerm = props.keyword.toLowerCase();
    getMovies("")
      .then((data: any) => {
        let movies: Movie[] = data.data.body.movies;
        console.log(searchTerm);
        console.log(movies);
        let filtered = movies.filter(
          (each) =>
           ( (each.genre &&  each.genre.toLowerCase().includes(searchTerm)) ||
           ( each.title &&  each.title.toLowerCase().includes(searchTerm)))   
          
        );
        console.log(filtered)
        setFilteredMovies(filtered);
      })
      .catch((err) => err);
  }, [props.keyword]);
  const viewMovie = async (movie_id: string) => {
    navigate(routes.each_movie_link(movie_id));
  };

  return (
    <div
      className="
            absolute
            top-[48px]
            left-0
            right-0
            rounded-md
            bg-header
            shadow-lg
        "
    >
      <div className="max-h-[480px] scrollbar scrollbar-thumb-primary scrollbar-track-header pr-3">
      {
        filteredmoviesList && filteredmoviesList.slice(0,3).map((movie,index) => (
            <div key={index} onClick={() => viewMovie(movie._id)} className="flex items-start p-1.5 rounded-lg hover:bg-primary cursor-pointer m-1.5">
            {/* image */}
            <Image
              src={movie.imageUrl}
              className="h-[72px] min-w-[102px] w-[102px] rounded-md"
            ></Image>
            {/* title and genres */}
            <div className="px-3 truncate">
              <p className="text-base truncate">{movie.title}</p>
              <ul className="flex flex-wrap gap-x-1.5 text-sm opacity-[0.7]">
                <li> {movie.genre}</li>
              </ul>
            </div>
          </div>
        ))
      }
      </div>
      {totalItem > 5 ? (
        <button
          onClick={() => props.goToSearchPage()}
          className="px-3 py-1.5 bg-primary w-full hover:text-body sticky bottom-0 shadow-lg"
        >
          More results
        </button>
      ) : (
        ""
      )}
    </div>
  );
};
