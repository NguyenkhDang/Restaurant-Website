
import { useRef } from "react"
import "../CSS/ContactUs.css"

const ContactUsPage = () =>{


  const handleSubmit = (e)=>{
    e.preventDefault();
    const url = "https://script.google.com/macros/s/AKfycbzvciRoj96Av9uZ2heb3UUoHOvfd4JqiGr3qXvWCL6rtenJZzz95SFNhb_-OBEtYvj5vw/exec"

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
              width: "40vw",
              height: "8vh",
            }}
          />
        </fieldset>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ContactUsPage