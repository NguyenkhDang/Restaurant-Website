import { useRef, useState } from "react"

const ReservationForm = () =>{

  const [phoneNumberLength, setPhoneNumberLength] = useState("")

  const formRef= useRef(null)


  const PhoneNumber = (e) =>{

    if (e.key === "Backspace") {
      if(phoneNumberLength.length == 4){
        let tempPhone = e.target.value
        tempPhone = tempPhone.slice(1)
        tempPhone = tempPhone.slice(0, -1);
        setPhoneNumberLength(tempPhone)
      }

      setPhoneNumberLength(phoneNumberLength.slice(0,-1))
      if (phoneNumberLength.length == 4){
        setPhoneNumberLength(phoneNumberLength.slice(1))
      }
    }
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    if (value.length > 3 && value.length <=6){
      value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
  } else if (value.length > 6) {
    value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
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
      Actually Phone:{phoneNumberLength}<br></br>
      Phone Lenght: {phoneNumberLength.length} <br></br>
      Slice:{phoneNumberLength.slice(1)}
    </form>
    
  )
}

export default ReservationForm