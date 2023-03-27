import {FiSend} from "react-icons/fi"
import Chats from "./chat"
import classes from "./chats.module.css"
const OpenchatBox=({boxHandler,chatcloseStatus})=>{
    return(
        <section className={classes.openchatBox} >
         <Chats boxHandler={boxHandler} chatcloseStatus={chatcloseStatus}/>
         <div className={classes.chats} >
            <p style={{color:"white",fontSize:"16px",textAlign:"center"}}>Please fill this form to  chat with Aditya Singh.</p>
         <form  className={classes.inputForm}>
            <input placeholder="Enter your Name"/>
            <input placeholder="Enter your Phone no"/>
            <input placeholder="Enter your Email"/>
           
            
            
            <button> Submit</button>
         </form>
         <div className={classes.submitBox}>
            <form>
            <input placeholder="Enter your message" className={classes.chatsubmit}/>
            <button className={classes.chatSubmitBtn}><FiSend /></button>
            </form>
            
           
         </div>
         </div>
        </section>
    )
}

export default OpenchatBox