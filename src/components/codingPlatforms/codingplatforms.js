import classes from "./codingPlatforms.module.css"
import {FaLaptopCode} from "react-icons/fa";
import{BiChevronUpCircle} from "react-icons/bi"
import {FaRegWindowRestore} from "react-icons/fa"
const Codingplatforms = ({paltformhandler}) => {
   const onclickHandler=()=>{
    paltformhandler();
   }
    return (
       <div className={classes.platformBox} onClick={onclickHandler} >
<FaLaptopCode style={{fontSize:30}}/>
    <h1>Competative Platforms</h1>
<FaRegWindowRestore style={{fontSize:30}}/>
       </div>
        
        )
    }
    
    export default Codingplatforms;