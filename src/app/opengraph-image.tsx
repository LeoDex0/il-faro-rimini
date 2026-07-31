import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = "Il Faro — Ristorante a Rimini";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0d1116 0%, #16202a 100%)",
          color: "#f4eee0",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 18,
            height: 18,
            borderRadius: "50%",
            background: "#e8a33d",
            boxShadow: "0 0 60px 24px rgba(232,163,61,0.55)",
            marginBottom: 44,
            display: "flex",
          }}
        />
        <div style={{ display: "flex", fontSize: 112, fontWeight: 600, letterSpacing: 4 }}>
          IL FARO
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            marginTop: 22,
            color: "#e8a33d",
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          {site.tagline}
        </div>
        <div style={{ display: "flex", fontSize: 24, marginTop: 34, color: "rgba(244,238,224,0.55)" }}>
          Rimini · San Giuliano Mare
        </div>
      </div>
    ),
    size
  );
}
