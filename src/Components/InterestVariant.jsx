import "../css/InterestVariant.css"
function InterestVariant (props){

    return (
        <div onClick={() => props.categoryOnClick(props.position)} className={props.chosen == true ? "interest-variant-container-active" : "interest-variant-container"}>
            <p>{props.name}</p>
        </div>
    )
}

export default InterestVariant;