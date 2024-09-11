import Login from "@/page/AuthenticationPage/Login";
import Register from "@/page/AuthenticationPage/Register";
import AddItem from "@/page/Dashboard/Admin/AddItem";
import AllUsers from "@/page/Dashboard/Admin/AllUsers";
import Cart from "@/page/Dashboard/Cart";
import UserDashboard from "@/page/Dashboard/User/UserDashboard";
import MenuPage from "@/page/Menu/MenuPage";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminLayout from "../layout/AdminLayout";
import About from "../page/About/About";
import Blog from "../page/Blog/Blog";
import Contact from "../page/Contact/Contact";
import Home from "../page/Home/Home";
import Shop from "../page/Shop/Shop";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'menu',
                element: <MenuPage/>
            },
            {
                path: 'shop',
                element: <Shop/>
            },
            {
                path: 'blog',
                element: <Blog/>
            },
            {
                path: 'contact',
                element: <Contact/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
        ]
    },

    // Admin Route and Layout
    {
        path: 'dashboard',
        element: <PrivateRoute> <AdminLayout/> </PrivateRoute>,
        children: [
            {
                index: true,
                element: <UserDashboard/>,
            },
            {
                path: '/dashboard/cart',
                element: <Cart/>,
            },


            // Admin routes
            {
                path: '/dashboard/all-users',
                element: <AdminRoute> <AllUsers/> </AdminRoute>
            },
            {
                path: '/dashboard/add-item',
                element: <AdminRoute> <AddItem/> </AdminRoute>
            },
        ]
    }
]);


export default router;