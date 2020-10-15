import React from 'react';
import './App.css';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';
import requests from './requests';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Banner />
      <Row
        title={'Netflix Originals'}
        fetch_url={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title={'Trending Now'} fetch_url={requests.fetchTrending} />
      <Row title={'TOp Rated'} fetch_url={requests.fetchTopRated} />
      <Row title={'Action Movies'} fetch_url={requests.fetchActionMovies} />
      <Row title={'Comedy Movies'} fetch_url={requests.fetchComedyMovies} />
      <Row title={'Horror Movies'} fetch_url={requests.fetchHorroMovies} />
      <Row title={'Romance Movies'} fetch_url={requests.fetchRomanceMovies} />
      <Row title={'Documentaries '} fetch_url={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
