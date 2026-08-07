import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adithyan Pavithran | DevOps Engineer & Software Developer Portfolio",
  description: "Cinematic portfolio of Adithyan Pavithran, DevOps Engineer and Software Developer specializing in cloud infrastructure, Flutter mobile development, Linux administration, and modern Next.js web applications.",
  keywords: [
    "Adithyan Pavithran",
    "DevOps Engineer",
    "Flutter Developer",
    "Software Developer",
    "Cloud Infrastructure",
    "Docker",
    "Kubernetes",
    "AWS",
    "Next.js Portfolio",
    "Linux Administration",
    "Prometheus Grafana"
  ],
  authors: [{ name: "Adithyan Pavithran" }],
  creator: "Adithyan Pavithran",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adithyan-pavithran.vercel.app",
    title: "Adithyan Pavithran | DevOps Engineer & Software Developer",
    description: "Cinematic dark-themed portfolio showcasing DevOps pipelines, cloud infrastructure, Flutter apps, and modern web platforms.",
    siteName: "Adithyan Pavithran Portfolio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Adithyan Pavithran Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adithyan Pavithran | DevOps Engineer & Software Developer",
    description: "Cinematic dark-themed portfolio showcasing DevOps pipelines, cloud infrastructure, Flutter apps, and modern web platforms.",
    creator: "@adithyan_p",
    images: ["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Adithyan Pavithran",
    jobTitle: "DevOps Engineer & Software Developer",
    url: "https://adithyan-pavithran.vercel.app",
    sameAs: [
      "https://github.com/adithyan-pavithran",
      "https://linkedin.com/in/adithyan-pavithran",
      "https://twitter.com/adithyan_p"
    ],
    knowsAbout: [
      "DevOps",
      "Cloud Infrastructure",
      "Docker",
      "Kubernetes",
      "Flutter",
      "Dart",
      "Linux",
      "Next.js",
      "React"
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#050505] text-white antialiased selection:bg-[#8B5CF6]/40 selection:text-white relative bg-noise overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
