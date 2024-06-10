"use client";
import "aframe";
import "aframe-particle-system-component";
import { Entity, Scene } from "aframe-react";

export default function VRScene() {
  return (
    <Scene>
      <Entity primitive="a-sky" rotation="0 -130 0" src="/puydesancy.jpg" />
      <Entity
        primitive="a-text"
        font="kelsonsans"
        value="Puy de Sancy, France"
        width="6"
        position="-2.5 0.25 -1.5"
        rotation="0 15 0"
      />
    </Scene>
  );
}
