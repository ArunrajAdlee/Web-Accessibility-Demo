import React, { useState, useEffect } from 'react';
import { server, api } from '../../server';
import { useParams } from 'react-router-dom';
import { Spinner, Badge, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';

const MovieDetail = (props) => {
  const [movieDetail, setMovieDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getMovieDetail = async () => {
      const resp = await server.get(api.get_detail_movie + id);
      if (resp.data) {
        setMovieDetail(resp.data);
      }
    }

    getMovieDetail();
  }, []);

  return (
    Object.getOwnPropertyNames(movieDetail).length === 0
      ? <Spinner />
      :
      <>
        <a href="/" className="back-link"><FontAwesomeIcon icon={faArrowLeft} className="mr-3" />Back to Dashboard</a>
        <div className="movie-detail-container">
          <div className="movie-detail">
            <img alt="" src={`https://image.tmdb.org/t/p/w780/${movieDetail.backdrop_path}`} />
            <div className="ml-3" aria-label="movie details" tabIndex="0">
              <h2 tabIndex="0" aria-label={`Movie title: ${movieDetail.title}`} >{movieDetail.title}</h2>
              <div aria-label="movie genres" tabIndex="0">
                {movieDetail.genres.map((genre, index) => (
                  <Badge key={index} className="mr-2" variant="dark" tabIndex="0">{genre.name}</Badge>
                ))}
              </div>
              <div aria-label="movie languages" className="mt-3" tabIndex="0">
                {movieDetail.spoken_languages.map((lang, i) => (
                  <Badge key={i} className="mr-2" variant="info" tabIndex="0">{lang.english_name}</Badge>
                ))}
              </div>
              <h4 className="mt-2" tabIndex="0">Released: {movieDetail.release_date}</h4>
              <h5 aria-label={`${movieDetail.vote_average} stars out of 10 from ${movieDetail.vote_count} voters`} className="mt-3 mb-3" tabIndex="0">
                <span>
                  <FontAwesomeIcon size="lg" icon={faStar} /> {movieDetail.vote_average}/10
                from {movieDetail.vote_count} voters
              </span>
              </h5>
              <h5 tabIndex="0">Runtime: {movieDetail.runtime} minutes</h5>
              <div className="movie-btn-row mt-5" aria-label="movie links section" tabIndex="0">
                <a variant="warning" className="imdb-btn btn styled-button" href={`https://www.imdb.com/title/${movieDetail.imdb_id}`}>
                  IMDb
                </a>
                {movieDetail.homepage &&
                  <a className="ml-3 btn btn-primary styled-button" href={movieDetail.homepage}>
                    Homepage
                  </a>
                }
              </div>
            </div>
          </div>
          <div aria-label="movie description" tabIndex="0">
            {movieDetail.tagline &&
              <h3 className="movie-tagline" tabIndex="0">-- {movieDetail.tagline} --</h3>
            }
            <h5 className="mt-5" tabIndex="0">{movieDetail.overview}</h5>
          </div>
        </div>
      </>
  );
}

export default MovieDetail;
