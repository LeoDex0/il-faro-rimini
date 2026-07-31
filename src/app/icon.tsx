import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: "#0d1116",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid #e8a33d",
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#e8a33d",
            boxShadow: "0 0 16px 7px rgba(232,163,61,0.7)",
          }}
        />
      </div>
    ),
    size
  );
}
