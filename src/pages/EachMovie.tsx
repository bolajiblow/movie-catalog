import React, { useEffect, useState } from "react";
import { Card } from "../components/card";
import { Section } from "../components/section";
import { Image } from "../components/image";
import movie from "../img/movie.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { getmovie } from "../services/movies.service";
import { Movie } from "../interfaces/movie.interface";

const EachMovie = () => {
  let navigate = useNavigate();
  let { movie_id } = useParams();
  const [movieList, setMovie] = useState<Movie>();
  useEffect(() => {
    getmovie(movie_id)
      .then((data: any) => {
        console.log(data.data.body.movie)
        setMovie(data.data.body.movie);
      })
      .catch((err) => err);
  }, []);

  return (
    <>
      {
        movieList &&
        <div>
          {/* background */}
          <div className="h-[300px] left-0 right-0 top-0 relative">
            <div className="overlay-film-cover"></div>
            <Image
              src={movieList.imageUrl}
              className="rounded-0 rounded-none"
            ></Image>
          </div>
          {/* poster and text */}
          <Section className="-mt-[150px] flex items-center relative z-10 mobile:block">
            <Image
              src={movieList.imageUrl}
              className="w-[200px] min-w-[200px] h-[300px] mobile:mx-auto"
            ></Image>
            <div className="px-3 flex flex-col items-start gap-3">
              <p className="text-xl line-clamp-1">{movieList?.title}</p>
              <ul className="flex items-center gap-3">
                <li className="px-3 py-1.5 bg-primary rounded-lg text-sm">
                  {movieList?.genre ? movieList.genre : 'No genre'}
                </li>
              </ul>
              <p className="line-clamp-3 opacity-[0.9]">
                {
                    movieList.description     }
              </p>
            </div>
          </Section>
          {/* cast */}
          <Section title="Movie Information" hidden={false}>
            <div className="scrollbar scrollbar-thumb-primary scrollbar-track-header">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-[200px] mb-6">
                  <Card withPlay={false} imageSrc={movieList.imageUrl}>
                    <p className="font-semibold">{movieList.producer}</p>
                    <p className="opacity-[0.9] text-sm">{movieList.pgRating}</p>
                  </Card>
                </div>
              </div>
            </div>
          </Section>
        </div>
      }
    </>
  );
};

export default EachMovie;
