import { South } from '@mui/icons-material'
import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {
  const textRef = useRef(null)

  useEffect(() => {
    if (textRef.current) {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 50, // Lower backSpeed to prevent repeated characters
        startDelay: 300,
        strings: ['Developer', 'Designer', 'Content Creator'],
      })
    }
    // Clean-up function to avoid duplicate animations
    return () => {
      // textRef.current && init(textRef.current).reset();
    }
  }, [])
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
          <h3>
            Freelance <span ref={textRef}></span>{' '}
          </h3>
        </div>
        <a href="#portfolio">
          <South className="icon" />
        </a>
      </div>
    </div>
  )
}
