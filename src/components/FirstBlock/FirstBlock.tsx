"use client";

import Link from "next/link";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import Image from "next/image";
import { Reveal } from "../Reveal/Reveal";

export function FirstBlock() {
  return (
    <div className="relative px-8 py-16 md:py-32">
      <BackgroundRadialRight />
      <div className="grid max-w-5xl mx-auto md:grid-cols-2 gap-y-8">
        <div>
          <Reveal>
            <h1 className="text-5xl font-semibold">
              Rafee Token{" "}
              <span className="block degradedBlue bg-blueLight">
                digital assest
              </span>{" "}
              to invest in.
            </h1>
          </Reveal>

          <Reveal>
            <p className="max-w-md my-5">
              Contract Address : 6yXVNo9Z6YFi7YqAbErgQggJ7tJXEfqRp8rKd1h3XsKx
            </p>
          </Reveal>

          <Reveal>
            <div className="my-8">
              <Link
                href="#clients"
                className="px-6 py-3 rounded-md bg-blueRadial"
              >
                Apply PreSale
              </Link>
            </div>
          </Reveal>
        </div>

        <MotionTransition className="flex justify-center items-center">
          <Image
            src="/assets/control-business.webp"
            width={450}
            height={450}
            alt="Cards"
            className="h-auto w-72 md:w-full"
          />
        </MotionTransition>
      </div>
    </div>
  );
}
