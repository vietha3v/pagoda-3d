"use client";
import "aframe";
import "aframe-particle-system-component";
import { Entity, Scene } from "aframe-react";

export default function VRScene() {
  let material = {
    shader: "flat",
    src: "/MoThienKien/textured_output.jpg",
  };
  return (
    <Scene>
      <Entity
        obj-model={{
          obj: "/MoThienKien/textured_output.obj",
          mtl: "/MoThienKien/textured_output.mtl",
        }}
        position="0 1.5 0"
        rotation="0 -90 0"
      ></Entity>
    </Scene>
  );
}
