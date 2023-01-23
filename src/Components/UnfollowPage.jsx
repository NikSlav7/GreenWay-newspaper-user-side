import '../css/UnfollowSlideshow.css'
import '../css/UnfollowPage.css'
import { PicsList } from '../pics/PicsList';
import UnfollowSlideshow from './UnfollowSlideshow';
function UnfollowPage(){

    function getBackgroundPic(){
        return PicsList[Math.floor(Math.random() * PicsList.length)].image;
     }
     window.onkeyup = function(event){
        const inp = document.getElementById("unfollow-details-email");
        console.log(inp.value);
        if (validateEmail(inp.value)) editButton(true);
        else editButton(false)
    }
    function editButton(show){
        const element = document.getElementById("unfollow-details-button");
        if (show){
            element.style.visibility="visible";
            element.style.maxHeight='3.5vh';
        }
        else {
            element.style.maxHeight='0';
            void element.offsetWidth;
        }
    }
    function validateEmail(email) {
        if (email === '' || email === undefined) return false;
        const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return res.test(String(email).toLowerCase());
      }
    
    return (
        <div className="unfollow-page-container">
            <img className="unfollow-page-bckg-pic" src={getBackgroundPic()}></img>
            <UnfollowSlideshow></UnfollowSlideshow>
        </div>
    )
}
export default UnfollowPage;