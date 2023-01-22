import { AppInfo } from "../AppInfo";
import "../css/WelcomeSlide.css"
import "../css/SlideShow.css"
import { useEffect } from "react";
function WelocomeSlide(props){

   
    return (
        <div id={props.slideId} className="welcome-slide-container" >
            <div className="welcome-message-container">
                <p className="welcome-message">Welcome to  <br></br><span className="welcome-message-company-name">{AppInfo.appName}</span></p>
            </div>
            <div className="welcome-submessage-container">
                <p className="welcome-submessage">Best place to receive great info about health</p>
                 <button className="welocome-slide-continue-button" onClick={()=>props.slideChange(true, props.pos)}>Next slide</button>
            </div>
        </div>
    )
}
export default WelocomeSlide;