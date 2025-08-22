import React from "react";
import { IMAGES } from "@/constants/images";
import Image from "next/image";
import CustomButton from "../ui/button";
import Link from "next/link";
import { USER_KERA_CHROM_LINK } from "@/constants/constants";

function HomePageHero() {
  return (
    <div>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-9 py-5 xl:py-[31px] xl:pr-40 xl:pl-[140px]">
        <Image
          src={IMAGES.LOGO}
          loading="eager"
          unoptimized
          className="h-auto w-20 object-contain xl:w-[145px]"
          alt="Logo"
          width={145}
          height={72}
        />
        <Link target="_blank" href={USER_KERA_CHROM_LINK}>
          <CustomButton label="GET STARTED" />
        </Link>
      </div>
      <Image
        src={IMAGES.HOME_PAGE_HERO_2}
        loading="eager"
        unoptimized
        className="h-auto w-full object-contain"
        alt="Home Page Hero"
        width={1920}
        height={1080}
      />
    </div>
  );
}

export default HomePageHero;
