import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { server, api } from '../../server'
import Movie from './Movie'

const Dashboard = () => {
  const [listOfNowPlaying, setListOfNowPlaying] = useState([]);

  useEffect(() => {
    const getRecentMovies = async () => {
      const resp = await server.get(api.get_list_nowPlaying)
      if (resp.data) {
        setListOfNowPlaying(resp.data.results)
      }
    }

    getRecentMovies();
  }, []);



  return (
    !listOfNowPlaying.length
      ? <Spinner className="centered-spinner" animation="grow" variant="dark" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
      :
      <>
        <h1 className="mb-5 align-center">Latest Films</h1>
        <div className="movie-list">
          {listOfNowPlaying.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
      </>
  );
}

export default Dashboard;
