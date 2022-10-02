import React from 'react'
import classes from "./myservices.module.css"
import { RiPencilRuler2Line } from "react-icons/ri"
const myservices = () => {
  return (
    <section className={classes.section} id="services">
        <div className={classes.heading}>
        <p style={{ color: "#f68176",fontSize:"1.5rem", fontFamily: "cursive"}}>What I Do</p>
        <p style={{ color: "white", fontSize: "2rem", fontFamily: "cursive" , marginTop:"-10px"}}><span style={{ borderBottom:"2px solid #f68176" }}>My</span> Services</p>
        </div>
        <container className={classes.container}>
            <div>
          <span > <RiPencilRuler2Line /></span>
          <h5   >UI Designs</h5>
          <p>Designed and Developed user-friendly responsive websites ensuring that all mentioned requirements were met and company procedures fully followed. Developed more than 10 reaponiveand user-friendly websites</p>
            </div>
       
            <div>
          <span > <RiPencilRuler2Line /></span>
          <h5   >Full-Stack Developer(MERN)</h5>
          <p>Dedicated ,Certified and efficient full stack developer with 6 months experience in application layers, presentation layers, and databases. Certified in both frontend and backend technologies.</p>
        </div>
        <div>
          <span> <RiPencilRuler2Line /></span>
          <h5>Backend Developer </h5>
          <p>Dexterous backend developer,skilled at designing APIs,databases and user focused experiences.Worked on databases like MongoDB , DynamoDB and MySQL and Firebase </p>
            </div>
            <div>
          <span> <RiPencilRuler2Line /></span>
          <h5>Amazon Web Services</h5>
          <p> Worked and having Good Knowledge of Amazon Web Services like EC2, S3, Elastic BeanStalk, DynamoDB, Amplify, cloudwatch, VPC, IAM, Autoscaling, Multifactor Authentication,code pipeline etc. </p>
            </div>
        <div>
          <span> <RiPencilRuler2Line /></span>
          <h5>Teaching Assistant</h5>
          <p>Assisted more than 100 coding enthusiast students at coding blocks as a teaching assistant for full stack web development
            course, and Data Structures and Algorithms.
</p>
        </div>
           
        </container>
    </section>
  )
}

export default myservices