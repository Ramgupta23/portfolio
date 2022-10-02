import React from 'react'
import Image from 'next/image'
import classes from "./aboutme.module.css"





const aboutme = () => {
   
    return (
        
        <section className={classes.aboutSection} id="about" >
           
           <div className={classes.aboutme}>
                <div className={classes.img}> 
                    <Image style={{borderRadius:"10px"}}
                        width={500}
                        height={500}
                        alt="profile img"
                        src="/images/image.jpg"
                    />
                </div>
                <div className={classes.intro} >
                    <p className={classes.discover}>Discover</p>
                    <p  className={classes.aboutHeading} style={{color:"white"}}>About me</p>
                    <p>My name is Aaditya Singh.I am a feelancer,Full Stack Developer based in Delhi,India.I am very passionate and dedicated to my work.With 8 months experience as an intern Full Stack Developer,I have acquired the skills necessary to  build great and premium websites.</p>


                   <div className={classes.details}>
                        <div>
                            <p><span>Name:</span> Aaditya Singh</p>
                            <p><span>Age:</span> 20 years</p>
                            <p><span>Phone No:</span> +91 9467665000</p>
                            <p><span>Experience:</span> 8 Months</p>
                            
                        </div>
                        <div className={classes.detailsPart}>
                            <p><span>Freelance:</span > Available</p>
                            <p><span>Address:</span> Delhi,India</p>
                            <p> <span>Github:</span> Aaditya2763</p>
                            <p><span>Whatsapp:</span> +91 9467665000</p>
                        </div>
                   </div>

                    <a href='/resume/resume.pdf' download><button>Download CV</button></a>
                </div>

           </div>
        
        </section>
    )
}

export default aboutme