import { Outlet } from "react-router-dom";
import DashBoardNav from "../Pages/DashBoard/DashBoardNav";


const DashBoardLayout = () => {
    return (
        <div className="flex">
           <DashBoardNav></DashBoardNav>
           <div className="container mx-auto poppins">
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default DashBoardLayout;