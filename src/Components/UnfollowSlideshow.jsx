import { useDebugValue, useEffect, useRef} from 'react';
import '../css/UnfollowSlideshow.css'
import UnfollowDetailsSlide from './UnfollowDetailsSlide';
import UnfollowedSlide from './UnfollowedSlide';

function UnfollowSlideshow(){

    const idList= useRef([
        "unfollow-details-slide", "unfollowed-slide"
    ])
    const currenSlide = useRef(0);

    useEffect(()=>{
    },[])

    function changeSlide(slideToSlide, forward){
        if (currenSlide.current == slideToSlide)return;
        console.log(slideToSlide + ' ' + currenSlide.current)
        const newSlide =  document.getElementById(idList.current[slideToSlide]);
        const oldSlide = document.getElementById(idList.current[currenSlide.current]);
        newSlide.style.opacity = "100%";
        ["slide-in-from-left", "slide-in-from-right", "slide-out-to-left", "slide-out-to-right"].forEach(anim => {
            newSlide.classList.remove(anim);
            oldSlide.classList.remove(anim);
        })
        void window.offsetWidth;
        if (forward){
            oldSlide.classList.add('slide-out-to-left');
            newSlide.classList.add('slide-in-from-right')
        }
        else {
            oldSlide.classList.add('slide-out-to-right');
            newSlide.classList.add('slide-in-from-left')
        }
        oldSlide.style.zIndex = "0";
        newSlide.style.zIndex = "25";
        currenSlide.current = slideToSlide;
    }

    function setFirstSlide(){
        const el = document.getElementById(idList.current[currenSlide.current]);
        el.style.opacity = "100%";
        el.style.zIndex="2500";
    }
    function getEmail(){
        return document.getElementById('unfollow-details-email').value;
    }

    function firstSlideOnClick(pos, forward){
        fetch("http://localhost:12121/api/unfollow",{
            method: 'post',
            body: getEmail()
        }).then((response) =>{
            changeSlide(pos, forward);
        } )
    }

    return (
        <div className='unfollow-details-container'>
           <UnfollowDetailsSlide id={idList.current[0]} pos={0} nextSlide={firstSlideOnClick}></UnfollowDetailsSlide>
           <UnfollowedSlide id={idList.current[1]}></UnfollowedSlide>
        </div>
    )

}
export default UnfollowSlideshow;