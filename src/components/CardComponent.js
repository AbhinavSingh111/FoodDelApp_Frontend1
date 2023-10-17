import { CARD_IMG_LINK } from "../../utils/constants";

const CardComponent = (props)=>{
    const {resObj} = props;
    const {name , cloudinaryImageId , cuisines , avgRating , costForTwo , rid} = resObj?.info;
    // console.log(id)
    
    return (
    <div className="bg-pink-100 rounded-lg p-5 m-5 w-80 shadow-lg hover:bg-pink-200" id="card">
        <div  id="restaraunt-image">
            <img className="rounded-lg h-[330.900px]" src={CARD_IMG_LINK+cloudinaryImageId} />
        </div>
        <div className="p-5 whitespace-nowrap overflow-hidden overflow-ellipsis h-90" id="card-description">
            <h5 className="font-bold text-md m-0" id="rest-name">{name}</h5>
            <span className="other-details" id="odt">
                <p className="font-light m-0" id="cousines">{cuisines.join(", ")}</p>
                <p className="font-semibold m-0" id="price">{costForTwo}</p>
                <p className="font-semibold m-0" id="rating">{avgRating}</p>
            </span>
        </div>
    </div>
    )
}

export default CardComponent;