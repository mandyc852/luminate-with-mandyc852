"use client";

import { useState, FormEvent } from "react";

type Variant = "hero" | "compact";

interface BeehiivSubscribeProps {
  variant?: Variant;
  heading?: string;
  subheading?: string;
  buttonText?: string;
  successMessage?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  className?: string;
}

export default function BeehiivSubscribe({
  variant = "hero",
  heading,
  subheading,
  buttonText = "Subscribe",
  successMessage = "You're in. Check your inbox.",
  utmSource = "mandyc.me",
  utmMedium = "website",
  utmCampaign = "embed_form",
  className = "",
}: BeehiivSubscribeProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          utm_source: utmSource,
          utm_medium: utmMedium,
          utm_campaign: utmCampaign,
          referring_site: typeof window !== "undefined" ? window.location.href : "https://mandyc.me",
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong.");
    }
  }

  // ── Hero variant ──────────────────────────────────────────
  if (variant === "hero") {
    return (
      <div className={`w-full max-w-lg mx-auto text-center ${className}`}>
        {heading && (
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-2" dangerouslySetInnerHTML={{ __html: heading }} />
        )}
        {subheading && (
          <p className="text-neutral-400 text-sm md:text-base mb-6" dangerouslySetInnerHTML={{ __html: subheading }} />
        )}

        {status === "success" ? (
          <p className="text-green-400 font-medium py-4">{successMessage}</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
              style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
              className="w-full px-4 py-3.5 rounded-none bg-neutral-800 border border-neutral-700 text-white text-lg placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/40 focus:border-[#c9a227] transition disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full px-10 py-4 rounded-none uppercase tracking-[0.15em] text-sm btn-gold-animated disabled:opacity-50 whitespace-nowrap"
            >
              {status === "loading" ? "…" : buttonText}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-red-400 text-sm mt-2">{errorMsg}</p>
        )}
      </div>
    );
  }

  // ── Compact variant ───────────────────────────────────────
  return (
    <div className={`w-full max-w-md ${className}`}>
      {heading && (
        <p className="text-sm font-medium text-neutral-300 mb-2">{heading}</p>
      )}

      {status === "success" ? (
        <p className="text-green-400 text-sm font-medium">{successMessage}</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
            className="flex-1 px-3 py-2 rounded-none bg-neutral-800 border border-neutral-700 text-white text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/40 focus:border-[#c9a227] transition disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-4 py-2 rounded-none uppercase tracking-[0.1em] text-xs btn-gold-animated disabled:opacity-50 whitespace-nowrap"
          >
            {status === "loading" ? "…" : buttonText}
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="text-red-400 text-xs mt-1">{errorMsg}</p>
      )}
    </div>
  );
}
