import React from 'react';
import { Link } from 'react-router-dom'

const Movie = (props) => {
  return (
    <div className="ind-movie-container">
      <Link to={`/movie/${props.movie.id}`}>
        <div className="ind-movie-poster">
          <img alt="" src={`https://image.tmdb.org/t/p/w300/${props.movie.poster_path}`} />
        </div>
        <h2>{props.movie.title}</h2>
        <h4>Rating: {props.movie.vote_average}</h4>
      </Link>
    </div >
  );
}

export default Movie;
