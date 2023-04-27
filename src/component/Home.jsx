import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import pdark from '../image/pdark.png'
import '../CSS/home.css'
import AOS from "aos"
import linkedin from "../image/icons8-linkedin-circled-48.png"
import email from "../image/icons8-circled-envelope-48.png"
import github from "../image/icons8-github-64 (1).png"
import resume from "../image/Payal-Sahu-Resume.pdf"
import {Link,Box,Button} from '@chakra-ui/react'

import "aos/dist/aos.css"

function Home(){
 
    const data=useSelector((store)=> store.theme)
    useEffect(()=>{
        AOS.init({delay:300});
    },[])
    
    return (
        <div  style={{
        // zIndex:'0',
        height:'100vh',
        width:'100%'
      
        }} id="home" >
            <div id='home-container' >
            <div style={{width:'40%'}} >
            <h1 id='firsthead'>Hello,</h1>
            <div  style={{margin:'auto',width:'100%'}}>
          <img  style={{margin:'auto'}} src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&duration=3000&pause=1000&color=2196F3&background=FF502C00&repeat=false&width=250&lines=I'm+Payal+Sahu" alt="Typing SVG" />
            </div>
            <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&duration=3000&pause=1000&color=2196F3&repeat=false&width=650&lines=A+Passionate+Full+Stack+Web+Developer" alt="Typing SVG" />
            <p id="user-detail-name" style={{color:'transparent'}}>Payal sahu</p>
           </div>

           
           <div style={{width:'20%'}}>
            <div id='location'> 
            <Link href='https://www.google.co.in/maps/place/Kota,+Raipur,+Chhattisgarh/@21.2576065,81.5978438,15z/data=!3m1!4b1!4m6!3m5!1s0x3a28ddfc64f05175:0x5ec44266cb36d4c7!8m2!3d21.2584037!4d81.6033846!16s%2Fg%2F1ptvvnq29' target='payal' > 
            <img className='sign' src={pdark} style={{width:'100%'}} alt="payal"/>
            </Link>
            </div>
            <div class='container' style={{bottom:'45px'}} >
                <div class="ring"></div>
                <div class="ring"></div>
                <div class="ring"></div>

            </div> 
            </div>
            <div style={{width:'40%'}}>
                <img id='sectionimg' data-aos="fade-in" data-aos-duration="4000" src="https://www.bing.com/th/id/OGC.bfe7c3ec69bf379f62a5de6a34acdc5d?pid=1.7&rurl=https%3a%2f%2fmiro.medium.com%2fmax%2f1400%2f1*qdAW1TjCN57h1lbuuzvchg.gif&ehk=w7OIa913DGrDOfbARBfao2orIGNsejbu%2fLu1qfTbQcM%3d"   alt='' />
                <div id='seconddiv'>
                    <div >
                <Link id="contact-linkedin" className='link'  href='https://www.linkedin.com/in/payal-sahu-30436821b/' target='payal'>   <img style={{width:'60px',boxShadow: 'rgba(79, 198, 24, 0.475) 0px 5px 45px 1px',borderRadius:'50%'}} src={linkedin} alt="" /></Link>
                <Link className='link' href='#' onClick={()=> window.location='mailto:sahupayal220@gmail.com'} target='payal'>  <img style={{width:'60px',boxShadow: 'rgba(79, 198, 24, 0.475) 0px 5px 45px 1px',borderRadius:'50%'}} src={email} alt="" /></Link>
                <Link  id="contact-github" className='link'  href='https://github.com/Payalsahuj' target='payal'>  <img style={{width:'60px',boxShadow: 'rgba(79, 198, 24, 0.475) 0px 5px 45px 1px',borderRadius:'50%'}} src={github} alt="" /></Link>
                </div>
                <div>
                <Link href={resume} download={true} target='_blank' id="resume-link-2" _hover={{textDecoration:"none"}}>
                  <Box padding={4} className="home-icon"  >
                    <Button
                      id="resume-button-2"
                      onClick={()=>window.open("https://drive.google.com/file/d/1ZupJ5-dd3WKtb_hd8kvAr4if9syB5Kyc/view?usp=sharing")} border="1px solid white"
                      backgroundColor="#0277BD" borderRadius={'10px'} >
                      Resume
                    </Button>
                  </Box>
                </Link>
                </div>
                </div>
            </div>



            </div>
        </div>
    )
}

export default Home