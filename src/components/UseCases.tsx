import Image from "next/image";
import React from "react";
const useCases = [
  {
    id: "agriculture",
    category: "Power agriculture with instant, reliable payments.",
    title: "Agribusiness & Farmer Services",
    image: "/images/farmers.png",
    benefits: [
      "Pay farmers or buy crops instantly via USSD—no internet required.",
      "Enable crop insurance payouts in stablecoins.",
    ],
    imagePosition: "left",
  },
  {
    id: "payroll",
    category: "Fast, low-cost payments for distributed teams.",
    title: "Payroll & Gig Economy Payouts",
    image: "/images/developer.png",
    benefits: [
      "Pay workers in stablecoins, withdrawable to local money.",
      "Eliminate delays and reduce payout costs.",
    ],
    imagePosition: "right",
  },
  {
    id: "merchants",
    category: "Global payments for local businesses.",
    title: "Merchant Payments & E-commerce",
    image: "/images/ecommerce.png",
    benefits: [
      "Accept stablecoins for online and in-store sales.",
      "Auto-convert to local currency seamlessly.",
    ],
    imagePosition: "left",
  },
  {
    id: "creators",
    category: "Seamless payments inside digital platforms.",
    title: "Gaming & Digital Economies",
    image: "/images/content_creator.png",
    benefits: [
      "Enable in-game purchases with stablecoins.",
      "Let players earn and cash out to local wallets.",
    ],
    imagePosition: "right",
  },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 check-icon" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

export default function UseCases() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <div className="flex flex-row items-center justify-center w-full gap-4">
            <span className="h-1 w-5 bg-[#83007C] rounded-lg"></span>
            <span className="text-lg text-[#83007C]">Use Cases</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What&apos;s Possible With Our Rails
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Locals who only know mobile money and USSD can still transact in
            stablecoins. ElementPay bridges the gap, making crypto usable in
            African contexts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.id}
              className="  overflow-hidden flex flex-col gap-3 duration-300"
            >
              {/* Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={useCase.image}
                    alt={`${useCase.title} use case`}
                    width={600}
                    height={450}
                    className="w-full h-48 md:h-56 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">
                    {useCase.title}
                  </h3>
                  <div className="text-sm font-semibold text-gray-400 tracking-tight mb-2">
                    {useCase.category}
                  </div>
                </div>

                <ul className="space-y-3">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li
                      key={benefitIndex}
                      className="flex items-start space-x-3"
                    >
                      <Image
                        src="/images/icons/check.svg"
                        alt="check"
                        width={20}
                        height={20}
                      />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
