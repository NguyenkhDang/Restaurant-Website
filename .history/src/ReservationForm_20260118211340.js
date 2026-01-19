import { useRef, useState } from "react"
import "./CSS/ReservationForm.css"
const ReservationForm = () =>{

  const [phoneNumberLength, setPhoneNumberLength] = useState("")
  const [guestAmount, setGuestAmount] = useState(1)
  const [activeButton, setActiveButton] = useState(1)

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
    const url = "https://script.google.com/macros/s/AKfycbz9hyYmr4eigWOxTMAS3ZtPRzS42PfIqeJ-yMJfkcFGHGj6PYiCiBfAWyQjvV6-ghA/exec"

    fetch(url,{
      method:"POST",
      body: new FormData(formRef.current)
    } ).then(() => {
      alert("Reservation Submitted ");
    }).catch((error) => console.log(error))
  };

  return (
    <div className = "reservationForm">
      <h1>Reservation Form</h1>
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
          <select
            name="Time"
            id="time">
            <option value="10:30am">10:30am</option>
            <option value="12:00pm">12:00pm</option>
            <option value="1:00pm">1:00pm</option>
            <option value="1:30pm">1:30pm</option>
            <option value="3:00pm">3:00pm</option>
            <option value="5:00pm">5:00pm</option>

          </select>
        </fieldset>

        <fieldset>
          <label for="guests">How many Guests?</label>
          <div>
          <input type="hidden" name="Guest" value={guestAmount} />
              <button 
                className={`guest ${activeButton === 1 ? "active": ""}`}
                type="button" 
                onClick={() => {
                  setGuestAmount(1)
                  setActiveButton(1)
                }}
                value={guestAmount}
                name="Guest"
                >1
              </button>
              <button 
                className ={`guest ${activeButton === 2 ? "active":" "}`}type="button" 
                onClick={() => {
                  setGuestAmount(2)
                  setActiveButton(2)
                }}
                value={guestAmount}
                name="Guest"
                >2
                </button>
              <button 
                className ={`guest ${activeButton === 3 ? "active":" "}`}type="button" 
                onClick={() => {
                  setGuestAmount(3)
                  setActiveButton(3)
                }}
                value={guestAmount}
                name="Guest">3
                </button>
                <button 
                className ={`guest ${activeButton === 4 ? "active":" "}`}type="button" 
                onClick={() => {
                  setGuestAmount(4)
                  setActiveButton(4)
                }}
                value={guestAmount}
                name="Guest">4
                </button>
                <button 
                className ={`guest ${activeButton === 5 ? "active":" "}`}type="button" 
                onClick={() => {
                  setGuestAmount(5)
                  setActiveButton(5)
                }}
                value={guestAmount}
                name="Guest">5
                </button>
                <button 
                className ={`guest ${activeButton === 6 ? "active":" "}`}type="button" 
                onClick={() => {
                  setGuestAmount(6)
                  setActiveButton(6)
                }}
                value={guestAmount}
                name="Guest">6
                </button>
          </div>
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
      <button className="submitBtn">Submit</button>
    </form>
    </div>
  )
}

export default ReservationForm