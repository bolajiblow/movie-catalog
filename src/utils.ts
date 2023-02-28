import _ from "lodash";

export const mergeClassName = (val1: string, val2?: string) => {
  return val1 + " " + (val2 || "");
};

export const genreList = [
  "Action",
  "Adventure",
  "Animated",
  "Biography",
  "Martial Arts",
  "Political",
  "Romance",
  "Superhero",
  "Suspense",
  "Teen",
  "Thriller",
  "War",
  "Western",
];

export const paginate = (items: any, pageNumber: any, pageSize: any) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
};
