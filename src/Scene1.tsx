import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export const Scene1 = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [0, 30], [0.8, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0f172a",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "Helvetica, Arial, sans-serif",
      }}
    >
      <div
        style={{
          opacity,
          transform: `scale(${scale})`,
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: 64, margin: 0, color: "#38bdf8" }}>Səhnə 1</h1>
        <p style={{ fontSize: 24, color: "#94a3b8", marginTop: 10 }}>
          Animasiya layihəmizə xoş gəldiniz
        </p>
      </div>
    </AbsoluteFill>
  );
};