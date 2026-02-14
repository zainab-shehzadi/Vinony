import { Link, useNavigate } from "react-router-dom";
import { FOOTER_SECTIONS } from "@/constants/footer";
import type { FooterLink } from "@/types/footer";

function FooterNavLink({ link }: { link: FooterLink }) {
  const base =
    "text-base text-[#8F8F8F] hover:text-white/70 transition-colors";

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
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-[#0E0A0F] text-white mt-6 md:mt-10">
      <div className=" px-6 md:px-12 lg:px-20 xl:px-36 pt-7 md:pt-14 xl:mt-4">
        <div className="grid gap-5 lg:gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-full lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3
              className="text-xl font-semibold text-white cursor-pointer hover:opacity-90"
              role="link"
              tabIndex={0}
              onClick={() => navigate("/")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") navigate("/dashboard");
              }}
            >
              Vinony
            </h3>
            <p className="mt-2 lg:mt-3 max-w-[220px] text-sm leading-6 text-[#8F8F8F] mx-auto lg:mx-0">
              All AI models. One subscription.
            </p>
          </div>

          <div className="md:col-span-4">
            <div className="grid gap-10 grid-cols-2 md:grid-cols-4">
              {FOOTER_SECTIONS.map((section) => (
                <div key={section.title}>
                  <p className="text-lg font-semibold text-white/90">
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
        <div className="my-6 flex items-center justify-center">
          <p className="text-sm text-accent">
            © {year} <span className="font-medium transition-colors hover:text-primary cursor-pointer hover:underline duration-300" onClick={()=> navigate('/')}>Vinony</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
