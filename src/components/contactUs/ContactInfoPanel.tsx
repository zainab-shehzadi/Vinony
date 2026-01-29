import type { ContactInfo } from "@/types/contact";

type Props = {
  info: ContactInfo;
  ballsImageSrc: string;
};

export default function ContactInfoPanel({ info, ballsImageSrc }: Props) {
  return (
    <div className="relative h-full overflow-hidden rounded-2xl">
      {/* background */}
      <div className="absolute inset-0 btn-gradient" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[35%] md:w-[40%] lg:w-[45%]">
        <img
          src={ballsImageSrc}
          alt=""
          className="h-auto w-full object-contain object-right-bottom opacity-60"
          draggable={false}
        />
      </div>

      <div className="relative py-6 md:py-14 xl:p-14 text-white">
        <div className="px-6">
            <h2 className="text-lg md:text-2xl font-semibold lg:text-4xl text-white">
          Contact Information
        </h2>

        <p className="mt-2 text-sm text-[#C9C9C9]  lg:mt-3 lg:text-xl">
          We&apos;re here to help—send us a message.
        </p>
        </div>
      

        <div className="mt-2 md:mt-16 space-y-4 md:space-y-8 pl-4 md:pl-6 lg:pl-4 xl:mt-24 lg:space-y-12 lg:pr-10 ">
          <div className="flex items-start gap-3 sm:items-center sm:gap-4">
            <span className="inline-flex h-9 w-9 items-center justify-center sm:h-10 sm:w-10">
              <img src="/phone.svg" alt="Phone" className="h-5 w-5 sm:h-6 sm:w-6" />
            </span>
            <span className="text-sm sm:text-base lg:text-lg break-words">
              {info.phone}
            </span>
          </div>

          <div className="flex items-start gap-3 sm:items-center sm:gap-4">
            <span className="inline-flex h-9 w-9 items-center justify-center sm:h-10 sm:w-10">
              <img src="/email.svg" alt="Email" className="h-5 w-5 sm:h-6 sm:w-6" />
            </span>
            <span className="text-sm sm:text-base lg:text-lg break-words">
              {info.email}
            </span>
          </div>

          <div className="flex items-start gap-3 pb-2 sm:items-center sm:gap-4 sm:pb-4">
            <span className="inline-flex h-9 w-9 items-center justify-center sm:h-10 sm:w-10">
              <img
                src="/location.svg"
                alt="Location"
                className="h-5 w-5 sm:h-6 sm:w-6"
              />
            </span>
            <span className="text-sm sm:text-base lg:text-lg break-words">
              {info.address}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
