import { AppInfo } from "../AppInfo";
import "../css/FinalSlide.css"
function FinalSlide(props){
    return (
        <div id={props.slideId} className="final-slide-container">
            <div className="final-slide-header-container">
                <p className="final-slide-header">Thank You!</p>
            </div>
            <div className="final-slide-subheader-container">
                <p className="final-slide-subheader">{AppInfo['finalMessage']}</p>
            </div>
        </div>
    )
}
export default FinalSlide;
