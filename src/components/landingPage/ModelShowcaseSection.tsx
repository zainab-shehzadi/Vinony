import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ModelShowcaseItem } from "@/types/modelShowcase";

type Props = {
    item: ModelShowcaseItem;
    reverse?: boolean;
    onExplore?: (id: string) => void;
};

function FeatureRow({ text }: { text: string }) {
    return (
        <li className="flex items-start gap-3 text-sm  md:text-base lg:text-xl">
            <CheckCircle2 className="mt-0.5 h-8 w-8 shrink-0 text-primary" />
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
            className="
        w-full overflow-visible rounded-2xl bg-white
        border-2 border-primary
        px-6 py-10 md:px-12 md:py-14
      "
        >
            <div className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
                <div className={["md:col-span-5", reverse ? "md:order-2 md:pl-6" : "md:order-1 md:pr-6"].join(" ")}>
                    <h3 className="text-2xl md:text-4xl">
                        {item.title}
                    </h3>

                    <p className="mt-3 m text-sm max-w-xl leading-6 md:text-base lg:text-xl lg:leading-9">
                        {item.description}
                    </p>

                    <ul className="mt-7 space-y-4">
                        {item.features.map((f) => (
                            <FeatureRow key={f.id} text={f.text} />
                        ))}
                    </ul>

                    <div className="mt-10">
                        <Button
                            type="button"
                            onClick={() => onExplore?.(item.id)}
                            className="btn-gradient h-11 rounded-xl px-10 text-sm font-semibold text-white md:h-14 md:text-base lg:text-lg"
                        >
                            {item.ctaLabel ?? "Start Exploring Now"}
                        </Button>
                    </div>
                </div>

                {/* IMAGE */}
                <div className={["md:col-span-7 ", reverse ? "md:order-1" : "md:order-2"].join(" ")}>
                    <div className="mx-auto w-full xl:max-w-[740px]">
                        <div className="rounded-2xl bg-primary/20 p-5 md:p-6">
                            <div className="h-[280px] sm:h-[340px] md:h-[400px] xl:h-[480px] w-full overflow-hidden rounded-xl bg-black/5">
                                <img
                                    src={item.imageSrc}
                                    alt={item.imageAlt ?? item.title}
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                    draggable={false}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
