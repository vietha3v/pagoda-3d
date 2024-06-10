"use client";
import "aframe";
import "aframe-particle-system-component";
import { Pannellum } from "pannellum-react";

export default function PannellumPage() {
  return (
    <div className="relative">
      <Pannellum
        className="w-full h-screen"
        image={"/milan.jpg"}
        pitch={10}
        yaw={180}
        hfov={110}
        height={"100vh"}
        autoLoad
        // showZoomCtrl={false}
        onLoad={() => {
          console.log("panorama loaded");
        }}
      >
        <Pannellum.Hotspot
          type="custom"
          pitch={31}
          yaw={150}
          handleClick={(evt: any, name: any) => console.log(name)}
          name="hs1"
        />
      </Pannellum>
    </div>
  );
}
