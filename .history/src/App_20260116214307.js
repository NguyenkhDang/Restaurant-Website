import BackgroundImage from "./image/pho.jpg"
import BeefPho from "./image/beefPho.png"
import ChickenPho from "./image/chickenPho.jpg"
import ShrimpPho from "./image/shrimpPho.png"
import VeganPho from "./image/veganPho.jpg"
import './App.css';

import NavigationBar from './NavigationBar';
import Footer from "./Footer"
import {Routes, Route} from "react-router-dom"



import HomePage from "./Pages/HomePage"
import MenuPage from "./Pages/MenuPage"
import ReservationPage from "./Pages/ReservationPage"
import AboutUsPage from "./Pages/AboutUsPage"
import ContactUsPage from "./Pages/ContactUsPage"

function App() {


  return (
    <div className="home">
      <NavigationBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
        <Route path="contactUs" element={<ContactUsPage />}
      </Routes>

      <Footer />
  </div>
);
}

export default App;
