import InstagramIcon from "../image/instagramIcon.png"
import FacebookIcon from "../image/facebookIcon.png"
import TwitterIcon from "../image/twitterIcon.png"
import "../CSS/ContactUs.css"

const ContactUsPage = () =>{
  return (
    <div className="contactUsPage">
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
      </form>
    </div>
  )
}

export default ContactUsPage