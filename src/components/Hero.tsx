"use client";

import Image from "next/image";
import { useState } from "react";
import React from "react";

const pins = [
  {
    id: "kenya-usdc",
    name: "USDC",
    country: "Kenya",
    top: "38%",
    left: "63%",
    icon: "/images/pins/pin-kenya-usdc.svg",
  },
  {
    id: "nigeria-usdt",
    name: "USDT",
    country: "Nigeria",
    top: "36%",
    left: "54%",
    icon: "/images/pins/pin-nigeria-usdt.svg",
  },
  {
    id: "ghana-usdc",
    name: "USDC",
    country: "Ghana",
    top: "47%",
    left: "49%",
    icon: "/images/pins/pin-ghana-usdc.svg",
  },
  {
    id: "southafrica-eth",
    name: "ETH",
    country: "South Africa",
    top: "72%",
    left: "67%",
    icon: "/images/pins/pin-southafrica-eth.svg",
  },
  {
    id: "egypt-tether",
    name: "USDT",
    country: "Egypt",
    top: "25%",
    left: "73%",
    icon: "/images/pins/pin-egypt-tether.svg",
  },
];

export default function Hero() {
  const [hoveredPin, setHoveredPin] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden pt-8">
      <div className="hero-gradient absolute inset-0 opacity-50"></div>
      <div className="container relative z-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="badge animate-slide-in">
                Stablecoin Payments — Enterprise
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-slide-in-delay-1">
                  Stablecoin Payments Rails That Work
                </h1>
                <div className="script-accent text-2xl md:text-3xl lg:text-4xl animate-slide-in-delay-2">
                  Anywhere, for Anyone
                </div>
              </div>

              <p className="text-lg text-gray-600 max-w-xl animate-slide-in-delay-3">
                Build seamless stablecoin payment infrastructure across Africa
                with our enterprise-grade APIs. From mobile money integration to
                cross-border settlements, we handle the complexity so you can
                focus on growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-delay-3 pb-10">
              <a href="https://console.elementpay.net" target="_blank">
                <button className="btn-primary">Start using Our API</button>
              </a>
              <a href="https://d-app.elementpay.net" target="_blank">
                <button className="btn-outline  !border-[#4339CA] !text-[#4339CA]">
                  Start using Our D-App
                </button>
              </a>
            </div>
          </div>

          {/* Right Content - Map with Pins */}
          <div className="relative">
            <div className="relative max-w-2xl mx-auto">
              <Image
                src="/images/africa_payments.png"
                alt="Africa map showing stablecoin payment coverage across multiple countries"
                width={1600}
                height={1200}
                priority
                className="w-full h-auto"
                style={{ maxWidth: "680px" }}
              />

              {/* Pins
              {pins.map((pin) => (
                <div
                  key={pin.id}
                  className="pin"
                  style={{
                    position: 'absolute',
                    top: pin.top,
                    left: pin.left,
                  }}
                  onMouseEnter={() => setHoveredPin(pin.id)}
                  onMouseLeave={() => setHoveredPin(null)}
                >
                  <Image
                    src={pin.icon}
                    alt={`${pin.name} in ${pin.country}`}
                    width={24}
                    height={24}
                  />
                  {hoveredPin === pin.id && (
                    <div className="tooltip">
                      {pin.name} • {pin.country}
                    </div>
                  )}
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
