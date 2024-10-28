import { useEffect, useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'
import {
  webPortfolio,
  mobilePortfolio,
  contentPortfolio,
  featuredPortfolio,
  designPortfolio,
} from '../data'

export default function Portfolio() {
  const [selected, setSelected] = useState('featured')
  const [data, setData] = useState([])

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

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featuredPortfolio)
        break
      case 'webApp':
        setData(webPortfolio)
        break
      case 'mobileApp':
        setData(mobilePortfolio)
        break
      case 'designing':
        setData(designPortfolio)
        break
      case 'branding':
        setData(contentPortfolio)
        break
      default:
        setData(featuredPortfolio)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>Porfolio</h1>
      <ul>
        {list.map((item, index) => (
          <PortfolioList
            key={index}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>

      <div className="container">
        {data.map(d => (
          <div className="item">
            <img src={d.img} />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
