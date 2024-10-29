import { West } from '@mui/icons-material'
import './testimonials.scss'

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            {/* <img src="" alt="" /> */}
            <West className='left'/>
            <img src="assets/bik1.png" className='user' alt="" />
            <img className='right' src="assets/bike2.png" alt="" />

          </div>
          <div className="center">Lorem ipsrem adipisci earum sequi suscipit ea natus voluptas.</div>
          <div className="bottom">
            <h3>Alex</h3>
            <h4>CEO of Maven</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
