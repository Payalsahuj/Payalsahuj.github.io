import Navbar from './component/Navbar'
import './App.css';
import Allroutes from "./Routes/allroutes";

function App() {
  return (
    <div className="App" width='100%'>
      <Navbar />
      
      <Allroutes/>
      
    </div>
  );
}

export default App;
