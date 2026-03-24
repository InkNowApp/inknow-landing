const BASE = import.meta.env.BASE_URL;

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white flex flex-col">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/6">
        <a href={BASE}>
          <img
            src={`${BASE}assets/logo.png`}
            alt="InkNow"
            className="h-10 w-auto object-contain mix-blend-screen brightness-200"
          />
        </a>
      </nav>

      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-md w-full text-center">
          <img
            src={`${BASE}assets/logo.png`}
            alt="InkNow"
            className="h-16 w-auto object-contain mix-blend-screen brightness-200 mx-auto mb-10"
          />
          <h1 className="text-4xl font-black mb-4">Contact InkNow</h1>
          <p className="text-white/55 text-lg leading-relaxed mb-10">
            We're here to help. For support, questions, or business inquiries, reach out to us at:
          </p>
          <a
            href="mailto:support@getinknow.com"
            className="inline-block px-8 py-4 rounded-full bg-yellow-500 text-black font-bold text-base hover:bg-yellow-400 transition-colors duration-200 mb-8"
          >
            support@getinknow.com
          </a>
          <p className="text-white/30 text-sm">
            We typically respond within 24–48 hours.
          </p>
          <p className="text-white/20 text-xs mt-6 uppercase tracking-widest font-medium">
            Built for the culture.
          </p>
        </div>
      </div>

      <footer className="border-t border-white/6 py-10 px-6">
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
    </div>
  );
}
