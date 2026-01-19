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

  // https://script.google.com/macros/s/AKfycbyHNI1Q58X_A2ZsA6LROrb7UdWxBNeFfZkNFr-47fLn6rfNENR_y0tEOlWCtsnaidY/exec
  const handleChange = (e)=>{
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    const url = "https://script.google.com/macros/s/AKfycbyI9h3hxUsnaF-1iUX_BJ5yCFjuYNaHgfq84JDZdZVhB2Y7ZcKxbbjFP1Z5GnQREak/exec"
    fetch(url,{
      method:"POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json"},
      body: (`Name=${e.target.name.value}&Email=${e.target.email.value}`)
    } ).then(res => res.text()).then(data => (
      alert(data + "Sucess")
    )).catch(error => console.log(error))
  }

  return (
    <form onSubmit={handleSubmit}>
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
      <button>Submit</button>
    </form>
  )
}

export default ReservationForm