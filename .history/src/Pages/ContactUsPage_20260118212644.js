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
        <fieldset>
          <label for="comment">Anything we should know about the Reservation?</label>
          <textarea
            name="Comment"
            style={{
              width: "auto",
              height: "4vh"
            }}
          />
        </fieldset>
      </form>
    </div>
  )
}

export default ContactUsPage