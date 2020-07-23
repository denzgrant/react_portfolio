import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio";


//  <Nav.Link href="https://docs.google.com/document/d/1nHbvtAf2ocPFz7yP8Sr8DLAQFcXk-KlLh-mxLlfFT8Q/edit?usp=sharing" target="_blank">Resume</Nav.Link>

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
      </div>
    </Router>
  );
}


export default App;
