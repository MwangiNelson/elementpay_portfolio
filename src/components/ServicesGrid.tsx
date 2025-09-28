import Image from 'next/image';
import React from 'react'
const services = [
  {
    id: '01',
    title: 'No Internet, No Problem',
    description: 'Enable offline transactions through USSD and SMS integration. Your customers can send payments even without internet connectivity.',
    icon: '/images/telco.png',
    buttonText : "Get Started",
    buttonLink: "https://console.elementpay.net"
  },
  {
    id: '02', 
    title: 'Simplified Payouts & Collections',
    description: 'Streamline bulk payments and collections with our automated reconciliation system. Perfect for payroll and vendor payments.',
    icon: '/images/Bitcoin-amico 1.png',
    buttonText : "Simplify Payments",
    buttonLink: "https://console.elementpay.net"
  },
  {
    id: '03',
    title: 'Instant On/Off Ramping',
    description: 'Convert between local currencies and stablecoins instantly. Real-time exchange rates with minimal slippage.',
    icon: '/images/Bitcoin-pana 1.png',
    buttonText : "Explore Solutions",
    buttonLink: "https://console.elementpay.net"
  },
  {
    id: '04',
    title: 'Developer APIs Built for Africa',
    description: 'Comprehensive REST APIs with webhooks, SDKs in multiple languages, and detailed documentation for rapid integration.',
    icon: '/images/Hand coding-amico 1.png',
    buttonText: "View API Docs",
    buttonLink: "https://docs.elementpay.net"
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <div className="flex flex-row items-center justify-center w-full gap-4">
            <span className="h-1 w-5 bg-[#83007C] rounded-lg"></span>
            <span className="text-lg text-[#83007C]">What we offer</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive payment infrastructure designed specifically for African markets
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="card p-6 hover-lift relative"
            >
              {/* Number Badge */}
             
              
             
              
              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                {service.buttonLink && <a 
                  href={service.buttonLink} 
                  target="_blank"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
                >
                  {service.buttonText} 
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>}
                {!service.buttonLink && <button className="btn-primary">
                  {service.buttonText}
                </button>}
              </div>
              {/* Icon */}
              <div className="mb-6 mt-8">
                <div className="w-fit h-fit  rounded-lg flex items-center justify-center p-2">
                  <Image
                    src={service.icon}
                    alt={`${service.title} illustration`}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
