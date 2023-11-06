import { LOGO_IMG_LINK } from "../../utils/constants";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import userContext from "../../utils/userContext";
// to use redux store data we use selector hook from redux-react
import { useSelector } from "react-redux";

library.add(faBars);
const HeadingComponent = () => {
  // accessing data from cart slice of redux store by subscribing to it using selector
  const cartItems = useSelector((store) => store.cart.items);

  // accessing context
  const { loggedUser } = useContext(userContext);

  const [btnText, setBtnText] = useState("Login");
  const [sideBar, setSideBar] = useState(false);
  const onlineStatus = useOnlineStatus();

  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };

  return (
    <>
    <div>
      {/* hamburger for small screens */}
      
        <div className="md:hidden">
            <div className="flex justify-between">
                <img className="w-16 my-3 md:hidden  p-4" src={LOGO_IMG_LINK} />
       
                <button className="justify-end p-4 mt-0 text-blue-300" onClick={toggleSideBar}>
          
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
      </div>

      {/* sidebar for smaller screens */}
    
      {sideBar && (
        <div className="md:hidden fixed top-0 left-0 h-screen w-1/2 bg-pink-100 p-4 transform transition-transform ease-in-out duration-300 z-10">
          <ul className="text-slate-700 text-xl space-y-4" onClick={toggleSideBar}>
            <li className="px-5 ">
              <Link to="/">Home</Link>
            </li>
            <li className="px-5 ">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-5 ">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-5 ">
              <Link to="/contact">Contact Us</Link>
            </li>

            <li className="px-5 ">
              <Link to="/cart">Cart ({cartItems.length})</Link>
            </li>

            <li className="px-5 bg-pink-200 ">
              {btnText === "Logout" ? loggedUser : ""}
            </li>
            
          </ul>
          <button
              className="px-4 py-2 m-4 rounded-lg bg-blue-300 w-auto shadow-lg hover:bg-blue-400"
              onClick={() => {
                btnText === "Login"
                  ? setBtnText("Logout")
                  : setBtnText("Login");
              }}
            >
              {btnText}
            </button>
        </div>
      )}

      <nav className="hidden md:flex justify-between bg-pink-100 shadow-lg px-5">
        <div className="flex items-center space-x-4">
          <img className="w-16 my-3" src={LOGO_IMG_LINK} />
        </div>
        <div className="hidden md:flex items-center">
          <ul className="hidden md:flex p-4 m-4 items-center text-slate-800 text-xl ">
            <li className="px-5 ">
              {onlineStatus === true ? "🟢" : "🔴"}
            </li>
            <li className="px-5 ">
              <Link to="/">Home</Link>
            </li>
            <li className="px-5 ">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-5 ">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-5 ">
              <Link to="/contact">Contact Us</Link>
            </li>

            <li className="px-5">
              <Link to="/cart">Cart ({cartItems.length})</Link>
            </li>

            <li className="px-5 bg-pink-200 ">
              {btnText === "Logout" ? loggedUser : ""}
            </li>
            <button
              className="w-auto px-4 py-2 mx-4 rounded-lg bg-blue-300 shadow-lg hover:bg-blue-400"
              onClick={() => {
                btnText === "Login"
                  ? setBtnText("Logout")
                  : setBtnText("Login");
              }}
            >
              {btnText}
            </button>
          </ul>
        </div>
      </nav>
      </div>
    </>
  );
};

export default HeadingComponent;
