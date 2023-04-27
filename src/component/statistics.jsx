import { useSelector } from 'react-redux';
import GitHubCalendar from 'react-github-calendar';

function Statistics(){
    const data=useSelector((store)=> store.theme)
    return (
        <div style={{
        padding:'0px 0px',
        width:'100%',
        
        }} id='statistics' >
         <div   data-aos="zoom-in-down"
        data-aos-duration="2000"
        data-aos-offset="100" style={{marginBottom:'50px',marginTop:'20px',paddingTop:'100px'}} >
        <button style={{backgroundColor:'#4b8118',padding:'3px 0px',borderRadius:'15px'}}><h1 style={{fontSize:'39px',color:'white',padding:'0px 15px',fontFamily:'serif'}} >Github Statistics</h1></button>
        </div>

        <div data-aos="zoom-in-down" style={{display:'flex',flexDirection:'column'}}>
        <div  style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}} >
        <img id="github-streak-stats"
              src="https://github-readme-streak-stats.herokuapp.com?user=payalsahuj&theme=react&border_radius=6.5&date_format=M%20j%5B%2C%20Y%5D"
              alt="streak-stat" />
        </div>
        <div style={{display:'flex',justifyContent:'space-evenly',marginTop:'50px',alignItems:'center',width:'100%'}}>
        <img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=payalsahuj&theme=react&border_radius=4.6&show_icons=true&count_private=true&hide_border=true&show_icons=true" alt='' />
        <img id="github-top-langs" width={'420px'} src="https://github-readme-stats.vercel.app/api/top-langs/?username=payalsahuj&theme=react&count_private=true&border_radius=4.6&hide_border=true&layout=compact&show_icons=true"alt='' />
        </div>
        </div>
        
        <div data-aos="zoom-in-down" style={{display:'flex',justifyContent:'space-evenly',marginTop:'80px',alignItems:'center',width:'100%'}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'80%',boxShadow: '#4b8118 5px 3px 12px'}}>
         <a><img alt="Payal Activity Graph" src="https://github-readme-activity-graph.cyclic.app/graph?username=payalsahuj&count_private=true&theme=react-dark&hide_border=true" /></a>
         </div>
        </div>
        
        <div data-aos="zoom-in-down" style={{display:'flex',justifyContent:'center',marginTop:'80px',alignItems:'center',width:'100%' }}>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'84%',boxShadow: '#4b8118 5px 3px 12px',padding:'3% 0%' }}>
        <GitHubCalendar  style={{width:'100%',color:'#0277BD'}} username="payalsahuj" />
        </div>
        </div>
        </div>
    )
}

export default Statistics

