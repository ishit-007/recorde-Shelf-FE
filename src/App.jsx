import './App.css';
// import { Header, Songs } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllSongs from './pages/AllSongsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/songs" element={<AllSongs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
