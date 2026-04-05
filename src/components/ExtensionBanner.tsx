import { useState } from "react";

export function ExtensionBanner() {
  const [dismissed, setDismissed] = useState(() => {
    return localStorage.getItem("ext-banner-dismissed") === "true";
  });

  if (dismissed) return null;

  function dismiss() {
    localStorage.setItem("ext-banner-dismissed", "true");
    setDismissed(true);
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "linear-gradient(90deg, #4c1d95, #7c3aed)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.6rem 1rem",
        fontSize: "0.875rem",
        fontFamily: "'DM Sans', sans-serif",
        gap: "0.5rem",
      }}
    >
      <span>⚡</span>
      <span>
        Get more servers and better quality —{" "}
        <a
          href="/extension"
          style={{
            color: "#c4b5fd",
            fontWeight: 600,
            textDecoration: "underline",
          }}
        >
          download the extension
        </a>
      </span>
      <button
        onClick={dismiss}
        aria-label="Dismiss"
        style={{
          position: "absolute",
          right: "1rem",
          background: "none",
          border: "none",
          color: "rgba(255,255,255,0.7)",
          cursor: "pointer",
          fontSize: "1.1rem",
          lineHeight: 1,
          padding: "0.2rem",
        }}
      >
        ✕
      </button>
    </div>
  );
}