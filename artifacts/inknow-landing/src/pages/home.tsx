import type { ReactNode } from "react";
const BASE = import.meta.env.BASE_URL;

/* ── SVG icon set ───────────────────────────────────────────── */
const Icons = {
  search: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/>
    </svg>
  ),
  document: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M9 12h6m-6 4h6M7 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V8l-5-4H7z"/>
    </svg>
  ),
  needle: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M12 3v18M3 12h18"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  grid: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  ),
  chat: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
    </svg>
  ),
  lock: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="5" y="11" width="14" height="11" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/>
    </svg>
  ),
  calendar: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
    </svg>
  ),
  star: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
  layers: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  ),
  payment: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 10h20M7 15h2m4 0h2"/>
    </svg>
  ),
  send: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
    </svg>
  ),
  trophy: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M8 21h8m-4-4v4M7 4H5a2 2 0 00-2 2v3a4 4 0 004 4h.5M17 4h2a2 2 0 012 2v3a4 4 0 01-4 4h-.5"/>
      <path d="M7 4h10v7a5 5 0 01-10 0V4z"/>
    </svg>
  ),
  camera: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
  ),
  question: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10"/>
      <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3m.08 4h.01"/>
    </svg>
  ),
  megaphone: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M3 11v2m0 0a9 9 0 009 9 9 9 0 009-9 9 9 0 00-9-9 9 9 0 00-9 9zm0 0h18"/>
    </svg>
  ),
  mappin: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  shield: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  check: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/>
    </svg>
  ),
  flow: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="18" r="2"/>
      <path d="M7 6h10M14.5 7.5l-2.5 9M9.5 7.5l2.5 9"/>
    </svg>
  ),
};

