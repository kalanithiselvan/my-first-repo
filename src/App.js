import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Main from './component/Main';
import ReservationProfile from './component/ReservationProfile';
import Confirmation from './component/Confirmation';
import Nav from './component/Nav';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Main />} />
        <Route path="/reservation-profile" element={<ReservationProfile />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

