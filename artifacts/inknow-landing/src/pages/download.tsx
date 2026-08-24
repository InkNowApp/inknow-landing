import { useEffect, useState } from "react";

const APP_STORE_URL = "https://apps.apple.com/us/app/inknow-book-tattoos-artists/id6766939801";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.inknow";
const BASE = import.meta.env.BASE_URL;

type Device = "ios" | "android" | "desktop";

function getDevice(): Device {
  const userAgent = navigator.userAgent || "";
  const isIOS =
    /iPad|iPhone|iPod/.test(userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  if (isIOS) return "ios";
  if (/Android/i.test(userAgent)) return "android";
  return "desktop";
}

export default function Download() {
  const [device, setDevice] = useState<Device>("desktop");
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    const detectedDevice = getDevice();
    setDevice(detectedDevice);

    if (detectedDevice === "desktop") return;

    setIsRedirecting(true);
    const destination = detectedDevice === "ios" ? APP_STORE_URL : GOOGLE_PLAY_URL;
    const redirectTimer = window.setTimeout(() => {
      window.location.replace(destination);
    }, 300);

    return () => window.clearTimeout(redirectTimer);
  }, []);

  const storeName = device === "ios" ? "Apple App Store" : "Google Play";
  const mobileDestination = device === "ios" ? APP_STORE_URL : GOOGLE_PLAY_URL;

  return (
    <main className="min-h-screen bg-[#0C0C0C] text-white flex flex-col">
      <header className="w-full border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <a href={BASE} aria-label="InkNow home">
            <img
              src={`${BASE}assets/logo.png`}
              alt="InkNow"
              className="h-10 w-auto object-contain mix-blend-screen brightness-200"
            />
          </a>
        </div>
      </header>

      <section className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-xl text-center">
          {isRedirecting ? (
            <>
              <div className="mx-auto mb-8 h-12 w-12 rounded-full border-2 border-yellow-400 border-t-transparent animate-spin" />
              <p className="text-yellow-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">
                Opening InkNow
              </p>
              <h1 className="text-4xl md:text-5xl font-black leading-tight">
                Taking you to {storeName}.
              </h1>
              <p className="mt-5 text-white/45 text-lg">
                If you aren’t redirected automatically, use the button below.
              </p>
              <a
                href={mobileDestination}
                className="inline-flex mt-8 items-center justify-center rounded-full bg-yellow-400 px-7 py-3.5 font-bold text-black transition-colors hover:bg-yellow-300"
              >
                Continue to {storeName}
              </a>
            </>
          ) : (
            <>
              <p className="text-yellow-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">
                Download InkNow
              </p>
              <h1 className="text-4xl md:text-5xl font-black leading-tight">
                Book your next tattoo smarter.
              </h1>
              <p className="mt-5 text-white/45 text-lg">
                Choose your device to download InkNow and discover verified artists.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-left transition-all hover:border-yellow-400/40 hover:bg-white/[0.07]"
                >
                  <span className="text-white/40 text-xs uppercase tracking-widest">For iPhone & iPad</span>
                  <span className="mt-2 block text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                    Apple App Store →
                  </span>
                </a>
                <a
                  href={GOOGLE_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-left transition-all hover:border-yellow-400/40 hover:bg-white/[0.07]"
                >
                  <span className="text-white/40 text-xs uppercase tracking-widest">For Android</span>
                  <span className="mt-2 block text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                    Google Play →
                  </span>
                </a>
              </div>
            </>
          )}
        </div>
      </section>

      <footer className="px-6 py-6 text-center text-xs text-white/25">
        © {new Date().getFullYear()} InkNow ·{" "}
        <a href={BASE} className="hover:text-white/50 transition-colors">
          Back to home
        </a>
      </footer>
    </main>
  );
}