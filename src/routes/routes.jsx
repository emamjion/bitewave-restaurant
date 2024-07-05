import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminLayout from "../layout/AdminLayout";
import About from "../page/About/About";
import Blog from "../page/Blog/Blog";
import Contact from "../page/Contact/Contact";
import AdminDashboard from "../page/Dashboard/AdminDashboard";
import Home from "../page/Home/Home";
import Menu from "../page/Menu/Menu";
import Shop from "../page/Shop/Shop";

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
                element: <Menu/>,
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
            }
        ]
    },

    // Admin Route and Layout
    {
        path: 'admin',
        element: <AdminLayout/>,
        children: [
            {
                index: true,
                element: <AdminDashboard/>
            }
        ]
    }
]);


export default router;