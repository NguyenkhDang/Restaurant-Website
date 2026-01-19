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
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/menu">MENU</Link>
          </li>
          <li>
            <Link to="/reservation">RESERVATION</Link>
          </li>
          <li>
            <Link to="/aboutUs">ABOUT US</Link>
          </li>
        </ul>

      </div>
    </div>
  )


}

export default NavigationBar