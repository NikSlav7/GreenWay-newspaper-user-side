import '../css/UnfollowSlideshow.css'
function UnfollowDetailsSlide(props){
    return (
        <div className="unfollow-slide-container" id={props.id}>
            
                <div className='unfollow-details-header-container'>
                    <p className='unfollow-details-header'>Unfollow</p>
                </div>

                <div className='unfollow-details-email-container'>
                    <input id="unfollow-details-email" className='unfollow-details-email' placeholder='Enter Email'/>
                </div>

                <div className='unfollow-details-button-container'>
                    <button className='unfollow-details-button' id='unfollow-details-button' onClick={() =>props.nextSlide(props.pos+1, true)}>Confirm</button>
                </div>   
        </div>
    )
}

export default UnfollowDetailsSlide;