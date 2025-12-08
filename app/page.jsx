import { Button } from "@/components/ui/button";
import HeroSection from "@/components/hero";
import {
  statsData,
  featuresData,
  howItWorksData,
  testimonialsData,
} from "@/data/landing";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-36 space-y-20">
      <HeroSection />

      <section className="py-12 sm:py-16 bg-linear-to-r from-emerald-50 via-green-400 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {statsData.map((statsData, index) => (
              <div
                key={index}
                className="rounded-2xl border border-emerald-100 bg-white/80 hover:bg-yellow-300 backdrop-blur shadow-sm p-4 sm:p-6 text-center"
              >
                <div className="text-2xl sm:text-3xl font-semibold text-emerald-700">
                  {statsData.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  {statsData.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16" id="features">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
          <div className="text-center space-y-3">
            <p className="text-emerald-600 font-semibold uppercase tracking-[0.2em]">
              Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Everything you need, in one place
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Connect accounts, track spend, and automate insights with tools
              that stay beautiful and responsive on every screen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuresData.map((feature, index) => (
              <Card
                key={index}
                className="p-6 h-full border-emerald-50 shadow-sm"
              >
                <CardContent className="space-y-4 pt-4 ">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-slate-900 text-white" id="security">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-3">
            <p className="text-emerald-300 font-semibold uppercase tracking-[0.2em] ">
              Security
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Built with safety at every layer
            </h2>
            <p className="text-slate-200/80 max-w-3xl mx-auto">
              Data encryption, audit trails, and privacy-first defaults keep
              your finances protected no matter the device you use.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3 hover:bg-emerald-400">
              <h3 className="text-xl font-semibold">Bank-grade encryption</h3>
              <p className="text-slate-100/80">
                All data is encrypted in transit and at rest with strict access
                controls.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3 hover:bg-emerald-400 ">
              <h3 className="text-xl font-semibold">Privacy by default</h3>
              <p className="text-slate-100/80">
                No selling data. You own it, with auditability and export
                options.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3 hover:bg-emerald-400">
              <h3 className="text-xl font-semibold">Continuous monitoring</h3>
              <p className="text-slate-100/80">
                Uptime, anomaly detection, and alerting keep your workspace
                reliable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-12 sm:py-16 bg-linear-to-r from-emerald-400 via-green-400 to-emerald-400 text-white"
        id="how-it-works"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center space-y-3">
            <p className="text-emerald-50 font-semibold uppercase tracking-[0.2em]">
              How it works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              From setup to insight
            </h2>
            <p className="text-white max-w-3xl mx-auto">
              Go live in minutes. Welth stays adaptive with clear steps that
              feel good on mobile, tablet, and desktop.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howItWorksData.map((step, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white text-black hover:bg-yellow-300 p-6 text-center space-y-3"
              >
                <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold">{step.title} </h3>
                <p className="text-black">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16" id="pricing">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center space-y-3">
            <p className="text-emerald-600 font-semibold uppercase tracking-[0.2em]">
              Customer proof
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              What our users say
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From freelancers to founders, people use Welth to keep finances
              clear.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsData.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 h-full border-emerald-50 shadow-sm"
              >
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4 gap-3">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-linear-to-r from-emerald-500 to-emerald-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center text-white space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to take control of your finances?
          </h2>
          <p className="text-emerald-50/90 text-lg max-w-3xl mx-auto">
            Join thousands who trust Welth to track, plan, and grow. Modern,
            responsive, and designed for the way you work.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-emerald-700 hover:bg-yellow-300 hover:text-black animate-bounce"
              >
                Start free
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
