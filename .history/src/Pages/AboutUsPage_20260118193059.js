import "../CSS/AboutUs.css"
import AboutUsImage from "../image/aboutusImage.jpg"
const AboutUs = () =>{
  return (
    <div className = "aboutUs">
      <img src={AboutUsImage} style={{width: "60vw", height: "40vh"}}/>
    </div>
  )
}

export default AboutUs