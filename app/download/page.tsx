"use client";

import { useEffect } from "react";

const DESTINATION = "https://drivesift-vault.adumbnut72826.chatgpt.site/";

export default function DownloadRedirect() {
  useEffect(() => {
    window.location.replace(DESTINATION);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#080a0b",
        color: "#f4f5f4",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: 24,
      }}
    >
      <div>
        <p style={{ color: "#c8ff39", letterSpacing: ".16em", fontSize: 11 }}>
          DRIVESIFT SECURE DELIVERY
        </p>
        <h1 style={{ fontSize: 42, margin: "12px 0 22px" }}>
          Opening the download vault…
        </h1>
        <a style={{ color: "#c8ff39" }} href={DESTINATION}>
          Continue to the one-time-code page
        </a>
      </div>
    </main>
  );
}
