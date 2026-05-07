const BASE = import.meta.env.BASE_URL;

export default function Terms() {
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
        <h1 className="text-4xl font-black mb-2">Terms of Service</h1>
        <p className="text-white/40 text-sm mb-12">Effective date: May 7, 2026</p>

        <Section number="1" title="Acceptance of Terms">
          <p className="text-white/70 leading-relaxed">
            By creating an account or using InkNow, you agree to these Terms. If you do not agree, do not use the app. You must be 18 or older to use InkNow. These Terms apply to all users: Clients, Artists, and Shop Owners.
          </p>
        </Section>

        <Section number="2" title="What InkNow Is">
          <p className="text-white/70 leading-relaxed">
            InkNow is a two-sided marketplace that connects clients seeking tattoo and piercing services with independent artists. InkNow is a platform, not a tattoo studio. We do not employ artists, perform services, or guarantee the quality of any work. All service agreements are between the client and the artist directly.
          </p>
        </Section>

        <Section number="3" title="Accounts">
          <ul className="space-y-2">
            {[
              "You are responsible for maintaining the security of your account credentials",
              "You may not share your account or impersonate another person",
              "You must provide accurate information when creating your account",
              "We reserve the right to suspend or terminate accounts that violate these Terms",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section number="4" title="Bookings and Consultations">
          <ul className="space-y-2">
            {[
              "All bookings begin with a consultation request submitted through the app",
              "Artists review requests and may accept, decline, or request more information",
              "A booking is confirmed only after the artist accepts and a deposit is paid",
              "InkNow does not guarantee artist availability or booking confirmation",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section number="5" title="Deposits and Payments">
          <ul className="space-y-2">
            {[
              "Deposits are required to secure an appointment and are processed through Stripe",
              "Deposit amounts are set by the artist and displayed before payment",
              "The remaining session balance is paid through InkNow at or after the appointment",
              "InkNow charges a platform service fee on balance payments (1.25% for PRO artists, 1.75% for free artists) which is deducted automatically",
              "Payments to artists are processed via Stripe Connect. InkNow is not responsible for delays caused by Stripe or banking institutions",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section number="6" title="Cancellation Policy">
          <ul className="space-y-2">
            {[
              "Cancellation terms are set by each individual artist and displayed during booking",
              "Deposits may be non-refundable depending on the artist's policy and how close to the appointment the cancellation occurs",
              "InkNow is not responsible for deposit refunds — disputes must be resolved between the client and artist",
              "Repeated no-shows or late cancellations may result in account suspension",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section number="7" title="Travel Bookings">
          <ul className="space-y-2">
            {[
              "Some artists offer travel services. Travel bookings require a separate deposit that includes a travel fee set by the artist",
              "The artist must approve travel requests before a travel booking is confirmed",
              "Travel deposit calculations are based on session price and travel fee as displayed at time of booking",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section number="8" title="InkNow PRO Subscription">
          <ul className="space-y-2">
            {[
              "InkNow PRO is a paid subscription for artists, offering enhanced visibility, lower platform fees, and additional tools",
              "Subscriptions are billed monthly or annually and managed through RevenueCat and the App Store",
              "A 30-day free trial may be offered to new PRO subscribers",
              "To cancel, manage your subscription in your App Store account settings — cancellation takes effect at the end of the current billing period",
              "Refunds for PRO subscriptions are handled by Apple per their standard refund policy. InkNow does not process subscription refunds directly",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section number="9" title="Boost Credits">
          <ul className="space-y-2">
            {[
              "Boost credits allow artists to increase their visibility in the app for 24 hours",
              "Credits can be purchased or earned. Purchased boost credits are non-refundable",
              "Boosts do not guarantee bookings or specific placement outcomes",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section number="10" title="Artist Responsibilities">
          <ul className="space-y-2">
            {[
              "Artists are independent contractors, not employees of InkNow",
              "Artists are solely responsible for the quality, safety, and legality of their services",
              "Artists must comply with all local health and safety regulations",
              "Artists must honor confirmed bookings or cancel with reasonable notice through the app",
              "Artists must maintain accurate availability and pricing information",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section number="11" title="Client Responsibilities">
          <ul className="space-y-2">
            {[
              "Clients must provide accurate information in consultation requests",
              "Clients must arrive on time to scheduled appointments",
              "Clients are responsible for reading and understanding the artist's cancellation policy before booking",
              "Clients must be 18 or older and must not misrepresent their age",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section number="12" title="Content and Portfolio">
          <ul className="space-y-2">
            {[
              "Artists retain ownership of their portfolio images uploaded to InkNow",
              "By uploading content, artists grant InkNow a non-exclusive license to display that content within the app and for promotional purposes",
              "Users may not upload content that is illegal, offensive, or infringes on third-party rights",
              "InkNow reserves the right to remove any content that violates these Terms",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section number="13" title="Prohibited Conduct">
          <p className="text-white/70 leading-relaxed mb-3">Users may not:</p>
          <ul className="space-y-2">
            {[
              "Use InkNow for any unlawful purpose",
              "Harass, threaten, or abuse other users",
              "Circumvent platform fees by arranging payments outside of InkNow after a consultation was initiated through the app",
              "Post false reviews or manipulate the ranking system",
              "Attempt to reverse engineer or scrape the InkNow platform",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section number="14" title="Disputes Between Users">
          <p className="text-white/70 leading-relaxed">
            InkNow is not a party to disputes between clients and artists. We may provide communication records to assist in resolution but are not obligated to mediate or adjudicate disputes. For payment disputes involving chargebacks, InkNow reserves the right to suspend the account pending investigation.
          </p>
        </Section>

        <Section number="15" title="Limitation of Liability">
          <p className="text-white/70 leading-relaxed mb-3">To the fullest extent permitted by law, InkNow is not liable for:</p>
          <ul className="space-y-2 mb-4">
            {[
              "The quality or outcome of any tattoo or piercing service",
              "Actions or omissions of any artist or client on the platform",
              "Losses arising from payment processing delays or failures",
              "Any indirect, incidental, or consequential damages",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
          <p className="text-white/70 leading-relaxed">
            InkNow's total liability to any user shall not exceed the total platform fees paid by that user in the 12 months prior to the claim.
          </p>
        </Section>

        <Section number="16" title="Indemnification">
          <p className="text-white/70 leading-relaxed">
            You agree to indemnify and hold InkNow harmless from any claims, damages, or expenses arising from your use of the platform, your content, or your violation of these Terms.
          </p>
        </Section>

        <Section number="17" title="Termination">
          <p className="text-white/70 leading-relaxed">
            We may suspend or terminate your account at any time for violations of these Terms. You may delete your account at any time through the app settings. Upon termination, your right to use InkNow ceases immediately. Booking records may be retained as required by law.
          </p>
        </Section>

        <Section number="18" title="Changes to These Terms">
          <p className="text-white/70 leading-relaxed">
            We may update these Terms at any time. Material changes will be communicated via the app or email. Continued use of InkNow after changes constitutes acceptance of the updated Terms.
          </p>
        </Section>

        <Section number="19" title="Governing Law">
          <p className="text-white/70 leading-relaxed">
            These Terms are governed by the laws of the State of Ohio, United States, without regard to conflict of law principles. Any disputes shall be resolved in the courts of Ohio.
          </p>
        </Section>

        <Section number="20" title="Contact">
          <p className="text-white/70 leading-relaxed mb-4">
            For questions about these Terms, reach out to us:
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
