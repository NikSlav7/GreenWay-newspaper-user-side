import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import { useEffect, useState, useRef } from "react";
import "../css/SlideShow.css"
import EmailSlide from "./EmailSlide";
import FinalSlide from "./FinalSlide";
import InterestChoosingSlide from "./InterestChoosingSlide";
import WelocomeSlide from "./WelcomeSlide";
function SlidesList(){
    const idList= useRef([
        "welcome-slide", "email-slide", "interest-choosing-slide", "final-slide"
    ])
    const currenSlide = useRef(0);
    const chosenList = useRef([]);
    const email = useRef('');





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

    const register = () =>{
        fetch("http://localhost:12121/api/interest/get-all", {
            method: "get",
        }).then((result) =>{
            result.json().then((interestList) =>{
                fetch("http://localhost:12121/api/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            email: email.current,
                            interest1: interestList[chosenList.current[0]],
                            interest2: chosenList.current[1] != null ? interestList[chosenList.current[1]] : null,
                            interest3: chosenList.current[2] != null ? interestList[chosenList.current[2]] : null
                        }
                    )
                
                })
            })
        })
    }

    useEffect(()=>{
        setFirstSlide();
    },[])

    function setFirstSlide(){
        const el = document.getElementById(idList.current[currenSlide.current]);
        el.style.opacity = "100%";
        el.style.zIndex="2500";
    }

    const changeSlideForSlides = (forward, pos) => {
        console.log(pos)
        if (!forward && pos === 0) return;
        if (forward && pos === 4) return;

        if (forward) changeSlide(pos+1, true);
        else changeSlide(pos-1, false)
    }
    return (
        <div className="slide-show-list">
            <WelocomeSlide slideChange={changeSlideForSlides} pos={0} slideId={idList.current[0]} ></WelocomeSlide>
            <EmailSlide emailRef={email} slideChange={changeSlideForSlides} pos={1} slideId={idList.current[1]} ></EmailSlide>
            <InterestChoosingSlide chosenList={chosenList} register={register} slideChange={changeSlideForSlides} pos={2} slideId={idList.current[2]} ></InterestChoosingSlide>
            <FinalSlide  slideChange={changeSlideForSlides} pos={3} slideId={idList.current[3]} ></FinalSlide>
        </div>
    )

}
export default SlidesList;