import End from 'pages/End';
import Game from 'pages/Game';
import Main from 'pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/game" element={<Game />} />
        <Route path="/end" element={<End />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
