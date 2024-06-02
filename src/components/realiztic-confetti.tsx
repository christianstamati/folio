"use client";
import Realistic from "react-canvas-confetti/dist/presets/realistic";

export default function RealisticConfetti() {
  return (
    <Realistic
      onInit={(params) => {
        params.conductor.shoot();
      }}
    />
  );
}
