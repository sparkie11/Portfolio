import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";
import Work from "./components/works/Work";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Work/>
        <Testimonials/>
        <Contact/>
        
      </div>

    </div>
  );
}

export default App;
