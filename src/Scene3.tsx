import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export const Scene3 = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [0, 30], [1.2, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#065f46",
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
        <h1 style={{ fontSize: 64, margin: 0, color: "#34d399" }}>Səhnə 3</h1>
        <p style={{ fontSize: 24, color: "#a7f3d0", marginTop: 10 }}>
          Avtomatlaşdırılmış Render
        </p>
      </div>
    </AbsoluteFill>
  );
};