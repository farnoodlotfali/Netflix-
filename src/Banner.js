import React, { useState, useEffect } from 'react';
import './Banner.css';
import axios from './axios';
import requests from './requests';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        res.data.results[Math.floor(Math.random() * res.data.results.length)]
      );

      return movie;
    }
    fetchData();
    // eslint-disable-next-line
  }, []);
  // console.log(movie.name);
  // console.log(`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`);

  function trunCate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>
          {' '}
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner_discription'>{trunCate(movie?.overview, 200)}</h1>
      </div>
      <div className='banner__fadeBottom'></div>
    </header>
  );
}

export default Banner;
