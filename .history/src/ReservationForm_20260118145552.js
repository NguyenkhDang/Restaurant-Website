import { useRef, useState } from "react"
import "./CSS/ReservationForm.css"
const ReservationForm = () =>{

  const [phoneNumberLength, setPhoneNumberLength] = useState("")

  const formRef= useRef(null)


  const PhoneNumber = (e) =>{

    let value = e.target.value;
    value = value.replace(/\D/g, "");
    if (value.length > 3 && value.length <=6){
      value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
    } else if (value.length > 6) {
    value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
    }
    setPhoneNumberLength(value)
  }


  const handleSubmit = (e)=>{

    e.preventDefault();
    const url = "https://script.google.com/macros/s/AKfycbx0FabLb-KOBm8n_JP2SJcp21AE1aox7vxr3D2p_FfrtZs8dIHl3N9UMOriMfEaySY/exec"

    fetch(url,{
      method:"POST",
      body: new FormData(formRef.current)
    } ).then(() => {
      alert("Reservation Submitted ");
    }).catch((error) => console.log(error))
  };

  return (
    <div className = "ReservationForm">
      <form className="form" ref = {formRef} onSubmit={handleSubmit}>
        <fieldset>
          <label for="name">Name</label>
          <input
            type="text"
            name="Name"
            id="name"
            placeholder="Full name"
            required
          />
        </fieldset>
        <fieldset>
          <label for="email">Email</label>
          <input
            type="email"
            name="Email"
            id="email"
            placeholder="email"
            required
          />
        </fieldset>
        <fieldset>
          <label for="phone">Phone Number</label>
          <input 
            type="text"
            name="Phone"
            id="phone"
            value={phoneNumberLength}
            onChange={PhoneNumber}
            placeholder="Phone Number"
          />
        </fieldset>
        <fieldset>
          <label for="date">Date</label>
          <input
            type="date"
            name="Date"
            id="date"
            required
          />
        </fieldset>

        <fieldset>
          <label for="time">Time</label>
          <input
            type="time"
            name="Time"
            id="date"
            required
          />
        </fieldset>

        <fieldset>
          <label for="guests">How many Guests?</label>
          <input 
            type="number"
            name="Guests"
            id="guests"
            required
          />
        </fieldset>
        <fieldset>
          <label for="comment">Anything we should know about the Reservation?</label>
          <textarea
            name="Comment"
            style={{
              width: "20vw"
            }}
          />
        </fieldset>
      <button>Submit</button>
    </form>
    </div>
  )
}

export default ReservationForm