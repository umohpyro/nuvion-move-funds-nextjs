"use client";

import Link from "next/link";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div style={{ maxWidth: 560, margin: "64px auto", padding: "0 16px" }}>
      <h1 style={{ fontSize: "1.9rem", fontWeight: 800, letterSpacing: "-0.02em" }}>Something went wrong</h1>
      <p style={{ marginTop: 8, color: "var(--muted)" }}>The request failed. Try again, or go back to the start. Nothing was charged: this app only uses the Nuvion sandbox.</p>
      <div style={{ marginTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <button type="button" className="btn primary" onClick={reset}>Try again</button>
        <Link href="/" className="btn light">Back to start</Link>
      </div>
    </div>
  );
}
