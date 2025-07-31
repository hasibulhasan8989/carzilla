import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Shop from "../Pages/Shop/Shop/Shop";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import Contact from "../Pages/Contact/Contact/Contact";
import About from "../Pages/About/About";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/shop',
                element:<Shop></Shop>
            },
            {
                path:'/details/:id',
                element:<ViewDetails></ViewDetails>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/about',
                element:<About></About>
            },

        ]
    
    }
])

export default router