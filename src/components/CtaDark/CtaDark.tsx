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
                The plan of action
              </h3>
            </Reveal>
            <Reveal>
              <p>
                Find out why and how rafee token will be the next digital assest revolution you should participate. 
              </p>
            </Reveal>
          </div>

          <Link href="#" className="px-4 py-3 mx-auto rounded-md bg-blueRadial">
            <Reveal>Read Whitepaper</Reveal>
          </Link>
        </div>
      </div>
    </div>
  );
}
