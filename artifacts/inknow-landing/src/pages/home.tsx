import { useState } from "react";

const BASE = import.meta.env.BASE_URL;

function PhoneMockup({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`phone-frame w-[200px] h-[430px] md:w-[230px] md:h-[490px] flex-shrink-0 ${className}`}>
      <img src={src} alt={alt} />
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/4 p-6 flex flex-col gap-3 backdrop-blur-sm hover:border-yellow-500/30 hover:bg-white/6 transition-all duration-300">
      <div className="text-3xl">{icon}</div>
      <h3 className="text-white font-semibold text-lg leading-tight">{title}</h3>
      <p className="text-white/55 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="gradient-text text-4xl md:text-5xl font-bold tracking-tight">
        {value}
      </span>
      <span className="text-white/50 text-sm uppercase tracking-widest font-medium">
        {label}
      </span>
    </div>
  );
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState<"client" | "artist">("client");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white overflow-x-hidden">
      <div className="noise-overlay" />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-black/40 border-b border-white/6">
        <img
          src={`${BASE}assets/logo.png`}
          alt="InkNow"
          className="h-10 w-auto object-contain mix-blend-screen brightness-200"
        />
        <a
          href="#waitlist"
          className="text-sm font-semibold bg-yellow-500 text-black px-5 py-2 rounded-full hover:bg-yellow-400 transition-colors duration-200"
        >
          Join Waitlist
        </a>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 text-center overflow-hidden">
        <div className="section-glow top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/8 text-yellow-400 text-sm font-medium mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            Coming Soon — Get Early Access
          </div>

          <div className="flex justify-center mb-8 animate-fade-in-up-delay-1">
            <img
              src={`${BASE}assets/logo.png`}
              alt="InkNow"
              className="h-24 md:h-32 w-auto object-contain mix-blend-screen brightness-200"
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6 animate-fade-in-up-delay-1">
            The New Way Artists
            <br />
            <span className="gradient-text">and Clients Connect.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up-delay-2">
            Clients can't find the right artist. Artists can't find serious clients.{" "}
            <span className="text-white/90 font-medium">InkNow fixes both.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-3">
            <a
              href="#waitlist"
              className="glow-button inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-yellow-500 text-black font-bold text-base hover:bg-yellow-400 transition-colors duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              Join the Waitlist
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white font-semibold text-base hover:border-white/30 hover:bg-white/5 transition-all duration-200"
            >
              See How It Works
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Hero phones */}
        <div className="relative mt-16 md:mt-20 flex justify-center items-end gap-4 md:gap-8 px-4">
          <div className="float-phone opacity-70 hidden md:block">
            <PhoneMockup src={`${BASE}assets/screen-earnings.png`} alt="Earnings Dashboard" />
          </div>
          <div className="float-phone-2 z-10">
            <PhoneMockup
              src={`${BASE}assets/screen-discover.png`}
              alt="Discover Artists"
              className="!w-[220px] !h-[470px] md:!w-[260px] md:!h-[560px]"
            />
          </div>
          <div className="float-phone-3 opacity-70 hidden md:block">
            <PhoneMockup src={`${BASE}assets/screen-explore.png`} alt="Explore Page" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0C0C0C] to-transparent pointer-events-none" />
      </section>

      {/* Stats bar */}
      <section className="py-14 px-6 border-y border-white/6 bg-white/2">
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatCard value="50+" label="Cities" />
          <StatCard value="Top 50" label="Weekly Rankings" />
          <StatCard value="0%" label="No-Show Rate" />
          <StatCard value="100%" label="Artist Verified" />
        </div>
      </section>

      {/* Problem / Solution */}
      <section id="features" className="py-24 px-6 relative">
        <div className="section-glow -left-64 top-1/2 -translate-y-1/2" />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-500 text-sm font-semibold uppercase tracking-widest mb-4">
              The Problem
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              The tattoo world is broken.
              <br />
              <span className="text-white/40">We're here to fix it.</span>
            </h2>
            <p className="text-white/55 max-w-2xl mx-auto text-lg leading-relaxed">
              Discovery is broken. Trust is missing. Artists lose money to ghost clients. Clients waste time finding the right fit. InkNow was built to solve all of it — at once.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FeatureCard
              icon="🔍"
              title="Find Your Artist"
              description="Browse real portfolios filtered by style, location, and availability. No scrolling through Instagram hoping for the best — get matched with artists who actually fit your vision."
            />
            <FeatureCard
              icon="📅"
              title="Book With Confidence"
              description="See live availability, pay deposits directly in-app, and get reminders that keep both sides accountable. No more DM tag and ghost."
            />
            <FeatureCard
              icon="⭐"
              title="Verified Reviews"
              description="Every review is from a real booking. Artists earn a Reliability Score based on actual performance — not follower count or hype."
            />
            <FeatureCard
              icon="💰"
              title="Artist Earnings Tools"
              description="Track income, manage scheduled payouts, see what's pending and what's landing — all from a clean dashboard built specifically for tattoo artists."
            />
            <FeatureCard
              icon="🏆"
              title="Top 50 Rankings"
              description="Every city has a Top 50 list that resets weekly. Rise through the ranks based on bookings and reviews — not how many people you know."
            />
            <FeatureCard
              icon="🗺️"
              title="Radius & City Discovery"
              description="Scroll artists near you or browse curated picks city by city. An algorithm that surfaces the right talent at the right time — for both flash and custom work."
            />
          </div>
        </div>
      </section>

      {/* Sneak Peek Screenshots */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="section-glow right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-500 text-sm font-semibold uppercase tracking-widest mb-4">
              Sneak Peek
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
              Built different.
              <br />
              <span className="gradient-text">Looks different too.</span>
            </h2>
            <p className="text-white/55 max-w-xl mx-auto text-lg">
              Every screen was designed to feel premium, fast, and culture-native — like it belongs in your hand.
            </p>
          </div>

          {/* Screenshot rows */}
          <div className="space-y-24">
            {/* Row 1 - Discover */}
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              <div className="flex-1 order-2 md:order-1">
                <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">
                  Discover
                </p>
                <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight">
                  Scroll artists near and far — your next ink is a swipe away.
                </h3>
                <p className="text-white/55 leading-relaxed">
                  Filter by radius, style, and availability. Whether you're looking for someone around the corner or willing to travel for the right piece — InkNow surfaces the best options with transparent pricing and real next-available dates. No guessing. No DMing into the void.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Radius Filter", "Live Availability", "Deposits", "Nearby Artists"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="order-1 md:order-2 float-phone-2">
                <PhoneMockup
                  src={`${BASE}assets/screen-discover.png`}
                  alt="Discover Artists"
                  className="!w-[220px] !h-[470px]"
                />
              </div>
            </div>

            {/* Row 2 - Explore */}
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              <div className="float-phone">
                <PhoneMockup
                  src={`${BASE}assets/screen-explore.png`}
                  alt="Explore Page"
                  className="!w-[220px] !h-[470px]"
                />
              </div>
              <div className="flex-1">
                <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">
                  Explore
                </p>
                <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight">
                  An algorithm built for the culture — not the algorithm.
                </h3>
                <p className="text-white/55 leading-relaxed">
                  The Explore feed surfaces trending artists and fresh portfolio drops based on what you actually care about — style, vibe, and city. Plus, every major city has its own Top 50 ranking that resets weekly, so the best artists always have a path to shine.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Style-Based Feed", "City Top 50", "Weekly Rankings", "Trending Artists"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 3 - Profile */}
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              <div className="flex-1 order-2 md:order-1">
                <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">
                  Artist Profile
                </p>
                <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight">
                  Real portfolios. Real reviews. Real results.
                </h3>
                <p className="text-white/55 leading-relaxed">
                  Every artist profile shows verified work, honest client reviews, and a Reliability Score earned through actual bookings — not clout. Clients know exactly who they're booking before they ever step through the door.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Reliability Score", "Verified Reviews", "Portfolio", "Social Links"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="order-1 md:order-2 float-phone-3">
                <PhoneMockup
                  src={`${BASE}assets/screen-profile.png`}
                  alt="Artist Profile"
                  className="!w-[220px] !h-[470px]"
                />
              </div>
            </div>

            {/* Row 4 - Earnings */}
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              <div className="float-phone-2">
                <PhoneMockup
                  src={`${BASE}assets/screen-earnings.png`}
                  alt="Earnings Dashboard"
                  className="!w-[220px] !h-[470px]"
                />
              </div>
              <div className="flex-1">
                <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">
                  Earnings Dashboard
                </p>
                <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight">
                  Stop guessing. Start growing your business.
                </h3>
                <p className="text-white/55 leading-relaxed">
                  Artists get a full breakdown of total earnings, upcoming payouts, and deposit history — all in one place. Know what's coming in, when it lands, and which clients are coming back. Built for artists who take their craft seriously.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Payout Tracking", "Deposit History", "Income Reports", "Scheduled Payouts"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Artists / For Clients split */}
      <section className="py-24 px-6 border-t border-white/6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Built for both sides.
            </h2>
            <p className="text-white/50 text-lg">
              Every feature was designed with artists and clients in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-white/8 bg-gradient-to-b from-white/5 to-white/2 p-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/15 text-yellow-400 text-sm font-semibold mb-6 border border-yellow-500/25">
                <span>🎨</span> For Artists
              </div>
              <ul className="space-y-4">
                {[
                  "Get booked by clients who actually show up",
                  "Earn a Reliability Score that builds trust",
                  "Manage your full schedule and availability",
                  "Track earnings, deposits, and upcoming payouts",
                  "Climb your city's weekly Top 50 ranking",
                  "Reach new clients without the social media grind",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/75">
                    <svg className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/8 bg-gradient-to-b from-white/5 to-white/2 p-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/15 text-yellow-400 text-sm font-semibold mb-6 border border-yellow-500/25">
                <span>💉</span> For Clients
              </div>
              <ul className="space-y-4">
                {[
                  "Find artists by style, vibe, and location",
                  "See real portfolios before you commit",
                  "Book and pay deposits securely in-app",
                  "Read verified reviews from real clients",
                  "Never waste time chasing unresponsive artists",
                  "Get reminders so you never miss your appointment",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/75">
                    <svg className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist" className="py-28 px-6 relative overflow-hidden">
        <div className="section-glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: 800, height: 800 }} />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/8 text-yellow-400 text-sm font-medium mb-8">
            <span>🔥</span> Early Access — Limited Spots
          </div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            Be first when
            <br />
            <span className="gradient-text">InkNow drops.</span>
          </h2>
          <p className="text-white/55 text-lg mb-10 leading-relaxed">
            The tattoo industry is overdue for something real. Join the waitlist and be among the first artists and clients to experience InkNow when we launch.
          </p>

          {/* Role toggle */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex p-1 rounded-full bg-white/6 border border-white/10">
              <button
                onClick={() => setRole("client")}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  role === "client"
                    ? "bg-yellow-500 text-black"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                I'm a Client
              </button>
              <button
                onClick={() => setRole("artist")}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  role === "artist"
                    ? "bg-yellow-500 text-black"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                I'm an Artist
              </button>
            </div>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={role === "artist" ? "Enter your artist email..." : "Enter your email..."}
                required
                className="flex-1 px-5 py-4 rounded-full bg-white/8 border border-white/15 text-white placeholder-white/35 text-sm outline-none focus:border-yellow-500/60 focus:bg-white/10 transition-all duration-200"
              />
              <button
                type="submit"
                className="glow-button px-6 py-4 rounded-full bg-yellow-500 text-black font-bold text-sm hover:bg-yellow-400 transition-colors duration-200 whitespace-nowrap"
              >
                Notify Me
              </button>
            </form>
          ) : (
            <div className="max-w-md mx-auto px-6 py-5 rounded-2xl bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 font-semibold">
              🎉 You're on the list{role === "artist" ? " as an artist" : ""}! We'll hit you up when InkNow drops.
            </div>
          )}

          <p className="text-white/25 text-xs mt-5">
            No spam. Just the launch announcement when it's time.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/6 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <img
            src={`${BASE}assets/logo.png`}
            alt="InkNow"
            className="h-10 w-auto object-contain mix-blend-screen brightness-200"
          />
          <p className="text-white/25 text-sm text-center">
            © 2026 InkNow. All rights reserved. Built for the culture.
          </p>
          <div className="flex items-center gap-5 text-white/30 text-sm">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/60 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
