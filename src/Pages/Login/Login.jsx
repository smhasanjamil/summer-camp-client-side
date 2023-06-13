import { useForm } from 'react-hook-form';
import loginImg from '../../assets/images/secured-form.gif'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
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
        }).catch(error => {
            console.log(error.message);
        })


    };
    console.log(errors);
    return (
        <div className='px-4 md:px-4 lg:px-2 xl:px-0 mt-12'>
            <div className="grid grid-cols-12 gap-4 items-center">


                <div className="col-span-12 md:col-span-6 hidden md:block">
                    <div>
                        <img src={loginImg} alt="signup image" className='max-w-full object-cover hero-content' />
                    </div>
                </div>

                <div className="col-span-12 md:col-span-6">

                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title mx-auto title-styles mb-4 text-3xl">Login Here</h2>
                            <div className=''>
                                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>

                                    <input className='input input-bordered input-primary' type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />

                                    <input className='input input-bordered input-primary' type="password" placeholder="Password" {...register("Password", { required: true })} />


                                    {/* <input type="submit" /> */}
                                    {/* <input type="submit" value="Submit" /> */}
                                    <button className='btn gradient-button'>Continue</button>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>


            </div>


        </div>
    );
};

export default Login;