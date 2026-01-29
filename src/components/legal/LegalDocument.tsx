"use client";

import type { LegalSection } from "@/constants/legal";

function renderSupportEmail(text: string) {
  const email = "support@vinony.com";
  if (!text.includes(email)) return text;

  const parts = text.split(email);
  return (
    <>
      {parts[0]}
      <a href={`mailto:${email}`} className="text-secondary underline underline-offset-4">
        {email}
      </a>
      {parts[1]}
    </>
  );
}

export default function LegalDocument({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="mx-auto w-full">
      <div className="space-y-6 lg:space-y-8 text-[#111827]">
        {sections.map((section) => (
          <section key={section.title} className="space-y-3">
            <h2 className="ttext-[14px] md:text-[16px] lg:text-[20.5px]  font-bold text-[#333333] dark:text-foreground">{section.title}</h2>

            {section.blocks.map((block, idx) => {
              if (block.type === "p") {
                return (
                  <p key={idx} className="text-[14px] md:text-[16px] lg:text-[20.5px] leading-7 text-[#4B5563] dark:text-accent">
                    {renderSupportEmail(block.text)}
                  </p>
                );
              }
              if (block.type === "h") {
                return (
                  <p key={idx} className="text-[14px] md:text-[16px] lg:text-[20.5px]  font-semibold leading-6 text-[#4B5563] dark:text-accent">
                    {renderSupportEmail(block.text)}
                  </p>
                );
              }
              return (
                <ul key={idx} className="list-disc space-y-1 pl-8 text-[14px] md:text-[16px] lg:text-[20.5px] leading-6 text-[#4B5563] dark:text-accent">
                  {block.items.map((item) => (
                    <li key={item}>{renderSupportEmail(item)}</li>
                  ))}
                </ul>
              );
            })}
          </section>
        ))}
      </div>

    </div>
  );
}