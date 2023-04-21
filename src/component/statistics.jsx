import { useSelector } from 'react-redux';


function Statistics(){
    const data=useSelector((store)=> store.theme)
    return (
        <div style={{
        padding:'0px 10px',
        width:'100%',
        
        }} id='statistics' >
            <h1>statistics</h1>
        </div>
    )
}

export default Statistics