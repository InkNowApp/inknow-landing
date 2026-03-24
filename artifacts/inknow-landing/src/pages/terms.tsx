const BASE = import.meta.env.BASE_URL;

export default function Terms() {
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
        <h1 className="text-4xl font-black mb-2">Terms of Service</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: 2026</p>

        <p className="text-white/70 leading-relaxed mb-10">
          Welcome to InkNow. By using our website or app, you agree to these Terms of Service.
        </p>

        <Section number="1" title="Overview">
          <p className="text-white/70 leading-relaxed">
            InkNow connects tattoo artists and clients. We provide tools for discovery, booking, communication, and payments. Artists are independent professionals, not employees of InkNow.
          </p>
        </Section>

        <Section number="2" title="User Accounts">
          <p className="text-white/70 leading-relaxed">
            You must provide accurate information when creating an account. You are responsible for keeping your login secure.
          </p>
        </Section>

        <Section number="3" title="Artists">
          <p className="text-white/70 leading-relaxed mb-3">Artists agree to:</p>
          <ul className="space-y-2 mb-4">
            {[
              "Provide accurate pricing and portfolio information",
              "Honor confirmed bookings",
              "Follow local laws and safety regulations",
              "Maintain professionalism with clients",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
          <p className="text-white/70 leading-relaxed">InkNow does not guarantee clients, income, or results.</p>
        </Section>

        <Section number="4" title="Clients">
          <p className="text-white/70 leading-relaxed mb-3">Clients agree to:</p>
          <ul className="space-y-2">
            {[
              "Provide accurate booking information",
              "Pay required deposits",
              "Show up on time",
              "Respect artist policies",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section number="5" title="Deposits & Cancellations">
          <ul className="space-y-2">
            {[
              "Deposits are set by the artist.",
              "Artists may cancel before a deposit is paid without penalty.",
              "Confirmed bookings (with deposit) follow the artist's cancellation rules.",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section number="6" title="Reliability Score">
          <p className="text-white/70 leading-relaxed">
            InkNow uses a Reliability Score to maintain trust. Low scores may limit visibility or booking access.
          </p>
        </Section>

        <Section number="7" title="Payments">
          <p className="text-white/70 leading-relaxed">
            Payments are processed through third-party providers. InkNow does not store full payment information.
          </p>
        </Section>

        <Section number="8" title="Prohibited Behavior">
          <p className="text-white/70 leading-relaxed mb-3">Users may not:</p>
          <ul className="space-y-2">
            {[
              "Harass or threaten others",
              "Post false information",
              "Attempt fraud",
              "Misuse the platform",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section number="9" title="Limitation of Liability">
          <p className="text-white/70 leading-relaxed mb-3">InkNow is not responsible for:</p>
          <ul className="space-y-2 mb-4">
            {[
              "Artist performance",
              "Client behavior",
              "Tattoo outcomes",
              "Missed appointments",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
          <p className="text-white/70 leading-relaxed">
            We provide the platform — the work is between artist and client.
          </p>
        </Section>

        <Section number="10" title="Contact">
          <p className="text-white/70 leading-relaxed mb-2">
            For questions about these Terms, contact us at:
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

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold mb-4 text-white">{number}. {title}</h2>
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
