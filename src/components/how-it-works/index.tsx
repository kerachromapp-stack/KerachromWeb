import React from "react";
import { FaWindows, FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import Image from "next/image";
import { IMAGES } from "@/constants/images";
import Link from "next/link";
import { USER_KERA_CHROM_LINK } from "@/constants/constants";
function HowItWorks() {
  return (
    <div className="MyContainer">
      <div className="mb-[50px] rounded-[30px] bg-white px-10 py-8 drop-shadow-xl xl:px-[140px] xl:pt-[71px] xl:pb-[60px]">
        <h2 className="MainHeading text-center">
          How it works <span className="text-pink">- 3 easy steps</span>
        </h2>
        <p className="MainDescription">
          Upload your photo and customize your design. Kerachrom transforms it
          into a high-quality creation—ready to print on ceramic, crystal, or
          porcelain.
        </p>

        <div className="mt-6 flex">
          <div className="flex w-full flex-col items-center pt-8 pb-10 lg:w-1/3 lg:items-end xl:pt-[43px] xl:pb-[56px]">
            <Image
              className="mb-2 block h-full max-h-[240px] w-full max-w-2/3 lg:hidden"
              src={IMAGES.DOWNLOAD_APP}
              alt="download app"
            />
            <h4 className="text-american-blue font-semibold xl:text-xl">
              Download the App
            </h4>
            <div className="flex items-center gap-[5px] pt-2 pb-[10px]">
              <div className="bg-light-grey-2 flex size-10 items-center justify-center rounded-full">
                <Link target="_blank" href={USER_KERA_CHROM_LINK}>
                  <DiAndroid size={20} color="white" />
                </Link>
              </div>
              <div className="bg-light-grey-2 flex size-10 items-center justify-center rounded-full">
                <Link target="_blank" href={USER_KERA_CHROM_LINK}>
                  <FaApple size={20} color="white" />
                </Link>
              </div>
              <div className="bg-light-grey-2 flex size-10 items-center justify-center rounded-full">
                <Link target="_blank" href={USER_KERA_CHROM_LINK}>
                  <FaWindows size={20} color="white" />
                </Link>
              </div>
            </div>
            <p className="text-american-blue text-center text-sm md:text-base lg:text-right">
              Available for Windows, Mac, and Android.
            </p>
          </div>
          <div className="order-first -ml-[5px] flex w-1/4 justify-start md:ml-0 md:w-1/3 md:justify-center lg:order-2">
            <div className="flex flex-col items-center">
              <div className="bg-light-grey-2 size-[14px] rounded-full"></div>
              <div className="border-light-grey-2 relative h-full border-l-4">
                <div className="bg-light-pink border-light-yellow absolute top-1/4 -right-8 flex size-16 items-center justify-center rounded-full border-4 lg:-right-10 lg:size-20 lg:border-[7px]">
                  <span className="text-american-blue right-1/2 text-3xl">
                    01
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden h-full w-1/3 lg:order-last lg:block">
            <Image
              className="h-full max-h-[240px] w-full"
              src={IMAGES.DOWNLOAD_APP}
              alt="download app"
            />
          </div>
        </div>

        <div className="flex">
          <div className="hidden h-full w-1/3 pt-8 lg:block xl:pt-[50px]">
            <Image
              className="h-full max-h-[240px]"
              src={IMAGES.CREATE_ACCOUNT}
              alt="download app"
            />
          </div>
          <div className="order-first flex w-1/4 justify-start md:w-1/3 md:justify-center lg:order-2">
            <div className="flex flex-col items-center">
              <div className="border-light-grey-2 relative h-full border-l-4">
                <div className="bg-light-blue border-diamond absolute top-2/5 -right-8 flex size-16 items-center justify-center rounded-full border-4 lg:-right-10 lg:size-20 lg:border-[7px]">
                  <span className="text-american-blue right-1/2 text-3xl">
                    02
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col items-center pt-[10%] pb-10 lg:order-last lg:w-1/3 lg:items-start xl:pb-[56px]">
            <Image
              className="mb-2 block h-full max-h-[240px] w-full max-w-2/3 lg:hidden"
              src={IMAGES.CREATE_ACCOUNT}
              alt="download app"
            />

            <h4 className="text-american-blue font-bold xl:text-xl">
              Create an Account
            </h4>
            <div className="text-american-blue text-center lg:text-start">
              <p className="text-american-blue pt-1 font-semibold md:pt-2">
                3 days free trial
              </p>
              <p className="pt-2 text-sm font-normal md:text-base">
                One account for all devices.
              </p>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex w-full flex-col items-center pt-8 pb-10 lg:w-1/3 lg:items-end xl:pt-[13%] xl:pb-[56px]">
            <Image
              className="mb-2 block h-full max-h-[240px] w-full max-w-2/3 lg:hidden xl:mt-[90px]"
              src={IMAGES.ENJOY_APP}
              alt="download app"
            />
            <h4 className="text-american-blue pl-2 text-center text-base font-semibold sm:pl-0 lg:text-right xl:text-xl">
              You're All Set
            </h4>
            <p className="text-american-blue pt-1 text-center text-sm md:pt-2 md:text-base lg:text-right">
              Explore and share your creations.
            </p>
            <p className="text-american-blue pt-2 pl-2 text-center font-medium sm:pl-0 lg:text-right">
              Check our
              <span className="underline"> FAQs </span>
              for help.
            </p>
          </div>
          <div className="order-first -ml-[30px] flex w-1/4 justify-start md:ml-0 md:w-1/3 md:justify-center lg:order-2">
            <div className="flex flex-col items-center">
              <div className="border-light-grey relative h-3/6 border-l-4"></div>
              <div className="border-light-yellow flex size-16 items-center justify-center rounded-full border-4 bg-[#FFE9F1] lg:-right-10 lg:size-20 lg:border-[7px]">
                <span className="text-american-blue right-1/2 text-3xl">
                  03
                </span>
              </div>
            </div>
          </div>
          <div className="hidden h-full w-1/3 lg:order-last lg:block xl:pt-[7%]">
            <Image
              className="h-full max-h-[240px] w-full"
              src={IMAGES.ENJOY_APP}
              alt="download app"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
