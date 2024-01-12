"use client";

import { BackgroundRadialLeft } from "../BackgroundRadialLeft";
import { Reveal } from "../Reveal/Reveal";
import { Slide } from "./Slide";

export function Testimonials() {
  return (
    <div className="relative px-8 py-16 md:py-32" id="testimonials">
      <BackgroundRadialLeft />
      <div className="grid max-w-5xl gap-8 mx-auto my-6 md:grid-cols-2">
        <Reveal>
          <h2 className="text-5xl mb-5 font-semibold">
            Qué dicen los clientes de nosotros
          </h2>
        </Reveal>
      </div>

      <Slide />
    </div>
  );
}
