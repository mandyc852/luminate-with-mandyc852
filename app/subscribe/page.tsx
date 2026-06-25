"use client"

import { useState, FormEvent } from "react"
import Image from "next/image"
import { SiteHeader } from "../_components/site-header"

const igHeadline: React.CSSProperties = {
  fontFamily: "var(--font-playfair-display), Georgia, serif",
  fontStyle: "italic",
  fontWeight: 400,
}
const igBody: React.CSSProperties = {
  fontFamily: "var(--font-poppins), sans-serif",
}

function SubscribeForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setStatus("loading")
    setErrorMsg("")
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          utm_source: "mandyc.me",
          utm_medium: "website",
          utm_campaign: "subscribe_page",
          referring_site:
            typeof window !== "undefined" ? window.location.href : "https://mandyc.me",
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || "Something went wrong.")
      }
      setStatus("success")
      setEmail("")
    } catch (err: unknown) {
      setStatus("error")
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.")
    }
  }

  if (status === "success") {
    return (
      <p
        style={{
          ...igBody,
          color: "#C4982A",
          fontSize: "0.9rem",
          fontWeight: 500,
          letterSpacing: "0.05em",
          padding: "14px 0",
        }}
      >
        You&rsquo;re in. Check your inbox.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "loading"}
        className="ig-subscribe-input"
        style={{
          ...igBody,
          width: "100%",
          background: "rgba(255, 248, 240, 0.06)",
          border: "1px solid rgba(196, 152, 42, 0.2)",
          color: "#FAF5EF",
          fontSize: "1rem",
          padding: "14px 16px",
          borderRadius: "0",
          outline: "none",
          boxSizing: "border-box",
          transition: "border-color 0.2s ease",
        }}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="ig-cta-subscribe"
        style={{ width: "100%" }}
      >
        {status === "loading" ? "Joining…" : "JOIN THE BRIEF"}
      </button>
      {status === "error" && (
        <p style={{ ...igBody, color: "#F87171", fontSize: "0.8rem", marginTop: "4px" }}>{errorMsg}</p>
      )}
    </form>
  )
}

