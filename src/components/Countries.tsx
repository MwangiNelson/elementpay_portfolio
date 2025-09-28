import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import React from "react";

const trustedCompanies = [
  { name: "Project Mocha", logo: "/images/project_mocha.png" },
  { name: "WeatherXM", logo: "/images/weatherxm.png" },
  { name: "", logo: "/images/logo2.png" },
];

const countries = [
  { name: "Kenya", code: "KE" },
  { name: "Nigeria", code: "NG" },
  { name: "Ghana", code: "GH" },
  { name: "South Africa", code: "ZA" },
  { name: "Uganda", code: "UG" },
];

export default function Countries() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container">
        {/* Trusted Companies */}
        <div className="text-start flex flex-col md:flex-row mb-16">
          <div className="flex flex-col w-full md:w-1/2">
            <div className="flex flex-row items-center justify-start w-full gap-4">
              <span className="h-1 w-5 bg-[#83007C] rounded-lg"></span>
              <span className="text-lg text-[#83007C]">Growing Together</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Innovative Businesses Across Africa
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Forward-thinking companies use ElementPay’s rails to connect
              stablecoin payments with everyday users across Africa.
            </p>
          </div>

          <div className="flex w-full md:w-1/2 flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 mb-16">
            {trustedCompanies.map((company) => (
              <div key={company.name} className="flex-shrink-0">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={140}
                  height={80}
                  className="h-16 md:h-32 w-auto opacity-100 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Countries We Operate In */}
        <div className="text-center">
          <div className="flex flex-row items-center justify-center w-full gap-4">
            <span className="h-1 w-5 bg-[#83007C] rounded-lg"></span>
            <span className="text-lg text-[#83007C]">Our Reach</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Countries We Operate In
          </h3>

          {/* Flags section spanning 3/4 of screen width */}
          <div className="w-11/12 mx-auto">
            <div className="flex flex-wrap justify-between items-center gap-8 md:gap-12 lg:gap-16">
              {countries.map((country) => (
                <div
                  key={country.code}
                  className="flex flex-col items-center space-y-3 group cursor-pointer"
                >
                  <div className="relative">
                    <div className="w-16 h-16 md:w-10 md:h-10 rounded-full overflow-hidden border-3 border-gray-200 group-hover:border-purple-400 transition-all duration-300 shadow-md group-hover:shadow-lg">
                      <ReactCountryFlag
                        countryCode={country.code}
                        svg
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        title={country.name}
                      />
                    </div>
                  </div>
                  <span className="text-sm md:text-base font-medium text-gray-600 group-hover:text-purple-600 transition-colors duration-300">
                    {country.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-gray-600 mt-12 max-w-2xl mx-auto">
            Expanding to more countries across Africa.
            <a
              href="#"
              className="text-purple-600 hover:text-purple-700 font-medium ml-1"
            >
              Request your country →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
