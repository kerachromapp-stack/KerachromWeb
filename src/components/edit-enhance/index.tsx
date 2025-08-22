import { IMAGES } from "@/constants/images";
import React from "react";
import Image from "next/image";
import CustomButton from "../ui/button";
import { STATS, USER_KERA_CHROM_LINK } from "@/constants/constants";
import Link from "next/link";

function EditEnhance() {
  return (
    <div className="mx-auto max-w-[1440px] px-5 pt-0 md:pt-11 xl:px-[135px] xl:pt-[142px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-11">
        <div className="flex items-center justify-center lg:-mt-[70px] xl:mt-0 xl:justify-start">
          <div className="relative h-[660px] w-fit max-w-[500px] overflow-x-hidden overflow-y-visible text-base xl:w-full xl:overflow-visible">
            <Image
              className="h-[660px] w-[320px] xl:-mt-15 xl:h-[660px] xl:w-[332px]"
              src={IMAGES.GENERATE_SCREEN}
              alt=""
            />
            <Image
              className="absolute bottom-28 left-2/3 h-[300px] w-[220px] -translate-x-1/2 translate-y-[20%] object-cover object-bottom shadow-2xl xl:right-1/3 xl:bottom-[180px] xl:h-[381px] xl:w-[256px]"
              src={IMAGES.ABOUT_SCREEN}
              alt=""
            />
          </div>
        </div>

        <div>
          <h2 className="MainHeading max-w-[476px] pt-1 md:pt-0">
            Edit, <span className="text-pink">Enhance</span> &{" "}
            <span className="text-pink">Elevate</span> <br /> Your Photos
          </h2>
          <p className="text-american-blue xl:leading-base pt-5">
            Improve your photos easily and quickly with our intuitive
            tools—perfect for anyone looking to give their images a professional
            touch in just a few clicks.
          </p>

          <div className="grid grid-cols-2 gap-5 pt-6 xl:gap-x-[59px] xl:gap-y-[30px] xl:pt-10">
            {STATS.map((item, index) => (
              <div
                className="shadow-card flex items-center gap-[9px] rounded-[12px] bg-white px-4 py-[15px] xl:px-[35px]"
                key={index}
              >
                <Image
                  className="size-11 md:size-[57px]"
                  src={item.IMAGE}
                  alt={`${item.NAME} logo`}
                />
                <div>
                  <p className="text-grey text-2xl font-semibold xl:text-[40px] xl:leading-12">
                    {item.VALUE}
                  </p>
                  <p className="text-grey text-sm md:text-base">{item.NAME}</p>
                </div>
              </div>
            ))}
          </div>
          <Link target="_blank" href={USER_KERA_CHROM_LINK}>
            <CustomButton
              className="mx-auto mt-9 sm:mx-0 xl:mt-[52px]"
              label="GET STARTED"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EditEnhance;
