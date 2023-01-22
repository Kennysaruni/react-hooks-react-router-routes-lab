// import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      <div>
        {movies.map((movie) => (
          <div>
            <h1>{movie.title}</h1>
            <p>Time: {movie.time} minutes</p>
            <ul>
               {movie.genres.map((genre) => (
                <li>{genre}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;