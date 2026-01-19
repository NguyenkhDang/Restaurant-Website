import { useState } from "react"

const ReservationForm = () =>{

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
    request: ""
  });

  const handleChange = (e)=>{
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }

  return (
    <form>
      <input
        type="text"
        name="name"
        placeholder="Full name"
        required
        onChange={handleChange}
      />

      <input 
        type="email"
        name="email"
        placeholder="email"
        required
        onChange={handleChange}
      />

      <input
        type="date"
        name="date"
        required
        onChange={handleChange}
      />

    </form>
  )
}

export default ReservationForm