import Navbar from "./component/Navbar";
import "./App.css";

import Home from "./component/home";
import About from "./component/About";
import Skills from "./component/Skills";
import Project from "./component/Projects";
import Contact from "./component/Contact";
import Resume from "./component/resume.";
import { useSelector } from "react-redux";
import ugh from "./image/uhg.jpg";
import Statistics from "./component/Statistics";

function App() {
  const data = useSelector((store) => store.theme);
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>

      <div
        style={{
          fontFamily: "cursive",
          position: "absolute",
          backgroundImage: data ? "" : `url(${ugh})`,
          color: data ? "black" : "white",
        }}
      >
        <Home />
        <About />
        <Skills />
        <Project />
        <Statistics />
        <Contact />
        <Resume />
      </div>
    </div>
  );
}

export default App;
