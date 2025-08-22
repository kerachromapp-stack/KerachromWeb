import React from "react";
import Image from "next/image";
import { FEATURES } from "@/constants/constants";

function Features() {
  return (
    <div className="mx-auto mt-7 max-w-[1440px] px-2 md:px-4 xl:mt-[113px] xl:px-[50px]">
      <div className="shadow-card rounded-[30px] bg-white/80 py-11 xl:pt-[42px] xl:pb-[86px]">
        <h2 className="MainHeading text-center">
          Features <span className="text-pink">That Makes App Different</span>
        </h2>
        <p className="MainDescription px-4 pt-2 text-sm sm:pt-0 lg:px-0 lg:text-base">
          An Intuitive Experience, Clean interface for effortless navigation,
          even for non-tech users.
        </p>

        <div className="grid grid-cols-1 gap-10 px-6 pt-10 sm:grid-cols-2 sm:gap-3.5 sm:px-20 lg:grid-cols-4 xl:pt-[55px] xl:pr-[124px] xl:pl-[105px]">
          {FEATURES.map((item, index) => (
            <div
              className="flex flex-col items-center sm:items-start"
              key={index}
            >
              <Image
                className="size-16 xl:size-[81px]"
                src={item.IMAGE}
                alt="feature image"
              />
              <h3 className="text-pink pt-6 text-base font-semibold lg:text-xl xl:pt-[50px]">
                {item.TITLE}
              </h3>
              <p className="text-american-blue text-center text-sm sm:text-start lg:text-base xl:pt-[7px] xl:leading-[27.2px]">
                {item.DESCRIPTION}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
