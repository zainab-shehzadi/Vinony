import { useNavigate } from "react-router-dom";

interface IProp {
  heading: string;
  paragraph: string;
  route: string;
}

export default function PaymentHeading({ heading, paragraph, route }: IProp) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between relative">
      <div className="flex flex-col gap-1">
        <p className="text-lg md:text-xl text-foreground font-bold">
          {heading}
        </p>
        <p className="text-xs md:text-sm text-accent font-normal">
          {paragraph}
        </p>
      </div>
      <span className="absolute top-1 right-0 font-semibold text-xs md:text-base text-foreground cursor-pointer hover:text-foreground/70" onClick={()=> navigate(route)}>
        View All
      </span>
    </div>
  );
}
