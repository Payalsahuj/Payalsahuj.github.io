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
            <div style={{marginTop:'100px',color:data?'black':'white'}}>
            <h1>Ipsam voluptatibus possimus ad, eos sapiente animi. Tempora, voluptatem? Amet voluptatem itaque dolore minima?</h1>
            </div>
            
        </div>
    )
}

export default Home