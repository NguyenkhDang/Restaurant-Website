
import './App.css';

import NavigationBar from './Component/NavigationBar.js';
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
        <Route path="contactUs" element={<ContactUsPage />} />
      </Routes>

      <Footer />
  </div>
);
}

export default App;
