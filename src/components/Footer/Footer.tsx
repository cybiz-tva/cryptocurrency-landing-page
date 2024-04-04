import Image from "next/image";
import { footerData, footerSocialNetworks } from "./Footer.data";
import Link from "next/link";
import { Reveal } from "../Reveal";

export function Footer() {
  return (
    <div className="max-w-5xl px-8 py-5 mx-auto mt-16">
      <div className="justify-between md:flex">
        <div>
          <Image
            src="/assets/logo.svg"
            width={150}
            height={30}
            alt="Logo Bank"
            className="w-auto h-auto"
          />
          <Reveal>
            <p className="mt-5 text-primaryDark max-w-[250px]">
             The next digital Currency Revolution
            </p>
          </Reveal>
        </div>
        {footerData.map(({ id, title, links }) => (
          <div key={id}>
            <h4 className="mt-8 text-lg md:mt-0">
              <Reveal>{title}</Reveal>
            </h4>
            {links.map(({ id, name, link }) => (
              <Link
                key={id}
                href={link}
                className="block mt-4 text-primaryDark hover:text-white"
              >
                <Reveal>{name}</Reveal>
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="border-[#3F3E45] border-[1px] my-7" />

      <div className="items-center justify-between md:flex">
        <div className="my-3">
          <Reveal>2024 Rafee. Designed by Cybiz.</Reveal>
        </div>
        <div className="flex gap-5">
          {footerSocialNetworks.map(({ id, icon, link }) => (
            <Link key={id} href={link} className="text-2xl">
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
