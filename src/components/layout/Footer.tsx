import { Link } from "react-router-dom";
import { FOOTER_SECTIONS } from "@/constants/footer";
import type { FooterLink } from "@/types/footer";

function FooterNavLink({ link }: { link: FooterLink }) {
  const base =
    "text-sm md:text-base text-accent hover:text-white/70 transition-colors";

  if (link.external) {
    return (
      <a
        href={link.to}
        target="_blank"
        rel="noreferrer"
        className={base}
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link to={link.to} className={base}>
      {link.label}
    </Link>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0B0B0F] text-white mt-6 md:mt-10">
      <div className=" px-6 md:px-12 lg:px-20 xl:px-36 py-14 ">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-full lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-xl font-semibold text-white">Vinony</h3>

            <p className="mt-3 max-w-[220px] text-sm leading-6 text-white/60 mx-auto lg:mx-0">
              All AI models. One subscription.
            </p>
          </div>

          <div className="md:col-span-4">
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
              {FOOTER_SECTIONS.map((section) => (
                <div key={section.title}>
                  <p className="text-sm md:text-base font-semibold text-white/90">
                    {section.title}
                  </p>

                  <ul className="mt-4 space-y-3">
                    {section.links.map((l) => (
                      <li key={`${section.title}-${l.to}`}>
                        <FooterNavLink link={l} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-white/5" />

        {/* Bottom */}
        <div className="mt-6 flex items-center justify-center">
          <p className="text-sm text-accent">
            © {year} Vinony. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
