import Codingplatforms from "./codingplatforms";
import classes from "./codingPlatforms.module.css";
const OpenCodingplatforms=({paltformhandler})=>{
    const onclickHandler=()=>{
        paltformhandler();
       }
return (
    <>
    <div className={classes.openplatformBox} onClick={onclickHandler} >
    <Codingplatforms />
    <h1 style={{color:"white"}}>Currently working on it .....</h1>

    </div>


    </>
)
}

export default OpenCodingplatforms;