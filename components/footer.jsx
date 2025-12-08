import Link from "next/link";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Security", href: "#security" },
    { label: "Pricing", href: "#pricing" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
  ],
  support: [
    { label: "Help center", href: "#" },
    { label: "Status", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
          <div className="space-y-4">
            <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200 border border-white/10">
              Trusted by 50k+ people
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Manage money with confidence. Plan, track, and grow smarter.
            </h2>
            <p className="text-slate-300 max-w-2xl">
              Welth brings all of your finances into one clear view, from daily
              spending to long-term goals. Built with privacy, clarity, and
              collaboration in mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-400 hover:bg-white px-5 py-3 font-semibold text-emerald-950 shadow-lg shadow-emerald-400/40 hover:-translate-y-px transition-transform"
              >
                Get started
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
              <span>Realtime sync</span>
              <span>Bank-level encryption</span>
              <span>Human support</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-slate-400 mb-4">
                Product
              </h3>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-200 hover:text-emerald-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-slate-400 mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-200 hover:text-emerald-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-slate-400 mb-4">
                Support
              </h3>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-200 hover:text-emerald-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-white/10 pt-6">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Welth. Built for clarity.
          </p>
          <div className="flex gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                aria-label={label}
                href={href}
                className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-200 hover:text-emerald-300 hover:border-emerald-300/40"
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
