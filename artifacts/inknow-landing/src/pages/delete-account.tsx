const BASE = import.meta.env.BASE_URL;

export default function DeleteAccount() {
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

        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-3 block">Account Management</span>
          <h1 className="text-4xl font-black mb-4">Delete Your Account</h1>
          <p className="text-white/55 leading-relaxed text-lg">
            You have the right to permanently delete your InkNow account and the data associated with it. This page explains how to submit a deletion request and what happens to your data.
          </p>
        </div>

        {/* How to delete in-app */}
        <Section title="Option 1 — Delete directly in the app">
          <p className="text-white/60 leading-relaxed text-sm mb-4">
            The fastest way to delete your account is from within the InkNow app:
          </p>
          <ol className="space-y-3">
            {[
              "Open the InkNow app and sign in.",
              "Tap your Profile icon in the bottom navigation bar.",
              'Tap "Settings" (gear icon in the top-right corner).',
              'Scroll down and tap "Privacy & Security".',
              'Tap "Delete Account" and follow the on-screen confirmation steps.',
            ].map((step, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black"
                  style={{ background: "#1A1A1A", border: "1px solid #D4AF37", color: "#D4AF37" }}
                >
                  {i + 1}
                </span>
                <span className="text-white/65 text-sm leading-relaxed pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </Section>

        {/* Request by email */}
        <Section title="Option 2 — Submit a request by email">
          <p className="text-white/60 leading-relaxed text-sm mb-5">
            If you no longer have access to your account or the app, you can request deletion by emailing us. Include the following in your message:
          </p>
          <ul className="space-y-2 mb-6">
            {[
              "The email address associated with your InkNow account",
              "Your in-app username (if known)",
              'The subject line: "Account Deletion Request"',
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start text-sm text-white/60">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#D4AF37" }} />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="mailto:support@getinknow.com?subject=Account%20Deletion%20Request"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
            style={{ background: "#D4AF37", color: "#0C0C0C" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email support@getinknow.com
          </a>
          <p className="text-white/30 text-xs mt-3">We typically process deletion requests within 30 days.</p>
        </Section>

        {/* What gets deleted */}
        <Section title="What data is deleted">
          <div className="space-y-3">
            {[
              { label: "Profile & account info", detail: "Name, email, profile photo, bio, and all settings — deleted immediately." },
              { label: "Portfolio & posts", detail: "All photos, tattoo uploads, and community posts — deleted immediately." },
              { label: "Messages & consultations", detail: "In-app conversations and consultation history — deleted immediately." },
              { label: "Reviews & ratings", detail: "Reviews you gave and received — deleted immediately." },
              { label: "Payment method", detail: "Saved payment details are removed from InkNow. Stripe may retain records per their own policy." },
            ].map(({ label, detail }) => (
              <div key={label} className="flex gap-3 items-start rounded-xl px-4 py-3.5" style={{ background: "#111111" }}>
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className="text-xs text-white/50 mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* What is retained */}
        <Section title="What data may be retained">
          <p className="text-white/55 text-sm leading-relaxed mb-4">
            Certain records may be kept for a limited period to comply with legal obligations, resolve disputes, or fulfill contractual requirements:
          </p>
          <div className="space-y-3">
            {[
              { label: "Transaction records", detail: "Booking and payment records retained for up to 7 years for tax and legal compliance.", icon: "clock" },
              { label: "Dispute & safety records", detail: "If an active dispute, chargeback, or safety investigation is open, relevant records are kept until fully resolved.", icon: "shield" },
            ].map(({ label, detail, icon }) => (
              <div key={label} className="flex gap-3 items-start rounded-xl px-4 py-3.5" style={{ background: "#111111" }}>
                {icon === "clock" ? (
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )}
                <div>
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className="text-xs text-white/50 mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-white/35 text-xs mt-4 leading-relaxed">
            For full details, see our{" "}
            <a href={`${BASE}privacy`} className="underline hover:text-white/60 transition-colors">Privacy Policy</a>.
          </p>
        </Section>

        {/* Questions */}
        <div
          className="rounded-2xl px-8 py-8 text-center"
          style={{ background: "#111111", border: "1px solid #D4AF37" }}
        >
          <h2 className="text-xl font-bold mb-2">Questions about your data?</h2>
          <p className="text-white/50 text-sm mb-5 leading-relaxed">
            Our support team responds within 24 hours on business days.
          </p>
          <a
            href="mailto:support@getinknow.com"
            className="font-semibold text-base transition-colors hover:opacity-80"
            style={{ color: "#D4AF37" }}
          >
            support@getinknow.com
          </a>
        </div>
      </div>

      <footer className="border-t border-white/6 py-10 px-6 mt-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <a href={BASE}>
            <img src={`${BASE}assets/logo.png`} alt="InkNow" className="h-14 w-auto object-contain mix-blend-screen brightness-200" />
          </a>
          <p className="text-white/25 text-sm">© 2026 InkNow LLC. All rights reserved.</p>
          <div className="flex items-center gap-5 text-white/30 text-sm">
            <a href={`${BASE}privacy`} className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href={`${BASE}terms`} className="hover:text-white/60 transition-colors">Terms of Service</a>
            <a href={`${BASE}contact`} className="hover:text-white/60 transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <h2 className="text-xl font-bold mb-6 text-white">{title}</h2>
      {children}
    </div>
  );
}
