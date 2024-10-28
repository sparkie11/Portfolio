import './portfolio.scss'

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Porfolio</h1>
      <ul>
        <li>Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Designing</li>
        <li>Branding</li>
      </ul>

      <div className="container">
        <div className="item">
          <img src='https://gautamwise.com/_next/image?url=%2Fimages%2Fcapeclouds.webp&w=256&q=75' alt=''/>
          <h3>Banking app</h3>
        </div>
        <div className="item">
          <img src='https://gautamwise.com/_next/image?url=%2Fimages%2Fcapeclouds.webp&w=256&q=75' alt=''/>
          <h3>Banking app</h3>
        </div>        <div className="item">
          <img src='https://gautamwise.com/_next/image?url=%2Fimages%2Fcapeclouds.webp&w=256&q=75' alt=''/>
          <h3>Banking app</h3>
        </div>        <div className="item">
          <img src='https://gautamwise.com/_next/image?url=%2Fimages%2Fcapeclouds.webp&w=256&q=75' alt=''/>
          <h3>Banking app</h3>
        </div>        <div className="item">
          <img src='https://gautamwise.com/_next/image?url=%2Fimages%2Fcapeclouds.webp&w=256&q=75' alt=''/>
          <h3>Banking app</h3>
        </div>
      </div>
    </div>
  )
}
