import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import pic from "../image/imresizer-1680623388621.jpg"
function About(){
    const data=useSelector((store)=> store.theme)
    useEffect(()=>{
        AOS.init({delay:300});
    },[])
    return (
        <div style={{
        padding:'0px 10px',
        height:'90vh',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
        }}  id="about" className="about section">
            <div style={{display:'flex'}}>
            <div data-aos="fade-right" style={{width:'62%'}}>
                <button style={{fontFamily:'cursive',fontSize:'27px',backgroundColor:'#4b8118',padding:'5px 15px',borderRadius:'15px',color:'white',marginBottom:'45px'}}>About Me</button>
                <h1 style={{fontFamily:'cursive',fontSize:'24px',padding:'0px 25px'}}>A professional web developer responsible for working both on front-end and back-end development processes. Judicious and creative when crafting effective websites, apps, and platforms to propel competitive advantage and revenue growth. Technically proficient and analytical problem solver with a calm and focused demeanor.</h1>
            </div>
            <div data-aos="fade-left" data-aos-duration="5000" style={{width:'38%'}}>
            <img style={{borderRadius:'50%',height:'350px',width:'320px',margin:'auto',boxShadow: ' #4b8118 0px 0px 0px 15px'}}  src={pic}   alt='' />
            </div>
            </div>
        </div>
    )
}
export default About