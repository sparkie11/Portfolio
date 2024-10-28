import {  South } from "@mui/icons-material"
import "./intro.scss"

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/wise.jpeg" alt="" className="introImg" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There I'm </h2>
          <h1>Gautam wise</h1>
          <h3>Freelance <span>Designer</span></h3>
        </div>
        <a href="#portfolio"><South className="icon"/></a>
      </div>
    </div>
  )
}
