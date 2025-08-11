import { Outlet } from "react-router-dom";
import DashBoardNav from "../Pages/DashBoard/DashBoardNav";


const DashBoardLayout = () => {
    return (
        <div className="flex">
           <div className="">
            <DashBoardNav></DashBoardNav>
           </div>
           <div className="container mx-auto px-4  poppins ">
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default DashBoardLayout;