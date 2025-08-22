"use client";
import { IMAGES } from "@/constants/images";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// Dummy testimonials array
const TESTIMONIALS = [
  {
    ID: 1,
    AVATAR: IMAGES.TESTIMONIAL_USER,
    NAME: "Sarah Lee",
    COMPANY: "Design Co",
    RATING: 5,
    TEXT: "This product has transformed the way I work on my design projects. Highly recommended!",
  },
  {
    ID: 2,
    AVATAR: IMAGES.TESTIMONIAL_USER,
    NAME: "John Smith",
    COMPANY: "TechCorp",
    RATING: 4,
    TEXT: "Excellent experience overall. The features are intuitive and performance is top-notch.",
  },
  {
    ID: 3,
    AVATAR: IMAGES.TESTIMONIAL_USER,
    NAME: "William Den",
    COMPANY: "Creative Inc",
    RATING: 5,
    TEXT: "Outstanding service and professional results!",
  },
];

function CustomerReviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <div className="MyContainer px-6 py-10 sm:px-12 xl:px-[150px] xl:py-[70px]">
      <h2 className="MainHeading text-center">
        <span className="text-pink">What our</span> customer say
      </h2>
      <p className="text-american-blue mx-auto mt-2 max-w-[529px] text-center text-sm leading-7 lg:text-base">
        Our users love the quality, ease of use, and lasting beauty of every
        personalized creation.
      </p>

      <div className="mt-3 grid grid-cols-4">
        {/* Left avatars column */}
        <div className="hidden lg:block">
          <Image
            className="ml-4 size-12 lg:ml-16 lg:size-16"
            src={IMAGES.TESTIMONIAL_USER}
            alt="Avatar"
          />
          <Image
            className="mt-12 size-14 lg:mt-28 lg:size-20"
            src={IMAGES.TESTIMONIAL_USER}
            alt="Avatar"
          />
          <Image
            className="mt-12 ml-4 size-12 lg:mt-28 lg:ml-16 lg:size-16"
            src={IMAGES.TESTIMONIAL_USER}
            alt="Avatar"
          />
        </div>

        {/* Swiper testimonial slides */}
        <div className="col-span-4 lg:col-span-2">
          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="${className} size-4 rounded-full ${index === activeIndex ? "bg-[#4A4A49]" : "bg-[#D4D2DD]"}"></span>`;
              },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            autoplay={{ delay: 5000 }}
          >
            {TESTIMONIALS?.map((item) => (
              <SwiperSlide key={item.ID}>
                <div className="relative z-10 px-4 text-center">
                  <div className="mt-4 flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`h-4 w-4 ${i < item.RATING ? "text-orange" : "text-light-grey-4"}`}
                      />
                    ))}
                  </div>
                  <p className="text-american-blue mx-auto mt-4 max-w-[404px]">
                    &quot;{item.TEXT}&quot;
                  </p>

                  <Image
                    className="mx-auto mt-7 size-[130px] rounded-full"
                    src={item.AVATAR}
                    alt={item.NAME}
                  />
                  <div className="mt-[10px]">
                    <h4 className="text-grey text-xl font-semibold">
                      {item.NAME}
                    </h4>
                    <p className="text-american-blue text-[15px]">
                      {item.COMPANY}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-10 flex justify-center space-x-2">
            {TESTIMONIALS?.map((_, index) => (
              <span
                key={index}
                className={`size-3 cursor-pointer rounded-full sm:size-4 ${index === activeIndex ? "bg-grey" : "bg-light-grey-4"}`}
                onClick={() => {
                  if (swiperRef.current && swiperRef.current.swiper) {
                    swiperRef.current.swiper.slideTo(index);
                  }
                }}
              ></span>
            ))}
          </div>
          {/* Total reviews summary stays static */}
          <div className="mt-10 text-center lg:mt-[61px]">
            <div className="mx-auto flex items-center justify-center gap-2">
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-orange h-4 w-4" />
                ))}
              </div>
              <p className="text-pink space-x-1 font-semibold">
                <span className="font-semibold">5.0</span>
                <span>/ 5.0</span>
              </p>
            </div>

            <h3 className="text-pink mt-2 text-2xl font-bold lg:text-4xl xl:text-[50px]">
              2578
            </h3>
            <p className="text-american-blue mt-1 text-sm font-bold uppercase lg:text-base">
              total user reviews +
            </p>
          </div>
        </div>

        {/* Right avatars column */}
        <div className="hidden flex-col items-end lg:flex">
          <Image
            className="mr-4 size-12 lg:mr-16 lg:size-16"
            src={IMAGES.TESTIMONIAL_USER}
            alt="Avatar"
          />
          <Image
            className="mt-12 size-14 lg:mt-28 lg:size-20"
            src={IMAGES.TESTIMONIAL_USER}
            alt="Avatar"
          />
          <Image
            className="mt-12 mr-4 size-12 lg:mt-28 lg:mr-16 lg:size-16"
            src={IMAGES.TESTIMONIAL_USER}
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default CustomerReviews;
