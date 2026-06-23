"use client"

import React, { useState, useRef } from "react"
import Image from "next/image"

/* ── Phone frame component ── */
function PhoneFrame({
  src,
  alt,
  activeNav,
}: {
  src: string
  alt: string
  activeNav: "overview" | "today" | "week" | "goals" | "settings"
}) {
  const screenRef = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [atEnd, setAtEnd] = useState(false)

  function handleScroll() {
    const el = screenRef.current
    if (!el) return
    if (el.scrollTop > 8) setScrolled(true)
    setAtEnd(el.scrollTop + el.clientHeight >= el.scrollHeight - 4)
  }

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "today", label: "Today" },
    { id: "week", label: "Week" },
    { id: "goals", label: "Goals" },
    { id: "settings", label: "Settings" },
  ] as const

  const navIcons: Record<string, React.ReactNode> = {
    overview: <path d="M3 3h6v6H3zM11 3h6v6h-6zM3 11h6v6H3zM11 11h6v6h-6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />,
    today: <><circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.6" fill="none" /><circle cx="10" cy="10" r="2.2" fill="currentColor" /></>,
    week: <><rect x="3" y="4.5" width="14" height="12.5" rx="1.6" stroke="currentColor" strokeWidth="1.6" fill="none" /><path d="M3 8h14M7 3v3M13 3v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></>,
    goals: <><path d="M6 5h11M6 10h11M6 15h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><circle cx="3.2" cy="5" r="1" fill="currentColor" /><circle cx="3.2" cy="10" r="1" fill="currentColor" /><circle cx="3.2" cy="15" r="1" fill="currentColor" /></>,
    settings: <><circle cx="10" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" fill="none" /><path d="M10 2v2.4M10 15.6v2.4M2 10h2.4M15.6 10h2.4M4.4 4.4l1.7 1.7M13.9 13.9l1.7 1.7M4.4 15.6l1.7-1.7M13.9 6.1l1.7-1.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></>,
  }

  return (
    <div style={{
      position: "relative",
      width: 220,
      height: 448,
      borderRadius: 34,
      padding: 8,
      background: "linear-gradient(150deg, #3A4654, #11181F 60%)",
      boxShadow: "0 20px 50px -14px rgba(26,42,58,0.42), 0 5px 16px -5px rgba(26,42,58,0.22), inset 0 0 0 1.5px rgba(255,255,255,0.07)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      flexShrink: 0,
    }}>
      {/* Inner rounded content area */}
      <div style={{
        position: "relative",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        borderRadius: 27,
        overflow: "hidden",
        background: "#FAF9F7",
      }}>
        {/* Status bar */}
        <div style={{
          position: "relative",
          zIndex: 3,
          flexShrink: 0,
          height: 28,
          padding: "0 15px 0 17px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#FAF9F7",
          fontSize: 10,
          fontWeight: 700,
          color: "#1A2A3A",
          letterSpacing: "0.01em",
          fontFamily: "system-ui, sans-serif",
        }}>
          <span>9:41</span>
          {/* Dynamic island */}
          <div style={{
            position: "absolute",
            top: 7,
            left: "50%",
            transform: "translateX(-50%)",
            width: 52,
            height: 15,
            borderRadius: 9,
            background: "#05080B",
            zIndex: 4,
          }} />
          <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
            {/* Signal */}
            <svg width="15" height="9" viewBox="0 0 17 10" aria-hidden="true">
              <rect x="0" y="6.5" width="3" height="3.5" rx="0.6" fill="#1A2A3A"/>
              <rect x="4.6" y="4.5" width="3" height="5.5" rx="0.6" fill="#1A2A3A"/>
              <rect x="9.2" y="2.5" width="3" height="7.5" rx="0.6" fill="#1A2A3A"/>
              <rect x="13.8" y="0.5" width="3" height="9.5" rx="0.6" fill="#1A2A3A"/>
            </svg>
            {/* WiFi */}
            <svg width="13" height="9" viewBox="0 0 14 8" fill="none" stroke="#1A2A3A" strokeWidth="1.3" strokeLinecap="round" aria-hidden="true">
              <path d="M1 3 A9 9 0 0 1 13 3"/><path d="M3.4 5.4 A5.1 5.1 0 0 1 10.6 5.4"/><circle cx="7" cy="7.3" r="0.4" fill="#1A2A3A" stroke="none"/>
            </svg>
            {/* Battery */}
            <svg width="22" height="10" viewBox="0 0 24 11" aria-hidden="true">
              <rect x="0.5" y="0.5" width="19.5" height="10" rx="2.6" fill="none" stroke="#1A2A3A" strokeOpacity="0.45"/>
              <rect x="2" y="2" width="14" height="7" rx="1.3" fill="#1A2A3A"/>
              <rect x="21" y="3.6" width="1.8" height="3.8" rx="0.9" fill="#1A2A3A" fillOpacity="0.45"/>
            </svg>
          </span>
        </div>

        {/* Scrollable screen */}
        <div style={{ position: "relative", flex: 1, minHeight: 0 }}>
          <div
            ref={screenRef}
            onScroll={handleScroll}
            style={{
              position: "absolute",
              inset: 0,
              overflowY: "auto",
              overflowX: "hidden",
              background: "#FAF9F7",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
            }}
          >
            <Image src={src} alt={alt} width={220} height={900} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          {/* Fade */}
          <div style={{
            position: "absolute",
            left: 0, right: 0, bottom: 0,
            height: 52,
            background: "linear-gradient(to top, #FAF9F7 10%, rgba(250,249,247,0) 100%)",
            pointerEvents: "none",
            zIndex: 2,
            opacity: atEnd ? 0 : 1,
            transition: "opacity 0.25s ease",
          }} />
          {/* Scroll hint */}
          {!scrolled && !atEnd && (
            <span style={{
              position: "absolute",
              left: "50%",
              bottom: 9,
              transform: "translateX(-50%)",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              zIndex: 3,
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: "0.04em",
              color: "#1A2A3A",
              background: "rgba(255,255,255,0.94)",
              border: "1px solid rgba(26,42,58,0.12)",
              borderRadius: 11,
              padding: "3px 9px",
              boxShadow: "0 2px 8px -2px rgba(26,42,58,0.18)",
              pointerEvents: "none",
              fontFamily: "system-ui, sans-serif",
            }}>
              Scroll ↓
            </span>
          )}
        </div>

        {/* Bottom nav */}
        <nav style={{
          position: "relative",
          zIndex: 3,
          flexShrink: 0,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          background: "#16242F",
          padding: "5px 4px 6px",
          boxShadow: "0 -4px 14px rgba(26,42,58,0.16)",
        }}>
          {navItems.map((item) => {
            const isActive = item.id === activeNav
            return (
              <span key={item.id} style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                color: isActive ? "#D8B84A" : "#8FA3B5",
                flex: 1,
                filter: isActive ? "drop-shadow(0 0 3px rgba(216,184,74,0.55))" : undefined,
              }}>
                <svg width="12" height="12" viewBox="0 0 20 20" aria-hidden="true">
                  {navIcons[item.id]}
                </svg>
                <span style={{ fontSize: 5.5, fontWeight: 600, letterSpacing: "0.01em", fontFamily: "system-ui, sans-serif" }}>
                  {item.label}
                </span>
              </span>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

/* ── Signup form ── */
function SignupForm() {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [struggle, setStruggle] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, struggle, sourcePage: "lumen", sourcePlacement: "hero" }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Something went wrong.")
      setSuccess(true)
      setFirstName(""); setEmail(""); setStruggle("")
      setTimeout(() => { window.location.href = data.redirect || "/lumen/thank-you" }, 1500)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "13px 16px",
    border: "1px solid rgba(26,42,58,0.14)",
    borderRadius: 10,
    background: "rgba(255,255,255,0.06)",
    color: "#FAF9F7",
    fontSize: 15,
    fontFamily: "Cormorant Garamond, Georgia, serif",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    WebkitAppearance: "none",
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: 480 }}>
      <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          style={{ ...inputStyle, flex: 1 }}
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{ ...inputStyle, flex: 1 }}
        />
      </div>
      <textarea
        placeholder="What's your biggest struggle with staying consistent? (optional)"
        value={struggle}
        onChange={e => setStruggle(e.target.value)}
        rows={2}
        style={{ ...inputStyle, resize: "none", marginBottom: 12, display: "block" }}
      />
      {error && <p style={{ color: "#f87171", fontSize: 14, textAlign: "center", marginBottom: 8, fontFamily: "Cormorant Garamond, serif" }}>{error}</p>}
      {success && <p style={{ color: "#FAF9F7", fontSize: 16, textAlign: "center", marginBottom: 8, fontFamily: "Cormorant Garamond, serif" }}>Check your email — install instructions are on their way.</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        style={{
          width: "100%",
          padding: "14px 24px",
          background: "linear-gradient(90deg, #B8911F, #D8B84A, #C9A227)",
          backgroundSize: "200% auto",
          color: "#1A2A3A",
          border: "none",
          borderRadius: 9,
          fontSize: 14,
          fontWeight: 600,
          fontFamily: "Inter, system-ui, sans-serif",
          letterSpacing: "0.04em",
          cursor: isSubmitting ? "not-allowed" : "pointer",
          opacity: isSubmitting ? 0.7 : 1,
          boxShadow: "0 4px 24px rgba(201,162,39,0.35)",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
      >
        {isSubmitting ? "Sending…" : "Get Free Access →"}
      </button>
    </form>
  )
}

/* ── Lumen logo (CSS-only, matches demo.html) ── */
function LumenLogo() {
  return (
    <div style={{
      width: 52, height: 52, borderRadius: 13,
      background: "#0E1923",
      position: "relative",
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 4px 18px rgba(22,36,47,0.16)",
      flexShrink: 0,
    }}>
      <div style={{
        width: 38, height: 38, borderRadius: "50%",
        background: "radial-gradient(circle at 50% 45%, #FFF6DC 0%, #F2DC8A 16%, #D8B84A 38%, rgba(201,162,39,0.4) 60%, transparent 78%)",
        filter: "blur(0.5px)",
      }} />
      <div style={{
        position: "absolute",
        width: 8, height: 8, borderRadius: "50%",
        background: "#FFFBE6",
        boxShadow: "0 0 10px rgba(255,246,220,0.9)",
      }} />
    </div>
  )
}

export default function LumenPage() {
  return (
    <div style={{ background: "#E7E4DE", minHeight: "100vh", color: "#1A2A3A" }}>

      {/* ── HERO ── */}
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "44px 28px 32px", display: "flex", alignItems: "center", gap: 36, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>
          <LumenLogo />
          <div>
            <div style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: 48, fontWeight: 600, letterSpacing: "-0.012em", lineHeight: 1, color: "#1A2A3A" }}>Lumen</div>
            <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: "0.28em", color: "rgba(26,42,58,0.38)", marginTop: 2, fontFamily: "Inter, system-ui, sans-serif" }}>BY MANDY C.</div>
          </div>
        </div>
        <div style={{ width: 1, height: 48, background: "rgba(26,42,58,0.12)", flexShrink: 0 }} />
        <div style={{ flex: 1, minWidth: 240 }}>
          <p style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: 18, fontStyle: "italic", color: "#1A2A3A", lineHeight: 1.4, marginBottom: 6 }}>
            Mandy&apos;s workflow of the 12 Week Year — free.
          </p>
          <p style={{ fontSize: 13, color: "#5A6A7A", lineHeight: 1.6, fontWeight: 300, fontFamily: "Inter, system-ui, sans-serif" }}>
            Built on Brian Moran &amp; Michael Lennington&apos;s system, with Mandy&apos;s inner game layer added in: an affirmation anchor, a 90-day practice set, and a weekly reflection ritual. Twelve weeks. One season at a time.
          </p>
        </div>
      </div>

      {/* ── SYSTEM CARD ── */}
      <div style={{ maxWidth: 1000, margin: "0 auto 32px", padding: "0 28px" }}>
        <div style={{ background: "#FAF9F7", border: "1px solid rgba(26,42,58,0.06)", borderRadius: 14, padding: "28px 32px" }}>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A227", marginBottom: 8, fontFamily: "Inter, system-ui, sans-serif" }}>The system</div>
          <div style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: 26, fontWeight: 600, color: "#1A2A3A", lineHeight: 1.2, marginBottom: 8 }}>Set the season once. Everything flows.</div>
          <div style={{ display: "flex", alignItems: "stretch", gap: 0, marginTop: 12, flexWrap: "wrap" }}>
            <p style={{ fontSize: 13, color: "#5A6A7A", lineHeight: 1.65, fontWeight: 300, flex: 1, minWidth: 200, paddingRight: 24, fontFamily: "Inter, system-ui, sans-serif" }}>
              You set a 12-week season: goals, weekly commitments, a daily practice. Mandy&apos;s additions — an affirmation anchor, 90-day practices, and DAWN, a weekly reflection that closes one week and opens the next.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, flexShrink: 0, paddingLeft: 24, borderLeft: "1px solid rgba(26,42,58,0.12)", justifyContent: "flex-start" }}>
              {[["5","Pages"],["1","Weekly Ritual"],["12","Week Seasons"]].map(([n, l]) => (
                <div key={l} style={{ display: "flex", alignItems: "baseline", gap: 10, padding: "5px 0" }}>
                  <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 38, fontWeight: 600, color: "#C9A227", lineHeight: 1, minWidth: 46, textAlign: "right" }}>{n}</div>
                  <div style={{ fontSize: 10, color: "#5A6A7A", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", lineHeight: 1.2, whiteSpace: "nowrap", fontFamily: "Inter, system-ui, sans-serif" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── PHONES ── */}
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 28px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
          <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(26,42,58,0.38)", flexShrink: 0, fontFamily: "Inter, system-ui, sans-serif" }}>The app</span>
          <div style={{ flex: 1, height: 1, background: "rgba(26,42,58,0.12)" }} />
        </div>

        <div style={{ display: "flex", gap: 32, alignItems: "flex-start", justifyContent: "center", flexWrap: "wrap", paddingBottom: 36 }}>
          {/* Overview */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 6 }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#1A2A3A", color: "#E8D896", fontFamily: "Cormorant Garamond, serif", fontSize: 11, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center" }}>1</div>
              <span style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: 20, fontWeight: 600, color: "#1A2A3A", lineHeight: 1 }}>Overview</span>
            </div>
            <p style={{ fontSize: 12, color: "#5A6A7A", lineHeight: 1.45, marginBottom: 14, textAlign: "center", maxWidth: 200, fontWeight: 300, fontFamily: "Inter, system-ui, sans-serif" }}>Your affirmation, 90-day practices, and execution calendar.</p>
            <PhoneFrame src="/lumen/overview.png" alt="Overview page" activeNav="overview" />
          </div>

          {/* Today */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 6 }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#1A2A3A", color: "#E8D896", fontFamily: "Cormorant Garamond, serif", fontSize: 11, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center" }}>2</div>
              <span style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: 20, fontWeight: 600, color: "#1A2A3A", lineHeight: 1 }}>Today</span>
            </div>
            <p style={{ fontSize: 12, color: "#5A6A7A", lineHeight: 1.45, marginBottom: 14, textAlign: "center", maxWidth: 200, fontWeight: 300, fontFamily: "Inter, system-ui, sans-serif" }}>The daily page: feeling, foundation, habits, and today&apos;s Big Three.</p>
            <PhoneFrame src="/lumen/today.png" alt="Today page" activeNav="today" />
          </div>
        </div>
      </div>

      {/* ── CTA / SIGNUP BAND ── */}
      <div style={{ maxWidth: 1000, margin: "0 auto 24px", padding: "0 28px" }}>
        <div style={{
          background: "linear-gradient(135deg, #1A2A3A, #22364A)",
          borderRadius: 14,
          padding: "40px 32px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: -40, left: "50%", transform: "translateX(-50%)", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(216,184,74,0.08), transparent 60%)" }} />

          <p style={{ position: "relative", fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: 28, fontWeight: 600, color: "#FAF9F7", marginBottom: 8, lineHeight: 1.25 }}>
            Get Lumen for free.
          </p>
          <p style={{ position: "relative", fontSize: 13, color: "#9AAABA", marginBottom: 28, lineHeight: 1.6, fontWeight: 300, fontFamily: "Inter, system-ui, sans-serif" }}>
            Enter your details and I&apos;ll send install instructions to your inbox. Beta. Always free.
          </p>

          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <SignupForm />
          </div>

          <p style={{ position: "relative", fontSize: 12, color: "rgba(154,170,186,0.6)", marginTop: 16, fontFamily: "Cormorant Garamond, serif", fontStyle: "italic" }}>
            Free. I use it myself. Reply to the email if something feels off — I read every message.
          </p>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div style={{ textAlign: "center", padding: "14px 28px 28px", maxWidth: 1000, margin: "0 auto" }}>
        <p style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: 14, fontStyle: "italic", color: "#9A8A55", lineHeight: 1.5 }}>
          Built on the 12 Week Year by Brian Moran &amp; Michael Lennington. The inner game layer, DAWN ritual, and affirmation anchor are Mandy&apos;s additions.
        </p>
        <p style={{ marginTop: 10, fontSize: 12, color: "rgba(26,42,58,0.35)", fontFamily: "Inter, system-ui, sans-serif" }}>
          © 2026 MandyC. ·{" "}
          <a href="/terms" style={{ color: "rgba(26,42,58,0.35)", textDecoration: "none" }}>Terms</a>
          {" · "}
          <a href="/privacy" style={{ color: "rgba(26,42,58,0.35)", textDecoration: "none" }}>Privacy</a>
        </p>
      </div>

    </div>
  )
}
