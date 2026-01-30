import { AI_PROVIDERS, type AiProvider } from "@/constants/landingPage";
import * as React from "react";

type Props = {
  title?: string;
  providers?: AiProvider[];
  className?: string;
  /** seconds for one full loop */
  durationSec?: number;
};

function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const m = window.matchMedia(query);
    const onChange = () => setMatches(m.matches);
    onChange();
    m.addEventListener?.("change", onChange);
    return () => m.removeEventListener?.("change", onChange);
  }, [query]);

  return matches;
}

function SparkleDivider() {
  return (
    <span
      aria-hidden="true"
      className="mx-3 inline-flex  shrink-0 items-center justify-center lg:mx-12"
    >
      <img
        src="/sparkle-divider.svg"
        alt=""
        draggable={false}
        loading="lazy"
        className="h-full w-full object-contain"
      />
    </span>
  );
}

function ProviderLogo({ p }: { p: AiProvider }) {
  return (
    <img
      src={p.logoSrc}
      alt={p.logoAlt ?? p.name}
      loading="lazy"
      draggable={false}
      className={["select-none object-contain shrink-0", p.className ?? "h-6 "].join(" ")}
    />
  );
}

function ProvidersRow({ providers }: { providers: AiProvider[] }) {
  return (
    <div className="flex items-center gap-2">
      {providers.map((p, idx) => (
        <React.Fragment key={p.id}>
          <ProviderLogo p={p} />
          {idx !== providers.length - 1 && <SparkleDivider />}
        </React.Fragment>
      ))}
    </div>
  );
}

export default function LeadingAiProviders({
  title = "Works with leading AI providers",
  providers = AI_PROVIDERS,
  className,
  durationSec = 18,
}: Props) {
  const lgUp = useMediaQuery("(min-width: 1280px)");
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");

  const marquee = !lgUp && !reduced;

  return (
    <section className={["w-full", className ?? ""].join(" ")}>
      <div>
        <h3 className="text-center text-xl md:text-[32px] font-semibold dark:text-primary">
          {title}
        </h3>

        <div className="mt-14">
          {(!marquee && (
            <div className="flex items-center justify-center">
              <ProvidersRow providers={providers} />
            </div>
          )) || (
            <>
              <div className="relative overflow-hidden">
                <div
                  className="marquee-track flex w-max items-center"
                  style={{ ["--dur" as any]: `${durationSec}s` }}
                >
                  <ProvidersRow providers={providers} />
                  <span className="mx-6" aria-hidden="true" />
                  <SparkleDivider /> 
                  <ProvidersRow providers={providers} />
                </div>
              </div>

        <style>{`
  @keyframes marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  .marquee-track {
    animation: marquee var(--dur, 18s) linear infinite;
    will-change: transform;
  }

  /* ✅ only pause on hover (desktop), NOT on click/touch */
  @media (hover: hover) and (pointer: fine) {
    .marquee-track:hover { animation-play-state: paused; }
  }
`}</style>
            </>
          )}
        </div>
      </div>
    </section>
  );
}