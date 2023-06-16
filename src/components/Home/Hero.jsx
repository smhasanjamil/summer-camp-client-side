import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Hero = () => {
    return (
        <div className="my-12">
            <Carousel autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src="https://i.ibb.co/PwWCwJB/23.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/cLDvn5z/24.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/Qk8xScn/22.jpg" />
                </div>
                
            </Carousel>
        </div>
    );
};

export default Hero;