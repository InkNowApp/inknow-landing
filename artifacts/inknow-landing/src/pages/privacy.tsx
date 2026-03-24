const BASE = import.meta.env.BASE_URL;

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/6">
        <a href={BASE}>
          <img
            src={`${BASE}assets/logo.png`}
            alt="InkNow"
            className="h-10 w-auto object-contain mix-blend-screen brightness-200"
          />
        </a>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-black mb-2">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: 2026</p>

        <p className="text-white/70 leading-relaxed mb-10">
          InkNow ("we," "our," or "us") is built for the culture — a platform that connects tattoo artists and clients in a safe, transparent, and professional way. This Privacy Policy explains how we collect, use, and protect your information when you use our website or app.
        </p>

        <Section title="Information We Collect">
          <p className="text-white/70 leading-relaxed mb-3">We may collect:</p>
          <ul className="space-y-2">
            {[
              "Email address (for waitlist, notifications, and account creation)",
              "Profile information you choose to provide",
              "Booking details",
              "Messages between artists and clients",
              "Device and usage data to improve the platform",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section title="How We Use Your Information">
          <p className="text-white/70 leading-relaxed mb-3">We use your information to:</p>
          <ul className="space-y-2 mb-4">
            {[
              "Create and manage your account",
              "Connect artists and clients",
              "Process bookings and deposits",
              "Improve app performance and user experience",
              "Send important updates about your account or the app",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
          <p className="text-white font-semibold">We never sell your data.</p>
        </Section>

        <Section title="How We Protect Your Information">
          <p className="text-white/70 leading-relaxed">
            We use industry-standard security practices to keep your information safe. While no system is 100% secure, we work hard to protect your data and maintain trust.
          </p>
        </Section>

        <Section title="Your Choices">
          <p className="text-white/70 leading-relaxed mb-3">You can:</p>
          <ul className="space-y-2">
            {[
              "Update your profile",
              "Delete your account",
              "Request removal of your data",
              "Opt out of marketing emails",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section title="Contact Us">
          <p className="text-white/70 leading-relaxed mb-2">
            If you have questions about this Privacy Policy, contact us at:
          </p>
          <a href="mailto:support@getinknow.com" className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">
            support@getinknow.com
          </a>
        </Section>
      </div>

      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold mb-4 text-white">{title}</h2>
      {children}
    </div>
  );
}

function BulletItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-white/70">
      <span className="text-yellow-500 mt-1 flex-shrink-0">•</span>
      <span className="leading-relaxed">{text}</span>
    </li>
  );
}

function Footer() {
  const BASE = import.meta.env.BASE_URL;
  return (
    <footer className="border-t border-white/6 py-10 px-6 mt-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={`${BASE}assets/logo.png`} alt="InkNow" className="h-8 w-auto object-contain mix-blend-screen brightness-200" />
        <p className="text-white/25 text-sm">© 2026 InkNow. All rights reserved.</p>
        <div className="flex items-center gap-5 text-white/30 text-sm">
          <a href={`${BASE}privacy`} className="hover:text-white/60 transition-colors">Privacy</a>
          <a href={`${BASE}terms`} className="hover:text-white/60 transition-colors">Terms</a>
          <a href={`${BASE}contact`} className="hover:text-white/60 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
