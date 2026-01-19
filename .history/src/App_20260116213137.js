import BackgroundImage from "./image/pho.jpg"
import BeefPho from "./image/beefPho.png"
import ChickenPho from "./image/chickenPho.jpg"
import ShrimpPho from "./image/shrimpPho.png"
import VeganPho from "./image/veganPho.jpg"
import './App.css';

import NavigationBar from './NavigationBar';
import Footer from "./Footer"
import {Routes, Route} from "react-router-dom"
import ReadMore from "./Readmore"
import SectionContainer from "./SectionContainer"


import HomePage from "./Pages/HomePage"
import MenuPage from "./Pages/MenuPage"
import ReservationPage from "./Pages/ReservationPage"
import AboutUsPage from "./Pages/AboutUsPage"

function App() {


  return (
    <div className="home">
      <NavigationBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
      </Routes>

      <SectionContainer />
      <Footer />
  </div>
);
}

export default App;
