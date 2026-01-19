import InstagramIcon from "../image/instagramIcon.png"
import FacebookIcon from "../image/facebookIcon.png"
import TwitterIcon from "../image/twitterIcon.png"
import { useRef } from "react"
import "../CSS/ContactUs.css"

const ContactUsPage = () =>{


  const handleSubmit = (e)=>{
    e.preventDefault();
    const url = "https://script.google.com/macros/s/AKfycbwl6caugVynxUXbKhMc2xNbnLYiBd26H0nYrsuXvw_-97Aj3cy3wlwqVEau_jWZlKpP/exec"

    fetch(url,{
      method:"POST",
      body: new FormData(formRef.current)
    } ).then(() => {
      alert("Reservation Submitted ");
    }).catch((error) => console.log(error))
  };

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
          <label for="phone">Email</label>
          <input 
            type="email"
            name="Email"
            id="email"
            
            />
        </fieldset>
        <fieldset>
          <label for="comment">Comment</label>
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