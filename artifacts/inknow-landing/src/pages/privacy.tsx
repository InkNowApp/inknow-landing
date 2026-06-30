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
            InkNow LLC ("InkNow," "we," "our," or "us") operates a marketplace connecting clients with tattoo and piercing artists. This Privacy Policy explains what personal information we collect, how we use and share it, and the rights available to you. By creating an account or using the InkNow app or website, you agree to this policy. If you do not agree, please do not use our services.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <Subsection title="a) Account Information">
            <ul className="space-y-2">
              {[
                "Name and email address",
                "Profile photo (optional)",
                "Role: Client, Artist, or Shop Owner",
                "ZIP code and state (used to assign your metro city)",
              ].map((item) => <BulletItem key={item} text={item} />)}
            </ul>
          </Subsection>

          <Subsection title="b) Booking & Consultation Data">
            <ul className="space-y-2">
              {[
                "Tattoo style preferences, placement, size, and description",
                "Reference photos you upload for consultations",
                "Appointment dates, time slots, and session notes",
                "Digital consent form responses, including any health disclosures you voluntarily provide",
                "Deposit and session payment amounts",
                "Messages exchanged between clients and artists through the in-app chat",
              ].map((item) => <BulletItem key={item} text={item} />)}
            </ul>
          </Subsection>

          <Subsection title="c) Consent Form & Health Disclosures">
            <p className="text-white/70 leading-relaxed">
              InkNow's digital consent forms may include voluntary health disclosures such as allergies, skin conditions, or medications that affect tattooing or piercing. This information is shared only with the artist completing your service and is not used for advertising or sold to third parties. It is retained for the duration of the booking record (3 years) and then deleted.
            </p>
          </Subsection>

          <Subsection title="d) Payment Information">
            <p className="text-white/70 leading-relaxed">
              Payments are processed by Stripe, Inc. InkNow does not store full card numbers or CVVs. Artists who receive payouts enroll in Stripe Connect, which may require government-issued ID, Social Security Number (SSN) or Employer Identification Number (EIN), and bank account details for tax reporting (IRS Form 1099-K). This information is collected and stored by Stripe, not InkNow. Subscription billing for InkNow PRO is managed by RevenueCat.
            </p>
          </Subsection>

          <Subsection title="e) Photos & Portfolio Content">
            <p className="text-white/70 leading-relaxed">
              Artists may upload portfolio photos to their public profile. Clients may upload reference images for consultation requests. Reference images are visible only to the receiving artist and are not displayed publicly. Portfolio photos are publicly visible to all InkNow users. Both are stored on secure cloud infrastructure and retained per the timelines in Section 7.
            </p>
          </Subsection>

          <Subsection title="f) Usage & Analytics Data">
            <ul className="space-y-2">
              {[
                "App interactions, screen views, portfolio engagement (likes, views, shares, bookmarks)",
                "Push notification tokens",
                "Device type, operating system version, and app version",
              ].map((item) => <BulletItem key={item} text={item} />)}
            </ul>
            <p className="text-white/70 leading-relaxed mt-3">
              Push notifications are delivered using Firebase Cloud Messaging (FCM). We transmit your device push token to FCM to deliver notifications. No personally identifiable information is sent to Firebase beyond what is required to route the notification to your device.
            </p>
          </Subsection>

          <Subsection title="g) Location Data">
            <p className="text-white/70 leading-relaxed">
              We use your ZIP code and state to match you with artists in your metro area. We do not collect, request, or store GPS or precise real-time location data.
            </p>
          </Subsection>

          <Subsection title="h) Communications">
            <p className="text-white/70 leading-relaxed">
              If you contact us by email or through our support channels, we retain those communications to respond to your inquiry and improve our service.
            </p>
          </Subsection>
        </Section>

        <Section title="3. How We Use Your Information">
          <ul className="space-y-2 mb-4">
            {[
              "To create and manage your account",
              "To match clients with artists and facilitate bookings",
              "To process payments and send receipts",
              "To send booking confirmations, reminders, and aftercare instructions via push notification and email",
              "To power the InkNow PRO leaderboard and city ranking system",
              "To send transactional emails related to your account or bookings",
              "To send promotional emails about InkNow features or offers (you may opt out at any time)",
              "To improve the app, diagnose bugs, and detect fraud or abuse",
              "To comply with legal obligations",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
          <p className="text-white font-semibold">We do not sell your personal data to third parties.</p>
        </Section>

        <Section title="4. Data Sharing">
          <ul className="space-y-2">
            {[
              "Artists see client consultation details, reference photos, and contact info necessary to fulfill bookings",
              "Clients see artist portfolio, shop name, availability, and public profile",
              "Stripe and RevenueCat receive payment data as required to process transactions",
              "Firebase (Google) receives crash reports and aggregate analytics data",
              "We may share data with law enforcement, regulators, or courts when required by law or to protect the rights, property, or safety of InkNow, our users, or the public",
              "In the event of a merger, acquisition, or sale of InkNow LLC, your data may be transferred to the acquiring entity subject to the same privacy commitments",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section title="5. Third-Party Links">
          <p className="text-white/70 leading-relaxed">
            Artist profiles may include links to external websites or social media accounts. InkNow is not responsible for the privacy practices of those third-party sites. We encourage you to review their privacy policies before sharing personal information.
          </p>
        </Section>

        <Section title="6. Email Communications & Opt-Out">
          <p className="text-white/70 leading-relaxed mb-3">
            We send two types of emails:
          </p>
          <ul className="space-y-2 mb-3">
            {[
              "Transactional emails: booking confirmations, receipts, reminders, password resets. These cannot be opted out of while your account is active.",
              "Promotional emails: feature announcements, offers, and InkNow news. You can unsubscribe at any time using the link in the email footer or by emailing support@getinknow.com.",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
          <p className="text-white/70 leading-relaxed">
            We comply with the CAN-SPAM Act. Unsubscribe requests are honored within 10 business days.
          </p>
        </Section>

        <Section title="7. Data Retention">
          <ul className="space-y-2">
            {[
              "Account data is retained while your account is active",
              "Booking records, consent forms, and payment history are kept for 3 years for legal and tax purposes",
              "Reference photos submitted for consultations are deleted 90 days after the booking is closed or canceled",
              "Portfolio photos uploaded by artists are retained until the artist removes them or deletes their account",
              "Analytics and crash report data is retained for 14 months per Firebase's default policy",
              "If your account is suspended, your data is retained for the suspension period and may be reviewed by our trust and safety team",
              "If you request account deletion, your personal data is removed within 30 days, except records required for legal or tax compliance",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
        </Section>

        <Section title="8. Your Rights">
          <ul className="space-y-2 mb-4">
            {[
              "Access: Request a copy of the personal data we hold about you",
              "Correction: Update or correct inaccurate information in your profile",
              "Deletion: Delete your account directly in the app via Settings → Privacy & Security, or request deletion by emailing us (subject to legal retention requirements)",
              "Portability: Request your data in a structured, machine-readable format",
              "Opt-out of marketing: Unsubscribe from promotional emails at any time",
              "Push notifications: Disable in your device settings at any time",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
          <p className="text-white/70 leading-relaxed">
            To exercise any of these rights, email{" "}
            <a href="mailto:support@getinknow.com" className="text-yellow-400 hover:text-yellow-300 transition-colors">
              support@getinknow.com
            </a>
            {" "}with your request. We will respond within 30 days.
          </p>
        </Section>

        <Section title="9. California Privacy Rights (CCPA)">
          <p className="text-white/70 leading-relaxed mb-3">
            If you are a California resident, you have the following additional rights under the California Consumer Privacy Act (CCPA):
          </p>
          <ul className="space-y-2 mb-3">
            {[
              "Right to Know: You may request details about the categories and specific pieces of personal information we have collected about you in the past 12 months, and how it was used and shared.",
              "Right to Delete: You may request deletion of personal information we have collected from you, subject to certain exceptions (e.g., legal obligations).",
              "Right to Opt-Out of Sale: InkNow does not sell personal information. No opt-out action is required.",
              "Right to Non-Discrimination: We will not deny services, charge different prices, or provide a different quality of service because you exercised your privacy rights.",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
          <p className="text-white/70 leading-relaxed">
            To submit a CCPA request, email{" "}
            <a href="mailto:support@getinknow.com" className="text-yellow-400 hover:text-yellow-300 transition-colors">
              support@getinknow.com
            </a>
            {" "}with the subject line "California Privacy Request." We will verify your identity before processing your request and respond within 45 days.
          </p>
        </Section>

        <Section title="10. Children's Privacy">
          <p className="text-white/70 leading-relaxed">
            InkNow is not intended for users under 18 years of age. We do not knowingly collect personal information from minors. If you believe a minor has created an account, please contact us at{" "}
            <a href="mailto:support@getinknow.com" className="text-yellow-400 hover:text-yellow-300 transition-colors">
              support@getinknow.com
            </a>
            {" "}and we will remove the account promptly.
          </p>
        </Section>

        <Section title="11. Security">
          <p className="text-white/70 leading-relaxed mb-3">
            We implement industry-standard security measures to protect your data:
          </p>
          <ul className="space-y-2">
            {[
              "All data in transit is encrypted using TLS (Transport Layer Security)",
              "Data at rest is encrypted using AES-256",
              "Passwords are hashed and never stored in plain text",
              "Payment data is handled exclusively by PCI-DSS compliant third parties (Stripe)",
              "Access to user data within InkNow is restricted to employees and contractors who need it to perform their job",
            ].map((item) => <BulletItem key={item} text={item} />)}
          </ul>
          <p className="text-white/70 leading-relaxed mt-3">
            No method of transmission or storage is 100% secure. While we take reasonable precautions, we cannot guarantee absolute security.
          </p>
        </Section>

        <Section title="12. Data Breach Notification">
          <p className="text-white/70 leading-relaxed">
            In the event of a data breach that is reasonably likely to result in harm to affected users, InkNow will notify affected users via email and in-app notification within 72 hours of becoming aware of the breach, or as required by applicable law. Notification will include the nature of the breach, the data involved, and steps we are taking to address it.
          </p>
        </Section>

        <Section title="13. Changes to This Policy">
          <p className="text-white/70 leading-relaxed">
            We may update this policy periodically. For material changes, we will notify you via in-app notification and email at least 14 days before the change takes effect. The updated effective date will be reflected at the top of this page. Continued use of InkNow after changes take effect constitutes your acceptance of the revised policy.
          </p>
        </Section>

        <Section title="14. Contact Us">
          <p className="text-white/70 leading-relaxed mb-4">
            If you have questions, concerns, or requests related to this Privacy Policy, contact us at:
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
