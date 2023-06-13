import { Link } from 'react-router-dom';
import errorImg from '../assets/images/404_not_found.gif'
const Error404 = () => {
    return (
        <div className='px-4 md:px-4 lg:px-2 xl:px-0'>
            <div className='flex flex-col justify-center items-center h-screen w-full'>
                <img src={errorImg} alt="" />
                <button className='btn gradient-button'><Link to='/'>Back To Home</Link></button>
            </div>
        </div>
    );
};

export default Error404;