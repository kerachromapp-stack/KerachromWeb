import React from "react";
import PolygonIcon from "../icons/polygon";
import Image from "next/image";
import { GRADIENTS, IMAGES } from "@/constants/images";
import { DESIGN_FEATURES } from "@/constants/design-features";

function Design() {
  return (
    <div className="relative mx-auto max-w-[1540px] overflow-hidden px-5 py-10 xl:px-[200px] xl:pt-48 xl:pb-16 [@media(min-width:1540px)]:overflow-visible">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-28">
        <div>
          <h1 className="MainHeading">
            <span className="text-pink"> Beautiful Design With</span>
            <br />
            Modern UI
          </h1>

          <p className="text-american-blue xl:leading-base pt-2">
            Enjoy a sleek and attractive layout that makes navigation smooth and
            visually pleasant.
          </p>

          <div className="mt-6 flex flex-col gap-[25px] xl:mt-11">
            {DESIGN_FEATURES.map((item, index) => (
              <div key={index}>
                <div className="flex items-baseline gap-2">
                  <PolygonIcon className="text-pink size-4 pt-1 md:pt-0" />
                  <div>
                    <h4 className="text-pink text-base font-semibold sm:text-lg lg:text-xl">
                      {item.TITLE}
                    </h4>
                    <p className="text-american-blue pt-[7px] text-sm lg:text-base">
                      {item.DESCRIPTION}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative order-first lg:order-last lg:-mt-24">
          <div className="flex items-center justify-center -space-x-36 lg:-space-x-26">
            <Image
              className="shadow-pink z-10 mt-20 h-[300px] w-[190px] rounded-2xl object-cover xl:h-[380px] xl:w-[255px]"
              src={IMAGES.SELECT_BACKGROUND_SCREEN}
              alt="select background mobile app screen"
            />

            <Image
              className="h-[600px] w-[300px] xl:h-[728px] xl:w-[376px]"
              src={IMAGES.HOME_SCREEN}
              alt="home screen mobile app"
            />
          </div>
        </div>
      </div>

      <Image
        aria-hidden
        className="absolute -top-10 right-1/4 -z-10 size-[660px] lg:-right-20 xl:size-[1026px]"
        src={GRADIENTS.PINK_CIRCLE}
        alt=""
      />
    </div>
  );
}

export default Design;
// akash5