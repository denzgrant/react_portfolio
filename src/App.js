import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/about/About";
import Info from "./components/about/Info"
import Portfolio from "./components/portfolio/Portfolio";


//  <Nav.Link href="https://docs.google.com/document/d/1nHbvtAf2ocPFz7yP8Sr8DLAQFcXk-KlLh-mxLlfFT8Q/edit?usp=sharing" target="_blank">Resume</Nav.Link>

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={About} />
        <Route path="/info" component={Info} />
        <Route path="/portfolio" component={Portfolio} />
      </div>
    </Router>
  );
}


export default App;

