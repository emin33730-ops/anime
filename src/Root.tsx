import { Composition } from "remotion";
import { Scene1 } from "./Scene1";
import { Scene2 } from "./Scene2";
import { Scene3 } from "./Scene3";
import { Scene4 } from "./Scene4";
import { AbsoluteFill, Sequence } from "remotion";

const AllScenes = () => {
  return (
    <AbsoluteFill>
      <Sequence durationInFrames={90} from={0}>
        <Scene1 />
      </Sequence>
      <Sequence durationInFrames={90} from={90}>
        <Scene2 />
      </Sequence>
      <Sequence durationInFrames={90} from={180}>
        <Scene3 />
      </Sequence>
      <Sequence durationInFrames={90} from={270}>
        <Scene4 />
      </Sequence>
    </AbsoluteFill>
  );
};

export const RemotionRoot = () => {
  return (
    <Composition
      id="AnimeVideo"
      component={AllScenes}
      durationInFrames={360}
      fps={30}
      width={1280}
      height={720}
    />
  );
};