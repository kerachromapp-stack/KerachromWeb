import { GRADIENTS, IMAGES } from "@/constants/images";
import Image from "next/image";
import React from "react";
import CustomButton from "../ui/button";
import TickIcon from "../icons/tick";

const avatars = [
  IMAGES.PLACEHOLDER_USER_1,
  IMAGES.PLACEHOLDER_USER_2,
  IMAGES.PLACEHOLDER_USER_3,
  IMAGES.PLACEHOLDER_USER_4,
];

function TransformPhotos() {
  return (
    <div className="relative mx-auto max-w-[1440px] px-5 py-6 xl:px-[150px] xl:py-[83px]">
      <div className="grid grid-cols-1 place-items-center gap-11 lg:grid-cols-2 lg:gap-8">
        <div>
          <h2 className="text-grey text-2xl font-bold tracking-tighter xl:text-[50px] xl:leading-[60px]">
            Transform
            <span className="text-pink text-nowrap"> Your Photos </span> <br />
            Like a Pro
          </h2>

          <p className="text-american-blue pt-2">
            With the power of AI, you can create stunning mockups and edit
            photos like a professional—no complicated software or skills needed.
            Easy, fast, and accessible for everyone.
          </p>

          <div className="flex items-center justify-between gap-1 pt-4 lg:gap-[11px]">
            <input
              type="text"
              className="border-light-grey w-full rounded-[6px] border p-2 focus:outline-none lg:p-3"
              placeholder="Enter your email"
            />

            <CustomButton label="Submit" size="wide" />
          </div>

          <div className="text-american-blue flex items-center gap-2 pt-4 lg:gap-6 lg:pt-[10px]">
            <div className="flex items-center gap-1">
              <TickIcon />
              <span className="text-sm lg:text-base">Free 3-day trial</span>
            </div>
            <div className="flex items-center gap-1">
              <TickIcon />
              <span className="text-sm lg:text-base">
                No credit card required
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-[10px] pt-4 lg:pt-[34px]">
            <div className="flex -space-x-3">
              {avatars.map((avatar, index) => (
                <Image
                  key={index}
                  src={avatar}
                  className="h-10 w-10 rounded-full border-2 border-white ring-2 ring-white xl:size-[51px]"
                  alt={`User ${index + 1}`}
                />
              ))}
            </div>
            <p className="text-american-blue leading-[19px text-[15px]">
              12M+ <br /> used this app
            </p>
          </div>
        </div>

        <div className="relative grid grid-cols-2 gap-4">
          <div className="flex flex-col space-y-4">
            <Image
              src={IMAGES.BANNER_IMAGE_1}
              width={255}
              height={380}
              className="shadow-pink h-full max-h-[380px] w-full max-w-[255px] rounded-2xl object-cover"
              alt="app screenshot 1"
            />
            <div className="flex justify-end">
              <Image
                src={IMAGES.BANNER_IMAGE_2}
                width={165}
                height={124}
                className="shadow-pink h-full max-h-[124px] w-full max-w-2/3 rounded-2xl object-cover"
                alt="app screenshot 2"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <Image
              src={IMAGES.BANNER_IMAGE_3}
              width={256}
              height={142}
              className="h-full max-h-[142px] w-full max-w-[256px]"
              alt="app screenshot 3"
            />
            <Image
              src={IMAGES.BANNER_IMAGE_4}
              width={255}
              height={380}
              className="h-full max-h-[380px] w-full max-w-[255px] rounded-2xl"
              alt="app screenshot 4"
            />
          </div>
        </div>

        <div className="absolute top-80 right-0 -z-10 lg:-top-20">
          <Image
            height={962}
            width={1127}
            aria-hidden
            src={GRADIENTS.PINK_CIRCLE}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default TransformPhotos;
