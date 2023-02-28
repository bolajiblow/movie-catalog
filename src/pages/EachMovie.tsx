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
  let { movie_id } = useParams()
  const [movieList, setMovie] = useState<Movie>();
  useEffect(() => {
    getmovie(movie_id)
      .then((data: any) => {
        setMovie(data.data.body.movie);
      })
      .catch((err) => err);
  }, []);

  return (
    <>
      {/* background */}
      <div className="h-[300px] left-0 right-0 top-0 relative">
        <div className="overlay-film-cover"></div>
        <Image src={""} className="rounded-0 rounded-none"></Image>
      </div>
      {/* poster and text */}
      <Section className="-mt-[150px] flex items-center relative z-10 mobile:block">
        <Image
          src={""}
          className="w-[200px] min-w-[200px] h-[300px] mobile:mx-auto"
        ></Image>
        <div className="px-3 flex flex-col items-start gap-3">
          <p className="text-xl line-clamp-1">{movieList?.title}</p>
          <ul className="flex items-center gap-3">
            <li className="px-3 py-1.5 bg-primary rounded-lg text-sm">
              {movieList?.title}
            </li>
          </ul>
          <p className="line-clamp-3 opacity-[0.9]">
            {
              "lorem loremloremloremloremloremloremloremlorem lorem lorem lorem lorem lorem lorem lorem lorem loremloremloremloremloremloremloremlorem lorem lorem lorem lorem lorem lorem lorem"
            }
          </p>
        </div>
      </Section>
      {/* cast */}
      <Section title="Casts" hidden={false}>
        <div className="scrollbar scrollbar-thumb-primary scrollbar-track-header">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-[200px] mb-6">
              <Card withPlay={false} imageSrc={""}>
                <p className="font-semibold">{"bolaji"}</p>
                <p className="opacity-[0.9] text-sm">{"muili"}</p>
              </Card>
            </div>
            <div className="flex-shrink-0 w-[200px] mb-6">
              <Card withPlay={false} imageSrc={""}>
                <p className="font-semibold">{"bolaji"}</p>
                <p className="opacity-[0.9] text-sm">{"muili"}</p>
              </Card>
            </div>
            <div className="flex-shrink-0 w-[200px] mb-6">
              <Card withPlay={false} imageSrc={""}>
                <p className="font-semibold">{"bolaji"}</p>
                <p className="opacity-[0.9] text-sm">{"muili"}</p>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default EachMovie;
