import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";


const UpcommingCourse = () => {
    return (
        <div className="my-12">

<h3 className="text-center font-bold text-3xl my-24 title-styles">Upcomming Classes</h3>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://i.ibb.co/mXV8yGp/25.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/z6vVZ6c/26.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/D7p4bKN/27.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/mXV8yGp/25.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/z6vVZ6c/26.jpg" alt="" /></SwiperSlide>
            </Swiper>

        </div>
    );
};

export default UpcommingCourse;