import { CARD_IMG_LINK } from "../../utils/constants";

const CardComponent = (props)=>{
    const {resObj} = props;
    const {name , cloudinaryImageId , cuisines , avgRating , costForTwo} = resObj?.info;
    
    return (
    <div className="card-comp" id="card">
        <div className="res-img" id="restaraunt-image">
            <img src={CARD_IMG_LINK+cloudinaryImageId} />
        </div>
        <div className="card-desc" id="card-description">
            <h5 id="rest-name">{name}</h5>
            <span className="other-details" id="odt">
                <p id="cousines">{cuisines.join(", ")}</p>
                <p id="price">{costForTwo}</p>
                <p id="rating">{avgRating}</p>
            </span>
        </div>
    </div>
    )
}

export default CardComponent;