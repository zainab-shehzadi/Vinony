import { Link, useLocation, useNavigate } from "react-router-dom";

function BalloonsIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      {/* glow */}
      <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-[radial-gradient(60%_60%_at_50%_30%,rgba(128,90,245,0.22),transparent_70%)] blur-sm" />

      {/* card */}
      <div className="relative rounded-[28px] border border-white/50 bg-white/70 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.12)] backdrop-blur">
        <svg
          viewBox="0 0 720 360"
          className="h-auto w-full"
          role="img"
          aria-label="Balloons illustration"
        >
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#805AF5" />
              <stop offset="1" stopColor="#CD99FF" />
            </linearGradient>
            <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#2DA5F3" />
              <stop offset="1" stopColor="#64D2FF" />
            </linearGradient>
            <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#FFD60A" />
              <stop offset="1" stopColor="#FFE37A" />
            </linearGradient>
            <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodOpacity="0.18" />
            </filter>
          </defs>

          {/* clouds */}
          <g opacity="0.55">
            <path
              d="M80 110c10-26 52-34 75-14 16-20 50-20 66 2 30-6 59 12 55 38H80c-20 0-28-14-20-26z"
              fill="#ffffff"
            />
            <path
              d="M470 90c10-22 46-28 64-11 14-16 40-16 53 2 26-5 50 10 46 32H470c-17 0-24-12-17-23z"
              fill="#ffffff"
            />
          </g>

          {/* balloon group */}
          <g filter="url(#shadow)">
            {/* left balloon */}
            <g className="nf-float">
              <path
                d="M210 72c42 0 76 33 76 74 0 34-23 63-55 72-2 18-11 34-21 44-10-10-19-26-21-44-32-9-55-38-55-72 0-41 34-74 76-74z"
                fill="url(#g2)"
              />
              <path
                d="M238 88c16 8 24 25 20 42"
                stroke="#fff"
                strokeOpacity="0.75"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M210 262c-3 6-6 11-10 15"
                stroke="#2b2b2b"
                strokeOpacity="0.6"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M200 277c-18 30-28 54-35 88"
                stroke="#2b2b2b"
                strokeOpacity="0.45"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </g>

            {/* center balloon */}
            <g className="nf-float nf-delay">
              <path
                d="M365 40c55 0 100 44 100 98 0 46-31 86-73 96-3 25-15 48-27 62-13-14-25-37-28-62-43-10-74-50-74-96 0-54 45-98 102-98z"
                fill="url(#g1)"
              />
              <path
                d="M400 58c22 10 33 33 28 56"
                stroke="#fff"
                strokeOpacity="0.75"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <path
                d="M365 296c-4 8-9 14-14 20"
                stroke="#2b2b2b"
                strokeOpacity="0.6"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M351 316c-24 32-42 58-52 92"
                stroke="#2b2b2b"
                strokeOpacity="0.45"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </g>

            {/* right balloon */}
            <g className="nf-float nf-delay2">
              <path
                d="M525 78c40 0 72 31 72 70 0 32-22 60-52 68-2 17-10 32-20 41-10-9-18-24-20-41-30-8-52-36-52-68 0-39 32-70 72-70z"
                fill="url(#g3)"
              />
              <path
                d="M548 92c15 7 22 23 18 39"
                stroke="#fff"
                strokeOpacity="0.75"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M525 257c-3 6-6 10-9 14"
                stroke="#2b2b2b"
                strokeOpacity="0.6"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M516 271c-16 26-26 48-32 78"
                stroke="#2b2b2b"
                strokeOpacity="0.45"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </g>
          </g>

          {/* little confetti */}
          <g opacity="0.7">
            <circle cx="120" cy="230" r="4" fill="#805AF5" />
            <circle cx="640" cy="210" r="4" fill="#2DA5F3" />
            <circle cx="600" cy="260" r="3" fill="#FFD60A" />
            <circle cx="140" cy="270" r="3" fill="#CD99FF" />
          </g>
        </svg>
      </div>

      {/* animation styles */}
      <style>
        {`
          .nf-float { animation: nfFloat 4.6s ease-in-out infinite; transform-origin: center; }
          .nf-delay { animation-delay: .35s; }
          .nf-delay2 { animation-delay: .7s; }
          @keyframes nfFloat {
            0%,100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
    </div>
  );
}

export default function NotFound() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(80%_60%_at_50%_0%,rgba(128,90,245,0.18),transparent_60%),linear-gradient(to_bottom,#ffffff,#fafafa)]">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-10 px-6 py-12 md:flex-row md:gap-14">
        {/* left content */}
        <div className="max-w-xl">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
            404 • Page Not Found
          </div>

          <h1 className="mt-4 text-4xl font-semibold leading-tight text-gray-900 md:text-5xl">
            Oops! This page drifted away 🎈
          </h1>

          <p className="mt-4 text-base leading-7 text-gray-600">
            We couldn’t find the page you’re looking for. It may have been moved,
            renamed, or never existed.
          </p>

          <div className="mt-4 rounded-xl border border-gray-200 bg-white/70 px-4 py-3 text-sm text-gray-700 backdrop-blur">
            <span className="font-medium">Requested:</span>{" "}
            <span className="font-mono text-gray-900">{location.pathname}</span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="h-12 w-full rounded-xl border border-gray-200 bg-white px-5 text-base font-semibold text-gray-900 hover:bg-gray-50 sm:w-auto"
            >
              Go Back
            </button>

            <Link
              to="/"
              className="auth-primary-btn flex h-12 w-full items-center justify-center px-6 text-base font-semibold sm:w-auto"
            >
              Go Home
            </Link>

            <Link
              to="/login"
              className="auth-primary-btn flex h-12 w-full items-center justify-center px-6 text-base font-semibold sm:w-auto"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* right illustration */}
        <BalloonsIllustration />
      </div>
    </div>
  );
}
