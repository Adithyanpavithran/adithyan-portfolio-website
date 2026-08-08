"use client";

import React from "react";

const SHOWCASE_IMAGES = [
  { url: "/assets/showcase/telemetry.png", title: "Linux Grafana Telemetry" },
  { url: "/assets/showcase/ai_assistant.png", title: "AI Assistant Architecture" },
  { url: "/assets/showcase/flutter_health.png", title: "Flutter Health Analytics" },
  { url: "/assets/showcase/nextjs_restaurant.png", title: "Next.js Web Experience" },
  { url: "/assets/showcase/taxi_platform.png", title: "Cloud Taxi Platform" },
];

export const PhotoMarquee: React.FC = () => {
  return (
    <section className="py-16 overflow-hidden relative select-none">
      <div className="flex w-max animate-marquee-reverse space-x-6">
        {[...SHOWCASE_IMAGES, ...SHOWCASE_IMAGES].map((img, i) => (
          <div
            key={i}
            className="w-72 sm:w-96 h-52 sm:h-64 rounded-3xl overflow-hidden border border-white/10 relative group shrink-0 shadow-2xl"
          >
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
              <span className="text-xs font-mono font-bold text-white bg-black/60 px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
                {img.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
