import { useState } from "react"
import "./contact.scss"

export default function Contact() {

  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted")
    setMessage(true)
  }
  return (
    <div className="contact" id="contact" >
      <div className="left">
        <img src="assets/profile.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea name="" placeholder="Message" id=""></textarea>
          <button type="submit">Send</button>
          {message && <span>Message sent successfully!</span>}
        </form>
      </div>
    </div>
  )
}
