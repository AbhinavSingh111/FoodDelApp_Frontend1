import React from "react";
import ReactDOM from "react-dom/client";
import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";
import HeadingComponent from "./components/HeadingComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = ()=>{
    return (
    <div id="app">
        <HeadingComponent />
        <BodyComponent />
        <FooterComponent />
    </div>
    )

}

root.render(<AppLayout />)