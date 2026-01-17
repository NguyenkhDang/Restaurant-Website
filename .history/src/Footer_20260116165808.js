import "./CSS/Footer.css"
import InstagramIcon from "./image/instagramIcon.png"
import FacebookIcon from "./image/facebookIcon.png"
import TwitterIcon from "./image/twitterIcon.png"
const Footer = () =>{

  return(
    <div className="footer">
      <div>
        <h1>VISIT US:</h1>
        <h3>1234 That Street</h3>
        <h3>City, State 00000</h3>

        <h2>123-456-7890</h2>
      </div>
      <div>
        <h1>OPEN HOURS</h1>
        <h3>Monday - Thursday: 9:00am - 8:00pm</h3>
        <h3>Friday - Saturday: 9:00am - 10:00pm</h3>
        <h3>Sunday: 9:00am - 7:00pm</h3>
      </div>
      <div>
        <h1>SOCIAL</h1>
        <a href="https://www.instagram.com/" target="_blank"><img src={InstagramIcon}/></a>
        <a href="https://www.facebook.com/" target="_blank"><img src={FacebookIcon}/></a>
        <a href="https://x.com/" target="_blank"><img src={TwitterIcon}/></a>
      </div>

    </div>
  )

}

export default Footer