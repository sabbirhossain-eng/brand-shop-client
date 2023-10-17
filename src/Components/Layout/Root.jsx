import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";

const Root = () => {
    return (
        <div className="md:px-20 mx-auto">
            <div className="my-4 mb-4">
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;