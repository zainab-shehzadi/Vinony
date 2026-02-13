"use client";

import { cn } from "@/lib/utils";

type Props = {
 
  onGetStarted?: () => void;
  className?: string;
};

export default function GetStartedPreview({

  onGetStarted,
  className,
}: Props) {

  return (
    <section className={cn("w-full pt-4 md:pt-10 pb-6 lg:pb-0", className)}>
      {/* Button */}
      <div className="flex justify-center">
        <button
          type="button"
          onClick={onGetStarted}
          className={cn("h-12 px-10 lg:px-20 rounded-xl text-white font-medium btn-gradient dark:shadow")}
        >
          Get Started
        </button>
      </div>

      {/* Preview */}
      {/* <div className="px-2 md:px-10 lg:px-18 dark:px-0 flex justify-center mt-4 lg:mt-6 ">
        <img
          key={src}
          src={src}
          alt={imageAlt}
          draggable={false}
          loading="lazy"
          className="w-full h-auto object-contain rounded-xl"
        />
      </div> */}
    </section>
  );
}