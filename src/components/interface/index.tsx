"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperRef } from "swiper/react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { APP_IMAGES } from "@/constants/constants";
import { Pagination, Navigation } from "swiper/modules";

function Interface() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);

  const handleSlideChange = (index: number) => {
    if (index === activeIndex) {
      return;
    }
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideToLoop(index);
    }
  };

  return (
    <div className="mx-auto max-w-[1440px] px-7 py-7 xl:pt-[30px] xl:pb-[60px]">
      <h2 className="MainHeading text-center">
        <span className="text-pink"> Beautiful </span>Interface
      </h2>
      <p className="text-american-blue mx-auto mt-2 mb-9 max-w-[529px] text-center">
        Enjoy a modern, visually pleasing interface designed for simplicity and
        speed. Navigate effortlessly and focus on creating, not figuring things
        out.
      </p>

      <Swiper
        className="select-none"
        ref={swiperRef}
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        spaceBetween={10}
        onRealIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
        grabCursor={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 38,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 38,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 38,
          },
        }}
        modules={[Pagination, Navigation]}
      >
        {/* Slides */}
        {APP_IMAGES?.map((image, index) => (
          <SwiperSlide key={image.ID}>
            <Image
              onClick={() => handleSlideChange(index)}
              className={cn(
                "mx-auto max-h-[70vh] max-w-[226px] transform-gpu object-contain py-8 transition-transform duration-500 xl:max-h-[601px] xl:max-w-[246px]",
                activeIndex === index && "scale-105 md:scale-110",
              )}
              src={image.IMAGE}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination bullets */}
      <div className={cn("mt-10 flex justify-center space-x-2 lg:w-full")}>
        {APP_IMAGES.map((_, index) => (
          <span
            key={index}
            className={`size-3 cursor-pointer rounded-full sm:size-4 ${
              index === activeIndex ? "bg-grey" : "bg-light-grey-4"
            }`}
            onClick={() => handleSlideChange(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Interface;
