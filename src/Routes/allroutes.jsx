import {Route,Routes} from "react-router-dom"
import PageNotFound from "../component/pagenotfound"
import { Location } from "../component/location"

function Allroutes(){
    return (
        <div>
            <Routes>
          
                {/* <Route path='/location' element={<Location/>}/> */}
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
        </div>
    )
}
export default Allroutes