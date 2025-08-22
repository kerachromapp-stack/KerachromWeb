import React from "react";
import { IMAGES } from "@/constants/images";
import Image from "next/image";
import CustomButton from "../ui/button";
import Link from "next/link";
import { USER_KERA_CHROM_LINK } from "@/constants/constants";
export default function Navbar() {
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
    </div>
  )
}
