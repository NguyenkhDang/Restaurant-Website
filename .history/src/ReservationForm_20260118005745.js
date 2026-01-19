import { useRef, useState } from "react"

const ReservationForm = () =>{

  const [phoneNumberLength, setPhoneNumberLength] = useState("")
  const [parenthesesCheck, setParenthesesCheck] = useState(true)
  const formRef= useRef(null)


  const PhoneNumber = (e) =>{

    if (e.key === "Backspace ") {
      let currentValue = e.target.value;
      let newText = currentValue.slice(0,-1);
      setPhoneNumberLength(newText)
      if (phoneNumberLength.length == 4){
        setPhoneNumberLength(phoneNumberLength.slice(1))
        setParenthesesCheck(true)
      }
    }
    setPhoneNumberLength(e.target.value)
    if (phoneNumberLength.length >= 2 && parenthesesCheck){
      setPhoneNumberLength("(" + phoneNumberLength + ")")
      setParenthesesCheck(false)
    }
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
    <form className="form" ref = {formRef} onSubmit={handleSubmit}>
      <input
        type="text"
        name="Name"
        placeholder="Full name"
        required
      />

      <input
        type="email"
        name="Email"
        placeholder="email"
        required
      />

      <input 
        type="text"
        name="Phone"
        value={phoneNumberLength}
        onChange={PhoneNumber}
        placeholder="Phone Number"/>
      <button>Submit</button>
      {phoneNumberLength}{phoneNumberLength.length}
    </form>
    
  )
}

export default ReservationForm