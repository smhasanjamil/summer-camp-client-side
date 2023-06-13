import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../components/Main/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/instructors",
                element: <p>instructors</p>,
            },
            {
                path: "/classes",
                element: <p>classes</p>,
            },
            {
                path: "/login",
                element: <p>login</p>,
            },
            {
                path: "/register",
                element: <p>register</p>,
            },
        ],
    },
    {
        path: "/student-dashboard",
        element: <div>student-dashboard</div>,
    },
    {
        path: "/instructor-dashboard",
        element: <div>instructor-dashboard</div>,
    },
    {
        path: "/admin-dashboard",
        element: <div>admin-dashboard</div>,
    },
]);