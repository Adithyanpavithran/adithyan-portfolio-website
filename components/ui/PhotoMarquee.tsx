"use client";

import React from "react";

const SHOWCASE_IMAGES = [
  { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", title: "Linux Grafana Telemetry" },
  { url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80", title: "AI Assistant Architecture" },
  { url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80", title: "Flutter Health Analytics" },
  { url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80", title: "Next.js Web Experience" },
  { url: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80", title: "Cloud Taxi Platform" },
  { url: "https://images.unsplash.com/photo-1614680376593-902f749f705b?auto=format&fit=crop&w=800&q=80", title: "Interactive Minesweeper Engine" },
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
