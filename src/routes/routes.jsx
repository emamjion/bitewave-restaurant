import Login from "@/page/AuthenticationPage/Login";
import Register from "@/page/AuthenticationPage/Register";
import MenuPage from "@/page/Menu/MenuPage";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminLayout from "../layout/AdminLayout";
import About from "../page/About/About";
import Blog from "../page/Blog/Blog";
import Contact from "../page/Contact/Contact";
import AdminDashboard from "../page/Dashboard/AdminDashboard";
import Home from "../page/Home/Home";
import Shop from "../page/Shop/Shop";
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
        path: 'admin',
        element: <PrivateRoute> <AdminLayout/> </PrivateRoute>,
        children: [
            {
                index: true,
                element: <AdminDashboard/>
            }
        ]
    }
]);


export default router;