"use client";
import React, { useState } from "react";
import Accordion from "../ui/accordion";
import { FAQS } from "@/constants/faqs";
import { GRADIENTS } from "@/constants/images";
import Image from "next/image";
function FAQs() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <div className="overflow-x-clip">
      <div className="MyContainer relative py-12 sm:px-11 xl:px-[135px] xl:py-[100px]">
        <h2 className="MainHeading text-center">
          FAQ <span className="text-pink">- Frequently Asked Questions</span>
        </h2>

        <p className="text-american-blue mx-auto mt-2 max-w-[529px] text-center">
          Find quick answers to common questions about using the app, editing
          photos, making payments, and more.
        </p>
        <div className="mt-7 space-y-[20px] lg:mt-10">
          {FAQS.map((faq, index) => (
            <Accordion
              active={activeFaq === index}
              onToggle={() => setActiveFaq(index === activeFaq ? null : index)}
              key={index}
              title={faq.question}
              id={`faqs-${index}`}
              aria-expanded={activeFaq === index ? "true" : "false"}
              aria-label={`FAQ ${index + 1}: ${faq.question}`}
            >
              {faq.answer}
            </Accordion>
          ))}
        </div>

        <Image
          aria-hidden
          className="absolute top-10 -right-1/4 -z-20 size-[660px] lg:-top-10 lg:-right-20 xl:size-[1026px]"
          src={GRADIENTS.PINK_CIRCLE}
          alt=""
        />
      </div>
    </div>
  );
}

export default FAQs;
