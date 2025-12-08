"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import React, { useRef, useEffect } from "react";

const HeroSection = () => {
  const imageRef = useRef();
  useEffect(() => {
    const imageElement = imageRef.current;
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("hero-image-scrolled");
      } else {
        imageElement.classList.remove("hero-image-scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pb-24 px-4" id="hero">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold border border-emerald-100">
            AI-powered personal finance
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight gradient-title">
            Manage your money with clarity and confidence
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
            Track spending, plan budgets, and uncover insights instantly. Welth
            keeps every account, transaction, and goal aligned across all your
            devices.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="w-full sm:w-auto px-8 hover:bg-green-500 hover:text-black scale-105 transition-transform"
              >
                Get Started
              </Button>
            </Link>
            <Link href="https://www.youtube.com/@MdTasrifKhan">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto px-8 hover:bg-green-500 scale-105 transition-transform"
              >
                Watch Demo
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left max-w-xl mx-auto lg:mx-0 pt-4">
            <div className="rounded-xl border p-4 shadow-sm bg-white/70 hover:bg-yellow-300 backdrop-blur">
              <p className="text-xs uppercase text-gray-500 ">Active Users</p>
              <p className="text-2xl font-semibold">50K+</p>
            </div>
            <div className="rounded-xl border p-4 shadow-sm bg-white/70 hover:bg-yellow-300 backdrop-blur">
              <p className="text-xs uppercase text-gray-500 hover:text-black">
                Data Secure
              </p>
              <p className="text-2xl font-semibold">Bank-Grade</p>
            </div>
            <div className="rounded-xl border p-4 shadow-sm bg-white/70 hover:bg-yellow-300 backdrop-blur">
              <p className="text-xs uppercase text-gray-500 hover:text-black">
                Uptime
              </p>
              <p className="text-2xl font-semibold">99.9%</p>
            </div>
            <div className="rounded-xl border p-4 shadow-sm bg-white/70 hover:bg-yellow-300 backdrop-blur">
              <p className="text-xs uppercase text-gray-500">Insights</p>
              <p className="text-2xl font-semibold">Real-Time</p>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper mt-3 md:mt-0">
          <div
            ref={imageRef}
            className="hero-image border border-emerald-100 bg-white/70 backdrop-blur rounded-2xl shadow-2xl overflow-hidden"
          >
            <Image
              src="/banner.jpg"
              width={900}
              height={520}
              alt="Dashboard Preview"
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
