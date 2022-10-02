import React, { useState } from 'react'
import classes from "./header.module.css"
import Link from 'next/link'
import Image from 'next/image'
  import { FaBars } from "react-icons/fa"
import adityaImg from "../../assets/images/adityaImg.jpg"
const Header = () => {
  const [toggleMenu, settoggleMenu] = useState(false)
  const toggleMenuHandler = () => {

    settoggleMenu(!toggleMenu)

  }
  function blurHanlder() {
    settoggleMenu(false)
  }

  return (
    <>
      <section className={classes.headerBox}>
        <navbar className={classes.navbar}>
          <div>
            <p>Portfolio</p>
          </div>
          <div  >
            <ul className={`${classes.navlinks} ${toggleMenu ? " " : classes.hidenavbar}`} onClick={blurHanlder} >

              <li ><Link href="/">Home</Link> </li>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#services">Services</Link></li>
              <li> <a href="https://drive.google.com/file/d/1IHQWts84R8heI3vF4pqXLsMGS8cA-A8z/view?usp=sharing" target="_blank" rel="noreferrer"> Resume </a></li>
              <li><Link href="#projects">Projects</Link></li>
              <li><Link href="#experience">Experience</Link></li>
              <li><Link href="#contactme">Contact me</Link></li>

            </ul>
            <button onClick={toggleMenuHandler} className={classes.menubar} style={{ fontSize: "25px", color: "#ec655f" }}>
              <FaBars />
            </button>

          </div>

        </navbar>


        <div className={classes.profileItems}>
          <figure style={{padding:"10px"}}>
            {}
          </figure>

          <ul>
            <li style={{ fontSize: "30px", color:"#f68176"}}> Aaditya Singh </li>

            <li >  A Creative Freelancer & Full Stack Developer</li>
          </ul>
        </div>


      </section>
    </>
  )
}

export default Header