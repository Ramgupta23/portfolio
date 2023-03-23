import classes from "./SocialLinks.module.css";
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,}from "react-share"
    const shareUrlFacebook="https://www.facebook.com/profile.php?id=100023527360819";
    const shareUrlwhatsapp="https://web.whatsapp.com/"
const emailUrl="https://www.gmail.com"
    const shareUrlTwitter="https://twitter.com/Aditya946766"
   const shareUrlLinkedin="https://www.linkedin.com/in/aaditya-singh-8472991b7/"
const SocialLinks = ()=>{
   
return(
    <div className={classes.links}>
    <ul>
    <EmailShareButton url={emailUrl}
 subject={'Need Someone to '} ><li  className={classes.email}></li></EmailShareButton>
        < WhatsappShareButton url={shareUrlwhatsapp}><li className={classes.whatsapp}></li></WhatsappShareButton>
        <LinkedinShareButton url={shareUrlLinkedin}><li className={classes.linkedin}></li></LinkedinShareButton>
        <FacebookShareButton url={shareUrlFacebook}><li className={classes.facebook}></li></FacebookShareButton>
        <TwitterShareButton url={shareUrlTwitter}><li className={classes.twitter}></li></TwitterShareButton>
    </ul>
</div>
)
}
export default SocialLinks