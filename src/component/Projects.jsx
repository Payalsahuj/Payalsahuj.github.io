
import AOS from "aos"
import "aos/dist/aos.css"
import cathe from "../image/CATHERc.png"
import IKEA from "../image/IKEAc.png"
import SUGAR from '../image/SUGARcc.png'
import html from "../image/icons8-html-5-48.png"
import css from '../image/icons8-css3-48.png'
import js from '../image/icons8-javascript-48.png'
import redux from "../image/icons8-redux-48.png"
import react from '../image/react.jpeg'
import chakra from "../image/chakra.png"
import { useEffect } from 'react';
import { Link } from '@chakra-ui/react';
import '../CSS/project.css'
function Project(){
    // const data=useSelector((store)=> store.theme)
    useEffect(()=>{
        AOS.init({ duration: 1000 });
    },[])
    let projectdata={
        projects:[
            {
                image:SUGAR,
                title:'SUGAR (CLONE)',
                type:'An E-commers Website',
                description:"SUGAR is an E-commers website responsible for providing affordable cosmetics for women's. It is a leading Indian cosmetic brand that was created with the goal of providing high-quality, affordable makeup products to women everywhere.",
                texttack:[html,css,js,react,redux,chakra],
                code:'CODE',
                codelink:`https://github.com/Payalsahuj/polite-sheep-7319`,
                live:'LIVE',
                livelink:` https://polite-sheep-7319.vercel.app `
            },
            {
                image:cathe,
                title:'CATHERINES (CLONE)',
                type:'An E-commers Website',
                description:"Catherines is an E-commers website responsible for providing affordable plus size fashion products for women's to all over the world. Catherines was created with the goal of providing high-quality, affordable products to women everywhere.",
                texttack:[html,css,js],
                code:'CODE',
                codelink:`https://github.com/Payalsahuj/punchy-crayon-507`,
                live:'LIVE',
                livelink:`https://spiffy-kulfi-5b4b0a.netlify.app`
            },
            {
                image:IKEA,
                title:'IKEA (CLONE)',
                type:"An E-commers Website",
                description:"IKEA is an E-commers website responsible for providing affordable home decore, furiture and various other stuffs to all over the world. IKEA, home furnishings retailer that was the world’s largest seller of furniture in the early 21st century, operating more than 300 stores around the world.",
                texttack:[html,css,js],
                code:'CODE',
                codelink:`https://github.com/firdous0679/-equal-slip-6381`,
                live:'LIVE',
                livelink:`https://phenomenal-brioche-666c78.netlify.app/`
            },
            {
                image:IKEA,
                title:'IKEA (CLONE)',
                type:"An E-commers Website",
                description:"IKEA is an E-commers website responsible for providing affordable home decore, furiture and various other stuffs to all over the world. IKEA, home furnishings retailer that was the world’s largest seller of furniture in the early 21st century, operating more than 300 stores around the world.",
                texttack:[html,css,js],
                code:'CODE',
                codelink:`https://github.com/firdous0679/-equal-slip-6381`,
                live:'LIVE',
                livelink:`https://phenomenal-brioche-666c78.netlify.app/`
            },
        ]
    }
    return (
        <div   id='projects'>
           <div data-aos="zoom-in-down"
        data-aos-duration="1000"
        data-aos-offset="100" id='projecthead'> <h1 >projects</h1></div>
           <div style={{width:'85%'}}>{projectdata.projects.map((item)=>
            <div data-aos="zoom-in-down"
            data-aos-duration="2000"
            data-aos-offset="100" className="project-card" >
                <div id='imgdiv'><img src={item.image} alt="" /></div>
                <br/>
                <div id='descriptiondiv'>
                    <h1 className="project-title" >{item.title}</h1>
                    <br/>
                    <div>
                    <p style={{fontSize:'18px'}}>{item.type}</p>
                    <p className="project-description" style={{fontSize:'18px'}}>{item.description}</p>
                    <div className="project-tech-stack">{item.texttack.map((ele)=> <img width='50px'  src={ele} alt='err'/>)}</div>
                    <div  id='linkcontainer'>
                    <Link className="project-github-link" href={item.codelink} target='_blank'> <button data-aos="flip-left" className="livebutton" >CODE</button></Link>
                    <Link className="project-deployed-link" href={item.livelink} target='_blank'> <button data-aos="flip-right" className="livebutton">LIVE</button></Link>
                    </div>
                    </div>
                </div>
            </div>
           )}</div>
           


        </div>
    )
}

export default Project