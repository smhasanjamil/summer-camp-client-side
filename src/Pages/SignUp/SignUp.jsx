import { useForm } from 'react-hook-form';
import './SignUp.css';
import signupImg from '../../assets/images/secured-form.gif'

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div className='px-4 md:px-4 lg:px-2 xl:px-0 mt-12'>
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
                                        <input type="text" className='input input-bordered input-primary' placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} />
                                        <input type="text" className='input input-bordered input-primary' placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                                        <input type="password" className='input input-bordered input-primary' placeholder="Password" {...register("Password", { required: true })} />
                                        <input type="password" className='input input-bordered input-primary' placeholder="Confirm Password" {...register("Confirm Password", { required: true })} />

                                        <input type="file" className=' file-input file-input-bordered file-input-primary w-full' placeholder="Upload Your Image" {...register("Upload Your Image", {})} />


                                        {/* <input type="submit" /> */}
                                        {/* <input type="submit" value="Submit" /> */}
                                        <button className='btn gradient-button'>Register</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                

            </div>


        </div>
    );
};

export default SignUp;