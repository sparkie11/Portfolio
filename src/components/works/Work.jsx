import { East, West } from '@mui/icons-material'
import './works.scss'

export default function Work() {
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

  return (
    <div className="works" id="works">
      <div className="slider">
        {data.map(d => (
          <div className="container">
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
      <West className="arrow west" />
      <East className="arrow east" />
    </div>
  )
}
