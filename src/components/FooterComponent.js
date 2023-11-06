import { Link } from "react-router-dom";
const FooterComponent = ()=>{
    return (
    <div className="mt-5 ">
            <ul className="block text-slate-600 text-xl">
                <li className="p-4 bg-pink-100  shadow-lg ">
                <Link to="/contact">Contact</Link></li>
                <li className="p-4 bg-pink-100  shadow-lg ">
                <Link to="#">Policy</Link></li>
                <li className="p-4 bg-pink-100  shadow-lg ">
                <Link to="#">FAQ</Link></li>
            </ul>
        </div>
    )
}

export default FooterComponent;