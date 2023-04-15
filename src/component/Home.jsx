import { useSelector } from 'react-redux';
import ugh from '../image/uhg.jpg'
function Home(){
    const data=useSelector((store)=> store.theme)
    return (
        <div  style={{position:'absolute',
        zIndex:'0',
        padding:'0px 10px',
        backgroundImage:data?'':`url(${ugh})`,
        width:'100%',
        height:'300vh'
        }} id="home" >
            <div>
            <h1>okok</h1>
            </div>
            
        </div>
    )
}

export default Home