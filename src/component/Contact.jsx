import { useSelector } from 'react-redux';

function Contact(){
    const data=useSelector((store)=> store.theme)
    return (
        <div style={{
        padding:'0px 10px',
        width:'100vh',
        height:'100%',
        }}   id="contact">

        </div>
    )
}

export default Contact