
import classes from "./chats.module.css"
import{BiChevronUpCircle} from "react-icons/bi";
import {BsChatRightText} from "react-icons/bs";
import {FaRegWindowRestore} from "react-icons/fa"
import { useState } from "react";
const Chats = ({boxHandler}) => {
    // chatBoxStatus();
  const [chatcloseStatus,setChatCloseStatus]=useState(false);
 const clickHandler=()=>{

boxHandler();


 }
 const chatBoxStatusHandler=()=>{
    setChatCloseStatus(!chatcloseStatus);
 }
 
    return (
        <>
    
       <div className={classes.chatBox} onClick={clickHandler}>
       
<BsChatRightText style={{fontSize:30}} onClick={chatBoxStatusHandler}/>
    <h1 style={{fontSize:30}}onClick={chatBoxStatusHandler} >Chat Now</h1>
 <FaRegWindowRestore style={{fontSize:30}}/>
   
    
   
       </div>

       </>
        )
    }
    
    export default Chats;