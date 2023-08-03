import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/MainPage/Main';
import Musical from './components/ConcertPage/Musical';
import Act from './components/ConcertPage/Act';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/concert_act" element={<Act />} />
          <Route path="/concert_musical" element={<Musical />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;