import { Mail, Person } from '@mui/icons-material'
import './topbar.scss'

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
            <a href="#intro" className='logo'>userLogo</a>
            <div className="itemContainer">
                <Person className='icon'/>
                <span>+45-34324234</span>
            </div>
            <div className="itemContainer">
                <Mail className='icon'/>
                <span>user@gmail.com</span>
            </div>
        </div>
        <div className="right">
            <div className="hamburger">
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>

            </div>
        </div>
      </div>
    </div>
  )
}
