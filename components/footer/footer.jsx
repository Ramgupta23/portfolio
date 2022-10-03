import React from 'react'
import classes from "./footer.module.css"
import { AiOutlineFacebook, AiOutlineLinkedin, AiOutlineCopyrightCircle, AiFillTwitterSquare, AiOutlineHome, AiOutlineMail } from "react-icons/ai"
import { FaInstagramSquare, FaGithubSquare,  } from "react-icons/fa"
import { BsLinkedin, BsPhone, BsWhatsapp, BsInstagram }from "react-icons/bs"
import { MdEmail, } from "react-icons/md"
import { FiTwitter, FiGithub } from "react-icons/fi"
import { SiHomeassistantcommunitystore } from "react-icons/md"
import Link from "next/link"
const footer = () => {
  return (
    <section  id="contactme">
          <div className={classes.footer}>
<div className={classes.developerIntro}>
    <p>Aaditya Singh</p>
    <p style={{color:"white"}}>A certified Full Stack Developer from Delhi,     India.I always make websites that have unique designs and also has a good performance rate.</p>
</div>
<div>
    <p>Important Links</p>
    <ul>
                  <li><Link href="#home">Home</Link> </li>
                  <li><Link href="#about">About</Link> </li>
                  <li><Link href="#services"> Services</Link></li>
                  <li><Link href="https://drive.google.com/file/d/1IHQWts84R8heI3vF4pqXLsMGS8cA-A8z/view?usp=sharing" target="_blank"> Resume</Link></li>
                  <li><Link href="#projects">Projects</Link> </li>
                  <li><Link href="#experience">Experience</Link></li>
                  <li><Link href="#contactme">Contact me</Link> </li>
        
    </ul>
</div>
<div>
    <p>Contact Info</p>
    <ul>
        
                      <li><BsPhone style={{ color:"#f68176"}}/> +91 9467665000</li>
                      <li><AiOutlineMail style={{ color: "#f68176" }} /> singhaditya2763@gmail.com</li>
                  <li><BsWhatsapp style={{ color: "#f68176" }} /> +91 9467665000</li>
                      <li><AiOutlineHome style={{ color: "#f68176" }} /> Arya Nagar Sonipat,Haryana</li>
        <li></li>
    </ul>
</div>
          <div>
            <p>Social links</p>
    <ul>
                      <li><a href="https://www.facebook.com/profile.php?id=100023527360819" target="blank"><AiOutlineFacebook style={{ color: "#f68176" }} /> Facebook</a></li>
                      <li><a href="https://www.instagram.com/aditya_singh1040/" target="blank"><BsInstagram style={{ color: "#f68176" }} /> Instagram</a></li>
                      <li><a href="https://twitter.com/Aaditya2763" target="blank"><FiTwitter style={{ color: "#f68176" }} /> Tweeter</a></li>
                      <li><a href="https://www.linkedin.com/in/aaditya-singh-8472991b7/" target="blank"><AiOutlineLinkedin style={{ color: "#f68176" }} /> LinkedIn</a></li>
                      <li><a href="https://github.com/Aaditya2763/Full-Stack-Web-Development" target="blank"><FiGithub style={{ color: "#f68176" }} /> Github</a></li>
    </ul>
</div>
          </div>

          <div style={{ textAlign: "center", margin: "20px 20px", color:"rgb(61, 59, 59)"}}>< AiOutlineCopyrightCircle style={{ color:"#f68176"}}/>2022 All rights reserved | Designed by Aaditya Singh</div>
    </section>
  )
}

export default footer