import Image from "next/image";
import React from "react";

export default function CTA() {
  return (
    <section className="py-16 lg:py-24 relative">
      <div className="container">
        <div
          className="relative rounded-3xl overflow-hidden bg-[#4339CA] bg-opacity-50"
          style={{ backgroundColor: "#4339CA" }}
        >
          {/* Ribbon Background Asset */}
          <div className="absolute inset-0">
            <Image
              src="/images/assets/ribbon.png"
              alt="Ribbon decoration"
              fill
              className="object-cover object-center"
              priority={false}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 lg:p-16 text-center text-white">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight drop-shadow-lg">
                  Let's Bring Stablecoin
                  <br />
                  Payments to Your Users
                </h2>
                <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                  ElementPay makes it easy for blockchain-powered businesses to
                  connect with local customers through simple USSD and mobile
                  money flows.
                </p>
              </div>

              <div className="flex justify-center pt-4">
                <a href="https://console.elementpay.net" target="_blank">
                  <button className="bg-white text-purple-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg flex items-center gap-2 text-lg">
                    Get Started Today
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
