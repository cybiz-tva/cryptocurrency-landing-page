"use client";

import CountUp from "react-countup";
import { MotionTransition } from "../MotionTransition";
import { dataCounterData } from "./CounterData.data";

export function CounterData() {
  return (
    <MotionTransition className="max-w-5xl  mx-auto px-8 py-16 md:py-32">
      <div className="flex flex-col gap-y-10 sm:flex-row sm:justify-around ">
        {dataCounterData.map(({ id, startNumber, endNumber, text }) => (
          <div key={id} className="text-center">
            <p className="text-3xl font-semibold">
              +
              <CountUp
                start={startNumber}
                end={endNumber}
                duration={2.75}
                enableScrollSpy={false}
                delay={0.5}
              />{" "}
            </p>
            <span className="block degradedBlue bg-blueLight text-2xl">
              {text}
            </span>
          </div>
        ))}
      </div>
    </MotionTransition>
  );
}
