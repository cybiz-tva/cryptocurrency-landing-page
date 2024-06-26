"use client";

import Link from "next/link";
import { BackgroundRadialLeft } from "../BackgroundRadialLeft";
import { Reveal } from "../Reveal/Reveal";
import { dataFeaturesBusiness } from "./BestBusiness.data";
import Image from "next/image";

export function BestBusiness() {
  return (
    <div className="relative px-8 py-16 md:py-32" id="features">
      <BackgroundRadialLeft />
      <div className="grid max-w-5xl mx-auto md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <Reveal>
            <h2 className="text-5xl font-semibold">
              <span className="block degradedBlue bg-blueLight">
                Built on Solana
              </span>
               Blockchain.
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10">
            Why should you invest in TIME token? We are not just another cryptocurrency. 
            Our token is backed by real value and innovation. Here is why </p>
          </Reveal>
          <Reveal>
            <div className="my-8">
              <Link
                href={"#plans"}
                className="px-6 py-3 rounded-md bg-blueRadial"
              >
                Apply Now
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="grid items-center py-5 md:py-8">
          {dataFeaturesBusiness.map(({ id, icon, title, description }) => (
            <Reveal key={id}>
              <div className="grid grid-col gap-5 px-4 py-4 rounded-3xl group sm:grid-flow-col hover:bg-radialBlack">
                <Image
                  src={`/assets/${icon}.svg`}
                  alt={title}
                  width={40}
                  height={40}
                  className="fill-slate-100"
                />
                <div>
                  <h4 className="text-primary">{title}</h4>
                  <p className="text-primaryDark">{description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
