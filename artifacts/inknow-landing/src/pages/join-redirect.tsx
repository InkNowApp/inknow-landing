import { useEffect } from "react";
import { useParams } from "wouter";

const JOIN_BASE_URL = "https://inknow-production.up.railway.app/join";

export default function JoinRedirect() {
  const { code } = useParams<{ code: string }>();

  useEffect(() => {
    if (!code) return;
    window.location.replace(`${JOIN_BASE_URL}/${encodeURIComponent(code)}`);
  }, [code]);

  return (
    <main className="min-h-screen bg-[#0C0C0C] text-white flex items-center justify-center px-6 text-center">
      <div>
        <div className="mx-auto mb-6 h-10 w-10 rounded-full border-2 border-yellow-400 border-t-transparent animate-spin" />
        <h1 className="text-2xl font-bold">Opening your InkNow invite…</h1>
        <p className="mt-3 text-white/45">You’ll be redirected in a moment.</p>
      </div>
    </main>
  );
}