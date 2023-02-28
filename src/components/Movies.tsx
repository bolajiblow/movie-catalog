import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "../pages/routes";
import { Card } from "./card";
import { Section } from "./section";

import { getMovies } from "../services/movies.service";
import { paginate } from "../utils";
import Pagination from "./Pagination";
import { Movie, IMovies } from "../interfaces/movie.interface";

const Movies = () => {
  let navigate = useNavigate();
  const [q, setQ] = useState<any>("");
  const [searchParam] = useState<string[]>(["title", "genre"]);
  const [filterParam, setFilterParam] = useState<any>(["All"]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [moviesList, setMovies] = useState<Movie[]>();
  const [paginateMovieList, setPaginateMoviesList] = useState<Movie[]>();
  const pageSize = 5;

  useEffect(() => {
    getMovies("url")
      .then((data: any) => {
        setMovies(data.data.body.movies);
        console.log(data.data.body.movies);
      })
      .catch((err) => err);
  }, []);

  const searched = (movies: Movie[] | undefined) => {
    return movies?.filter((item: any) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  };

  function search(moviesSearch: Movie[] | undefined) {
    return moviesSearch?.filter((item: any) => {
      if (item?.country?.name == filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      }
    });
  }

  const paginateList = paginate(
    searched(search(moviesList)),
    currentPage,
    pageSize
  );
  console.log(paginateList);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const viewMovie = async (movie_id: string) => {
    navigate(routes.each_movie_link(movie_id));
  };

  return (
    <>
      {/* background */}
      <div className="h-[120px] left-0 right-0 top-0 relative">
        <div className="overlay-film-cover"></div>
        <div className="h-full w-full bg-gradient-to-b from-indigo-900	 from-indigo-600"></div>
      </div>
      {/* PAGE TITLE */}
      <Section
        className="-mt-[90px] flex items-center relative z-10"
        title={"Movies"}
      ></Section>
      {/* Films */}
      <Section>
        <div className="grid lg:grid-cols-5 sm:grid-cols-4 mobile:grid-cols-3 relative z-[11]">
          {paginateList &&
            paginateList.map((movie, index) => (
              <div key={index}>
                <Card
                  onClick={() => viewMovie(movie._id)}
                  imageSrc={""}
                  title={movie.title}
                ></Card>
              </div>
            ))}
        </div>
        <div className="flex  justify-end mt-2">
          <Pagination
            items={moviesList?.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onChangePage={handlePageChange}
          />
        </div>
      </Section>
    </>
  );
};

export default Movies;
