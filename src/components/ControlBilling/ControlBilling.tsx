"use client";

import Image from "next/image";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal/Reveal";

export function ControlBilling() {
  return (
    <div className="px-8 py-16 md:py-32">
      <div className="flex flex-col-reverse max-w-5xl mx-auto md:flex-row place-content-evenly">
        <MotionTransition className="flex-1 p-6 md:p-8">
          <Image
            src="/assets/transactions.webp"
            alt="Control Business"
            width={300}
            height={100}
            className="w-full h-auto md:w-10/12"
          />
        </MotionTransition>
        <div className="flex flex-col justify-center">
          <Reveal>
            <h2 className="text-5xl font-semibold">
              <span className="block degradedBlue bg-blueLight">
                Our visions and
              </span>
              Tokenomics
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10 text-pretty">
            Our tokenomics is designed to create a vibrant and sustainable 
            ecosystem where TIME tokens act as catalysts for innovation and growth.
             Join us as we redefine e-commerce with cryptocurrency and unlock new possibilities for global commerce.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
