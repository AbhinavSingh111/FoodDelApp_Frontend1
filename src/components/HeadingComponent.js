import { LOGO_IMG_LINK } from "../../utils/constants";
import { useState } from "react";

const HeadingComponent = ()=>{
    const [btnText  , setBtnText] = useState("Login")
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
                <button id="log-btn" onClick={()=>{
                    if(btnText==="Login"){
                        setBtnText("Logout")
                    }
                    else{
                        setBtnText("Login")
                    }
                    }}>{btnText}</button>
            </ul>
        </div>

    </div>
    )
    
}

export default HeadingComponent;