import Link from "next/link";
import { Reveal } from "../Reveal/Reveal";

export function CtaDark() {
  return (
    <div className="px-8 my-16 md:mb-32">
      <div className="max-w-5xl px-4 py-6 mx-auto border-transparent bg-radialBlack md:px-16 md:py-12 shadow-dark rounded-3xl">
        <div className="grid items-center md:grid-cols-2">
          <div className="my-8">
            <Reveal>
              <h3 className="text-3xl font-bold">
                Ven a probar nuestros servicios
              </h3>
            </Reveal>
            <Reveal>
              <p>
                Obtén todo lo necesario para expandir tu negocio a nivel global.
                ¡Únete a la evolución financiera digital!
              </p>
            </Reveal>
          </div>

          <Link href="#" className="px-4 py-3 mx-auto rounded-md bg-blueRadial">
            <Reveal>Empieza ahora</Reveal>
          </Link>
        </div>
      </div>
    </div>
  );
}
