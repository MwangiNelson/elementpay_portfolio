import React from 'react';
import Image from 'next/image';

const partners = [
  { name: 'Base', logo: '/images/partners/Base_lockup_white 1.png' },
  { name: 'StarkNet', logo: '/images/partners/SN-Linear-Flat colour 1.png' },
  { name: 'Scroll', logo: '/images/partners/Scroll_FullLogo.8b9fd528 1.png' },
  { name: 'WorldPay', logo: '/images/partners/world.png' },
  { name: 'Lisk', logo: '/images/partners/Layer_1-2.png' }
];

export default function Partners() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="flex flex-wrap justify-between items-center gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner) => (
            <div key={partner.name} className="flex-shrink-0 ">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={120}
                height={60}
                className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity object-contain duration-300 grayscale hover:grayscale-0"
                style={{ maxWidth: '120px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
