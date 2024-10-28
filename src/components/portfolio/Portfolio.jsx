import { useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },
    {
      id: 'webApp',
      title: 'Web App',
    },
    {
      id: 'mobileApp',
      title: 'Mobile App',
    },
    {
      id: 'designing',
      title: 'Designing',
    },
    {
      id: 'branding',
      title: 'Branding',
    },
  ]
  return (
    <div className="portfolio" id="portfolio">
      <h1>Porfolio</h1>
      <ul>
        {list.map((item, index) => (
          <PortfolioList key={index} title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
        ))}
      </ul>

      <div className="container">
    
      </div>
    </div>
  )
}
