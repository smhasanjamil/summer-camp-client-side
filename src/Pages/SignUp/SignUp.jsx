import { useForm } from 'react-hook-form';
import './SignUp.css';
import signupImg from '../../assets/images/secured-form.gif'
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { BsGoogle, BsInfoCircle } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [wrongInfo, setWrongInfo] = useState("");
    const navigate = useNavigate();

    const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors }, reset, getValues } = useForm();



    const onSubmit = data => {
        console.log(data)
        const name = data.Name;
        const email = data.Email;
        const password = data.Password;
        const imageURL = data.Image_URL;

        if (!/(?=.*[A-Z])/g.test(password)) {
            const errorMessage = "Include an uppercase letter.";
            setWrongInfo(errorMessage);
            return;
        }

        if (!/(?=.*[@#$%^&+=])/g.test(password)) {
            const errorMessage = "Include a special character.";
            setWrongInfo(errorMessage);
            return;
        }

        if (password.length < 6) {
            const errorMessage = "Minimum 8 characters required.";
            setWrongInfo(errorMessage);
            return;
        }

        // Check if password and confirm password match
        const confirmPassword = getValues("Confirm_Password");
        if (password !== confirmPassword) {
            const errorMessage = "Passwords do not match.";
            setWrongInfo(errorMessage);
            return;
        }

        // Add user
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                // Update Profile 
                updateUserProfile(name, imageURL)
                    .then(() => {
                        console.log('Success');
                        // Set User To DB
                        // saveUser(result.user);

                        // navigate(from, { replace: true });

                        // Save user to database
                        const saveUser = { name: data.Name, email: data.Email, photoURL: loggedUser.photoURL };
                        fetch('https://lingoz-server-side.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    navigate('/');
                                }
                            })


                    }).catch(error => {
                        console.log(error.message);
                    })
            }).catch(error => {
                console.log(error.message);
            })


    };

    console.log(errors);

    // Google Sign In
    const handleGoogleSignin = () => {
        signInWithGoogle().then(result => {
            const loggedUser = result.user;
            // Save user to db
            const saveUser = { name: loggedUser.displayName, email: loggedUser.email, photoURL: loggedUser.photoURL };
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




            navigate('/');

        }).catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div className='px-4 md:px-4 lg:px-2 xl:px-0 mt-16 bg-white'>
            <div className="grid grid-cols-12 gap-4 items-center">


                <div className="col-span-12 md:col-span-6 hidden md:block">
                    <div>
                        <img src={signupImg} alt="signup image" className='max-w-full object-cover hero-content' />
                    </div>
                </div>

                <div className="col-span-12 md:col-span-6">

                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title mx-auto title-styles mb-4 text-3xl">Registration</h2>
                            <div className=''>
                                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>

                                    <input className='input input-bordered input-primary' type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} />

                                    <input className='input input-bordered input-primary' type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />

                                    <input className='input input-bordered input-primary' type="password" placeholder="Password" {...register("Password", { required: true })} />


                                    <input className='input input-bordered input-primary' type="password" placeholder="Confirm Password" {...register("Confirm_Password", { required: true })} />

                                    <input className='input input-bordered input-primary' type="url" placeholder="Image_URL" {...register("Image_URL", { required: true })} />

                                    <p>Alreadey have an account? <Link to='/login'><span className=' text-blue-700'>Login</span></Link></p>


                                    <p className='text-red-700 flex flex-row gap-2 items-center'>{wrongInfo ? <BsInfoCircle size={18} /> : ''}{wrongInfo}</p>



                                    {/* <input type="submit" /> */}
                                    {/* <input type="submit" value="Submit" /> */}
                                    <button className='btn gradient-button'>Register With Email</button>

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

export default SignUp;