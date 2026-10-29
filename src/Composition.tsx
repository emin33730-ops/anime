import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const MyComposition = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: {
      damping: 12,
    },
  });

  const rotation = interpolate(frame, [0, 100], [0, 360], {
    extrapolateRight: "clamp",
  });

  const red = Math.floor(Math.abs(Math.sin(frame / 20) * 255));
  const green = Math.floor(Math.abs(Math.cos(frame / 30) * 255));
  const blue = 150;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "□#111",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Helvetica, Arial",
      }}
    >
      <div
        style={{
          width: 250,
          height: 250,
          borderRadius: "40px",
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          transform: `scale(${scale}) rotate(${rotation}deg)`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: 32,
            fontWeight: "bold",
          }}
        >
          ANIME
        </span>
      </div>
    </AbsoluteFill>
  );
};