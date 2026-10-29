import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export const Scene2 = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(frame, [0, 30], [50, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#1e1b4b",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "Helvetica, Arial, sans-serif",
      }}
    >
      <div
        style={{
          opacity,
          transform: `translateY(${translateY}px)`,
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: 64, margin: 0, color: "#c084fc" }}>Səhnə 2</h1>
        <p style={{ fontSize: 24, color: "#cbd5e1", marginTop: 10 }}>
          Kod əsaslı video istehsalı
        </p>
      </div>
    </AbsoluteFill>
  );
};