import { useSelector } from 'react-redux';
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import {Flex} from "@chakra-ui/react"
import html from "../image/icons8-html-5-48.png"
import css from '../image/icons8-css3-48.png'
import js from '../image/icons8-javascript-48.png'
import react from "../image/react.jpeg"
import redux from '../image/icons8-redux-48.png'
import node from '../image/icons8-node-js-48.png'
import set from "../image/icons8-settings-50.png"
import mongo from "../image/MongoDB_logo_01.png"
import express from "../image/express.png"
import typescript from "../image/typescript-1174965.png"
import npm from "../image/npm.png"
import dsa from "../image/dsa.jpeg"
import cypress from "../image/cypress.jpeg"
import vs from "../image/vscode.png"
import github from "../image/icons8-github-64 (1).png"
import chakra from "../image/chakra.png"
import git from "../image/git.png"
import boot from "../image/icons8-bootstrap-48.png"
import netlify from "../image/netlify.png"
import vercel from "../image/icons8-triangle-50.png"
import codesand from '../image/codesand.png'
import '../App.css';
import lightset from "../image/lightsetting.png"
import winter from "../image/icons8-winter-48.png"
import React from "react"
import "../CSS/skill.css"
function Skills(){
    const data=useSelector((store)=> store.theme)
    const [tech, setTech] = React.useState("allimg");
    useEffect(()=>{
        AOS.init({ duration: 1000 });
    },[])

    const skillsarr = [
        { img: html, name: "HTML" },
        { img: css, name: "CSS" },
        { img: js, name: "Java Script" },
        { img: react, name: "React" },
        { img: redux, name: "Redux" },
        { img: mongo, name: "Mongo Db" },
        { img: node, name: "Node JS" },
        { img: express, name: "Express JS" },
        { img: typescript, name: "Type Script" },
        { img: npm, name: "Npm" },
        { img: dsa, name: "DSA" },
        { img: cypress, name: "Cypress" },
      ];
      const frontend = [
        { img: html, name: "HTML" },
        { img: css, name: "CSS" },
        { img: js, name: "Java Script" },
        { img: react, name: "React" },
        { img: redux, name: "Redux" },
        { img: typescript, name: "Type Script" },
        { img: npm, name: "Npm" },
        { img: dsa, name: "DSA" },
        { img: cypress, name: "Cypress" },
      ];
      const backend = [
        { img: mongo, name: "Mongo Db" },
        { img: node, name: "Node JS" },
        { img: npm, name: "Npm" },
        { img: express, name: "Express JS" },
        { img: dsa, name: "DSA" },
      ];
      const toolsarr = [
        { img: github, name: "Github" },
        { img: git, name: "Git" },
        { img: vs, name: "VS Code" },
        {img:codesand,name:'CodeSandbox'},
        { img: chakra, name: "Chakra UI" },
        {img:boot,name:'Bootstrap'},
        {img:netlify,name:'Netlify'},
        {img:vercel,name:'Vercel'}


      ];

    return (<div style={{
    padding:'70px 10px',
    width:'100%',

    }}  id="skills">
        <div   data-aos="zoom-in-down"
        data-aos-duration="2000"
        data-aos-offset="100" style={{marginBottom:'50px'}} >
        <button id='heading'><h1  >Technical and Soft Skills</h1></button>
        </div>

      <Flex
        id="skillsButton"
        data-aos="zoom-in-down"
        data-aos-duration="2000"
        data-aos-offset="100"
        m="auto"
        w={400}
        mb={"60px"}
        justifyContent={"space-evenly"}
      >
        <button
        style={{borderRadius:'10px',padding:'5px 20px'}}
        
          className={tech === "allimg" ? "active" : null}
          onClick={() => setTech("allimg")}
        >
          ALL
        </button>
        <button
        style={{borderRadius:'10px',padding:'5px 20px'}}
          className={tech === "frontend" ? "active" : null}
          onClick={() => setTech("frontend")}
        >
          FRONTEND{" "}
        </button>
        <button
        style={{borderRadius:'10px',padding:'5px 20px'}}
          className={tech === "backend" ? "active" : null}
          onClick={() => setTech("backend")}
        >
          BACKEND
        </button>
      </Flex>



      <div className="App"   data-aos="zoom-in-down"
        data-aos-duration="2000"
        data-aos-offset="100"
         style={{marginTop:'70px',marginBottom:'90px'}}>
      <header className="App-header">
        <img src={winter} className="App-logo" alt="logo" />
        <img src={data?lightset:set}  className="App-logo2" alt="" />
      </header>
      </div>




      {tech==="allimg"?<div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
        data-aos-offset="100"
        id="skillsdiv">
        {tech === "allimg"
          ? skillsarr.map((el) => (
              <div className='setdiv skills-card'>
                <img className='set skills-card-img' alt="" src={el.img} />
                <h3 className='skills-card-name'>{el.name}</h3>
              </div>
            ))
          : null}
        {tech === "frontend"
          ? frontend.map((el) => (
              <div className='setdiv skills-card'>
                <img className='set skills-card-img' alt="" src={el.img} />
                <h3 className='skills-card-name'>{el.name}</h3>
              </div>
            ))
          : null}
        {tech === "backend"
          ? backend.map((el) => (
              <div className='setdiv skills-card'>
                <img className='set skills-card-img' alt="" src={el.img} />
                <h3 className='skills-card-name'>{el.name}</h3>
              </div>
            ))
          : null}
      </div>:null}



      {tech==="backend"?<div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
        data-aos-offset="100"
        id="skillsdiv"
      >
        {tech === "allimg"
          ? skillsarr.map((el) => (
              <div className='setdiv skills-card'>
                <img className='set skills-card-img' alt="" src={el.img} />
                <h3 className='skills-card-name'>{el.name}</h3>
              </div>
            ))
          : null}
        {tech === "frontend"
          ? frontend.map((el) => (
              <div className='setdiv skills-card'>
                <img className='set skills-card-img' alt="" src={el.img} />
                <h3 className='skills-card-name'>{el.name}</h3>
              </div>
            ))
          : null}
        {tech === "backend"
          ? backend.map((el) => (
            <div className='setdiv skills-card'>
                <img className='set skills-card-img' alt="" src={el.img} />
                <h3 className='skills-card-name'>{el.name}</h3>
              </div>
            ))
          : null}
      </div>:null}



      {tech==="frontend"?<div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
        data-aos-offset="100"
        id="skillsdiv"
      >
        {tech === "allimg"
          ? skillsarr.map((el) => (
              <div className='setdiv skills-card'>
                <img className='set skills-card-img' alt="" src={el.img} />
                <h3 className='skills-card-name'>{el.name}</h3>
              </div>
            ))
          : null}
        {tech === "frontend"
          ? frontend.map((el) => (
              <div className='setdiv skills-card'>
                <img className='set skills-card-img' alt="" src={el.img} />
                <h3 className='skills-card-name'>{el.name}</h3>
              </div>
            ))
          : null}
        {tech === "backend"
          ? backend.map((el) => (
              <div className='setdiv skills-card'>
                <img className='set skills-card-img' alt="" src={el.img} />
                <h3 className='skills-card-name'>{el.name}</h3>
              </div>
            ))
          : null}
      </div>:null}


      
      <Flex
        id="Tools"
        data-aos="zoom-in-down"
        data-aos-duration="1000"
        data-aos-offset="100"
        margin={"auto"}
        paddingTop={'60px'}
        justifyContent={"space-around"}
      >
        <h1 style={{ color: "white" ,fontFamily:'serif' ,fontSize:'47px'}}>Tools </h1>
      </Flex>
      <div id="skillsdiv">
        {toolsarr.map((el) => (
          <div
            data-aos="zoom-in-down"
            data-aos-duration="2000"
            data-aos-offset="100"
            className='setdiv skills-card'
          >
            <img className='set skills-card-img' alt="" src={el.img} />
            <h3 className='skills-card-name'>{el.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills