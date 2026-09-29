import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "The Wedding of A. Zaenal Usman, A.Md.T. & Rahmawati";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#183f34",
        }}
      >
        {/* FOTO PASANGAN */}

        <img
          src="https://the-weddingzaenal-rahma.vercel.app/images/foto-pasangan.jpeg"
          width="1200"
          height="630"
          style={{
            position: "absolute",
            inset: 0,
            width: "1200px",
            height: "630px",
            objectFit: "cover",
          }}
        />

        {/* OVERLAY */}

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(180deg, rgba(10,25,20,.20) 0%, rgba(10,25,20,.72) 100%)",
          }}
        />

        {/* FRAME LUAR */}

        <div
          style={{
            position: "absolute",
            left: "28px",
            top: "28px",
            width: "1144px",
            height: "574px",
            display: "flex",
            border: "1px solid rgba(218,190,120,.85)",
          }}
        />

        {/* FRAME DALAM */}

        <div
          style={{
            position: "absolute",
            left: "42px",
            top: "42px",
            width: "1116px",
            height: "546px",
            display: "flex",
            border: "1px solid rgba(255,255,255,.35)",
          }}
        />

        {/* KONTEN */}

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "24px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#f3e6c5",
              marginBottom: "18px",
            }}
          >
            The Wedding Of
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "64px",
              fontFamily: "Georgia",
              fontStyle: "italic",
              letterSpacing: "0.01em",
              textShadow: "0 4px 18px rgba(0,0,0,.35)",
            }}
          >
            Zaenal & Rahma
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "24px",
              fontSize: "22px",
              letterSpacing: "0.25em",
              color: "#f3e6c5",
            }}
          >
            05 • 09 • 2026
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "12px",
              fontSize: "17px",
              letterSpacing: "0.12em",
              color: "rgba(255,255,255,.88)",
            }}
          >
            Kolaka Timur • Sulawesi Tenggara
          </div>
        </div>
      </div>
    ),
    size
  );
}