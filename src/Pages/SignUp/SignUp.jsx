import { useForm } from 'react-hook-form';
import './SignUp.css';
import signupImg from '../../assets/images/secured-form.gif'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        const name = data.Name;
        const email = data.Email;
        const password = data.Password;
        const imageURL = data.Image_URL;
        // Add user
        createUser(email, password)
            .then(result => {
                console.log(result);
                // Update Profile 
                updateUserProfile(name, imageURL)
                    .then(() => {
                        console.log('Success');
                        // Set User To DB
                        // saveUser(result.user);

                        // navigate(from, { replace: true });
                        reset();
                    }).catch(error => {
                        console.log(error.message);
                    })
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

                                    <input className='input input-bordered input-primary' type="password" placeholder="Confirm_Password" {...register("Confirm_Password", { required: true })} />

                                    <input className='input input-bordered input-primary' type="url" placeholder="Image_URL" {...register("Image_URL", { required: true })} />


                                    {/* <input type="submit" /> */}
                                    {/* <input type="submit" value="Submit" /> */}
                                    <button className='btn gradient-button'>Register With Email</button>

                                </form>
                            </div>
                            <div>
                                <button className='btn gradient-button w-full my-2'>Register With Google</button>
                            </div>
                        </div>
                    </div>

                </div>


            </div>


        </div>
    );
};

export default SignUp;