import React from "react";

const IMG_PATH = "https://image.tmdb.org/t/t/p/w1280";

const Movie = ({ title, poster_path, overview, vote_average }) => {
  const setVoteClass = (vote) =>
    vote >= 8 ? "green" : vote >= 5 ? "orange" : "red";

  return (
    <div className="movie">
      <img
        src={
          poster_path
            ? IMG_PATH + poster_path
            : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80"
        }
        alt={title}
      />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={setVoteClass(vote_average)}>{vote_average}</span>
      </div>
      <div className="movie-over">
        <h3>Overview :</h3>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
