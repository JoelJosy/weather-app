import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsText() {
  const words = ["New Delhi", "London", "Toronto", "New York"];

  return (
    (<div className="min-w-full h-[40rem] min-h-screen flex justify-center items-center px-4">
      <div
        className="text-4xl mx-auto font-normal text-neutral-500 dark:text-neutral-400">
        The weather in
        <FlipWords words={words} /> <br />
        in realtime.
      </div>
    </div>)
  );
}
