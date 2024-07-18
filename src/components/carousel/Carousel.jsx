import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { items } from "./";

const Carousel = () => {
  return (
    <div className="relative w-full h-[430px] mb-12">
      <Swiper
        className="mySwiper p-12"
        modules={[Navigation]}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next-group .swiper-button-next, .swiper-button-next-group .swiper-button-next-2",
          prevEl: ".swiper-button-prev-group .swiper-button-prev, .swiper-button-prev-group .swiper-button-prev-2",
        }}
        style={{ width: "100%", height: "100%" }}
        slidesPerView={4}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {items.map((slide, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src={slide.image}
                alt={slide.title}
                className="object-cover w-[280px] h-[280px] mb-4"
              />
              <h3 className="text-[18px] font-semibold mb-2 text-[#D29A5A]">{slide.title}</h3>
              <div className="flex gap-2">
                <span className="text-sm line-through text-white ">{slide.price.split(",")[0]}</span>
                <span className="text-[14px] text-white ">{slide.price.split(",")[1]}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className=" absolute swiper-button-next-group">
          <div className="swiper-button-next mr-5"></div>
          <div className="swiper-button-next swiper-button-next-2"></div>
        </div>
        <div className=" absolute swiper-button-prev-group">
          <div className="swiper-button-prev ml-5 "></div>
          <div className="swiper-button-prev swiper-button-prev-2"></div>
        </div>
        
      </Swiper>
    </div>
  );
};

export default Carousel;
