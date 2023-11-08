import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./pages/about";
import Articles from "./pages/articles";
import Contact from "./pages/contact";
import Homepage from "./pages/homepage";
import Notfound from "./pages/404";
import Projects from "./pages/projects";
import ReactGA from "react-ga4";
import ReadArticle from "./pages/readArticle";
import { TRACKING_ID } from "./data/tracking";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (TRACKING_ID !== "") {
      ReactGA.initialize(TRACKING_ID);
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article/:slug" element={<ReadArticle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
