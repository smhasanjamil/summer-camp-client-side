import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import logoImg from '../../assets/images/lingoz-logo.png'


const Footer = () => {
    return (
        <div className="mt-12">



            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div>
                        <p><img className=" w-full" src={logoImg} alt="" /></p>
                    </div>
                    <div className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                        <div className="grid grid-flow-col gap-4">
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </div>
                        <div>
                            <div className="grid grid-flow-col gap-4">
                                <a><BsFacebook size={24} /></a>
                                <a><BsTwitter size={24} /></a>
                                <a><BsYoutube size={24} /></a>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="grid grid-flow-col gap-4">
                            
                            <address>
                            <h3 className=" text-3xl font-bold underline">Address</h3>
                                <p>Address: Bangladesh</p>
                                <p>Phone: +8801222222222</p>
                                <p>Email: contact@example.com</p>
                            </address>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Copyright © 2023 - All right reserved by Lingoz</p>
                </div>
            </footer>



        </div>
    );
};

export default Footer;