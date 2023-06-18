import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

export default function App() {
  return (
    <div className=" lg:-mt-[20.5em] lg:w-[45%]  lg:ml-[52%] xl:w-[38.5%]  xl:ml-[54.5%] xl:-mt-[22em]">
      <div className="ml-[35%] mt-[1em] lg:ml-[5%]">
        <h1 className="text-[#FFFFFF] text-xl">Event Galeries</h1>
      </div>
      <div className="w-[90%] mx-auto ">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          autoplay={{ delay: 3000 }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://picsum.photos/seed/picsum/536/354"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/536/354" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://picsum.photos/id/1084/536/354?grayscale"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://picsum.photos/id/237/536/354"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://picsum.photos/seed/picsum/536/354"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src=" https://picsum.photos/id/1060/536/354?blur=2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
