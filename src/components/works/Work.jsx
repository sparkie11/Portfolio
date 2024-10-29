import { East, West } from '@mui/icons-material'
import './works.scss'
import { useState } from 'react'

export default function Work() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    {
      id: 1,
      icon: './assets/bik1.png',
      title: 'content kesar web design ',
      img: './assets/bik1.png',
    },
    {
      id: 2,
      icon: './assets/bike2.png',
      title: 'content kesar web design ',
      img: './assets/bike2.png',
    },
    {
      id: 3,
      icon: './assets/bike3.png',
      title: 'content kesar web design ',
      img: './assets/bike3.png',
    },
  ]

  const handleClick = (way) =>{
    // if(way === "left" && currentSlide > 0){
    //   setCurrentSlide(currentSlide - 1)
    // }
    // if(way === "right" && currentSlide < data.length - 1){
    //   setCurrentSlide(currentSlide + 1)
    // }

    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2) :
    setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0)
  }

  return (
    <div className="works" id="works">
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw )`}}>
        {data.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa voluptatum harum vel alias repellendus quos at porro
                    dolor sequi dignissimos ipsam eaque, ratione quidem
                    molestiae iure, ab maiores. Officiis, voluptatibus.
                  </p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div onClick={()=>handleClick("left")}>
      <West className="arrow west"  />

      </div>
      <div onClick={()=>handleClick("right")}>

      <East className="arrow east"   />
      </div>
    </div>
  )
}
