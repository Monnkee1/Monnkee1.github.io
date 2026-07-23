"use client";

import { useEffect } from "react";

const DESTINATION = "https://vault.drivesift.com/admin";

export default function AdminRedirect() {
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
          OWNER AUTHENTICATION REQUIRED
        </p>
        <h1 style={{ fontSize: 42, margin: "12px 0 22px" }}>
          Opening vault control…
        </h1>
        <a style={{ color: "#c8ff39" }} href={DESTINATION}>
          Continue to the protected admin panel
        </a>
      </div>
    </main>
  );
}
