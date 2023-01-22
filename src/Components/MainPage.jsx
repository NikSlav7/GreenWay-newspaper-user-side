import { PicsList } from "../pics/PicsList";
import "../css/MainPageGeneral.css"
import SlideShow from "./SlideShow";
function MainPage(){




    function getBackgroundPic(){
       return PicsList[Math.floor(Math.random() * PicsList.length)].image;
    }

    return (
        <div>
            <img src={getBackgroundPic()} className="main-page-background"></img>
            <SlideShow />
        </div>
    )
}
export default MainPage;