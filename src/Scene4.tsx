import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export const Scene4 = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [0, 30], [0.5, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#312e81",
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
        <h1 style={{ fontSize: 64, margin: 0, color: "#818cf8" }}>Səhnə 4</h1>
        <p style={{ fontSize: 24, color: "#c7d2fe", marginTop: 10 }}>
          Layihəniz uğurla tamamlandı!
        </p>
      </div>
    </AbsoluteFill>
  );
};