import Image from "next/image";
import React from "react";

const teamMembers = [
  {
    name: "Joseph Thuku",
    role: "CEO ",
    image: "/images/team/joethuku.png",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Aly Mitsumi",
    role: "CTO",
    image: "/images/team/alymitsumi.png",
    bio: "Ex-Google engineer. Blockchain expert.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Bivvon Makory",
    role: "Head of Operations",
    image: "/images/team/bivvonmakory.png",
    bio: "Product leader from Safaricom M-Pesa.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Patrick Lemay",
    role: "Board Advisor",
    image: "/images/team/team-patrick.svg",
    bio: "Senior engineer from Microsoft Azure.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

const SocialIcon = ({
  type,
  href,
}: {
  type: "linkedin" | "twitter";
  href: string;
}) => {
  if (type === "linkedin") {
    return (
      <a
        href={href}
        className="w-8 h-8 bg-gray-100 hover:bg-purple-100 rounded-full flex items-center justify-center transition-colors duration-300 group"
      >
        <svg
          className="w-4 h-4 text-gray-600 group-hover:text-purple-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
    );
  }

  return (
    <a
      href={href}
      className="w-8 h-8 bg-gray-100 hover:bg-purple-100 rounded-full flex items-center justify-center transition-colors duration-300 group"
    >
      <svg
        className="w-4 h-4 text-gray-600 group-hover:text-purple-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    </a>
  );
};

export default function Team() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <div className="flex flex-row items-center justify-center w-full gap-4">
            <span className="h-1 w-5 bg-[#83007C] rounded-lg"></span>
            <span className="text-lg text-[#83007C]">The Brilliant Minds</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experienced leaders from top fintech and technology companies,
            united by a mission to democratize payments across Africa
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center group flex flex-col items-center justify-center">
              {/* Avatar with Purple Halo */}
              <div className="relative mb-6 bg-[#4F2CE0] w-fit rounded-full">
                <div className="relative w-32 h-32 mx-auto">
                  <Image
                    src="/images/graphic.png"
                    alt="team"
                    width={40}
                    height={40}
                    className="w-20 h-20 object-contain z-[1] absolute top-0 right-0 "
                  />

                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    width={128}
                    height={128}
                    className="w-full h-full z-[10] rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
              </div>

              {/* Member Info */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 font-medium">{member.role}</p>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center space-x-3 pt-2">
                  <SocialIcon type="linkedin" href={member.social.linkedin} />
                  <SocialIcon type="twitter" href={member.social.twitter} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
