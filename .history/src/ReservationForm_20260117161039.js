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


  return (
    <form>
      <input
        type="text"
        name="name"
        placeholder="Full name"
        required

      />

    </form>
  )
}

export default ReservationForm