import { useState, useRef } from "react"

const ReservationForm = () =>{

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
    request: ""
  });

  // https://script.google.com/macros/s/AKfycbyHNI1Q58X_A2ZsA6LROrb7UdWxBNeFfZkNFr-47fLn6rfNENR_y0tEOlWCtsnaidY/exec
  // const handleChange = (e)=>{
  //   setFormData({
  //     ...formData, [e.target.name]: e.target.value
  //   })
  // }
const formRef= useRef(null)
  const handleSubmit = (e)=>{

    e.preventDefault();
    const url = "https://script.google.com/macros/s/AKfycbx0FabLb-KOBm8n_JP2SJcp21AE1aox7vxr3D2p_FfrtZs8dIHl3N9UMOriMfEaySY/exec"

    fetch(url,{
      method:"POST",
      headers: { "Content-Type": "application/json"},
      body: new FormData(formRef.current)
    } ).then((res) => res.json()).then((data) => {
      alert(data)
  }).catch((error) => console.log(error))
  };

  return (
    <form className="form" ref = {formRef} onSubmit={handleSubmit}>
      <input
        type="text"
        name="Name"
        placeholder="Full name"
        required
        // onChange={handleChange}
      />

      <input 
        type="email"
        name="Email"
        placeholder="email"
        required
        // onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  )
}

export default ReservationForm