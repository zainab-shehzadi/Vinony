interface IProp {
  heading: string;
  paragraph: string;
}

export default function PaymentHeading({ heading, paragraph }: IProp) {
  return (
    <div className="flex justify-between items-start">
      <div className="flex flex-col gap-1">
        <p className="text-lg md:text-xl text-foreground font-bold">
          {heading}
        </p>
        <p className="text-[10px] md:text-xs text-accent font-normal">
          {paragraph}
        </p>
      </div>
      <span className="font-semibold text-sm md:text-[16px] text-foreground cursor-pointer hover:text-foreground/70">
        View All
      </span>
    </div>
  );
}
