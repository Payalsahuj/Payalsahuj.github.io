import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import pic from "../image/imresizer-1680623388621.jpg"
import '../CSS/about.css'
function About(){
    const data=useSelector((store)=> store.theme)
    useEffect(()=>{
        AOS.init({delay:300});
    },[])
    return (
        <div  id="about" className="about section">
           
            <div  data-aos="fade-right" >
                <button id='aboutme'>About Me</button>
                <div width='100%'>
                <p className="paragraph" >A professional web developer responsible for working both on</p>
                <p className="paragraph" >front-end and back-end development processes. Judicious</p>
                <p className="paragraph" >and creative when crafting effective websites, apps,</p>
                <p className="paragraph" >and platforms to propel competitive advantage and revenue</p>
                <p className="paragraph" id="user-detail-intro" >growth. Technically proficient in HTML, CSS, JavaScript and </p>
                <p className="paragraph" >analytical problem solver with a calm and focused demeanor.</p>
  
                </div>
            </div> 
            <div data-aos="fade-left" data-aos-duration="5000" >
            <img className="home-img"   src={pic}   alt='' />
            </div>
           
        </div>
    )
}
export default About