// src/components/models/detail/ModelHero.tsx
"use client";

import { ModelDetail } from "@/types/model";


type Props = {
  model: ModelDetail;
  onTry: () => void;
};

export default function ModelHero({ model, onTry }: Props) {
  return (
    <div className="mx-auto max-w-[760px] text-center">
      <h1 className="text-[30px] leading-[1.10] tracking-tight font-extrabold text-primary md:text-[52px] lg:text-[64px]">
        {model.title}
      </h1>

      <p className="mt-4 text-sm text-slate-600 dark:text-slate-200 md:text-base lg:mt-6 lg:text-[32px]">
        by {model.provider}
      </p>

      {(model.tagline || model.description) && (
        <p className="mx-auto mt-5 text-sm font-medium md:text-lg lg:mt-8 lg:text-[24px]">
          {model.tagline ?? model.description}
        </p>
      )}

      <div className="mt-6 flex items-center justify-center">
        <button
          type="button"
          className="btn-gradient rounded-xl px-24 py-3 text-sm font-medium text-white  md:text-base lg:text-lg"
          onClick={onTry}
        >
          {model.ctaLabel ? `${model.ctaLabel} ${model.title}` : `Try ${model.title}`}
        </button>
      </div>
    </div>
  );
}
