import { useEffect, useRef, useState } from "react";
import "../css/InterestChoosingSlide.css"
import "../css/SlideShow.css"
import InterestVariant from "./InterestVariant";

function InterestChoosingSlide(props){

    const[interest, setInterests] = useState([]);
    const[flag, setFlag] = useState(false);

    function getAllInterest(){
        fetch("http://localhost:12121/api/interest/get-all", {
            method: "get",
        }).then((result) =>{
            result.json().then((interestList) =>{
                console.log(interestList);
                let arr = [];
                for (let i = 0; i < interestList.length; i++){
                    arr.push({"name": interestList[i], "chosen":false});
                }
                setInterests(interest => arr);
            })
        })
    }

    const categoryOnClick = (pos) =>{
        const copy = interest;
        copy[pos]['chosen'] = !copy[pos]['chosen'];
        if (copy[pos]['chosen'] == true){
            props.chosenList.current.push(pos);
        }
        else {
            let ind = props.chosenList.current.indexOf(pos);
            props.chosenList.current.splice(ind, 1);
        }
        setInterests(interest => copy)
        setFlag(!flag)
        removeOddElements()
    }
    function removeOddElements(){
        if (props.chosenList.current.length > 3){
           const copy = interest;
           let pos = props.chosenList.current.shift();
           copy[pos]['chosen'] = !copy[pos]['chosen'];
           setInterests(interest => copy)
            setFlag(!flag)
        }
    }
    useEffect(()=>{
        
        getAllInterest();
    }, [])

    function onNextSlideButtonClick(){
        props.register();
        props.slideChange(true, props.pos);
    }

    return (
        <div id={props.slideId} className="interest-choosing-slide-container">
            <div className="interest-choosing-slide-header">
                <p className="interest-choosing-main-header">Choose up to 3 interests</p>
                <p className="interest-choosing-sub-header">We will send you articles based on your interest</p>
            </div>
            <div className="interest-choosing-container">
                <div className="interest-choosing-grid">
                    {interest.length != 0 && interest.map((interest, ind) => <InterestVariant categoryOnClick={categoryOnClick} name={interest['name']} chosen={interest['chosen']} position={ind}/>)}
                </div>
            </div>
            <div className="interest-choosing-slide-next-slide-button-container">
                <button className="interest-choosing-slide-next-slide-button" onClick={()=>onNextSlideButtonClick()}>Finish</button>
            </div>
        </div>
    )
}
export default InterestChoosingSlide;
