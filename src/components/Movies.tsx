import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "../pages/routes";
import { Card } from "./card";
import { Section } from "./section";

import { getMovies } from "../services/movies.service";
import { paginate } from "../utils";
import Pagination from "./Pagination";
import { Movie, IMovies } from "../interfaces/movie.interface";
import EmptyState from "./empty-state";

const Movies = () => {
  let navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [moviesList, setMovies] = useState<Movie[]>();
  const pageSize = 6;

  useEffect(() => {
    getMovies("url")
      .then((data: any) => {
        setMovies(data.data.body.movies);
        console.log(data.data.body.movies);
      })
      .catch((err) => err);
  }, []);

 
  const paginateList = paginate(
    moviesList,
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
      {
        paginateList.length > 0  ?  <div className="grid lg:grid-cols-3 sm:grid-cols-4 mobile:grid-cols-3 relative z-[11]">
        {
          paginateList.map((movie, index) => (
            <div key={index}>
              <Card
                onClick={() => viewMovie(movie._id)}
                imageSrc={movie.imageUrl}
                title={movie.title}
              ></Card>
            </div>
          ))}
      </div>
      : <EmptyState />
      }
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
