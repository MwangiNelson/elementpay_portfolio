"use client";

import React, { useState, useEffect } from "react";
import testimonialsData from "@/data/testimonials.json";

const statistics = [
  {
    number: "500+",
    label: "Businesses Served",
    description: "Across 15 African countries",
  },
  {
    number: "$50M+",
    label: "Transaction Volume",
    description: "Processed monthly",
  },
];

const testimonials = testimonialsData.testimonials;

export default function Impact() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      className="py-16 lg:py-24 relative overflow-hidden"
      style={{ backgroundColor: "#4339CA" }}
    >
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content - Header and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-8 h-[2px] bg-white"></div>
              <span className="text-white/80">
                Trusted by Businesses Across Africa
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
              The Impact We've Made
              <br />
              <span className="text-white/90">So Far</span>
            </h2>

            <p className="text-lg text-white/80 leading-relaxed max-w-lg">
              From payments to payouts, we help businesses bridge blockchain
              with everyday transactions.
            </p>
          </div>

          {/* Right Content - Testimonials Carousel */}
          <div className="space-y-8">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-2"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
                      <div className="space-y-4">
                        <div className="text-sm font-semibold text-white/90 uppercase tracking-wide">
                          {testimonial.category}
                        </div>

                        <blockquote className="text-base leading-relaxed text-white/95">
                          "{testimonial.quote}"
                        </blockquote>

                        <div className="flex items-center space-x-3 pt-2">
                          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center overflow-hidden">
                            {/* <img 
                              src={testimonial.avatar} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                // e.currentTarget.nextElementSibling.style.display = 'flex';
                              }}
                            /> */}

                            <div className="w-full h-full bg-white/20 rounded-full flex items-center justify-center font-bold text-sm text-white hidden">
                              {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                          </div>
                          <div>
                            <div className="font-semibold text-white">
                              {testimonial.name}
                            </div>
                            <div className="text-white/70 text-sm">
                              {testimonial.title}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-white/40"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-white w-8"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-white/40"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
