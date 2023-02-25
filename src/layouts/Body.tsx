import {  Outlet } from "react-router-dom";
import Movies from "../components/Movies";


export const Body = () => {
  return (
    <div id="movie">
     <Outlet />
    </div>
  );
};
