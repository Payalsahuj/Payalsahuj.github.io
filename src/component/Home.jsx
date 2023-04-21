import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import pdark from '../image/pdark.png'
import '../CSS/home.css'
import AOS from "aos"
import linkedin from "../image/icons8-linkedin-circled-48.png"
import email from "../image/icons8-circled-envelope-48.png"
import github from "../image/icons8-github-64 (1).png"
import {Link} from '@chakra-ui/react'

import "aos/dist/aos.css"

function Home(){
 
    const data=useSelector((store)=> store.theme)
    useEffect(()=>{
        AOS.init({delay:300});
    },[])
    
    return (
        <div  style={{
        zIndex:'0',
        height:'100vh'
      
        }} id="home" >
            <div style={{padding:'13% 4%',display:'flex',alignItems:'center'}}>


            <div style={{width:'40%'}} >
            <h1 style={{color:'#2196F3',fontSize:'35px',fontFamily:'Fira Code',fontWeight:'800'}}>Hello,</h1>
            <div style={{margin:'auto',width:'100%'}}>
            <a  href="https://git.io/typing-svg"><img style={{margin:'auto'}} src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&duration=3000&pause=1000&color=2196F3&background=FF502C00&repeat=false&width=250&lines=I'm+Payal+Sahu" alt="Typing SVG" /></a>
            </div>
            <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&duration=3000&pause=1000&color=2196F3&repeat=false&width=650&lines=A+Passionate+Full+Stack+Web+Developer" alt="Typing SVG" /></a>
           </div>

           
           <div style={{width:'40%'}}>
            <div style={{position:'relative',backgroundColor:'#0277BD',borderRadius:'50%',width:'100px',height:'100px',margin:'auto',zIndex:'1'}}> <a href='/location' target='blank'> <img className='sign' src={pdark} style={{width:'100%'}} alt="payal"/></a></div>
            <div class='container' style={{bottom:'45px'}} >
                <div class="ring"></div>
                <div class="ring"></div>
                <div class="ring"></div>

            </div> 
            </div>


            <div style={{width:'40%'}}>
                <img style={{boxShadow: 'rgba(79, 198, 24, 0.475) 0px 5px 15px 15px',borderRadius:'50%',width:'300px',height:'300px',margin:'auto'}} data-aos="fade-in" data-aos-duration="4000" src="https://www.bing.com/th/id/OGC.bfe7c3ec69bf379f62a5de6a34acdc5d?pid=1.7&rurl=https%3a%2f%2fmiro.medium.com%2fmax%2f1400%2f1*qdAW1TjCN57h1lbuuzvchg.gif&ehk=w7OIa913DGrDOfbARBfao2orIGNsejbu%2fLu1qfTbQcM%3d"   alt='' />
                <div style={{display:'flex',justifyContent:'center',marginTop:'40px',alignItems:'center',gap:'40px',width:'100%'}}>
                <Link className='link' style={{borderRadius:'50%'}} href='https://www.linkedin.com/in/payal-sahu-30436821b/' target='payal'>   <img style={{width:'60px',boxShadow: 'rgba(79, 198, 24, 0.475) 0px 5px 45px 1px',borderRadius:'50%'}} src={linkedin} alt="" /></Link>
                <Link className='link' style={{borderRadius:'50%'}} href='#' onClick={()=> window.location='mailto:sahupayal220@gmail.com'} target='payal'>  <img style={{width:'60px',boxShadow: 'rgba(79, 198, 24, 0.475) 0px 5px 45px 1px',borderRadius:'50%'}} src={email} alt="" /></Link>
                <Link className='link' style={{borderRadius:'50%'}} href='https://github.com/Payalsahuj' target='payal'>  <img style={{width:'60px',boxShadow: 'rgba(79, 198, 24, 0.475) 0px 5px 45px 1px',borderRadius:'50%'}} src={github} alt="" /></Link>
                </div>
            </div>



            </div>
        </div>
    )
}

export default Home