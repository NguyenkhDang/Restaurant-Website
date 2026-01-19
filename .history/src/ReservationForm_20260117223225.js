import { useState, formRef, useRef } from "react"

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
  const formRef = useRef(null);
  const handleSubmit = (e)=>{
    e.preventDefault();
    const url = "https://script.google.com/macros/s/AKfycbyHNI1Q58X_A2ZsA6LROrb7UdWxBNeFfZkNFr-47fLn6rfNENR_y0tEOlWCtsnaidY/exec"
    fetch(url,{
      method: 'Post',
      body: new FormData(formRef.current),
    })
      .then(res => res.json())
      .then(data => (
        alert(data)
    ))
    .catch(err => console.log(err))
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