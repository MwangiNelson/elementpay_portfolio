"use client";

import React, { useState } from "react";
import Image from "next/image";
const features = [
  {
    id: "wallet",
    title: "Instant Wallet Creation",
    description:
      "When a user dials the ElementPay USSD code for the first time, a wallet address is automatically created for them — no crypto knowledge needed.",
    icon: (
      <Image
        src="/images/icons/wallet.svg"
        alt="wallet"
        width={30}
        height={30}
      />
    ),
  },
  {
    id: "business",
    title: "Business-Specific Flows",
    description:
      "After entering their PIN, users see a list of businesses integrated with ElementPay. Each business has its own tailored menu reflecting its services.",
    icon: (
      <Image
        src="/images/icons/checklist.svg"
        alt="business"
        width={30}
        height={30}
      />
    ),
  },
  {
    id: "seamless",
    title: "Seamless Payments",
    description:
      "Users choose a service, pay through familiar USSD steps, and the business receives the funds directly in stablecoins. Users just see “Payment Successful” ",
    icon: (
      <Image
        src="/images/icons/bitcoinpayment.svg"
        alt="business"
        width={30}
        height={30}
      />
    ),
  },
];

export default function Features() {
  const [showCopyTooltip, setShowCopyTooltip] = useState(false);

  const copyUSSDCode = async () => {
    const ussdCode = "*665*313#";
    try {
      await navigator.clipboard.writeText(ussdCode);
      setShowCopyTooltip(true);
      setTimeout(() => {
        setShowCopyTooltip(false);
      }, 3000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <div className="flex flex-row items-center justify-center w-full gap-4">
            <span className="h-1 w-5 bg-[#83007C] rounded-lg"></span>
            <span className="text-lg text-[#83007C]">How it Works</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple for Users, Powerful for Businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            We work with each business to gather requirements and design custom
            USSD menus. This ensures services feel natural to users while giving
            businesses the stablecoin rails they need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature) => (
            <div key={feature.id} className="text-center space-y-4">
              {/* Icon Circle */}
              <div className="mx-auto w-16 h-16 bg-[#4F2CE0] text-purple-600 rounded-full flex items-center justify-center mb-6 hover:bg-purple-200 transition-colors duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center text-gray-500 mt-12 italic relative">
          <p className="text-sm text-center">
            Try ElementPay by dialing{" "}
            <span className="relative inline-block">
              <b
                className="cursor-pointer text-[#4F2CE0] hover:text-[#3d24b3] transition-colors duration-200 hover:underline select-none"
                onClick={copyUSSDCode}
                title="Click to copy"
              >
                *665*313#
              </b>
              {showCopyTooltip && (
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded-md shadow-lg animate-fade-in-out whitespace-nowrap z-50">
                  <span>Copied to clipboard!</span>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              )}
            </span>{" "}
            to instantly create a wallet
          </p>
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary bg-[#4F2CE0]">
            Get Started For Free
          </button>
        </div>
      </div>
    </section>
  );
}
