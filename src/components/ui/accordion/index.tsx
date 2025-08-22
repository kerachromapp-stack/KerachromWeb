"use client";

import { cn } from "@/utils/cn";
import { FaPlus, FaMinus } from "react-icons/fa";

type AccordionpProps = {
  children: React.ReactNode;
  title: string;
  id: string;
  active: boolean;
  onToggle: () => void;
};

export default function Accordion({
  children,
  title,
  id,
  active = false,
  onToggle,
}: AccordionpProps) {
  return (
    <div
      className={cn(
        "bg-light-grey-3 rounded-xl pt-4 pl-6 lg:px-0 lg:pt-[18px]",
        !active ? "pb-4 lg:pb-[18px]" : "pb-[18px]",
      )}
    >
      <h2>
        <button
          className="text-grey flex w-full items-baseline justify-between px-0 py-2 pr-[20px] text-left text-base font-medium focus:outline-none md:text-xl lg:px-5"
          onClick={() => {
            onToggle();
          }}
          id={`accordion-title-${id}`}
          aria-expanded={active}
          aria-controls={`accordion-text-${id}`}
        >
          <span className="w-10/12">{title}</span>

          <span
            className={cn(
              "transform transition-transform duration-300 ease-in-out",
            )}
          >
            {active ? (
              <FaMinus className="text-pink size-5" />
            ) : (
              <FaPlus className="text-pink size-5" />
            )}
          </span>
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={cn(
          "grid overflow-hidden px-0 text-sm font-light transition-all duration-300 ease-in-out sm:text-base lg:px-5 lg:text-xl lg:leading-6",
          active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p className="w-full pr-5 text-sm lg:w-[98%] lg:pt-[18px] lg:pr-0 lg:text-base">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}
