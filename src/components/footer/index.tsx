import React from "react";
import CustomButton from "../ui/button";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="mt-11 flex flex-col xl:mt-[102px]">
      <div className="bg-grey z-20 w-full max-w-[1140px] rounded-[12px] px-6 py-10 lg:mx-auto xl:px-[42px] xl:py-[62px]">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:gap-6">
          <div>
            <h4 className="text-lg font-bold text-white lg:text-4xl">
              Subscribe to Our Newsletter
            </h4>
            <p className="pt-2 text-sm text-white lg:text-base">
              Be the first to receive the latest updates directly in your inbox.
            </p>
          </div>

          <div className="flex items-center justify-between gap-1 pt-2 sm:pt-4 lg:gap-[11px]">
            <input
              type="text"
              className="text-grey h-full max-h-[53px] w-full rounded-[6px] border bg-white p-2 focus:outline-none lg:p-3 xl:w-[428px]"
              placeholder="Enter your email"
            />

            <CustomButton
              className="h-full max-h-[53px]"
              label="Submit"
              size="wide"
            />
          </div>
        </div>
      </div>
      <div className="bg-pink -z-10 -mt-4 xl:-mt-12">
        <p className="pt-10 pb-2 text-center text-white xl:pt-16">
          {year} Copyright Kerachrom srl
        </p>
      </div>
    </div>
  );
}

export default Footer;
