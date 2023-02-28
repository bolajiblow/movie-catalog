import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../pages/movie-container";
import { Image } from "./image";

interface Props {
  keyword: string;
  goToSearchPage: any;
}

export const SearchResult = (props: Props) => {
  const [totalItem, setTotalItem] = useState(0);

  const searchTimeout = useRef<any>("");

  const globalContext = useGlobalContext();

  const navigate = useNavigate();

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
        <div className="flex items-start p-1.5 rounded-lg hover:bg-primary cursor-pointer m-1.5">
          {/* image */}
          <Image
            src={""}
            className="h-[72px] min-w-[102px] w-[102px] rounded-md"
          ></Image>
          {/* title and genres */}
          <div className="px-3 truncate">
            <p className="text-base truncate">{"film.title"}</p>
            <ul className="flex flex-wrap gap-x-1.5 text-sm opacity-[0.7]">
              <li> {""}</li>
            </ul>
          </div>
        </div>
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
