import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import logo from "../assets/logo.png";
import Animate from "../Animate";

const tiers = [
  {
    tag: "STARTER",
    title: "Starter Website",
    subtitle: "For new businesses & personal brands",
    features: [
      "5–7 responsive pages",
      "CMS integration",
      "Mobile optimized",
      "SEO ready",
      "Contact forms",
    ],
    highlight: false,
  },
  {
    tag: "BUSINESS",
    title: "Business Website",
    subtitle: "For growing companies",
    features: [
      "Custom UI design",
      "Advanced analytics",
      "Blog integration",
      "Performance optimized",
      "Security hardened",
    ],
    highlight: true,
  },
  {
    tag: "E-COMMERCE",
    title: "Online Store",
    subtitle: "For product-first businesses",
    features: [
      "Payment gateway",
      "Inventory management",
      "Product catalog",
      "Order tracking",
      "Customer accounts",
    ],
    highlight: false,
  },
  {
    tag: "ENTERPRISE",
    title: "Custom Web App",
    subtitle: "For complex operations",
    features: [
      "Custom dashboards",
      "API development",
      "Real-time features",
      "3rd-party integrations",
      "Scalable architecture",
    ],
    highlight: false,
  },
];

const process = [
  { icon: "🔍", label: "Discovery", sub: "Goals & requirements" },
  { icon: "🎨", label: "Design", sub: "UI/UX & wireframing" },
  { icon: "</>", label: "Build", sub: "Development sprints" },
  { icon: "✅", label: "QA", sub: "Testing & security" },
  { icon: "🚀", label: "Launch", sub: "Deploy & go live" },
  { icon: "🔧", label: "Support", sub: "Ongoing maintenance" },
];

const faqs = [
  {
    q: "WordPress vs custom development — which is better?",
    a: "WordPress for quick, budget-friendly projects. Custom for scale, unique functionality, or high-traffic sites. We build both and help you choose right.",
  },
  {
    q: "How long does it take to build a custom website?",
    a: "4–12 weeks depending on scope. A 5-page business site takes ~4 weeks; a full e-commerce platform or SaaS dashboard takes 10–12 weeks.",
  },
  {
    q: "What tech stack do you use?",
    a: "React and Next.js on the front end, Node.js or Python on the back end, PostgreSQL or MongoDB for data, deployed on AWS or Vercel.",
  },
  {
    q: "Do you build e-commerce sites with payment integration?",
    a: "Yes — Razorpay, Stripe, PayPal, and UPI-based solutions. All payment pages are PCI DSS compliant and served over HTTPS with TLS 1.3.",
  },
  {
    q: "How do you ensure security during development?",
    a: "We follow OWASP Top 10 guidelines, run Snyk/npm audit on all dependencies, enforce HTTPS, implement CSP headers, and conduct a full security audit before launch.",
  },
];

const staggerDelays = ["", "delay-100", "delay-200", "delay-300"];

