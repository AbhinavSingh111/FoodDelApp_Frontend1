import { LOGO_IMG_LINK } from "../../utils/constants";

const HeadingComponent = ()=>{
    return (
    <div className="heading" id="heading">
        <div id="heading-img">
            <img src={LOGO_IMG_LINK} />
        </div>
        <div className="nav-list" id="nav-bar">
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Profile</li>
                <li>Cart</li>
            </ul>
        </div>

    </div>
    )
    
}

export default HeadingComponent;