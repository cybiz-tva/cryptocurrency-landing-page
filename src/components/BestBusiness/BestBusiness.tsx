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
                Tranforma tu experiencia
              </span>
              con blockchain.
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10">
              Encontrar la plataforma ideal es clave para potenciar tu vida
              financiera. Descubre cómo puedes construir crédito en el mundo
              digital, aprovechar recompensas exclusivas y optimizar tus ahorros
              con nuestra innovadora plataforma.
            </p>
          </Reveal>
          <Reveal>
            <div className="my-8">
              <Link
                href={"#plans"}
                className="px-6 py-3 rounded-md bg-blueRadial"
              >
                Elige tu plan
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
