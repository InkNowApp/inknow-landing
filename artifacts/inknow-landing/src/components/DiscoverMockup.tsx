const BASE = import.meta.env.BASE_URL;

function ArtistCard({
  avatar,
  avatarGradient,
  name,
  shop,
  badge,
  exp,
  price,
  priceLabel,
  dates,
  thumbnails,
}: {
  avatar?: string;
  avatarGradient?: string;
  name: string;
  shop: string;
  badge: string;
  exp: string;
  price: string;
  priceLabel: string;
  dates: string[];
  thumbnails: { color: string }[];
}) {
  return (
    <div className="mx-3 mb-3 rounded-2xl overflow-hidden" style={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="p-3">
        <div className="flex items-center gap-2.5 mb-2">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="w-11 h-11 rounded-xl object-cover flex-shrink-0"
            />
          ) : (
            <div
              className="w-11 h-11 rounded-xl flex-shrink-0"
              style={{ background: avatarGradient }}
            />
          )}
          <div className="min-w-0">
            <p className="text-white font-bold text-sm leading-tight">{name}</p>
            <p style={{ color: "#9a9a9a" }} className="text-xs">{shop}</p>
            <div className="flex items-center gap-1 mt-0.5">
              <span style={{ color: "#6a6a6a", fontSize: "10px" }}>{badge}</span>
              <span style={{ color: "#4a4a4a", fontSize: "10px" }}>•</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6a6a6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
              <span style={{ color: "#6a6a6a", fontSize: "10px" }}>{exp}</span>
            </div>
          </div>
          <div className="ml-auto text-right">
            <p className="text-white font-bold text-xs">{price}</p>
            <p style={{ color: "#9a9a9a", fontSize: "10px" }}>{priceLabel}</p>
          </div>
        </div>

        <div className="flex items-center gap-1 mb-2">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span style={{ color: "#D4A017", fontSize: "10px", fontWeight: 600 }}>Next Available:</span>
          {dates.map((d) => (
            <span key={d} style={{ color: "#9a9a9a", fontSize: "10px" }}>{d}</span>
          ))}
          <span style={{ color: "#D4A017", fontSize: "10px", fontWeight: 600, marginLeft: "auto" }}>See Availability</span>
        </div>

        <div className="flex gap-1.5">
          {thumbnails.map((t, i) => (
            <div
              key={i}
              className="flex-1 rounded-lg"
              style={{ height: 52, background: t.color }}
            />
          ))}
          <div
            className="w-11 rounded-lg flex flex-col items-center justify-center gap-0.5 flex-shrink-0"
            style={{ height: 52, background: "rgba(255,255,255,0.05)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6a6a6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
            </svg>
            <span style={{ color: "#6a6a6a", fontSize: "9px" }}>See all</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DiscoverMockup() {
  const filters = ["5 mi", "10 mi", "25 mi", "50 mi"];
  const tags = [
    { label: "Nearby", icon: "↗" },
    { label: "Available", icon: "✓" },
    { label: "Top Rated", icon: "★" },
    { label: "Price", icon: "🏷" },
  ];

  return (
    <div
      className="w-full h-full overflow-hidden flex flex-col"
      style={{ background: "#0d0d0d", fontFamily: "Inter, sans-serif" }}
    >
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 pt-2 pb-1" style={{ paddingTop: 40 }}>
        <span className="text-white font-bold" style={{ fontSize: 11 }}>9:41</span>
        <div className="flex items-center gap-1">
          <span style={{ color: "white", fontSize: 10 }}>5G</span>
          <span style={{ color: "white", fontSize: 14 }}>▮</span>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-start justify-between px-4 mb-1">
        <div>
          <h1 className="text-white font-black" style={{ fontSize: 26, lineHeight: 1.1 }}>Discover</h1>
          <p style={{ color: "#7a7a7a", fontSize: 11 }}>Find your next artist</p>
        </div>
        <div className="w-8 h-8 rounded-full border flex items-center justify-center mt-1" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>
      </div>

      {/* Radius pills */}
      <div className="flex items-center gap-1.5 px-4 mb-1.5 overflow-x-auto no-scrollbar">
        <span style={{ color: "#7a7a7a", fontSize: 11 }} className="flex-shrink-0">Radius</span>
        {filters.map((f) => (
          <div
            key={f}
            className="flex-shrink-0 px-3 py-1 rounded-full"
            style={{ background: "rgba(255,255,255,0.08)", fontSize: 11, color: "#aaa" }}
          >
            {f}
          </div>
        ))}
        <div
          className="flex-shrink-0 px-3 py-1 rounded-full font-bold"
          style={{ background: "#D4A017", fontSize: 11, color: "#000" }}
        >
          Any
        </div>
      </div>

      <p style={{ color: "#4a4a4a", fontSize: 10, paddingLeft: 16, marginBottom: 6 }}>
        Add your zip in profile settings to enable radius filtering
      </p>

      {/* Tags */}
      <div className="flex gap-2 px-4 mb-2 overflow-x-auto no-scrollbar">
        {tags.map((t) => (
          <div
            key={t.label}
            className="flex-shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-full"
            style={{ border: "1px solid rgba(255,255,255,0.12)", fontSize: 11, color: "#ccc" }}
          >
            <span style={{ fontSize: 10 }}>{t.icon}</span>
            {t.label}
          </div>
        ))}
      </div>

      <p style={{ color: "#6a6a6a", fontSize: 11, paddingLeft: 16, marginBottom: 8 }}>5 artists found</p>

      {/* Artist cards — scrollable */}
      <div className="flex-1 overflow-y-auto no-scrollbar pb-4">
        <ArtistCard
          avatarGradient="linear-gradient(135deg, #ff6b6b 0%, #ffa500 40%, #9b59b6 100%)"
          name="InkByJay"
          shop="InkNow"
          badge="New"
          exp="3yr"
          price="From $85"
          priceLabel=""
          dates={["Mar 25", "Mar 26", "Mar 27"]}
          thumbnails={[
            { color: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)" },
            { color: "linear-gradient(135deg, #2a1a1a 0%, #3d2020 100%)" },
            { color: "linear-gradient(135deg, #1a1a2a 0%, #20203d 100%)" },
          ]}
        />
        <ArtistCard
          avatar={`${BASE}assets/avatar-freewrld.png`}
          name="FreeWrld"
          shop="Sunshine Tats"
          badge="New"
          exp="8yr"
          price="$125/hr"
          priceLabel=""
          dates={["Mar 25", "Mar 27", "Mar 28"]}
          thumbnails={[
            { color: "linear-gradient(135deg, #1a2a1a 0%, #203d20 100%)" },
            { color: "linear-gradient(135deg, #2a2a1a 0%, #3d3d20 100%)" },
            { color: "linear-gradient(135deg, #1a1a2a 0%, #20203d 100%)" },
          ]}
        />
      </div>

      {/* Bottom nav */}
      <div
        className="flex items-center justify-around px-4 py-2"
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingBottom: 16 }}
      >
        {[
          { icon: "⌂", label: "Home", active: true },
          { icon: "⊕", label: "Explore", active: false },
          { icon: "📅", label: "Bookings", active: false },
          { icon: "🔔", label: "Activity", active: false },
          { icon: "○", label: "Profile", active: false },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-0.5">
            <span style={{ fontSize: 16, color: item.active ? "#D4A017" : "#4a4a4a" }}>{item.icon}</span>
            <span style={{ fontSize: 9, color: item.active ? "#D4A017" : "#4a4a4a", fontWeight: item.active ? 700 : 400 }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
