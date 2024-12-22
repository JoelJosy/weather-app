import React from "react";
import { FlipWords } from "./ui/flip-words";
import { Link } from 'react-router-dom'

export function Home() {
  const words = ["New Delhi", "London", "Toronto", "New York"];

  return (
    (<div className="min-w-full h-[40rem] min-h-screen flex flex-col gap-16 justify-center items-center px-4">
      <div
        className="text-4xl mx-auto font-normal text-neutral-500 dark:text-neutral-400">
        The weather in
        <FlipWords words={words} /> <br />
        in realtime.
      </div>
      <div>
        <Link to='/search' className='px-4 py-2 rounded-md bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white text-sm font-medium transition duration-200'>Get Started</Link>
      </div>
    </div>)
  );
}
