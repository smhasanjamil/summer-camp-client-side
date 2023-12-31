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
import ManageClasses from "../Pages/Dashboard/Classes/ManageClasses";
import FeedBack from "../Pages/Dashboard/Classes/FeedBack";
import Classes from "../components/Home/Classes/Classes";
import ClassesCart from "../Pages/Dashboard/Cart/ClassesCart";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Footer from "../components/Footer/Footer";
import UpcommingCourse from "../components/Home/UpcommingCourse";

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
                element: <Classes />,
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
            {
                path: "/upcomming-course",
                element: <UpcommingCourse />,
            },
            {
                path: "/footer",
                element: <Footer />,
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
                path: "/dashboard/manage-classes",
                element: <ManageClasses />,
            },
            {
                path: "/dashboard/allusers",
                element: <AllUsers />,
            },
            {
                path: "/dashboard/add-classes",
                element: <AddClasses />,

            },
            {
                path: "/dashboard/feedback",
                element: <FeedBack />,
            },
            {
                path: "/dashboard/classesCart",
                element: <ClassesCart />,
            },
            {
                path: "/dashboard/payment-history",
                element: <PaymentHistory />,
            },
            {
                path: "/dashboard/payment",
                element: <Payment />,
            },
        ],
    },


]);