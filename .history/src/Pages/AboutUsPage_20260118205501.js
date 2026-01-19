import "../CSS/AboutUs.css"
import AboutUsImage from "../image/aboutusImage.jpg"
import { Link } from "react-router-dom"
const AboutUs = () =>{
  return (
    <div className = "aboutUs">
      <img src={AboutUsImage} />
      <div>
        <h1>About Us</h1>
        <p>At our restaurant, pho is more than just a meal — it’s a tradition. Rooted in Vietnamese culinary heritage, our kitchen is dedicated to crafting authentic pho using time-honored recipes passed down through generations. Each bowl begins with a slow-simmered broth, cooked for hours with carefully selected spices to create a rich, aromatic flavor that warms both body and soul.
        </p>
        <p>
        We believe great food sta rts with quality ingredients. From fresh herbs and rice noodles to premium cuts of meat and house-made sauces, every detail matters. Whether you’re enjoying a classic beef pho, a comforting chicken pho, or a flavorful vegetarian option, our goal is to serve food that feels both familiar and memorable.
        </p>
        <p>
        Our space is designed to be welcoming and relaxed — a place where family, friends, and the community can come together. Whether you’re stopping in for a quick lunch or settling in for a cozy dinner, we’re honored to share our love of pho and Vietnamese cuisine with you.</p>
        <button >Contact Us</button>
      </div>
    </div>
  )
}

export default AboutUs