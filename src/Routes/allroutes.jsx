import {Route,Routes} from "react-router-dom"
import About from "../component/About"
import Contact from "../component/Contact"
import Home from "../component/Home"

import Project from "../component/Projects"
import Resume from "../component/resume."
import Skills from "../component/Skills"
import Statistics from "../component/statistics"

function Allroutes(){
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/skills' element={<Skills/>}/>
                <Route path='/project' element={<Project/>}/>
                <Route path='/statistics' element={<Statistics/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/resume' element={<Resume/>}/>
            </Routes>
        </div>
    )
}
export default Allroutes