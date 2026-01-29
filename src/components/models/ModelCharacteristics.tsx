// src/components/models/detail/ModelCharacteristics.tsx
"use client";

type Props = {
  items?: string[];
};

export default function ModelCharacteristics({ items }: Props) {
  if (!items?.length) return null;

  return (
    <section className="mt-6 md:mt-10">
      <h2 className="text-xl font-extrabold 
 md:text-2xl lg:text-3xl">
        Model <span className="text-primary">characteristics</span>
      </h2>

      <ul className="mt-4 space-y-1 text-sm leading-7 text-foreground dark:text-accent md:text-base lg:text-[18px]">
        {items.map((c, idx) => (
          <li key={idx} className="flex gap-3">
            <span className="mt-[11px] h-1 w-1 rounded-full bg-foreground" />
            <span>{c}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
