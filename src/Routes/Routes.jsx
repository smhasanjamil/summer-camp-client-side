import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../components/Main/Main";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Error404 from "../Pages/Error404";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import PrivateRoute from "./PrivateRoute";
import Home from "../components/Home/Home";
import Instructors from "../components/Instructors/Instructors";
import AddClasses from "../Pages/Dashboard/Classes/AddClasses";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/instructors",
                element: <Instructors />,
            },
            {
                path: "/classes",
                element: <p>classes</p>,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <SignUp />,
            },
        ],
    },
    // {
    //     path: "/student-dashboard",
    //     element: <div>student-dashboard</div>,
    // },
    // {
    //     path: "/instructor-dashboard",
    //     element: <div>instructor-dashboard</div>,
    // },
    // {
    //     path: "/admin-dashboard",
    //     element: <div>admin-dashboard</div>,
    // },


    {
        path: "*",
        element: <Error404 />,
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: "/dashboard/allusers",
                element: <AllUsers />,
            },
            {
                path: "/dashboard/add-classes",
                element: <AddClasses />,
            },
        ],
    },


]);