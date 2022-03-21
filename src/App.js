import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import { DetailMovie } from './components/DetailMovie';
import { Home } from './components/Home.js';

function App() {
  return (
    <BrowserRouter>
      <div className='header'>
        <header>
          <Link to='/'> <h1>Trending Movies</h1> </Link>
        </header>
      </div>

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:detailId' element={<DetailMovie />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
