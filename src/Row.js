import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from './axios';
import YouTube from 'react-youtube';
import MovieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original';

const Row = ({ title, fetch_url, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(fetch_url);
      setMovies(res.data.results);
      return res;
    }

    fetchData();
  }, [fetch_url]);

  const opts = {
    heght: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      MovieTrailer(movie?.name || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((er) => console.log(er));
    }
  };
  //   console.log(movies);
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {movies.map((movie) => (
          <img
            className={`row__poster ${isLargeRow && 'row__posterLarge '}`}
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
