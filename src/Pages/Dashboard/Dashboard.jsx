import { NavLink, Outlet } from "react-router-dom";
import './Dashboard.css'



const Dashboard = () => {

    // To Do: Check is admin
    const isAdmin = false;
    const isInstructor = false;

    return (
        <div>
            {/* <h3>Dashboard</h3> */}
            <div className="flex md:flex-row">

                <nav className="bg-white shadow-xl w-56 h-screen">
                    <ul className="flex flex-col gap-8 p-4 mt-4">
                    {isAdmin ? (
                            // Admin Section
                            <>
                                <li>
                                    <NavLink to="/dashboard">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/allusers">Manage Users</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/j">Classes</NavLink>
                                </li>
                            </>
                        ) : isInstructor ? (
                            // Instructor Section
                            <>
                                <li>
                                    <NavLink to="/dashboard">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/e">Instructors</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/j">Classes</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/j">Classes</NavLink>
                                </li>
                            </>
                        ) : (
                            // Student Section (Default)
                            <>
                                <li>
                                    <NavLink to="/dashboard">Home</NavLink>
                                </li>
                                {/* Add student-specific links here */}
                            </>
                        )}

                    </ul>
                </nav>

                <div className="p-12 w-full"> <Outlet /></div>

            </div>


        </div>
    );
};

export default Dashboard;