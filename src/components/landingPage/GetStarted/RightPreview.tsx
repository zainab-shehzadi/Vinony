import { cn } from "@/lib/utils";

export function RightPreview({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="pb-2 pt-0 md:pt-4 lg:pt-24 xl:pt-32">
      <div className="flex justify-center lg:justify-end">
        <img
          src={src}
          alt={alt}
          draggable={false}
          loading="lazy"
          className={cn(
            "w-full max-w-full",
            "lg:max-w-[593px]",
            "h-full lg:h-[380px] xl:h-[437px]",
            "object-contain"
          )}
        />
      </div>

    </div>
  );
}
