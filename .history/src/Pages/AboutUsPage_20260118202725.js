import "../CSS/AboutUs.css"
import AboutUsImage from "../image/aboutusImage.jpg"
const AboutUs = () =>{
  return (
    <div className = "aboutUs">
      <img src={AboutUsImage} />
      <div>
        <h1>About Us</h1>
        <p>Paragraph</p>
      </div>
    </div>
  )
}

export default AboutUs