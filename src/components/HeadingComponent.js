import { LOGO_IMG_LINK } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const HeadingComponent = ()=>{
    const [btnText  , setBtnText] = useState("Login")
    const onlineStatus = useOnlineStatus();
    return (
    <div className="heading" id="heading">
        <div id="heading-img">
            <img src={LOGO_IMG_LINK} />
        </div>
        <div className="nav-list" id="nav-bar">
            <ul>
                <li>{onlineStatus === true ? "🟢" : "🔴"}</li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/grocery">Grocery</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                    </li>
                <li>Cart</li>
                <button id="log-btn" onClick={()=>{
                    btnText==="Login"?setBtnText("Logout"):setBtnText("Login")
                    }}>{btnText}</button>
            </ul>
        </div>

    </div>
    )
    
}

export default HeadingComponent;