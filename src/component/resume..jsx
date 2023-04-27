import { useSelector } from 'react-redux';

function Resume(){
    const data=useSelector((store)=> store.theme)
    return (
        <div style={{
        padding:'0px 10px',
        width:'100%',
        height:'20vh'
        }} id='resume'>
           

        </div>
    )
}

export default Resume