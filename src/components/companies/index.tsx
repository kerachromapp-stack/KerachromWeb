"use client";
import { COMPANIES } from "@/constants/constants";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

function Companies() {
  const swiperRef = useRef<SwiperRef>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 840);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Group companies into slides of 3 (mobile) or 5 (desktop)
  const getGroupedCompanies = () => {
    const groupSize = isMobile ? 3 : 5;
    const groupedCompanies = [];

    for (let i = 0; i < COMPANIES.length; i += groupSize) {
      groupedCompanies.push(COMPANIES.slice(i, i + groupSize));
    }

    return groupedCompanies;
  };

  const groupedCompanies = getGroupedCompanies();

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div className="MyContainer pt-14 pb-28 md:pb-36 lg:pb-48 xl:pb-52">
      <h2 className="MainHeading text-center">
        <span className="text-pink">Trusted by</span> 150+{" "}
        <span className="text-pink">companies</span>
      </h2>
      <p className="MainDescription mb-5 lg:mb-9">
        Join thousands who rely on our intuitive design tools, secure platform,
        and expert-quality photoceramic services.
      </p>

      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={20}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {groupedCompanies.map((group, groupIndex) => (
          <SwiperSlide key={groupIndex}>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-12 md:gap-14 xl:gap-[70px]">
              {group.map((company, companyIndex) => (
                <div
                  key={companyIndex}
                  className="flex items-center justify-center"
                >
                  <Image
                    className="h-10 w-20 sm:h-15 sm:w-30 lg:h-20 lg:w-40"
                    src={company.IMAGE}
                    alt={company.NAME}
                  />
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center justify-center gap-2 pt-5">
        {groupedCompanies?.length > 1 &&
          groupedCompanies?.map((_, index) => (
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

export default Companies;
