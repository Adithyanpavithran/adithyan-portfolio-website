"use client";

import React from "react";
import { Download, Printer, ArrowLeft, Mail, Phone, Globe } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans py-8 px-4 sm:px-6 print:p-0 print:bg-white print:text-black">
      {/* Top Floating Bar (Hidden when printing) */}
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between print:hidden">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 text-sm font-medium transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-200 hover:text-white hover:border-slate-500 text-sm font-medium transition-all"
          >
            <Printer className="w-4 h-4" />
            <span>Print</span>
          </button>

          <a
            href="/resume.pdf"
            download="Adithyan_Pavithran_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-lg transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Resume Document Container (Matching Screenshot Design) */}
      <div className="max-w-4xl mx-auto bg-white text-slate-900 rounded-2xl shadow-2xl p-8 md:p-12 print:shadow-none print:p-6 print:rounded-none">
        {/* Name Header */}
        <div className="border-b-2 border-slate-800 pb-4 mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-wider uppercase font-sans">
            ADITHYAN PAVITHRAN
          </h1>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[32%_68%] gap-8 print:grid-cols-[32%_68%] text-left">
          {/* Left Column: Contact, Skills, Languages, Certifications, Achievements */}
          <div className="space-y-6 border-r-0 md:border-r border-slate-200 md:pr-6">
            {/* CONTACT */}
            <div>
              <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b border-slate-800 pb-1 mb-3">
                CONTACT
              </h2>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-800 shrink-0" />
                  <span>+917902482052</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-800 shrink-0 mt-0.5" />
                  <span className="break-all">adithyanpavithran1@gmail.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <Globe className="w-3.5 h-3.5 text-slate-800 shrink-0 mt-0.5" />
                  <a
                    href="https://github.com/Adithyanpavithran"
                    target="_blank"
                    className="hover:underline text-slate-900 font-medium break-all"
                  >
                    github.com/Adithyanpavithran
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Globe className="w-3.5 h-3.5 text-slate-800 shrink-0 mt-0.5" />
                  <a
                    href="https://www.linkedin.com/in/adithyan-pavithran-b80424352"
                    target="_blank"
                    className="hover:underline text-slate-900 font-medium break-all"
                  >
                    linkedin.com/in/adithyan-pavithran-b80424352
                  </a>
                </li>
              </ul>
            </div>

            {/* SKILLS */}
            <div>
              <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b border-slate-800 pb-1 mb-3">
                SKILLS
              </h2>
              <div className="space-y-2 text-xs text-slate-700">
                <div>
                  <span className="font-semibold text-slate-900">Programming Languages:</span> Python, C, Dart, SQL
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Mobile Development:</span> Flutter, Firebase
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Database:</span> MySQL, Firebase Firestore
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Hardware & IoT:</span> ESP32, Bluetooth Low Energy (BLE)
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Tools:</span> GitHub, VS Code, Figma, Canva
                </div>
              </div>
            </div>

            {/* LANGUAGES */}
            <div>
              <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b border-slate-800 pb-1 mb-3">
                LANGUAGES
              </h2>
              <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
                <li>English (Fluent)</li>
                <li>Hindi</li>
                <li>Malayalam (Mother Tongue)</li>
                <li>Kannada</li>
                <li>Tamil</li>
              </ul>
            </div>

            {/* CERTIFICATION */}
            <div>
              <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b border-slate-800 pb-1 mb-3">
                CERTIFICATION
              </h2>
              <ul className="list-disc list-inside text-xs text-slate-700 space-y-2">
                <li>
                  <span className="font-medium text-slate-900">HP LIFE online course AI for Beginners</span> (June 2025)
                </li>
                <li>
                  <span className="font-medium text-slate-900">Cybersecurity Analyst Job Simulation by TATA</span> (June 2025)
                </li>
              </ul>
            </div>

            {/* ACHIEVEMENTS */}
            <div>
              <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b border-slate-800 pb-1 mb-3">
                ACHIEVEMENTS
              </h2>
              <ul className="list-disc list-inside text-xs text-slate-700 space-y-1.5 leading-relaxed">
                <li>Represented the College Cricket Team for 4 consecutive years.</li>
                <li>Winner of the F-Zone Intercollegiate Cricket Championship.</li>
                <li>Demonstrated teamwork, leadership, discipline, and the ability to perform under pressure.</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Summary, Experience, Projects, Education */}
          <div className="space-y-6">
            {/* SUMMARY */}
            <div>
              <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b border-slate-800 pb-1 mb-2">
                SUMMARY
              </h2>
              <p className="text-xs text-slate-700 leading-relaxed">
                Enthusiastic and self-driven Flutter Developer with hands-on experience in building cross-platform mobile apps using Flutter and Firebase. Familiar with Python programming and passionate about learning modern tech stacks. Strong problem-solving mindset with a focus on clean UI and responsive design.
              </p>
            </div>

            {/* PROFESSIONAL EXPERIENCE */}
            <div>
              <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b border-slate-800 pb-1 mb-3">
                PROFESSIONAL EXPERIENCE
              </h2>
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-xs font-bold text-slate-900">
                    Flutter Developer Intern, MaiTexa Technologies
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500">
                    2 JUNE 2025 - 18 JUNE 2025
                  </span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 leading-relaxed pl-1">
                  <li>Building cross-platform mobile applications using Flutter & Dart</li>
                  <li>Understanding UI/UX principles and responsive design</li>
                  <li>Applying realworld coding practices and teamwork</li>
                  <li>Developed half phase of a periods tracker app which enhances user experiences</li>
                </ul>
              </div>
            </div>

            {/* PROJECT */}
            <div>
              <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b border-slate-800 pb-1 mb-3">
                PROJECT
              </h2>
              <div className="space-y-4">
                {/* Gather UP */}
                <div>
                  <h3 className="text-xs font-bold text-slate-900 mb-1">
                    Event Finder App (Gather UP) – Flutter + Firebase
                  </h3>
                  <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 leading-relaxed pl-1">
                    <li>Developed a cross-platform mobile app to track and manage events using Flutter.</li>
                    <li>Integrated Firebase for real-time data storage and authentication</li>
                    <li>Designed clean UI with dynamic event listing, detail view, and notifications.</li>
                    <li>Improved event organization for users with an intuitive, responsive interface.</li>
                  </ul>
                </div>

                {/* Indoor Navigation System */}
                <div>
                  <h3 className="text-xs font-bold text-slate-900 mb-1">
                    Indoor Navigation System for Blind People (Final Year Project)
                  </h3>
                  <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 leading-relaxed pl-1">
                    <li>Developing a Flutter-based mobile application that provides voice-guided indoor navigation for visually impaired users.</li>
                    <li>Implemented ESP32 microcontrollers with BLE beacons for real-time indoor positioning and communication.</li>
                    <li>Enabled wireless transmission of location data between ESP32 devices and the mobile application.</li>
                    <li>Focused on enhancing accessibility, independent mobility, and user safety in GPS-denied environments.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* EDUCATION */}
            <div>
              <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b border-slate-800 pb-1 mb-3">
                EDUCATION
              </h2>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xs font-bold text-slate-900">
                      B.Tech in Computer Science And Engineering
                    </h3>
                    <span className="text-[11px] font-mono text-slate-500">
                      Expected Graduation on April 2026
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5 mt-1 pl-1">
                    <li>LBS COLLEGE OF ENFGINEERING KASARAGOD, KERALA, INDIA</li>
                    <li className="font-semibold text-slate-900">8.23 CGPA (First class with Distinction)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-slate-900">
                    HIGHER SECONDARY EDUCATION
                  </h3>
                  <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5 mt-1 pl-1">
                    <li>GOVT. SANSKRIT HSS KOZHIKODE, KERALA, INDIA</li>
                    <li>Final Grade: 98.01%</li>
                    <li>Completed : June 2019 - March 2021</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
