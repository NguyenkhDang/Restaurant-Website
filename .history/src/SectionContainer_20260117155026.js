import "./CSS/SectionContainer.css"

import MenuImage from "./image/menuImage.jpg"
import ReservationImage from "./image/reservationImage.jpg"
import AboutUsImage from "./image/aboutusImage.jpg"
import ContactusImage from "./image/contactusImage.jpg"

import { Link } from "react-router-dom"
const SectionContainer = ()=>{

  return(
    <div className="containerMain">
      <div style={{ backgroundImage: `url(${MenuImage})`}}>
        <Link to="/menu"><h1>MENU</h1></Link>
      </div>
      <div style={{ backgroundImage: `url(${ReservationImage})`}}>
        <h1>RESERVATION</h1>
      </div>
      <div style={{ backgroundImage: `url(${AboutUsImage})`}}>
        <h1>ABOUT US</h1>
      </div>
      <div style={{ backgroundImage: `url(${ContactusImage})`}}>
        <h1>CONTACT US</h1>
      </div>
    </div>
  )
}

export default SectionContainer;