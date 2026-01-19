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

  // https://script.google.com/macros/s/AKfycbzMjwuUCDZGR4TrIp7WNNwtmtAKxxfptRM9d1-uT8NDBnfd4JnaNQHVHVmfua9txn4/exec

  const handleChange = (e)=>{
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    const url = "https://script.google.com/macros/s/AKfycbzMjwuUCDZGR4TrIp7WNNwtmtAKxxfptRM9d1-uT8NDBnfd4JnaNQHVHVmfua9txn4/exec"
    fetch(url,{
      method:"POST",
      headers: { "Content-type": "application/x-www-form-urlencoded"},
      body: (`Name=${e.target.name.value}&Email=${e.target.email.value}`)
    } )
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
      <button onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default ReservationForm