export default function WebDevelopment() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-[#fdf5ee] px-4 sm:px-8 pt-12 pb-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <Animate animation="fade-up" duration="duration-700">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                SERVICES / WEB DEVELOPMENT
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-1">
                Web Development
              </h1>
              <h1 className="text-4xl sm:text-5xl font-black text-orange-500 leading-tight mb-5">
                in Kolkata, India
              </h1>
            </Animate>
            <Animate
              animation="fade-up"
              delay="delay-100"
              duration="duration-700"
            >
              <p className="text-gray-500 text-base max-w-md leading-relaxed mb-7">
                From starter websites to enterprise-grade web applications.
                Scalable, responsive, and results-driven.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors inline-flex items-center gap-2"
                >
                  Start Your Project →
                </Link>
                <Link
                  to="/portfolio"
                  className="border border-gray-200 hover:border-orange-300 text-gray-700 font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
                >
                  View Case Studies
                </Link>
              </div>
            </Animate>
          </div>
          <Animate
            animation="zoom-in"
            delay="delay-200"
            duration="duration-700"
            className="flex-shrink-0"
          >
            <img
              src={logo}
              alt="Biswa Bangla"
              className="w-40 h-40 md:w-52 md:h-52 object-contain rounded-full bg-white/50 p-3"
            />
          </Animate>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="bg-white px-4 sm:px-8 py-14">
        <div className="max-w-6xl mx-auto">
          <Animate animation="fade-up" duration="duration-700">
            <span className="text-xs font-bold text-orange-600 tracking-widest uppercase bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
              SERVICE TIERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-5 mb-2">
              Pick Your Build
            </h2>
            <p className="text-sm text-orange-500 font-medium mb-8">
              Transparent tiers. Every scope is custom-quoted before we start.
            </p>
          </Animate>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tiers.map((t, i) => (
              <Animate
                key={t.title}
                animation="fade-up"
                delay={staggerDelays[i]}
                duration="duration-700"
              >
                <div
                  className={`rounded-2xl p-5 border ${t.highlight ? "bg-orange-500 border-orange-500 text-white" : "border-gray-100 hover:border-orange-200"} transition-all relative h-full flex flex-col`}
                >
                  {t.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-orange-600 text-xs font-bold px-4 py-1 rounded-full border border-orange-200 shadow-sm">
                      MOST POPULAR
                    </div>
                  )}
                  <div
                    className={`text-xs font-bold tracking-widest uppercase mb-3 ${t.highlight ? "text-white/70" : "text-orange-600"}`}
                  >
                    {t.tag}
                  </div>
                  <h3
                    className={`font-black text-lg leading-tight mb-1 ${t.highlight ? "text-white" : "text-gray-900"}`}
                  >
                    {t.title}
                  </h3>
                  <p
                    className={`text-xs mb-5 ${t.highlight ? "text-white/70" : "text-gray-500"}`}
                  >
                    {t.subtitle}
                  </p>
                  <ul className="space-y-2 mb-7 flex-1">
                    {t.features.map((f) => (
                      <li
                        key={f}
                        className={`text-xs flex items-center gap-2 ${t.highlight ? "text-white/90" : "text-gray-600"}`}
                      >
                        <span
                          className={
                            t.highlight ? "text-white" : "text-orange-500"
                          }
                        >
                          ●
                        </span>{" "}
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block text-center text-sm font-semibold py-2.5 rounded-lg transition-colors mt-auto ${t.highlight ? "bg-white text-orange-600 hover:bg-orange-50" : "border border-orange-300 text-orange-600 hover:bg-orange-50"}`}
                  >
                    Get Started
                  </Link>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#fdf5ee] px-4 sm:px-8 py-14">
        <div className="max-w-6xl mx-auto">
          <Animate animation="fade-up" duration="duration-700">
            <span className="text-xs font-bold text-orange-600 tracking-widest uppercase bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
              HOW WE WORK
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-5 mb-2">
              Our Development Process
            </h2>
            <p className="text-sm text-orange-500 font-medium mb-10">
              20% planning · 50% building · 15% testing · 15% launch
            </p>
          </Animate>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {process.map((p, i) => (
              <Animate
                key={p.label}
                animation="fade-up"
                delay={staggerDelays[i % 4]}
                duration="duration-700"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl mb-3 shadow-md">
                    {p.icon}
                  </div>
                  <div className="font-bold text-gray-900 text-sm mb-0.5">
                    {p.label}
                  </div>
                  <div className="text-xs text-gray-400">{p.sub}</div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-4 sm:px-8 py-14">
        <div className="max-w-3xl mx-auto">
          <Animate animation="fade-up" duration="duration-700">
            <span className="text-xs font-bold text-orange-600 tracking-widest uppercase bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-5 mb-8">
              Common Questions
            </h2>
          </Animate>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <Animate
                key={i}
                animation="fade-up"
                delay={i < 3 ? staggerDelays[i] : ""}
                duration="duration-700"
              >
                <div className="border border-gray-100 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 text-sm pr-4">
                      {faq.q}
                    </span>
                    <span className="text-gray-400 flex-shrink-0 text-lg">
                      {openFaq === i ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 px-4 sm:px-8 py-16 text-center">
        <div className="max-w-xl mx-auto">
          <Animate animation="zoom-in" duration="duration-700">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Start Your Web Project Today
            </h2>
            <p className="text-white/80 text-sm mb-8">
              Book a free consultation and get a transparent, itemized quote.
            </p>
            <Link
              to="/contact"
              className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-3.5 rounded-lg text-sm transition-colors inline-block"
            >
              Book Free Consultation →
            </Link>
          </Animate>
        </div>
      </section>
    </Layout>
  );
}
