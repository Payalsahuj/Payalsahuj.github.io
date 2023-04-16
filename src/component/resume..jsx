import { useSelector } from 'react-redux';
import ugh from '../image/uhg.jpg'
function Resume(){
    const data=useSelector((store)=> store.theme)
    return (
        <div style={{position:'absolute',
        zIndex:'0',
        padding:'0px 10px',
        backgroundImage:data?'':`url(${ugh})`,
        width:'100%',
        height:'300vh'
        }} >

        </div>
    )
}

export default Resume