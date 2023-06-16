import { Link, NavLink, Outlet } from "react-router-dom";
import './Dashboard.css'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";



const Dashboard = () => {

    const { user, logOut } = useContext(AuthContext);



    const [role, setRole] = useState([]);
    const [isInstructor, setIsInstructor] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    console.log('user', user.email);

    useEffect(() => {
        fetch(`https://lingoz-server-side.vercel.app/users/${user.email}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setRole(data.role);
            })
            .catch(error => {
                // Handle any network or fetch-related errors
                console.error("Error: ", error);
            });
    }, []);

    console.log('Role', role);

    useEffect(() => {
        if (role === 'instructor') {
            setIsInstructor(true);
        } else {
            setIsInstructor(false);
        }

        if (role === 'admin') {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }

        // if (role === 'undefined') {
        //     setIsAdmin(false);
        // } else {
        //     setIsAdmin(false);
        // }
    }, [role]);

    // if (role === 'instructor') {
    //     setIsInstructor(true);
    // }

    // if (role === 'admin') {
    //     setIsAdmin(true);
    // }



    // console.log(user);
    console.log(role);
    // To Do: Check is admin
    // const isAdmin = true;
    // const isInstructor = false;
    const handleLogOut = () => {
        logOut().then(() => {
            console.log('Sign Out Success');
        }).catch((error) => {
            console.log('Sign Out error : ', error);
        });
    }

    return (
        <div>
            {/* <h3>Dashboard</h3> */}
            <div className="flex md:flex-row">

                <nav className="bg-white shadow-xl w-56 h-screen">
                    <ul className="flex flex-col gap-8 p-4 mt-4">
                        {isAdmin ? (
                            // Admin Section
                            <>


                                <div className="avatar mx-auto">
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user.photoURL} />
                                    </div>
                                </div>

                                <h3 className="uppercase text-slate-600 text-center underline cursor-pointer">{user?.displayName}</h3>

                                <h3 className="uppercase btn btn-neutral text-white"><Link to='/dashboard'>{role} Dashboard</Link></h3>

                                <li>
                                    <NavLink to="/">Return Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manage-classes">Manage Classes</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/allusers">Manage Users</NavLink>
                                </li>
                                <button onClick={handleLogOut} className='btn btn-neutral'><Link to="/login"><span className='text-white'>Log Out</span></Link></button>
                            </>
                        ) : isInstructor ? (
                            // Instructor Section
                            <>


                                <div className="avatar mx-auto">
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user.photoURL} />
                                    </div>
                                </div>

                                <h3 className="uppercase text-slate-600 text-center underline cursor-pointer">{user?.displayName}</h3>

                                <h3 className="uppercase btn btn-neutral text-white"><Link to='/dashboard'>{role} Dashboard</Link></h3>

                                <li>
                                    <NavLink to="/">Return Home</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/add-classes">Add Class</NavLink>
                                </li>
                                <button onClick={handleLogOut} className='btn btn-neutral text-white'><Link to="/login"><span className='text-white'>Log Out</span></Link></button>
                            </>
                        ) : (
                            // Student Section (Default)
                            <>


                                <div className="avatar mx-auto">
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user.photoURL} />
                                    </div>
                                </div>

                                <h3 className="uppercase text-slate-600 text-center underline cursor-pointer">{user?.displayName}</h3>

                                <h3 className="uppercase btn btn-neutral text-white"><Link to='/dashboard'>Student Dashboard</Link></h3>

                                <li>
                                    <NavLink to="/">Return Home</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/classesCart">My Cart</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/payment">Payment</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/payment-history">Payment History</NavLink>
                                </li>
                                {/* Add student-specific links here */}
                                <button onClick={handleLogOut} className='btn btn-neutral text-white'><Link to="/login"><span className='text-white'>Log Out</span></Link></button>
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