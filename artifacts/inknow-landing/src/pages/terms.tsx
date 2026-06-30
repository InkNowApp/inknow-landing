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
            By creating an account or using InkNow, you agree to these Terms. If you do not agree, do not use the app. You must be 18 or older to use InkNow — creating an account constitutes a representation that you meet this age requirement. These Terms apply to all users: Clients, Artists, and Shop Owners.
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
              "A booking is confirmed only after the artist accepts and a deposit is paid through InkNow",
              "InkNow does not guarantee artist availability or booking confirmation",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section number="5" title="Deposits and Payments">
          <ul className="space-y-2">
            {[
              "Deposits are required to secure an appointment and are processed through InkNow's in-app payment system, powered by Stripe",
              "Deposit amounts are set by the artist and displayed before payment",
              "The remaining session balance must be paid through InkNow at or after the appointment",
              "InkNow charges a platform service fee on balance payments (1.25% for PRO artists, 1.75% for free artists) which is deducted automatically",
              "Payments to artists are processed via Stripe Connect. InkNow is not responsible for delays caused by Stripe or banking institutions",
              "InkNow's platform service fee is non-refundable regardless of the outcome of any dispute, cancellation, or chargeback",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section number="6" title="Off-Platform Payment Prohibition">
          <p className="text-white/70 leading-relaxed mb-4">
            All deposits and balance payments for bookings initiated through InkNow must be processed exclusively through InkNow's in-app payment system. Payments made outside the platform — including but not limited to cash, Venmo, Zelle, Cash App, PayPal, wire transfer, or any other method — are not recognized by InkNow and do not satisfy the booking agreement under any circumstances.
          </p>
          <ul className="space-y-2">
            {[
              "Off-platform payments provide no protection to either the client or the artist under InkNow's policies",
              "InkNow cannot mediate disputes, process refunds, or take any action regarding transactions that occurred outside the platform",
              "Arranging or soliciting off-platform payments after a consultation was initiated through InkNow is a violation of these Terms and will result in immediate account suspension",
              "Both parties — clients and artists — are responsible for ensuring all payment is conducted within the app",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section number="7" title="Cancellation and No-Show Policy">
          <ul className="space-y-2">
            {[
              "Cancellation terms are set by each individual artist and displayed during booking",
              "Deposit refunds are governed entirely by the artist's cancellation policy — InkNow does not set or override artist cancellation terms",
              "A \"late cancellation\" is defined as any cancellation made within 24 hours of the scheduled appointment start time, unless the artist has specified a different window",
              "Late cancellations may result in forfeiture of the deposit per the artist's policy",
              "Clients who accumulate two or more no-shows within a 90-day period may have their account restricted or suspended",
              "Artists who repeatedly cancel confirmed bookings without adequate notice may lose platform access",
              "InkNow is not responsible for deposit refunds — disputes must be resolved between the client and artist",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section number="8" title="Travel Bookings">
          <ul className="space-y-2">
            {[
              "Some artists offer travel services. Travel bookings require a separate deposit that includes a travel fee set by the artist",
              "The artist must approve travel requests before a travel booking is confirmed",
              "Travel deposit calculations are based on session price and travel fee as displayed at time of booking",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section number="9" title="InkNow PRO Subscription">
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

        <Section number="10" title="Boost Credits">
          <ul className="space-y-2">
            {[
              "Boost credits allow artists to increase their visibility in the app for 24 hours",
              "Credits can be purchased or earned. Purchased boost credits are non-refundable",
              "Boosts do not guarantee bookings or specific placement outcomes",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section number="11" title="Artist Independent Contractor Status">
          <p className="text-white/70 leading-relaxed mb-4">
            Artists using InkNow are independent contractors, not employees, agents, partners, or representatives of InkNow LLC. InkNow provides a technology platform only and has no control over, and expressly disclaims all liability for, the manner in which any artist performs their services.
          </p>
          <ul className="space-y-2">
            {[
              "InkNow is not liable for the quality, safety, outcome, or permanent results of any tattoo or piercing service performed through a booking made on the platform",
              "Artists are solely responsible for obtaining and maintaining all required licenses, certifications, health department permits, and insurance required by their local jurisdiction",
              "Artists are solely responsible for compliance with all applicable laws, regulations, and health codes governing tattooing and body piercing in their area",
              "InkNow does not verify, audit, or certify any artist's licensing status, training credentials, sterilization practices, or studio conditions",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section number="12" title="Artist Responsibilities">
          <ul className="space-y-2">
            {[
              "Artists must honor confirmed bookings or cancel with reasonable notice through the app",
              "Artists must maintain accurate availability, pricing, and portfolio information",
              "Artists must own or have full rights to all portfolio content, images, and designs they upload to InkNow",
              "Artists may not upload content that infringes on the intellectual property rights of others",
              "Artists must process all booking-related payments exclusively through InkNow's in-app system",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section number="13" title="Client Responsibilities">
          <ul className="space-y-2">
            {[
              "Clients must provide accurate information in consultation requests",
              "Clients must arrive on time to scheduled appointments",
              "Clients are responsible for reading and understanding the artist's cancellation policy before booking",
              "Clients must be 18 or older and must not misrepresent their age to book services through InkNow",
              "Clients are responsible for independently vetting an artist's credentials, licenses, and studio conditions before attending a session — InkNow does not perform this verification",
              "Clients must process all payments exclusively through InkNow's in-app payment system",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section number="14" title="Age Requirement">
          <p className="text-white/70 leading-relaxed mb-4">
            Users must be 18 years of age or older to create an account or use InkNow. Tattooing and body piercing of minors is illegal in most jurisdictions.
          </p>
          <ul className="space-y-2">
            {[
              "InkNow does not knowingly allow users under 18 to create accounts or make bookings",
              "If InkNow discovers that an account belongs to a minor, the account will be immediately terminated",
              "Artists are solely responsible for verifying client age before performing any service — InkNow does not perform in-person age verification and takes no responsibility if an artist performs work on an underage client",
              "InkNow disclaims all liability arising from services provided to minors",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section number="15" title="Content and Portfolio">
          <ul className="space-y-2">
            {[
              "Artists retain ownership of their portfolio images uploaded to InkNow",
              "By uploading content, artists grant InkNow a non-exclusive, royalty-free license to display that content within the app and for promotional purposes",
              "By submitting a consultation or completing a booking, clients grant InkNow and the artist permission to photograph and publish the completed tattoo or piercing in the artist's portfolio and for InkNow promotional use, unless the client explicitly opts out in writing prior to the session",
              "Artists must own or have full rights to all content they upload — uploading content you do not own is a violation of these Terms and may constitute copyright infringement",
              "Users may not upload content that is illegal, harassing, or infringes on third-party rights",
              "InkNow reserves the right to remove any content that violates these Terms",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section number="16" title="Account Suspension Triggers">
          <p className="text-white/70 leading-relaxed mb-4">
            The following actions will result in immediate account suspension, pending review or permanent termination:
          </p>
          <ul className="space-y-2">
            {[
              "Arranging, soliciting, or completing payment for any InkNow booking outside of the in-app payment system (cash, Venmo, Zelle, Cash App, PayPal, or any other method)",
              "Initiating a fraudulent or unwarranted chargeback against an InkNow transaction — accounts will be suspended immediately upon receipt of a chargeback, pending investigation",
              "Accumulating two or more no-shows within a 90-day period (clients)",
              "Repeatedly canceling confirmed bookings without adequate notice (artists)",
              "Harassing, threatening, or abusing other users on or off the platform in connection with an InkNow booking",
              "Misrepresenting your age, identity, credentials, or licensing status",
              "Posting false reviews, manipulating ratings, or attempting to game the platform's ranking system",
              "Any attempt to reverse engineer, scrape, or abuse the InkNow platform or its data",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section number="17" title="Health and Safety Disclaimer">
          <p className="text-white/70 leading-relaxed mb-4">
            InkNow is a booking platform only. We do not inspect, audit, or certify any artist's studio, equipment, sterilization practices, health department compliance, or safety procedures.
          </p>
          <ul className="space-y-2">
            {[
              "Clients are solely responsible for researching and verifying an artist's health certifications, studio sanitation standards, and any other safety-related credentials before attending a session",
              "InkNow makes no representations or warranties regarding the safety or cleanliness of any studio or artist's workspace",
              "InkNow is not liable for any injury, infection, allergic reaction, or adverse health outcome resulting from a tattoo or piercing service booked through the platform",
              "Artists are solely responsible for maintaining a safe, sanitary environment and complying with all applicable health department regulations",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section number="18" title="Prohibited Conduct">
          <p className="text-white/70 leading-relaxed mb-3">Users may not:</p>
          <ul className="space-y-2">
            {[
              "Use InkNow for any unlawful purpose",
              "Harass, threaten, or abuse other users",
              "Process or solicit payments for InkNow bookings outside of the in-app payment system",
              "Initiate a chargeback or payment dispute in bad faith",
              "Post false reviews or manipulate the ranking system",
              "Misrepresent age, identity, credentials, or licensing status",
              "Attempt to reverse engineer, scrape, or exploit the InkNow platform",
              "Use the platform to contact or solicit users for purposes unrelated to legitimate bookings",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section number="19" title="Disputes and Chargebacks">
          <p className="text-white/70 leading-relaxed mb-4">
            InkNow is not a party to disputes between clients and artists. We may provide communication records to assist in resolution but are not obligated to mediate or adjudicate disputes.
          </p>
          <ul className="space-y-2">
            {[
              "For payment disputes involving chargebacks, InkNow reserves the right to suspend the account immediately upon receipt of a chargeback, pending investigation",
              "Fraudulent chargebacks — defined as chargebacks filed against legitimate transactions where the service was rendered as agreed — will result in permanent account termination and may be reported to payment processors",
              "InkNow's platform service fee is non-refundable regardless of the outcome of any chargeback, dispute, or cancellation",
              "Deposit refunds are governed by the artist's individual cancellation policy — InkNow does not override or administer artist refund decisions",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section number="20" title="Limitation of Liability">
          <p className="text-white/70 leading-relaxed mb-3">To the fullest extent permitted by law, InkNow is not liable for:</p>
          <ul className="space-y-2 mb-4">
            {[
              "The quality, safety, outcome, or permanence of any tattoo or piercing service",
              "Actions or omissions of any artist or client on the platform",
              "Losses arising from payment processing delays or failures",
              "Any injury, health outcome, or damage resulting from services booked through the platform",
              "Any indirect, incidental, or consequential damages",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
          <p className="text-white/70 leading-relaxed">
            InkNow's total liability to any user shall not exceed the total platform fees paid by that user in the 12 months prior to the claim.
          </p>
        </Section>

        <Section number="21" title="Indemnification">
          <p className="text-white/70 leading-relaxed">
            You agree to indemnify and hold InkNow LLC and its officers, directors, employees, and agents harmless from any claims, damages, losses, or expenses (including legal fees) arising from your use of the platform, your content, your services, or your violation of these Terms.
          </p>
        </Section>

        <Section number="22" title="Termination">
          <p className="text-white/70 leading-relaxed">
            We may suspend or terminate your account at any time for violations of these Terms. You may delete your account at any time through the app settings. Upon termination, your right to use InkNow ceases immediately. Booking records may be retained as required by law.
          </p>
        </Section>

        <Section number="23" title="Changes to These Terms">
          <p className="text-white/70 leading-relaxed">
            We may update these Terms at any time. Material changes will be communicated via the app or email. Continued use of InkNow after changes constitutes acceptance of the updated Terms.
          </p>
        </Section>

        <Section number="24" title="Governing Law">
          <p className="text-white/70 leading-relaxed">
            These Terms are governed by the laws of the State of Ohio, United States, without regard to conflict of law principles. Any disputes shall be resolved in the courts of Ohio.
          </p>
        </Section>

        <Section number="25" title="Contact">
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
          <a href={`${BASE}contact`} className="hover:text-white/60 transition-colors">Support</a>
        </div>
      </div>
    </footer>
  );
}
