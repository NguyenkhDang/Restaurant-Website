import InstagramIcon from "../image/instagramIcon.png"
import FacebookIcon from "../image/facebookIcon.png"
import TwitterIcon from "../image/twitterIcon.png"
import { useRef } from "react"
import "../CSS/ContactUs.css"

const ContactUsPage = () =>{


  const handleSubmit = (e) =>{

  }

  const formRef= useRef(null)
  return (
    <div className="contactUsPage">
      <h1>
        Please fill out the Contact Us sheet below if you have any questions or concerned
      </h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <fieldset>
          <label for="name">Full Name</label>
          <input 
            type="text"
            name="Name"
            id="name"
            required
          />
        </fieldset>
        <fieldset>
          <label for="phone">Phone Number</label>
          <input 
            type="email"
            name="Email"
            id="email"
            
            />
        </fieldset>
      </form>
    </div>
  )
}

export default ContactUsPage