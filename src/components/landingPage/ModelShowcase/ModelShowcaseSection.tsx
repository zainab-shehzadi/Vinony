import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ModelShowcaseItem } from "@/types/modelShowcase";
import { cn } from "@/lib/utils";

type Props = {
    item: ModelShowcaseItem;
    reverse?: boolean;
    onExplore?: (id: string) => void;
};

function FeatureRow({ text }: { text: string }) {
    return (
        <li className="flex items-start gap-3 text-sm xl:text-lg">
            <CheckCircle2 className="mt-0.5 h-5 xl:h-8 w-5 xl:w-8 shrink-0 text-primary" />
            <span>{text}</span>
        </li>
    );
}

export default function ModelShowcaseSection({
    item,
    reverse = false,
    onExplore,
}: Props) {
    return (
        <section
            className={cn(
                "w-full p-[8px]",
                "bg-[url('/Bgborder.png')] bg-no-repeat bg-center bg-[length:100%_100%]",
                "overflow-hidden",
                reverse ? "px-4" : "px-8 lg:px-12 ",
                "py-8  xl:py-12"
            )}
        >            <div className="grid items-center  lg:grid-cols-12 gap-4 lg:gap-16">
                <div className={["md:col-span-5 ", reverse ? "md:order-2 md:pl-6" : "md:order-1 md:pr-6"].join(" ")}>
                    <h3 className="text-2xl xl:text-[40px] font-medium">
                        {item.title}
                    </h3>

                    <p className="mt-3 md:mt-4 xl:mt-6 m text-sm lg:max-w-xl leading-6 md:text-base xl:text-[20px] xl:leading-8">
                        {item.description}
                    </p>

                    <ul className=" mt-4 xl:mt-7 space-y-1 xl:space-y-4">
                        {item.features.map((f) => (
                            <FeatureRow key={f.id} text={f.text} />
                        ))}
                    </ul>

                    <div className="mt-6 xl:mt-10">
                        <Button
                            type="button"
                            onClick={() => onExplore?.(item.id)}
                            className="btn-gradient h-11 rounded-xl px-10 text-sm font-semibold text-white xl:h-14 md:text-base lg:text-lg"
                        >
                            {item.ctaLabel ?? "Start Exploring Now"}
                        </Button>
                    </div>
                </div>
                <div className={["md:col-span-7 ", reverse ? "md:order-1" : "md:order-2"].join(" ")}>
                    <div
                        className={cn(
                            "flex justify-center",
                            reverse ? "lg:justify-start" : "lg:justify-end"
                        )}
                    >
                        <img
                            src={item.imageSrc}
                            alt={item.imageAlt ?? item.title}
                            draggable={false}
                            loading="lazy"
                            className={cn(
                                "w-full max-w-full",
                                "lg:max-w-[695px]",
                                "h-full lg:h-[480px] xl:h-[557px]",
                                "object-contain"
                            )}
                        />
                    </div>
                </div>
                {/* IMAGE */}
                {/* <div className={["md:col-span-7 ", reverse ? "md:order-1" : "md:order-2"].join(" ")}>
                    <div className="mx-auto w-full lg:max-w-[593px] xl:max-w-[693px]">
                        <div className="h-full  ">
                            <img
                                src={item.imageSrc}
                                alt={item.imageAlt ?? item.title}
                                className="h-full w-full object-contain"
                                loading="lazy"
                                draggable={false}
                            />
                        </div>
                    </div>

                </div> */}
            </div>
        </section>
    );
}
