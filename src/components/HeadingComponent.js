import { LOGO_IMG_LINK } from "../../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import userContext from "../../utils/userContext";
// to use redux store data we use selector hook from redux-react
import { useSelector } from "react-redux";

const HeadingComponent = ()=>{
    // accessing data from cart slice of redux store by subscribing to it using selector
    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems)
    
    // accessing context
    const {loggedUser} = useContext(userContext);
    
    const [btnText  , setBtnText] = useState("Login")
    const onlineStatus = useOnlineStatus();
    return (
    <div className="flex justify-between bg-pink-100 shadow-lg px-5">
        <div >
            <img className="w-16 my-3"src={LOGO_IMG_LINK} />
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4 items-center  ">
                <li className="px-5 shadow-lg">{onlineStatus === true ? "🟢" : "🔴"}</li>
                <li className="px-5 shadow-lg">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-5 shadow-lg">
                    <Link to="/grocery">Grocery</Link>
                </li>
                <li className="px-5 shadow-lg">
                    <Link to="/about">About Us</Link>
                </li>
                <li className="px-5 shadow-lg">
                    <Link to="/contact">Contact Us</Link>
                    </li>
                
                <li className="px-5 shadow-lg">Cart ({cartItems.length})</li>

                <li className="px-5 bg-pink-200 shadow-lg">
                    {btnText==="Logout"?loggedUser:""}
                </li>
                <button className="px-4 py-2 mx-4 rounded-lg bg-blue-300 w-20 shadow-lg hover:bg-blue-400" onClick={()=>{
                    btnText==="Login"?setBtnText("Logout"):setBtnText("Login")
                    }}>{btnText}</button>
            </ul>
        </div>

    </div>
    )
    
}

export default HeadingComponent;