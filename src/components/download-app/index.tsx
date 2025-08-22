import { IMAGES } from "@/constants/images";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { USER_KERA_CHROM_LINK } from "@/constants/constants";
function DownloadApp() {
  return (
    <div className="MyContainer bg-pink-gradient h-full w-full rounded-[30px] px-8 md:px-16 xl:pr-[146px] xl:pl-[100px]">
      <div className="flex flex-col items-center lg:flex-row">
        <div className="flex h-full w-full flex-col justify-center pt-4 pb-8 md:pb-16 lg:w-1/2 lg:pt-11 xl:pt-36 xl:pb-44">
          <h2 className="text-2xl font-bold text-white capitalize xl:text-[40px] xl:leading-12">
            Download Now on the App Store or Google Play
          </h2>
          <p className="xl:leading-base pt-2 text-sm text-white lg:pt-5 lg:text-base">
            Start free today. Download the app and transform your photos with
            ease.
          </p>

          <div className="flex flex-col items-center gap-4 pt-8 sm:flex-row sm:items-start sm:pt-4">
            <Link target="_blank" href={USER_KERA_CHROM_LINK}>
              <button className="w-fit cursor-pointer rounded-[12px] bg-white px-8 py-[14px]">
                <Image
                  src={IMAGES.GOOGLE_PLAY}
                  alt="apple store"
                  className="max-h-9 max-w-[100px] md:max-w-[140px]"
                />
              </button>
            </Link>
            <Link target="_blank" href={USER_KERA_CHROM_LINK}>
              <button className="w-fit cursor-pointer rounded-[12px] bg-white px-8 py-[14px]">
                <Image
                  src={IMAGES.APP_STORE}
                  alt="apple store"
                  className="max-h-9 max-w-[100px] md:max-w-[140px]"
                />
              </button>
            </Link>
          </div>
        </div>
        <div className="order-first -mt-[20%] flex w-1/2 items-end justify-center lg:order-last">
          <Image
            className="h-full max-h-[400px] w-[190px] object-contain lg:pb-2 xl:max-h-[593px] xl:w-[305px]"
            src={IMAGES.DOWNLOAD_APP_IMAGE_1}
            alt="download app"
          />
          <Image
            className="z-10 -ml-[30%] h-full max-h-[425px] w-[210px] object-contain xl:max-h-[650px] xl:w-[334px]"
            src={IMAGES.DOWNLOAD_APP_IMAGE_2}
            alt="download app"
          />
        </div>
      </div>
    </div>
  );
}

export default DownloadApp;
