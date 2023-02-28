import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import { CreateMovie } from "../interfaces/movie.interface";
import { createMovie } from "../services/movies.service";
import { genreList } from "../utils";

const CreateMovieModal = () => {
  const cancelRef = useRef().current;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagename, setImageName] = useState("");
  const [preview, setPreview] = useState<string | null | ArrayBuffer>();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {}, [imageFile]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (value) {
      let imagename = e.target.files?.item(0)?.name as string;
      let file = e.target.files?.item(0) as File;
      console.log(file);
      const read = new FileReader();
      read.addEventListener("load", () => {
        console.log(read.result);
        setPreview(read.result);
      });
      read.readAsDataURL(file);

      setImageName(imagename);
      setImageFile(file);
    } else {
      setImageName("");
      setImageFile(null);
    }
    formik.handleChange(e);
  };

  const formik = useFormik({
    validate: (values: any) => {
      const errors: any = {};
      if (!values.title) {
        errors.title = "Tile is required";
      }
      if (!values.producer) {
        errors.producer = "Producer  is required";
      }
      if (!values.releasedate) {
        errors.releasedate = "Release date is required";
      }
      if (!values.rating) {
        errors.rating = " rating is required";
      }

      if (!values.description) {
        errors.description = "description  is required";
      }

      if (!values.genre) {
        errors.genre = "genre is required";
      }
      if (!values.pgrating) {
        errors.pgrating = "PG rating is required";
      }
      return errors;
    },
    initialValues: {
      title: "",
      producer: "",
      releasedate: "",
      rating: 0,
      description: "",
      genre: "",
      pgrating: 0,
      upvotes: 0,
      downvotes: 0,
    },
    onSubmit: async (values) => {
      let movie_data: CreateMovie = {
        title: values.title,
        producer: values.producer,
        releaseDate: new Date(values.releasedate),
        pgRating: values.pgrating,
        upvotes: values.upvotes,
        downvotes: values.downvotes,
        rating: values.rating,
        imageUrl: preview?.toString(),
        genre: values.genre,
        description: values.description,
      };
      console.log(movie_data);
      try {
        const createMovieRes = await createMovie(movie_data);
        console.log(createMovieRes);
        //trying something

        if (createMovieRes) {
        }
      } catch (error: any) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <form className="space-y-6" onSubmit={formik.handleSubmit}>
              <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl  text-black font-semibold">
                  Add New Movie
                </h3>
                <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="grid lg:grid-cols-3  p-6 sm:grid-cols-2 mobile:grid-cols-2 relative z-[11]">
                <div className="mr-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Movie Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="enter title"
                    required
                  />
                </div>
                <div className="mr-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Producer
                  </label>
                  <input
                    type="text"
                    name="producer"
                    id="producer"
                    placeholder="Jon Doe"
                    value={formik.values.producer}
                    onChange={formik.handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div className="mr-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Release Date
                  </label>
                  <input
                    type="date"
                    name="releasedate"
                    id="releasedate"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    value={formik.values.releasedate}
                    onChange={formik.handleChange}
                    required
                  />
                </div>

                <div className="mr-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    PG Rating
                  </label>
                  <input
                    type="number"
                    name="pgrating"
                    id="pgrating"
                    value={formik.values.pgrating}
                    onChange={formik.handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div className="mr-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Likes
                  </label>
                  <input
                    type="number"
                    name="upvotes"
                    id="upvotes"
                    value={formik.values.upvotes}
                    onChange={formik.handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div className="mr-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Dislikes
                  </label>
                  <input
                    type="number"
                    name="downvotes"
                    id="downvotes"
                    value={formik.values.downvotes}
                    onChange={formik.handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>

                <div className="mr-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Rating
                  </label>
                  <input
                    type="number"
                    name="rating"
                    id="rating"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    value={formik.values.rating}
                    onChange={formik.handleChange}
                    required
                  />
                </div>
                <div className="mr-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Genre
                  </label>
                  <select
                    name="genre"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    value={formik.values.genre}
                    onChange={formik.handleChange}
                  >
                    {genreList.map((genre) => (
                      <option value={genre} key={genre}>
                        {genre}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mr-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Description
                  </label>
                  <textarea
                    name="description"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="mr-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Movie Image
                  </label>
                  <input
                    accept="image/*"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    type="file"
                    name="filr"
                    ref={inputRef}
                    onChange={(e) => handleFileChange(e)}
                  ></input>
                </div>
              </div>

              {/*footer*/}
              <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Close
                </button>
                <button
                  className="bg-primary text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Add movie
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default CreateMovieModal;
