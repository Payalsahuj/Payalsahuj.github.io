import { useSelector } from 'react-redux';

function Project(){
    const data=useSelector((store)=> store.theme)
    return (
        <div style={{
        padding:'0px 10px',
        width:'100%',
  
        }}  id='projects'>
            <h1>project</h1>

        </div>
    )
}

export default Project