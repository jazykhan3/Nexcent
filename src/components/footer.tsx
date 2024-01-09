"use client"
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface FooterItem {
  title: string;
  items: string[];
}

interface FooterProps {
  columns: FooterItem[];
}

const FooterColumn: React.FC<FooterItem> = ({ title, items }) => (
  <ul className="flex flex-col gap-[1rem]">
    <li className="font-bold text-sm md:text-lg">{title}</li>
    {items.map((item, index) => (
      <li
        key={index}
        className="cursor-pointer text-sm md:text-base font-normal text-[#FFFFFFBF]"
      >
        {item}
      </li>
    ))}
  </ul>
);

const SocialIcons: React.FC = () => (
  <span className="flex gap-[1.25rem]">
    {[1, 2, 3, 4].map((index) => (
      <Image
        key={index}
        src={`/footerIcon${index}.png`}
        height={20}
        width={20}
        alt=""
      />
    ))}
  </span>
);

const Footer: React.FC = () => {
  const router = useRouter();

  return (
    <div className="bg-[#151515]">
      <div className="w-5/5 p-3 md:p-0 md:w-4/5 mx-auto text-white">
        <div className="w-4/5 m-auto flex flex-col items-center gap-[1.5rem] py-[2.25rem]">
          <p className="text-xl font-medium">Follow us on Social</p>
          <SocialIcons />
        </div>

        <div className="w-5/5 border-b border-[#FFFFFF33] mt-[1rem] mb-[1.5rem]">
          <div className="h-[5.25rem] m-auto w-12/12 flex items-center justify-center md:justify-between">
            <Image
              src="/logo-light.png"
              className="cursor-pointer"
              width={155}
              height={24}
              priority
              alt="logo"
              onClick={() => router.push("/")}
            />

            <ul className="flex items-center gap-[50px] ">
              {[
                { label: "All Calculators", link: "/" },
                { label: "Blog", link: "/" },
                { label: "FAQs", link: "/" },
                { label: "Terms", link: "/" },
                { label: "Privacy Policy", link: "/" },
              ].map((item, index) => (
                <li
                  key={index}
                  className=" hidden md:flex text-[#F5F7FA] text-sm md:text-base font-medium cursor-pointer"
                  onClick={() => router.push(item.link)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-sm text-[#FFFFFFCC] font-avenir font-normal pb-5">
          Vesto Advisors, LLC (“Vesto”) is an SEC registered investment adviser.
          Registration with the SEC does not imply a certain level of skill or
          training. SEC registration does not mean the SEC has approved of the
          services of the investment adviser. SIPC protects against the loss of
          cash and securities held by a customer at a financially-troubled
          SIPC-member brokerage firm. The limit of SIPC protection is $500,000,
          which includes a $250,000 limit for cash. SIPC does not protect
          against the decline in value of your securities, or losses due to bad
          or inappropriate investment advice. More information is available on
          the SIPC’s website at the following link:
          https://www.sipc.org/for-investors/what-sipc-protects.
        </p>

        <p className="text-sm text-[#FFFFFFCC] font-avenir font-normal pb-6">
          The material presented is for informational purposes only and should
          not be construed as investment advice. It is not a recommendation of,
          or an offer to sell or solicitation of an offer to buy, any particular
          security, strategy or investment product. Investing in securities
          involves risks, including the potential loss of money, and past
          performance does not guarantee future results. Historical returns,
          expected returns, and probability projections are provided for
          informational and illustrative purposes, and may not reflect actual
          future performance. Product images shown are for informational and
          illustrative.
        </p>

        <p className="text-sm py-4 text-[#FFFFFFCC] font-avenir font-normal ">
          © 2023 Vesto Advisors, LLC is a wholly owned subsidiary of Vesto
          Financial, Inc. 450 Park Ave South, New York, NY, 10016, USA
        </p>
      </div>
    </div>
  );
};

export default Footer;