/* ── Reusable components ────────────────────────────────────── */
function Phone({ src, alt, className = "", width = 220, height = 476 }: { src: string; alt: string; className?: string; width?: number; height?: number }) {
  const notchW = Math.round(width * 0.44);
  const notchH = Math.round(height * 0.046);
  const radius = Math.round(width * 0.173);
  return (
    <div className={`relative flex-shrink-0 ${className}`} style={{ width, height }}>
      <div
        className="absolute inset-0 bg-[#111] overflow-hidden"
        style={{ borderRadius: radius, border: "1px solid rgba(255,255,255,0.10)", boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 40px 80px rgba(0,0,0,0.7)" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#111] z-10" style={{ width: notchW, height: notchH, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }} />
        <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
      </div>
    </div>
  );
}

function StepCard({ number, icon, title, desc }: { number: string; icon: ReactNode; title: string; desc: string }) {
  return (
    <div className="flex flex-col gap-5 p-7 rounded-2xl border border-white/8 bg-white/[0.03] hover:border-yellow-500/20 hover:bg-white/[0.05] transition-all duration-300">
      <div className="flex items-center gap-3">
        <span className="text-yellow-500/60 text-xs font-bold tracking-[0.2em] uppercase">{number}</span>
        <div className="h-px flex-1 bg-white/8" />
      </div>
      <div className="w-10 h-10 rounded-xl bg-white/6 border border-white/8 flex items-center justify-center text-white/60">
        {icon}
      </div>
      <div>
        <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
        <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function TrustPillar({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center flex-shrink-0 text-white/50">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-semibold text-sm mb-1">{title}</h4>
        <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function ArtistCard({
  name, location, styles, rating, reviews, price, verified, initials, accent
}: {
  name: string; location: string; styles: string[]; rating: number; reviews: number;
  price: string; verified?: boolean; initials: string; accent: string;
}) {
  return (
    <div className="rounded-2xl border border-white/8 bg-[#111] overflow-hidden hover:border-white/16 transition-all duration-300">
      <div className={`h-36 ${accent} flex items-end px-5 pb-4`}>
        <div className="w-14 h-14 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center">
          <span className="text-white font-black text-lg tracking-tight">{initials}</span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-white font-bold text-base">{name}</span>
              {verified && (
                <svg className="w-3.5 h-3.5 text-[#4A9EFF]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              )}
            </div>
            <span className="text-white/35 text-xs">{location}</span>
          </div>
          <span className="text-white/60 text-xs font-medium">{price}</span>
        </div>
        <div className="flex items-center gap-1 mb-3">
          <svg className="w-3 h-3 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <span className="text-white/70 text-xs font-semibold">{rating}</span>
          <span className="text-white/25 text-xs">({reviews})</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {styles.map(s => (
            <span key={s} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-white/45 text-xs">{s}</span>
          ))}
        </div>
        <button className="mt-4 w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/8 text-white/60 text-sm font-medium transition-all">
          View Profile
        </button>
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/[0.06] bg-[#0C0C0C]/90 backdrop-blur-xl">
        <a href={BASE}>
          <img src={`${BASE}assets/logo.png`} alt="InkNow" className="h-12 w-auto object-contain mix-blend-screen brightness-200" />
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/50">
          <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
          <a href="#for-artists" className="hover:text-white transition-colors">For Artists</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#for-artists" className="hidden md:block text-sm text-white/60 hover:text-white transition-colors px-4 py-2">
            Artist Sign-Up
          </a>
          <a
            href="https://apps.apple.com"
            className="px-5 py-2.5 rounded-full bg-yellow-500 hover:bg-yellow-400 text-black text-sm font-bold transition-all duration-200 shadow-lg shadow-yellow-500/20"
          >
            Download App
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 65% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)" }} />
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-yellow-500/4 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/5 text-yellow-400 text-xs font-medium w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
              Now available across all 50 states
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight">
                Book Tattoos<br />
                <span className="text-yellow-400">Smarter.</span>
              </h1>
              <p className="mt-2 text-xl md:text-2xl text-white/30 font-light tracking-wide">
                The Future of Tattoo Booking.
              </p>
            </div>
            <p className="text-white/55 text-lg leading-relaxed max-w-md">
              Discover artists, explore real portfolios, and book confidently — consultations, deposits, and payments all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href="https://apps.apple.com"
                className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-base transition-all duration-200 shadow-xl shadow-yellow-500/25 hover:shadow-yellow-500/40 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                Download on iOS
              </a>
              <a
                href="#for-artists"
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
              >
                Artist Sign-Up
                <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>
            <div className="flex items-center gap-6 mt-2 text-white/30 text-xs">
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-yellow-500/60" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Secure payments
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-yellow-500/60" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Verified artists
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-yellow-500/60" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
                Free for clients
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center h-[520px] z-10">
            <Phone src={`${BASE}assets/screen-profile.jpg`} alt="Artist profile" className="absolute left-0 top-8 opacity-60 scale-90" />
            <Phone src={`${BASE}assets/screen-discover.jpg`} alt="Discover artists" className="relative z-10 shadow-2xl" />
            <Phone src={`${BASE}assets/screen-explore.jpg`} alt="Explore styles" className="absolute right-0 top-8 opacity-60 scale-90" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/[0.06] py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "50", label: "States" },
            { value: "Top 50", label: "City Rankings" },
            { value: "100%", label: "In-App Payments" },
            { value: "Free", label: "For Clients" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="text-3xl font-black text-yellow-400">{value}</span>
              <span className="text-white/35 text-xs uppercase tracking-widest">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-500/70 text-xs font-bold tracking-[0.25em] uppercase mb-4">How It Works</p>
            <h2 className="text-4xl md:text-5xl font-black">Simple from start to session.</h2>
            <p className="text-white/40 text-lg mt-4 max-w-md mx-auto">Three steps between you and the tattoo you've been thinking about.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <StepCard number="01" icon={Icons.search} title="Find Your Artist" desc="Browse verified portfolios by style, location, and availability. Filter by Realism, Blackwork, Fine Line, Watercolor, and more." />
            <StepCard number="02" icon={Icons.document} title="Book Securely" desc="Send a consultation request with reference photos. Once approved, sign your consent form and pay your deposit — all in-app." />
            <StepCard number="03" icon={Icons.needle} title="Get Inked" desc="Show up confident. Track your booking, message your artist, pay the session balance, and leave a review when you're done." />
          </div>
        </div>
      </section>

      {/* CLIENT FEATURES */}
      <section id="features" className="py-28 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center items-end gap-4 py-8">
            <Phone src={`${BASE}assets/screen-consult.jpg`} alt="Request consultation" width={175} height={379} className="mb-6 opacity-80" />
            <Phone src={`${BASE}assets/screen-deposit.jpg`} alt="Pay deposit" width={175} height={379} />
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-yellow-500/70 text-xs font-bold tracking-[0.25em] uppercase mb-4">For Clients</p>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">Everything you need to book right.</h2>
              <p className="text-white/45 text-lg mt-4 leading-relaxed">From discovery to aftercare, InkNow keeps your entire tattoo journey in one place.</p>
            </div>
            <div className="flex flex-col gap-5">
              <TrustPillar icon={Icons.grid} title="Browse by Style" desc="Traditional, Realism, Blackwork, Fine Line, Watercolor, Japanese, and more — filter by what you love." />
              <TrustPillar icon={Icons.chat} title="Consultation First" desc="Send a request with your reference photos and vision. Artists review and respond — no cold DMs." />
              <TrustPillar icon={Icons.lock} title="Secure Deposits" desc="Lock in your appointment with a deposit processed through InkNow. Your money is protected." />
              <TrustPillar icon={Icons.calendar} title="Track Everything" desc="Active bookings, past sessions, and canceled appointments all organized in one place." />
              <TrustPillar icon={Icons.star} title="Rate & Follow" desc="Leave honest reviews and follow your favorite artists to stay up to date on availability." />
            </div>
            <a
              href="https://apps.apple.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-sm transition-all w-fit shadow-lg shadow-yellow-500/20"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Get InkNow Free
            </a>
          </div>
        </div>
      </section>

      {/* ARTIST FEATURES */}
      <section id="for-artists" className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-yellow-500/70 text-xs font-bold tracking-[0.25em] uppercase mb-4">For Artists</p>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">Run your books like a pro.</h2>
              <p className="text-white/45 text-lg mt-4 leading-relaxed">Manage your full booking lifecycle without chasing clients over DMs. InkNow handles it.</p>
            </div>
            <div className="flex flex-col gap-5">
              <TrustPillar icon={Icons.layers} title="Portfolio That Converts" desc="Showcase your work with style, size, and placement tags. Clients find you by what they actually want." />
              <TrustPillar icon={Icons.calendar} title="Availability Calendar" desc="Set your weekly schedule, block days off, and add special openings. Clients only see when you're open." />
              <TrustPillar icon={Icons.payment} title="Get Paid via Stripe" desc="Deposits and balances hit your Stripe account directly. No invoice chasing, no cash awkwardness." />
              <TrustPillar icon={Icons.send} title="Blast Messages" desc="Send updates or promos to your entire client list in one tap. Stay top of mind." />
              <TrustPillar icon={Icons.trophy} title="Top 50 City Rankings" desc="Rank in your city's weekly leaderboard. More visibility, more serious clients." />
            </div>
            <div className="flex flex-col gap-3 p-5 rounded-2xl border border-yellow-500/20 bg-yellow-500/5">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 font-bold text-sm">InkNow PRO</span>
                <span className="px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-medium">30-day free trial</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">Portfolio watermarking, PRO analytics dashboard, priority ranking boost, and monthly boost credits.</p>
              <a href="https://apps.apple.com" className="text-yellow-400 text-sm font-semibold hover:text-yellow-300 transition-colors">
                Start free trial →
              </a>
            </div>
          </div>
          <div className="flex justify-center items-end gap-4 py-8">
            <Phone src={`${BASE}assets/screen-artist-dash.jpg`} alt="Artist dashboard" width={175} height={379} />
            <Phone src={`${BASE}assets/screen-availability.jpg`} alt="Availability calendar" width={175} height={379} className="mb-6 opacity-80" />
          </div>
        </div>
      </section>

      {/* ARTIST CARDS */}
      <section className="py-28 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-500/70 text-xs font-bold tracking-[0.25em] uppercase mb-4">The Network</p>
            <h2 className="text-4xl md:text-5xl font-black">Artists worth booking.</h2>
            <p className="text-white/40 text-lg mt-4 max-w-sm mx-auto">Verified portfolios. Real ratings. Every style, every city.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <ArtistCard name="TatsByTut" location="Ink District · Warren, OH" styles={["Realism", "Blackwork", "Piercing"]} rating={4.8} reviews={32} price="Contact for pricing" verified initials="TT" accent="bg-gradient-to-br from-zinc-800 to-zinc-900" />
            <ArtistCard name="InkByJay" location="Independent · Atlanta, GA" styles={["Fine Line", "Geometric", "Minimalist"]} rating={5.0} reviews={12} price="$120/hr" verified initials="IJ" accent="bg-gradient-to-br from-stone-800 to-zinc-900" />
            <ArtistCard name="TatGurl" location="Studio 7 · Austin, TX" styles={["Traditional", "Watercolor", "Piercing"]} rating={5.0} reviews={8} price="$95/hr" verified initials="TG" accent="bg-gradient-to-br from-neutral-800 to-zinc-900" />
          </div>
          <div className="text-center mt-10">
            <a href="https://apps.apple.com" className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm transition-colors">
              Browse all artists in the app
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/40 text-xs font-medium w-fit mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                Coming Soon — Phase 2
              </div>
              <p className="text-yellow-500/70 text-xs font-bold tracking-[0.25em] uppercase mb-4">Artist Community</p>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">A private space built for artists.</h2>
              <p className="text-white/45 text-lg mt-4 leading-relaxed">
                Share work in progress, ask the community questions, post about events and conventions, and connect with other artists in your city.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <TrustPillar icon={Icons.camera} title="Photo Drops" desc="Post WIP shots, healed pieces, and fresh work directly to the artist feed." />
              <TrustPillar icon={Icons.question} title="Q&A Posts" desc="Ask the community anything — suppliers, techniques, pricing, business advice." />
              <TrustPillar icon={Icons.megaphone} title="Events & Conventions" desc="Announce upcoming conventions, guest spots, and pop-ups to the entire network." />
              <TrustPillar icon={Icons.mappin} title="Local Artist Network" desc="Connect with verified artists in your city — one feed, your whole market." />
            </div>
            <div className="p-4 rounded-xl border border-white/8 bg-white/[0.02] text-white/30 text-sm leading-relaxed">
              Visible only to verified InkNow artists. Text posts, photo drops, Q&As, and event announcements — all in one feed.
            </div>
          </div>
          <div className="flex justify-center">
            <Phone src={`${BASE}assets/screen-community.jpg`} alt="Artist Community feed" />
          </div>
        </div>
      </section>

      {/* WHY INKNOW */}
      <section className="py-28 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-500/70 text-xs font-bold tracking-[0.25em] uppercase mb-4">Why InkNow</p>
            <h2 className="text-4xl md:text-5xl font-black">Built for trust.<br />Designed for results.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Icons.shield, title: "In-App Payments Only", desc: "All deposits and balances are processed through InkNow. Cash, Venmo, or Zelle aren't recognized — your money stays protected." },
              { icon: Icons.check, title: "Verified Artist Profiles", desc: "Real portfolios, real reviews, real availability. What you see is what you book." },
              { icon: Icons.chat, title: "Direct Messaging", desc: "Communicate with your artist through the app — every conversation is tied to your booking and protected." },
              { icon: Icons.flow, title: "Full Booking Lifecycle", desc: "Consultation → Consent → Deposit → Session → Review. Every step handled in one seamless experience." },
            ].map(p => (
              <div key={p.title} className="p-6 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-yellow-500/20 hover:bg-white/[0.04] transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-white/50 mb-5">
                  {p.icon}
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{p.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STYLES STRIP */}
      <section className="py-12 px-6 border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-white/20 text-xs uppercase tracking-[0.25em] mb-6">Supported tattoo styles</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Traditional","Realism","Blackwork","Fine Line","Watercolor","Japanese","Neo-Traditional","Geometric","Minimalist","Portrait","Tribal","Lettering","Anime","Illustrative","Surrealism"].map(s => (
              <span key={s} className="px-4 py-2 rounded-full border border-white/8 text-white/30 text-xs hover:border-white/16 hover:text-white/50 transition-all cursor-default">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <img src={`${BASE}assets/logo.png`} alt="InkNow" className="h-20 w-auto object-contain mix-blend-screen brightness-200 mx-auto mb-8" />
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            The new way artists<br />and clients connect.
          </h2>
          <p className="text-white/40 text-lg mb-10 leading-relaxed">
            Transparency, trust, and simplicity — for everyone in the tattoo and piercing world.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://apps.apple.com"
              className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-base transition-all duration-200 shadow-xl shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Download on iOS — Free
            </a>
            <a
              href="#for-artists"
              className="flex items-center justify-center px-8 py-4 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
            >
              I'm an Artist
            </a>
          </div>
          <p className="text-white/20 text-xs mt-6">Available on iOS · Android coming soon</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
            <img src={`${BASE}assets/logo.png`} alt="InkNow" className="h-10 w-auto object-contain mix-blend-screen brightness-200" />
            <div className="flex items-center gap-6 text-white/30 text-sm">
              <a href={`${BASE}privacy`} className="hover:text-white/60 transition-colors">Privacy</a>
              <a href={`${BASE}terms`} className="hover:text-white/60 transition-colors">Terms</a>
              <a href={`${BASE}contact`} className="hover:text-white/60 transition-colors">Support</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/getinknow" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-white/60 hover:border-white/20 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://tiktok.com/@getinknow" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-white/60 hover:border-white/20 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>
              </a>
            </div>
          </div>
          <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/20 text-xs">
            <p>© 2026 InkNow LLC. All rights reserved.</p>
            <p>Available nationwide across all 50 states.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
