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
        // width:'100%',
        display:'flex',
        justifyContent:'space-around',
        // alignItems:'center'
        }}  id="about" className="about section">
           
            <div  data-aos="fade-right" >
                <button style={{fontFamily:'cursive',fontSize:'27px',backgroundColor:'#4b8118',padding:'5px 0px',borderRadius:'15px',color:'white',marginBottom:'45px'}}>About Me</button>
                <div width='100%'>
                <p style={{fontFamily:'cursive',fontSize:'24px'}}>A professional web developer responsible for working both on</p>
                <p style={{fontFamily:'cursive',fontSize:'24px'}}>front-end and back-end development processes. Judicious</p>
                <p style={{fontFamily:'cursive',fontSize:'24px'}}>and creative when crafting effective websites, apps,</p>
                <p style={{fontFamily:'cursive',fontSize:'24px'}}>and platforms to propel competitive advantage and revenue</p>
                <p style={{fontFamily:'cursive',fontSize:'24px'}}>growth. Technically proficient and analytical problem</p>
                <p style={{fontFamily:'cursive',fontSize:'24px'}}> solver with a calm and focused demeanor.</p>
                </div>
            </div> 
            <div data-aos="fade-left" data-aos-duration="5000" >
            <img style={{borderRadius:'50%',height:'350px',width:'320px',margin:'auto',boxShadow: ' #4b8118 0px 0px 0px 15px'}}  src={pic}   alt='' />
            </div>
           
        </div>
    )
}
export default About