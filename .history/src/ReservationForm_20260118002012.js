import { useRef } from "react"

const ReservationForm = () =>{

const formRef= useRef(null)

  const PhoneNumberLength = [];

  const PhoneNumber = (value) =>{
    PhoneNumberLength.append(value)
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
        type=""
        onChange={PhoneNumber(e => e.current.value)}/>
      <button>Submit</button>
    </form>
  )
}

export default ReservationForm