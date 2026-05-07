const BASE = import.meta.env.BASE_URL;

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/6">
        <a href={BASE}>
          <img
            src={`${BASE}assets/logo.png`}
            alt="InkNow"
            className="h-16 w-auto object-contain mix-blend-screen brightness-200"
          />
        </a>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-black mb-2">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-12">Effective date: May 7, 2026</p>

        <Section title="1. Introduction">
          <p className="text-white/70 leading-relaxed">
            InkNow is a marketplace connecting clients with tattoo and piercing artists. This policy explains what data we collect, how we use it, and your rights. By using InkNow you agree to this policy.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <Subsection title="a) Account Information">
            <ul className="space-y-2">
              {[
                "Name, email address, phone number (optional)",
                "Profile photo (optional)",
                "Role: Client, Artist, or Shop Owner",
                "ZIP code and state (used to assign your metro city)",
              ].map((item) => <BulletItem key={item} text={item} />)}
            </ul>
          </Subsection>

          <Subsection title="b) Booking & Consultation Data">
            <ul className="space-y-2">
              {[
                "Tattoo style preferences, placement, size, description",
                "Reference photos you upload",
                "Appointment dates, session notes, consent form responses",
                "Deposit and payment amounts",
              ].map((item) => <BulletItem key={item} text={item} />)}
            </ul>
          </Subsection>

          <Subsection title="c) Payment Information">
            <p className="text-white/70 leading-relaxed mb-2">
              Payments are processed by Stripe. InkNow does not store full card numbers. Artists receive payouts via Stripe Connect. Subscription billing is managed by RevenueCat.
            </p>
          </Subsection>

          <Subsection title="d) Usage Data">
            <ul className="space-y-2">
              {[
                "App interactions, screen views, portfolio engagement (likes, views, shares, bookmarks)",
                "Push notification tokens",
                "Device type, operating system version",
              ].map((item) => <BulletItem key={item} text={item} />)}
            </ul>
          </Subsection>

          <Subsection title="e) Location Data">
            <p className="text-white/70 leading-relaxed">
              We use your ZIP code and state to match you with artists in your metro area. We do not collect GPS location.
            </p>
          </Subsection>
        </Section>

        <Section title="3. How We Use Your Information">
          <ul className="space-y-2 mb-4">
            {[
              "To match clients with artists and facilitate bookings",
              "To process payments and send receipts",
              "To send booking confirmations, reminders, and aftercare instructions via push notification and email",
              "To power the InkNow PRO leaderboard and ranking system",
              "To improve the app and detect fraud or abuse",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
          <p className="text-white font-semibold">We do not sell your data to third parties.</p>
        </Section>

        <Section title="4. Data Sharing">
          <ul className="space-y-2">
            {[
              "Artists see client consultation details, reference photos, and contact info needed to fulfill bookings",
              "Clients see artist portfolio, shop name, availability, and public profile",
              "Stripe and RevenueCat receive payment data as required for processing",
              "We may share data with law enforcement if required by law",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section title="5. Data Retention">
          <ul className="space-y-2">
            {[
              "Account data is retained while your account is active",
              "Booking records are kept for 3 years for legal and tax purposes",
              "You can request account deletion at any time (see Your Rights below)",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section title="6. Your Rights">
          <ul className="space-y-2 mb-4">
            {[
              "Access: Request a copy of your personal data",
              "Correction: Update or correct inaccurate information in your profile",
              "Deletion: Request deletion of your account and associated data",
              "Opt-out: Disable push notifications in your device settings at any time",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
          <p className="text-white/70 leading-relaxed">
            To exercise these rights, email{" "}
            <a href="mailto:support@getinknow.com" className="text-yellow-400 hover:text-yellow-300 transition-colors">
              support@getinknow.com
            </a>
          </p>
        </Section>

        <Section title="7. Children's Privacy">
          <p className="text-white/70 leading-relaxed">
            InkNow is not intended for users under 18. We do not knowingly collect data from minors. If you believe a minor has created an account, contact us and we will remove it promptly.
          </p>
        </Section>

        <Section title="8. Security">
          <p className="text-white/70 leading-relaxed">
            We use industry-standard encryption in transit (TLS) and at rest. Passwords are never stored in plain text. Payment data is handled exclusively by PCI-compliant third parties (Stripe).
          </p>
        </Section>

        <Section title="9. Changes to This Policy">
          <p className="text-white/70 leading-relaxed">
            We may update this policy periodically. We'll notify you via the app or email for material changes. Continued use of InkNow after changes constitutes acceptance.
          </p>
        </Section>

        <Section title="10. Contact Us">
          <p className="text-white/70 leading-relaxed mb-4">
            If you have questions about this Privacy Policy, reach out to us:
          </p>
          <div className="space-y-1 text-white/70">
            <p className="font-semibold text-white">InkNow LLC</p>
            <p>
              Email:{" "}
              <a href="mailto:support@getinknow.com" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                support@getinknow.com
              </a>
            </p>
            <p>
              Website:{" "}
              <a href="https://getinknow.com" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                getinknow.com
              </a>
            </p>
          </div>
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

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h3 className="text-base font-semibold text-white/80 mb-2">{title}</h3>
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
        <p className="text-white/25 text-sm">© 2026 InkNow LLC. All rights reserved.</p>
        <div className="flex items-center gap-5 text-white/30 text-sm">
          <a href={`${BASE}privacy`} className="hover:text-white/60 transition-colors">Privacy</a>
          <a href={`${BASE}terms`} className="hover:text-white/60 transition-colors">Terms</a>
          <a href={`${BASE}contact`} className="hover:text-white/60 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
