import React from 'react'
 import Image from 'next/image'
 import classes from './projects.module.css'
import Link from 'next/link'
const projects = () => {
  return (
    <section className={classes.projectSection} id="projects">
<div className={classes.majorProject}>
              <h1>Projects</h1>
              <div className={classes.projectItemRight}>
                
                <p><a  href="https://adityashoppingapp.herokuapp.com" target="_blank" rel="noreferrer">E-Commerce Website</a></p>
                 
                  <Image style={{ borderRadius: "10px" }}
                      width={100}
                      height={100}
                       
                      alt="e-commerce website"
                      src="/images/eCommerceWebsite.png"
                      
                  />
                  
              </div>
              <div className={classes.projectItemLeft}>
              
                <p><a href="https://aadityachatapp.herokuapp.com" target="_blank" rel="noreferrer">Chatting app </a></p>
                 <Image style={{ borderRadius: "10px" }}
                      width={100}
                      height={100}
                     
                      alt="Chatting app"
                      src="/images/chatting-app.png"
                  />
                 
              </div>
              <div className={classes.projectItemRight}>
           
                <p><a  href="https://aditya-blog-website.herokuapp.com" target="_blank" rel="noreferrer">Blogging website </a></p>
           
                  <Image style={{ borderRadius: "10px" }}
                      width={100}
                      height={100}
                        alt="Blogging website"
                      src="/images/blogWebsite.png"
                  />
                 
              </div>
              <div className={classes.projectItemLeft}>
                  <p>Twitter Clone</p>
                  <Image style={{ borderRadius: "10px" }}
                      width={100}
                      height={100}
                        alt="Twitter clone"
                      src="/images/image.jpg"
                  />

              </div>
              
</div>
          <div className={classes.minorProject}>
              <p className={classes.minorProjectHeading}>Minor projects</p>
              <div className={classes.minorProjectItem}>
                 
            
                <p><a href="https://aditya-me.netlify.app/assignment-8(wheather%20app)" target="_blank" rel="noreferrer">Weather forecasting website </a></p>
                
                  <Image style={{ borderRadius: "10px" }}
                      width={50}
                      height={50}
                        alt="e-commerce website"
                      src="/images/weatherApi.png"
                  />

              </div>
              <div className={classes.minorProjectItem}>
             
                <p><a href="https://aditya-me.netlify.app/assignment-6/" target="_blank" rel="noreferrer">Music Player</a></p>
                
                  <Image style={{ borderRadius: "10px" }}
                      width={50}
                      height={50}
                        alt="Music Player"
                      src="/images/musicplayer.png"
                  />
              

              </div>
              <div className={classes.minorProjectItem}>

                <p><a  href="https://agile-fortress-31191.herokuapp.com" target="_blank" rel="noreferrer">Food Website</a></p>
                 
        
                  <Image style={{ borderRadius: "10px" }}
                      width={50}
                      height={50}
                        alt="Food website"
                      src="/images/foodapp.png"
                  />


              </div>
              <div className={classes.minorProjectItem}>
             
                <p><a href="https://aditya-me.netlify.app/assignment-9(movie%20search-app)" target="_blank" rel="noreferrer">Movies Api Website</a></p>
                    
                            
                  <Image style={{ borderRadius: "10px" }}
                      width={50}
                      height={50}
                        alt="Movies Api Website"
                      src="/images/movieswebsite.png"
                  />
                
                  

              </div>

          </div>
    </section>
  )
}

export default projects