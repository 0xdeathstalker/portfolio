"use client";

import { useScramble } from "use-scramble";

export default function ScrambleText({
  text,
  speed = 0.5,
  tick = 1,
  step = 1,
  scramble = 5,
  seed = 3,
}: {
  text: string;
  speed?: number;
  tick?: number;
  step?: number;
  scramble?: number;
  seed?: number;
}) {
  const { ref } = useScramble({
    text,
    speed,
    step,
    scramble,
    seed,
  });
  return (
    <span
      ref={ref}
      className="font-sans text-teal-500 text-xl"
    />
  );
}
