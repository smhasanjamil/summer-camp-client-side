import { Link, NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import './Navbar.css';
import logoImg from '../../../assets/images/lingoz-logo.png';
import { AuthContext } from '../../../providers/AuthProvider';
import avatarImg from '../../../assets/images/avatar.jpg';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    const [isOpen, setIsOpen] = useState(false);

    const handleLogOut = () => {
        logOut().then(() => {
            console.log('Sign Out Success');
        }).catch((error) => {
            console.log('Sign Out error : ', error);
        });
    }

    return (
        <div>
            <nav className="navbar mx-auto md:container fixed top-0 z-10">
                <div className="navbar-logo">
                    <Link to="/"><img src={logoImg} alt="" className=' h-8 md:h-12 md:w-full' /></Link>
                </div>
                <ul className={isOpen ? "navbar-links active" : "navbar-links"}>

                    <li className="navbar-item">
                        <NavLink to="/">Home</NavLink>
                    </li>

                    <li className="navbar-item">
                        <NavLink to="/instructors">Instructors</NavLink>
                    </li>

                    <li className="navbar-item">
                        <NavLink to="/classes">Classes</NavLink>
                    </li>

                    {!user && <li className="navbar-item">
                        <NavLink to="/login">Login</NavLink>
                    </li>}


                    {!user && <li className="navbar-item">
                        <NavLink to="/register">Register</NavLink>
                    </li>}

                    {/* {user && <li className="navbar-item">
                        <NavLink to="/instructor-dashboard">Dashboard</NavLink>
                    </li>}

                    {user &&  <li className="navbar-item">
                        <NavLink to="/admin-dashboard">Dashboard</NavLink>
                    </li>}

                    {user && <li className="navbar-item">
                        <NavLink to="/student-dashboard">Dashboard</NavLink>
                    </li>} */}

                    {user && <li className="navbar-item">
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>}


                    <li className="navbar-item">


                        <span className='flex flex-col md:flex-row gap-5 items-center'>
                            {/* <div className="relative hidden md:block">
                                <img src='Photo here' alt="profile picute" className='h-10 w-10 rounded-full' />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                    <p className="text-white text-lg font-bold">User Name</p>
                                </div>
                                
                            </div> */}

                            <div className={user ? "avatar online hidden md:block" : "avatar hidden md:block"}>
                                <div className="w-12 rounded-full">
                                    {/* <img src={user?.photoURL} /> */}
                                    <img src={user && user.photoURL ? user.photoURL : avatarImg} alt="avatar" height='30' width='30' className='rounded-full' />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                        <p className="text-white text-xs text-center">{user?.displayName}</p>
                                    </div>
                                </div>
                            </div>

                           {user && <div><button onClick={handleLogOut} className='btn gradient-button'><Link to="/login"><span className='text-white'>Log Out</span></Link></button></div>}
                        </span>

                    </li>
                </ul>
                <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <span className="navbar-icon"></span>
                    <span className="navbar-icon"></span>
                    <span className="navbar-icon"></span>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;