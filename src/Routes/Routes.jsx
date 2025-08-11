import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Shop from "../Pages/Shop/Shop/Shop";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import Contact from "../Pages/Contact/Contact/Contact";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Cart from "../Pages/Cart/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import AddCar from "../Pages/DashBoard/AddCar/AddCar";
import MangeCar from "../Pages/DashBoard/ManageCar/MangeCar";
import ManageBooking from "../Pages/DashBoard/ManageBooking/ManageBooking";
import ProtectedRoute from "./ProtectedRoute";
import UpdateCar from "../Pages/DashBoard/UpdateCar/UpdateCar";
import AdminStats from "../Pages/DashBoard/AdminStatus/AdminStatus";
import TestDrive from "../Pages/TestDrive/TestDrive";
import ManageUser from "../Pages/DashBoard/ManageUser/ManageUser";
import ManageOrder from "../Pages/DashBoard/ManageOrder/ManageOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/details/:category/:id",
        element: <ViewDetails></ViewDetails>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/testDrive",
        element: <TestDrive></TestDrive>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashBoardLayout></DashBoardLayout>
      </ProtectedRoute>
    ),
    children: [

        
      {
        path: "/dashboard",
        element: <AdminStats></AdminStats>
      },
      {
        path: "add-car",
        element: <AddCar></AddCar>,
      },
      {
        path: "manage-cars",
        element: <MangeCar></MangeCar>,
      },
      {
        path: "manage-bookings",
        element: <ManageBooking></ManageBooking>,
      },
      {
        path: "update-car/:id",
        element: <UpdateCar></UpdateCar>,
      },
      {
        path: "manage-user",
        element:<ManageUser></ManageUser>,
      },
      {
        path: "manage-order",
        element:<ManageOrder></ManageOrder>,
      },
    ],
  },
]);

export default router;
