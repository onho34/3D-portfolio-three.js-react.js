import { Center, GradientTexture, useGLTF } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import myFont from '../../public/Roboto_Regular.json'
import { useRef } from "react";
extend({ TextGeometry })

export default (props) => {

  const { width: w, height: h } = useThree((state) => state.viewport);
  const font = new FontLoader().parse(myFont);

  return (
    <>
      <Center position={[0, 0, 0]} scale={w / 45}>
        <mesh >
          <textGeometry args={["Hi, I'm piter.", { font, size: 5, height: 1 }]} />
          <meshBasicMaterial>
            <GradientTexture stops={[0, 1]} colors={["#efb98f", "white"]} />
          </meshBasicMaterial>
        </mesh>
      </Center>
    </>
  );
};
useGLTF.preload("./Models/text.glb");
