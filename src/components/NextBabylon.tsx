import { Engine, Scene } from "react-babylonjs";
import { Vector3 } from "@babylonjs/core";

const NextBabylon = () => {
  return (
    <Engine
      canvasId="sample-canvas"
      canvasStyle={{ display: "block", width: "100%" }}
    >
      <Scene>
        <freeCamera
          name="camera1"
          position={new Vector3(0, 5, -10)}
          // @ts-ignore - doesn't seem like this is working...
          // setTarget & getTarget exist in TargetCamera, but
          // this property doesn't seem to be setting properly
          target={new Vector3(0, 0, 0)}
        />
        <hemisphericLight
          name="light1"
          intensity={0.7}
          direction={Vector3.Up()}
        />
        <sphere
          name="sphere1"
          diameter={2}
          segments={16}
          position={new Vector3(0, 3, 0)}
        />
        <ground
          name="ground1"
          width={6}
          height={6}
          subdivisions={2}
          position={new Vector3(0, 2, 0)}
        />
      </Scene>
    </Engine>
  );
};

export default NextBabylon;
