import Navbar from './component/Navbar'
import './App.css';
// import Allroutes from "./Routes/allroutes";
import Home from './component/Home';
import About from './component/About';
import Skills from './component/Skills';
import Project from './component/Projects';
import Statistics from './component/statistics';
import Contact from './component/Contact';
import Resume from './component/resume.';
function App() {
  return (
    <div className="App" width='100%'>
      <Navbar />
      {/* <Allroutes/> */}
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Statistics/>
      <Contact/>
      <Resume/>
    </div>
  );
}

export default App;
