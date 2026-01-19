import "./CSS/NavigationBar.css"
import Logo from "./image/CustomLogo.png"
const NavigationBar = () =>{



  return (
    <div className="navbar">
      <div className="logoImage">
        <img
          src= {Logo} 
          style={{
            height: "50px",
            width: "50px"
          }}/>
      </div>
      <div className="wholeNavBar">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Menus</a>
          </li>
          <li>
            <a>Reseservation</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
        </ul>

      </div>
    </div>
  )


}

export default NavigationBar