import "./CSS/NavigationBar.css"
import Logo from "./image/CustomLogo2.png"
import { Link } from "react-router-dom"
const NavigationBar = () =>{



  return (
    <div className="navbar">
      <div className="logoImage">
        <img src= {Logo} />
      </div>
      <div className="wholeNavBar">
        <ul>
          <li>
            <a>HOME</a>
          </li>
          <li>
            <a>MENU</a>
          </li>
          <li>
            <a>RESERVATION</a>
          </li>
          <li>
            <a>ABOUT US</a>
          </li>
        </ul>

      </div>
    </div>
  )


}

export default NavigationBar