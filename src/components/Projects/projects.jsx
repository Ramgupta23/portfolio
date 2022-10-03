import React from 'react'

 import classes from './projects.module.css'

const projects = () => {
  return (
    <section className={classes.projectSection} id="projects">
<div className={classes.majorProject}>
              <h1>Projects</h1>
              <div className={classes.projectItemRight}>
                
                <p><a  href="https://adityashoppingapp.herokuapp.com" target="_blank" rel="noreferrer">E-Commerce Website</a></p>
                 
                  <img style={{ borderRadius: "10px",width:"100px", height:"100px" }}
                      
                       
                      alt="e-commerce website"
                      src="/images/eCommerceWebsite.jpg"
                      
                  />
                  
              </div>
              <div className={classes.projectItemLeft}>
              
                <p><a href="https://aadityachatapp.herokuapp.com" target="_blank" rel="noreferrer">Chatting app </a></p>
                 <img style={{ borderRadius: "10px" ,width:"100px", height:"100px"}}
                     
                     
                      alt="Chatting app"
                      src="/images/chatting-app.jpg"
                  />
                 
              </div>
              <div className={classes.projectItemRight}>
           
                <p><a  href="https://aditya-blog-website.herokuapp.com" target="_blank" rel="noreferrer">Blogging website </a></p>
           
                  <img style={{ borderRadius: "10px",width:"100px", height:"100px" }}
                     
                        alt="Blogging website"
                      src="/images/adityaImg.jpg"
                  />
                 
              </div>
              <div className={classes.projectItemLeft}>
                  <p style={{color:"white"}}>Twitter Clone</p>
                  <img style={{ borderRadius: "10px" ,width:"100px", height:"100px"}}
                      
                        alt="Twitter clone"
                      src="/images/image.jpg"
                  />

              </div>
              
</div>
          <div className={classes.minorProject}>
              <p className={classes.minorProjectHeading}>Minor projects</p>
              <div className={classes.minorProjectItem}>
                 
            
                <p><a href="https://aditya-me.netlify.app/assignment-8(wheather%20app)" target="_blank" rel="noreferrer">Weather website </a></p>
                
                  <img style={{ borderRadius: "10px",width:"50px", height:"50px" }}
                      
                        alt="e-commerce website"
                      src="/images/weatherApi.jpg"
                  />

              </div>
              <div className={classes.minorProjectItem}>
             
                <p><a href="https://aditya-me.netlify.app/assignment-6/" target="_blank" rel="noreferrer">Music Player</a></p>
                
                  <img style={{ borderRadius: "10px",width:"50px", height:"50px" }}
                    
                        alt="Music Player"
                      src="/images/musicplayer.jpg"
                  />
              

              </div>
              <div className={classes.minorProjectItem}>

                <p><a  href="https://agile-fortress-31191.herokuapp.com" target="_blank" rel="noreferrer">Food Website</a></p>
                 
        
                  <img style={{ borderRadius: "10px",width:"50px", height:"50px" }}
                     
                        alt="Food website"
                      src="/images/foodapp.jpg"
                  />


              </div>
              <div className={classes.minorProjectItem}>
             
                <p><a href="https://aditya-me.netlify.app/assignment-9(movie%20search-app)" target="_blank" rel="noreferrer">Movies Api Website </a></p>
                    
                            
                  <img style={{ borderRadius: "10px",width:"50px", height:"50px" }}
                      
                        alt="Movies Api Website"
                      src="/images/movieswebsite.jpg"
                  />
                
                  

              </div>

          </div>
    </section>
  )
}

export default projects