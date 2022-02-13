import React from 'react';
import './App.css';
import { ContainerMovies } from './components/ContainerMovies.js';

function App() {
  return (
    <>
      <header>
        <h1>Movie House</h1>
      </header>
      <main>
        <ContainerMovies />
      </main>
    </>
  );
}

export default App;
