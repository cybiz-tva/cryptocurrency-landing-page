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
            width={320}
            height={300}
            className="h-auto w-auto"
          />
        </MotionTransition>
        <div className="flex flex-col justify-center">
          <Reveal>
            <h2 className="text-5xl font-semibold">
              <span className="block degradedBlue bg-blueLight">
                Controla fácilmente
              </span>
              tus activos
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10 text-pretty">
              Descubre cómo nuestra plataforma simplifica la gestión de tus
              transacciones digitales. Desde pagos instantáneos hasta
              inversiones eficientes, pon el control en tus manos para optimizar
              tu flujo financiero.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
