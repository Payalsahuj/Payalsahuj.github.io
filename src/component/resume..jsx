import { useSelector } from 'react-redux';

function Resume(){
    const data=useSelector((store)=> store.theme)
    return (
        <div style={{
        padding:'0px 10px',
        width:'100%',
        
        }} id='resume'>
            <h1>resume</h1>

        </div>
    )
}

export default Resume