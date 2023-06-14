import { useForm } from 'react-hook-form';
import loginImg from '../../assets/images/secured-form.gif'
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { BsGoogle, BsInfoCircle } from "react-icons/bs";
import './Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [wrongInfo, setWrongInfo] = useState("");

    const navigate = useNavigate();

    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        const email = data.Email;
        const password = data.Password;
        // Login user
        signIn(email, password).then(result => {
            console.log(result.user);
            // navigate(from, { replace: true });
            reset();
            navigate('/');
        }).catch(error => {
            console.log(error.message);

            const errorCode = error.code;

            if (errorCode === "auth/invalid-email" || errorCode === "auth/user-not-found") {
                setWrongInfo("The email you entered is invalid or not registered.");
            } else if (errorCode === "auth/wrong-password") {
                setWrongInfo("The password you entered is incorrect.");
            } else {
                setWrongInfo("Something went wrong. Please try again.");
            }
        })


    };
    console.log(errors);

    // Google Login
    // Google Sign In
    const handleGoogleSignin = () => {
        signInWithGoogle().then(result => {
            const loggedUser = result.user;
            // Save user to db
            const saveUser = { name: loggedUser.displayName, email: loggedUser.email };
            fetch('https://lingoz-server-side.vercel.app/users', {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(saveUser)
            })
                .then(res => res.json())
                .then(() => {
                    navigate('/');
                })
            

        }).catch((error) => {
            console.log(error.message);


        })
    }
    return (
        <div className='px-4 md:px-4 lg:px-2 xl:px-0 mt-16 bg-white'>
            <div className="grid grid-cols-12 gap-4 items-center ">


                <div className="col-span-12 md:col-span-6 hidden md:block">
                    <div>
                        <img src={loginImg} alt="signup image" className='max-w-full object-cover hero-content' />
                    </div>
                </div>

                <div className="col-span-12 md:col-span-6 md:px-4">

                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title mx-auto title-styles mb-4 text-3xl">Login Here</h2>
                            <div className=''>
                                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>

                                    <input className='input input-bordered input-primary' type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />

                                    <input className='input input-bordered input-primary' type="password" placeholder="Password" {...register("Password", { required: true })} />

                                    <p className='text-red-700 flex flex-row gap-2 items-center'>{wrongInfo ? <BsInfoCircle size={18} /> : ''}{wrongInfo}</p>

                                    {/* <input type="submit" /> */}
                                    {/* <input type="submit" value="Submit" /> */}
                                    <button className='btn gradient-button'>Continue</button>

                                </form>
                            </div>
                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="divider">OR</div>
                            </div>
                            <div>
                                <button onClick={handleGoogleSignin} className='btn gradient-button w-full my-2'><BsGoogle size={18} /> Register With Google</button>
                            </div>
                        </div>
                    </div>

                </div>


            </div>


        </div>
    );
};

export default Login;