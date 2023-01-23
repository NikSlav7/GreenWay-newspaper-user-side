import "../css/UnfollowedSlide.css"
function UnfollowedSlide(props){

    return (
        <div className="unfollowed-slide-container" id={props.id}>
            <div className="unfollowed-slide-header-container">
                <p className="unfollowed-slide-header">You have unfollowed <br /> <span className="unfollowed-slide-header-comapany-name">Greenway</span></p>
            </div>

            <div className="unfollowed-slide-message-container">
                 <p className="unfollowed-slide-message">You have successfully unfollowed Greenway. You may always <a href="/">join us again!</a></p>
            </div>
        </div>
    )
}
export default UnfollowedSlide;