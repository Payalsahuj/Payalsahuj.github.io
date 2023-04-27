import { useSelector } from 'react-redux';
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';
import email from "../image/icons8-circled-envelope-48.png"
import call from '../image/icons8-call-50.png'
import address from "../image/icons8-address-50.png"
import linkedin from "../image/icons8-linkedin-circled-48.png"
import { Link } from '@chakra-ui/react';
import github from "../image/icons8-github-64 (1).png"
function Contact() {
    const data = useSelector((store) => store.theme)
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    return (
        <div style={{
            padding: '0px 10px',
            marginTop: '170px'
        }} id="contact">
            <div >
                <div style={{ display: 'flex', fontSize: '25px', justifyContent: 'space-evenly' }}>
                    <Link href='#' onClick={() => window.location = 'mailto:sahupayal220@gmail.com'} target='payal'>
                        <div data-aos="fade-up" style={{ borderRadius: '15px', padding: '40px 40px', boxShadow: '#4b8118 5px 3px 12px' }}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <h1>Email</h1>
                                <img style={{ width: '35px', marginLeft: '10px' }} src={email} alt="" />
                            </div>
                            <div  id="contact-email"><p style={{ fontSize: '17px' }}>sahupayal220@gmail.com</p></div>
                        </div>
                    </Link>
                    <Link href='#' target='payal'>
                    <div data-aos="fade-down" style={{ borderRadius: '15px', padding: '40px 40px', boxShadow: '#4b8118 5px 3px 12px' }}>
                        <div  style={{ display: 'flex', justifyContent: 'center' }}>
                            <h1>Call</h1>
                             <img style={{ width: '28px', marginLeft: '10px' }} src={call} alt="" />
                        </div>
                        <div id="contact-phone"><p style={{ fontSize: '17px' }}>+91 9827044210</p></div>
                    </div>
                    </Link>
                    <Link href='https://github.com/Payalsahuj' target='payal'>
                    <div data-aos="zoom-in" style={{ borderRadius: '15px', padding: '40px 40px', boxShadow: '#4b8118 5px 3px 12px' }}>
                        <div  style={{ display: 'flex', justifyContent: 'center' }}>
                            <h1>Github</h1>
                             <img style={{ width: '28px', marginLeft: '10px' }} src={github} alt="" />
                        </div>
                        <div id="contact-github"><p style={{ fontSize: '17px' }}>payalsahuj-github</p></div>
                    </div>
                    </Link>
                    <Link href='https://www.google.co.in/maps/place/Kota,+Raipur,+Chhattisgarh/@21.2576065,81.5978438,15z/data=!3m1!4b1!4m6!3m5!1s0x3a28ddfc64f05175:0x5ec44266cb36d4c7!8m2!3d21.2584037!4d81.6033846!16s%2Fg%2F1ptvvnq29' target='payal'>
                        <div data-aos="fade-up" style={{ borderRadius: '15px', padding: '40px 40px', boxShadow: '#4b8118 5px 3px 12px' }}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <h1>Location</h1>
                                <img style={{ width: '35px', marginLeft: '10px' }} src={address} alt="" />
                            </div>

                            <div><p style={{ fontSize: '17px' }}>Raipur, Chhattisgarh</p></div>
                        </div>
                    </Link>
                    <Link href='https://www.linkedin.com/in/payal-sahu-30436821b/' target='payal'>
                    <div data-aos="fade-down" style={{ borderRadius: '15px', padding: '40px 40px', boxShadow: '#4b8118 5px 3px 12px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <h1>Linkedin</h1>
                            <img style={{ width: '35px', marginLeft: '10px' }} src={linkedin} alt="" />
                        </div>
                        
                        <div id="contact-linkedin"><p style={{ fontSize: '17px' }}>linkedin.com-payalsahu</p></div>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact