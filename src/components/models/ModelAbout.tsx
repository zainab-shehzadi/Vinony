// src/components/models/detail/ModelAbout.tsx
"use client";

import { ModelDetail } from "@/types/model";



type Props = {
  title: string;
  description: string;
  about?: ModelDetail["about"];
};

export default function ModelAbout({ title, description, about }: Props) {
  return (
    <section>
      <h2 className="text-xl font-extrabold md:text-2xl lg:text-3xl">
        About <span className="text-primary">{title}</span>
      </h2>

      <div className="mt-2 space-y-3 text-sm md:eading-7 text-foreground dark:text-accent md:mt-3 md:text-base lg:space-y-4 lg:text-[18px]">
        <p>{description}</p>

        {(about ?? []).map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>
    </section>
  );
}
