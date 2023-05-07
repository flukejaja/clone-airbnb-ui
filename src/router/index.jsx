import AuthpageFullScreen from '../components/auth/Authpagefullscreen.jsx';
import Navbar from '../components/layout/index.jsx';
import {
    createBrowserRouter,
} from "react-router-dom";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar/>,
        // children: [
        //     {
        //         path: "/",
        //         element: <Item/>
        //     },
        // ],
    },
    {
        path: "/login",
        element: <AuthpageFullScreen/>,
    },
]);