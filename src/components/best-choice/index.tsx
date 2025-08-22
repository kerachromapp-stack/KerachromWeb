import { PHOTOCERAMICS_DATA } from "@/constants/best-choice";
import Image from "next/image";
import React from "react";

function BestChoice() {
  return (
    <div className="mx-auto max-w-[1440px] px-5 py-6 xl:px-[121px] xl:py-[83px]">
      <h1 className="MainHeading text-center">
        The Best <span className="text-pink">Choice</span> To Remember 
      </h1>

      <div className="grid grid-cols-1 gap-[15px] pt-6 lg:grid-cols-3 xl:pt-[62px]">
        {PHOTOCERAMICS_DATA.map((item, index) => (
          <div className="flex w-full flex-col items-center" key={index}>
            <Image
              src={item.IMAGE}
              className="w-full max-w-[390px] object-scale-down"
              // height={300}
              // width={300}
              alt="Photoceramics Image"
            />

            <div className="h-full w-full max-w-[390px]">
              <h3 className="text-pink pt-4 text-base font-semibold xl:pt-10 xl:text-xl">
                {item.TITLE}
              </h3>
              <p className="text-american-blue pt-2 text-sm xl:pt-4 xl:text-base">
                {item.DESCRIPTION}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestChoice;
