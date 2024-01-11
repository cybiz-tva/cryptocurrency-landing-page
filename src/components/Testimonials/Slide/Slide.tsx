import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { dataTestimonials } from "../Testimonials.data";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Reveal } from "@/components/Reveal/Reveal";
import { RiDoubleQuotesL } from "react-icons/ri";

export function Slide() {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        678: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="h-[280px] w-full md:max-w-5xl"
    >
      {dataTestimonials.map(({ id, name, work, testimonial, image }) => (
        <SwiperSlide key={id} className="my-5 cursor-pointer md:px-10">
          <Reveal>
            {/* <QuoteIcon color="text-[#02e99b]" width={40} height={40} /> */}
            <RiDoubleQuotesL className="text-3xl text-[#02e99b]" />
            <div className="my-5">{testimonial}</div>
            <div className="flex">
              <Image
                src={image}
                alt={name}
                width="50"
                height={50}
                className="mr-5"
              />
              <div>
                <h4 className="text-center">{name}</h4>
                <p className="text-primaryDark">{work}</p>
              </div>
            </div>
          </Reveal>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
