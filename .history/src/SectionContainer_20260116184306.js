import "./CSS/SectionContainer.css"

import MenuImage from "./image/menuImage.jpg"
const SectionContainer = ()=>{

  return(
    <div className="containerMain">
      <div style={{backgroundImage: {MenuImage}}}>
        <h1>MENU</h1>
      </div>
      <div>
        <h1>RESERVATION</h1>
      </div>
      <div>
        <h1>ABOUT US</h1>
      </div>
      <div>
        <h1>CONTACT US</h1>
      </div>
    </div>
  )
}

export default SectionContainer;