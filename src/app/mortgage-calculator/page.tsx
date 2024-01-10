"use client"
import EmailForm from "@/components/landingpage/email-form";
import MortgageForm from "@/components/mortgageForm";
import React from "react";

interface ResultItem {
  title: string;
  amount: string;
  description: string;
}

const resultsData: ResultItem[] = [
  {
    title: "Repayment",
    amount: "£ 4,111.46",
    description: "(assuming your interest rate stays the same)",
  },
  {
    title: "Total interest",
    amount: "£ 3,039.23",
    description: "(assuming your interest rate stays the same)",
  },
  {
    title: "Total you’ll repay over full term",
    amount: "£ 124,111.46",
    description: "(assuming your interest rate stays the same)",
  },
];

const CalculatorCard: React.FC<{ title: string }> = ({ title }) => (
  <div className="rounded border text-center border-[2c2c2c33] w-[16rem] px-6 py-4 bg-[#F3F3EE] text-[#2E2E27] text-xl font-normal font-avenir">
    {title}
  </div>
);

function MortgageCalculator() {
  return (
    <div className="m-auto w-10/12">
      <div className="my-[50px]">
        <p className="text-4xl text-center md:text-left font-avenir font-semibold mb-4">Mortgage calculator</p>
        <p className="font-avenir text-center md:text-left font-normal text-2xl">
          Mortgages are some of the biggest commitments you’ll make in your
          financial life. And with all the options, it can be hard to work out
          what they’ll cost you. Our mortgage calculator can help.
        </p>
        <div className="w-4/4 my-[64px] flex flex-col md:flex-row">
          <div className="w-4/4 md:w-2/4 bg-[#FBFBF9] p-[40px]">
            <MortgageForm />
          </div>
          <div className="w-4/4 md:w-2/4 bg-[#F3F3EE] p-[40px]">
            <p className="text-2xl font-extrabold mb-3">Your Results</p>
            {resultsData.map((result, index) => (
              <div key={index} className="flex flex-col gap-[10px] mb-[22px]">
                <p className="text-xl font-extrabold">{result.title}</p>
                <p className="text-3xl font-bold font-lato">
                  {result.amount}
                  <span className="ml-2 font-avenir text-xl font-normal">per month</span>
                </p>
                <p className="font-base font-normal font-avenir">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[1.25rem] my-[5rem]" > <p className="font-normal text-3xl" >More financial tools/calculator</p>
        <div className="w-4/4  flex flex-wrap gap-[3rem] justify-between">
          <CalculatorCard title="Credit Card Calculator" />
          <CalculatorCard title="Mortgage Calculator" />
          <CalculatorCard title="Networth Calculator" />
          <CalculatorCard title="Debt Calculator" />
          <CalculatorCard title="MOT Calculator" />
          <CalculatorCard title="TfL Calculator" />
          <CalculatorCard title="Stamp Duty Calculator" />
          <CalculatorCard title="Car Loan Calculator" />
        </div>
        </div>
        <EmailForm />
      </div>
    </div>
  );
}

export default MortgageCalculator;
