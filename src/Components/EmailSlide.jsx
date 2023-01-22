import "../css/EmailSlide.css"
import "../css/SlideShow.css"
function EmailSlide(props){



    window.onkeyup = function(event){
        const inp = document.getElementById("email-slide-email-input");
        console.log(inp.value);
        if (validateEmail(inp.value)) editButton(true);
        else editButton(false)
    }
    function editButton(show){
        const element = document.getElementById("email-slide-next-slide-button");
        if (show){
            element.style.visibility="visible";
            element.style.maxHeight='3.5vh';
        }
        else {
            element.style.maxHeight='0';
            void element.offsetWidth;
        }
    }
    function onNextSlideButtonClick(){
        let email = document.getElementById("email-slide-email-input").value;
        let url = new URL("http://localhost:12121/api/check-if-registered");
        let params = {'email':email};
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        fetch(url, {
           method: "GET" 
        }).then((result) =>{
            result.json().then((registered) =>{
                if (!registered){
                    props.slideChange(true, props.pos)
                    props.emailRef.current=email;
                }
                else {
                    alert("Such email is already registered, try another")
                }
            })
        })
    }
    function validateEmail(email) {
        if (email === '' || email === undefined) return false;
        const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return res.test(String(email).toLowerCase());
      }
    return (
        <div id={props.slideId} className="email-slide-container">
            <div className="email-slide-header-container">
                <p className="email-slide-header">Enter the email</p>
            </div>
            <div className="email-slide-subheader-container">
                <p className="email-slide-subheader">Enter the email in order to receive appropriate articles daily!</p>
            </div>
            <div className="email-slide-email-input-container">
                <input className="email-slide-email-input" placeholder="email" id="email-slide-email-input"></input>
            </div>
            <div className="email-slide-next-slide-button-container">
                <button id="email-slide-next-slide-button" className="email-slide-next-slide-button" onClick={()=>onNextSlideButtonClick()}>Next</button>
            </div>
        </div>
    )
}
export default EmailSlide;