const BASE = import.meta.env.BASE_URL;

const faqs = {
  clients: [
    {
      q: "How do I book an appointment?",
      a: "Browse artists on the Explore tab, open an artist's profile, and tap Book. Fill out the consultation form with your tattoo details and preferred dates. The artist will review your request and respond within the app.",
    },
    {
      q: "Why do I have to pay a deposit?",
      a: "Deposits secure your appointment slot and compensate the artist for their time if a cancellation occurs. The deposit amount is set by each artist and shown before you pay.",
    },
    {
      q: "Can I get a refund on my deposit?",
      a: "Refund eligibility depends on the artist's individual cancellation policy, which is displayed during the booking process. InkNow does not issue deposit refunds — please reach out to your artist directly through in-app chat.",
    },
    {
      q: "How do I cancel or reschedule?",
      a: "Open the appointment in your Bookings tab and tap the menu icon. You can request a reschedule or cancel from there. Late cancellations may incur a fee per the artist's policy.",
    },
    {
      q: "My artist cancelled on me. What do I do?",
      a: "If an artist cancels, contact us at support@getinknow.com and we will review the situation and assist with any deposit questions.",
    },
    {
      q: "How do I pay the remaining balance after my appointment?",
      a: "You'll receive an in-app notification when your artist marks the session complete. Open the appointment and tap Pay Balance to complete your payment securely through the app.",
    },
  ],
  artists: [
    {
      q: "How does the consultation process work?",
      a: "All bookings start with a client consultation request — you'll be notified in-app to review and accept or decline. Once accepted, the client signs a consent form and pays a deposit to lock in the appointment.",
    },
    {
      q: "Do you support travel bookings?",
      a: "Yes. Artists can mark themselves as available for travel or guest spots in their profile settings. Clients browsing outside your home city can still find and book you when travel availability is enabled.",
    },
    {
      q: "How do I set up payouts?",
      a: "Go to your Profile, tap Payout Method, and connect your Stripe account. You'll need to complete Stripe's identity verification before you can receive payouts.",
    },
    {
      q: "When do I receive my payout after a session?",
      a: "Payouts are processed through Stripe Connect and typically arrive in 2–7 business days after the balance payment clears, depending on your bank.",
    },
    {
      q: "What is InkNow PRO?",
      a: "PRO is a monthly subscription that gives artists reduced platform fees, priority placement, boost credits, detailed analytics, and advanced portfolio tools. A 30-day free trial is available for new subscribers.",
    },
    {
      q: "How do I cancel my PRO subscription?",
      a: "Manage your subscription directly in your iPhone's App Store settings under Subscriptions. Your PRO access continues until the end of the current billing period.",
    },
    {
      q: "How do Boost Credits work?",
      a: "Boosting places your profile higher in Explore results for 24 hours. Credits can be purchased in the app or earned through referrals and PRO renewals.",
    },
    {
      q: "How does the Top 50 Leaderboard work?",
      a: "Rankings are calculated weekly based on bookings, reviews, portfolio engagement, and app activity in your city. The more active and highly reviewed you are, the higher your rank.",
    },
  ],
  technical: [
    {
      q: "I can't log in to my account.",
      a: `Use the "Forgot Password" option on the login screen to reset your password via email. If you still can't access your account, email us at support@getinknow.com.`,
    },
    {
      q: "How do I delete my account?",
      a: "Go to Profile → Privacy & Security → Delete Account. This permanently removes your data. Booking records may be retained for legal purposes as outlined in our Privacy Policy.",
    },
    {
      q: "The app is crashing or showing an error.",
      a: "Try closing and reopening the app, or updating to the latest version from the App Store. If the issue persists, email us with a brief description of what happened and what device you're using.",
    },
    {
      q: "I have a safety concern about a user.",
      a: "Email us immediately at support@getinknow.com with as much detail as possible. We take safety seriously and will respond as a priority.",
    },
  ],
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white flex flex-col">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/6">
        <a href={BASE}>
          <img
            src={`${BASE}assets/logo.png`}
            alt="InkNow"
            className="h-16 w-auto object-contain mix-blend-screen brightness-200"
          />
        </a>
      </nav>

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 py-16">
        <h1 className="text-4xl font-black mb-2">Support</h1>
        <p className="text-white/50 text-lg mb-6">We're here to help.</p>
        <p className="text-white/55 leading-relaxed mb-14">
          Before reaching out, check the FAQ below — most questions are answered there. For anything else, email us directly.
        </p>

        {/* For Clients */}
        <FaqSection title="For Clients" items={faqs.clients} />

        {/* For Artists */}
        <FaqSection title="For Artists" items={faqs.artists} />

        {/* Account & Technical */}
        <FaqSection title="Account & Technical" items={faqs.technical} />

        {/* Contact Card */}
        <div
          className="rounded-2xl px-8 py-8 text-center mb-6"
          style={{ background: "#111111", border: "1px solid #D4AF37" }}
        >
          <h2 className="text-xl font-bold mb-2">Still need help?</h2>
          <p className="text-white/50 text-sm mb-5 leading-relaxed">
            Our team typically responds within 24 hours on business days.
          </p>
          <a
            href="mailto:support@getinknow.com"
            className="text-yellow-400 hover:text-yellow-300 transition-colors font-semibold text-base"
            style={{ color: "#D4AF37" }}
          >
            support@getinknow.com
          </a>
        </div>

        <p className="text-center text-xs mb-16" style={{ color: "#888888" }}>
          For subscription billing issues, you can also contact Apple Support directly through your App Store account settings.
        </p>
      </div>

      <footer className="border-t border-white/6 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
          <div className="flex items-center gap-5 text-sm" style={{ color: "#888888" }}>
            <a href={`${BASE}privacy`} className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <span className="text-white/20">·</span>
            <a href={`${BASE}terms`} className="hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
            <img src={`${BASE}assets/logo.png`} alt="InkNow" className="h-8 w-auto object-contain mix-blend-screen brightness-200" />
            <p className="text-white/25 text-sm">© 2026 InkNow LLC. All rights reserved.</p>
            <div className="flex items-center gap-5 text-white/30 text-sm">
              <a href={`${BASE}privacy`} className="hover:text-white/60 transition-colors">Privacy</a>
              <a href={`${BASE}terms`} className="hover:text-white/60 transition-colors">Terms</a>
              <a href={`${BASE}contact`} className="hover:text-white/60 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FaqSection({ title, items }: { title: string; items: { q: string; a: string }[] }) {
  return (
    <div className="mb-12">
      <h2 className="text-xl font-bold mb-6 text-white">{title}</h2>
      <div className="space-y-6">
        {items.map(({ q, a }) => (
          <div key={q} className="border-b border-white/6 pb-6">
            <p className="font-semibold text-white mb-2">{q}</p>
            <p className="text-white/60 leading-relaxed text-sm">{a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