export default function SubscribePage() {
  return (
    <div>
      <style>{`
        body {
          background: #0F0D0B;
          padding-top: 80px;
          margin: 0;
        }

        /* ── Dark nav override ─────────────────────────── */
        header.fixed {
          background: rgba(15, 13, 11, 0.97) !important;
          border-bottom-color: rgba(196, 152, 42, 0.18) !important;
          box-shadow: none !important;
        }
        header.fixed nav a:not([aria-label]):not(.btn-gold-animated) {
          color: #A8A29E !important;
        }
        header.fixed nav a:not([aria-label]):not(.btn-gold-animated):hover {
          color: #FAF5EF !important;
        }
        /* Work With Me button */
        header.fixed nav > div > button {
          color: #A8A29E !important;
        }
        header.fixed nav > div > button:hover {
          color: #FAF5EF !important;
        }
        /* Social icons — gold */
        header.fixed nav a[aria-label] { color: #C4982A !important; }
        header.fixed nav a[aria-label]:hover { color: #a68a1f !important; }
        /* Book a Call — black bold on gold */
        header.fixed nav .btn-gold-animated {
          color: #1A1714 !important;
          font-weight: 700 !important;
        }
        /* Work With Me dropdown panel */
        header.fixed .absolute .bg-white,
        header.fixed .absolute > div {
          background: #1A1714 !important;
          border-color: rgba(196, 152, 42, 0.2) !important;
        }
        header.fixed .absolute a {
          color: #A8A29E !important;
        }
        header.fixed .absolute a:hover {
          background: rgba(196, 152, 42, 0.06) !important;
          color: #FAF5EF !important;
        }
        /* Mobile menu panel */
        header.fixed .md\\:hidden.bg-white,
        header.fixed .md\\:hidden.border-t {
          background: #1A1714 !important;
          border-color: rgba(196, 152, 42, 0.15) !important;
        }
        header.fixed .md\\:hidden nav a:not([aria-label]):not(.btn-gold-animated),
        header.fixed .md\\:hidden nav p {
          color: #A8A29E !important;
        }
        /* Hamburger icon — gold */
        header.fixed button[aria-label="Menu"] svg {
          color: #C4982A !important;
        }
        /* Wordmark text colour */
        header.fixed a[aria-label="MandyC. home"] span {
          color: #FAF5EF !important;
        }

        /* ── Form elements ──────────────────────────────── */
        .ig-subscribe-input:focus {
          border-color: rgba(196, 152, 42, 0.55) !important;
          box-shadow: 0 0 0 3px rgba(196, 152, 42, 0.08);
        }
        .ig-subscribe-input::placeholder {
          color: #78716C;
        }
        .ig-subscribe-input:disabled {
          opacity: 0.6;
        }

        /* ── CTA button ─────────────────────────────────── */
        .ig-cta-subscribe {
          background: linear-gradient(135deg, #a68a1f 0%, #c9a227 25%, #d4b84a 50%, #c9a227 75%, #a68a1f 100%);
          background-size: 200% 200%;
          color: #1A1714;
          font-family: var(--font-poppins), sans-serif;
          font-size: 0.85rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 14px 32px;
          border: none;
          border-radius: 0;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 14px rgba(26, 23, 20, 0.25), 0 2px 8px rgba(196, 152, 42, 0.2);
        }
        .ig-cta-subscribe:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(26, 23, 20, 0.35), 0 4px 15px rgba(196, 152, 42, 0.3);
          animation: igShimmer 1.5s ease infinite;
        }
        .ig-cta-subscribe:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        @keyframes igShimmer {
          0%   { background-position: 200% 0%; }
          100% { background-position: -200% 0%; }
        }

        /* ── Image gradient overlay ──────────────────────── */
        /* Desktop: fade right edge into content column */
        .subscribe-img-gradient {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(to left, rgba(15,13,11,0) 25%, rgba(15,13,11,0.5) 65%, #0F0D0B 100%);
        }

        /* ── Responsive split layout ─────────────────────── */
        .subscribe-layout {
          display: flex;
          min-height: calc(100vh - 80px);
        }
        .subscribe-img-col {
          flex: 0 0 50%;
          position: relative;
          overflow: hidden;
        }
        .subscribe-copy-col {
          flex: 0 0 50%;
          background: #0F0D0B;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px;
        }
        .subscribe-copy-inner {
          max-width: 460px;
          width: 100%;
        }

        @media (max-width: 767px) {
          .subscribe-layout {
            flex-direction: column;
          }
          .subscribe-img-col {
            flex: none;
            height: 45vh;
            width: 100%;
          }
          /* Mobile gradient: fade bottom edge into content below */
          .subscribe-img-gradient {
            background: linear-gradient(to bottom, rgba(15,13,11,0) 20%, rgba(15,13,11,0.6) 65%, #0F0D0B 100%);
          }
          .subscribe-copy-col {
            flex: none;
            width: 100%;
            padding: 36px 24px;
            min-height: auto;
          }
          .subscribe-copy-inner {
            max-width: 100%;
            text-align: center;
          }
          /* Keep the form inputs left-aligned for usability */
          .subscribe-copy-inner form {
            text-align: left;
          }
          .subscribe-copy-inner > p:last-child {
            text-align: center;
          }
        }
      `}</style>

      <SiteHeader
        links={[
          { label: "About", href: "/#about" },
          { label: "Track Record", href: "/#track-record" },
        ]}
      />

      <div className="subscribe-layout">
        {/* LEFT — copy + form */}
        <div className="subscribe-copy-col">

          <div className="subscribe-copy-inner">

            {/* Section label */}
            <p
              style={{
                ...igBody,
                fontSize: "0.68rem",
                fontWeight: 500,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#C4982A",
                marginBottom: "20px",
              }}
            >
              The Fortnightly Operator Brief
            </p>

            {/* Headline */}
            <h1
              style={{
                ...igHeadline,
                fontSize: "clamp(2rem, 3vw, 2.4rem)",
                lineHeight: 1.2,
                color: "#FAF5EF",
                letterSpacing: "-0.01em",
                marginBottom: "20px",
              }}
            >
              One question.<br />Every two weeks.
            </h1>

            {/* Body */}
            <p
              style={{
                ...igBody,
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "#A8A29E",
                fontWeight: 300,
                marginBottom: "32px",
              }}
            >
              For people who do serious work and want to show up better at it.
              No frameworks. No productivity hacks. One question worth sitting with.
            </p>

            {/* Subscribe form */}
            <SubscribeForm />

            {/* Micro-text */}
            <p
              style={{
                ...igBody,
                fontSize: "0.75rem",
                color: "#78716C",
                textAlign: "center",
                marginTop: "16px",
                letterSpacing: "0.04em",
              }}
            >
              Free · Fortnightly · Unsubscribe anytime
            </p>

          </div>
        </div>

        {/* RIGHT — editorial photo */}
        <div className="subscribe-img-col">
          <Image
            src="/subscribe photo.png"
            alt=""
            fill
            priority
            unoptimized
            style={{ objectFit: "cover", objectPosition: "80% center" }}
            sizes="(max-width: 767px) 100vw, 50vw"
          />
          <div className="subscribe-img-gradient" />
        </div>
      </div>
    </div>
  )
}
