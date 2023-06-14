import { NavLink, Outlet } from "react-router-dom";
import './Dashboard.css'



const Dashboard = () => {

    // To Do: Check is admin
    const isAdmin = true;

    return (
        <div>
            {/* <h3>Dashboard</h3> */}
            <div className="flex md:flex-row">

                <nav className="bg-white shadow-xl w-56 h-screen">
                    <ul className="flex flex-col gap-8 p-4 mt-4">
                        {isAdmin &&
                            <>
                                {/* <li className="">
                                    <NavLink to="/dashboard">Home</NavLink>
                                </li> */}

                                <li className="">
                                    <NavLink to="/dashboard/allusers">All Users</NavLink>
                                </li>

                                <li className="">
                                    <NavLink to="/dashboard/j">Classes</NavLink>
                                </li>
                            </>
                        }

                        {!isAdmin &&
                            <>
                                <li className="">
                                    <NavLink to="/dashboard">Home</NavLink>
                                </li>

                                <li className="">
                                    <NavLink to="/dashboard/e">Instructors</NavLink>
                                </li>

                                <li className="">
                                    <NavLink to="/dashboard/j">Classes</NavLink>
                                </li>

                                <li className="">
                                    <NavLink to="/dashboard/j">Classes</NavLink>
                                </li>
                            </>
                        }

                    </ul>
                </nav>

                <div className="p-12"> <Outlet /></div>

            </div>


        </div>
    );
};

export default Dashboard;