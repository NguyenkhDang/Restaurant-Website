import "./CSS/SectionContainer.css"

import MenuImage from "./image/menuImage.jpg"
import ReservationImage from "./image/reservationImage.jpg"
const SectionContainer = ()=>{

  return(
    <div className="containerMain">
      <div style={{ backgroundImage: `url(${MenuImage})`}}>
        <h1>MENU</h1>
      </div>
      <div style={{ backgroundImage: `url(${ReservationImage})`}}>
        <h1>RESERVATION</h1>
      </div>
      <div style={{ backgroundImage: `url(${MenuImage})`}}>
        <h1>ABOUT US</h1>
      </div>
      <div style={{ backgroundImage: `url(${MenuImage})`}}>
        <h1>CONTACT US</h1>
      </div>
    </div>
  )
}

export default SectionContainer;