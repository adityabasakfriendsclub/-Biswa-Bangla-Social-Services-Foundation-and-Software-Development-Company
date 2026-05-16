//src/page/home.jsx

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Layout from "../Layout";
import logo from "../assets/logo.png";
import Animate from "../Animate";

const stats = [
  { end: 152, suffix: "+", label: "Projects Completed", icon: "🚀" },
  { end: 120, suffix: "+", label: "Happy Clients", icon: "😊" },
  { end: 15, suffix: "+", label: "Years of Excellence", icon: "🏆" },
  { end: 2, suffix: "", label: "Global Offices", icon: "🌍" },
];

const services = [
  {
    icon: "</>",
    title: "Web Development",
    desc: "React, Next.js, Node.js. From landing pages to enterprise apps.",
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*ZlCsH4m7UvjPtkOQjBlL4A.png",
  },
  {
    icon: "📱",
    title: "Mobile Apps",
    desc: "iOS, Android & React Native. Apps users actually want.",
    image:
      "https://www.brainvire.com/blog/wp-content/uploads/2025/05/React-Native-Cross-Platform-Mobile-App-Development-Your-Complete-Guide.webp",
  },
  {
    icon: "✏️",
    title: "Product Design",
    desc: "UI/UX that converts. Figma prototyping, design systems.",
    image:
      "https://cdn.sanity.io/images/qyzm5ged/production/1df4e885ec140debfbc0b2d3b454ffbe3c858455-2138x1200.jpg",
  },
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    desc: "Custom ML models, NLP, LLM integration, computer vision.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D12AQFxUxZkz1iSIw/article-cover_image-shrink_720_1280/B4DZuXMQMXI4AI-/0/1767768131103?e=2147483647&v=beta&t=3U0-p_lyOFyYj3IteVAHwfGmL_fMSz3ILfuOqcP0AUw",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    desc: "AWS, GCP, CI/CD, Docker, Kubernetes. Infrastructure.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFcoq65DbZxMgdTe0IHGk_ZiK9ekyS77hIIA&s",
  },
  {
    icon: "🛡️",
    title: "Cybersecurity",
    desc: "Penetration testing, OWASP compliance, security audits.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLNLbfjBRWIewm1PDk29RQBr2dI4eGTK70tw&s",
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    desc: "SEO, paid ads, social media, conversion optimization.",
    image:
      "https://landingi.com/wp-content/uploads/2024/09/digital_marketing_types.webp",
  },
  {
    icon: "🔗",
    title: "Blockchain & Web3",
    desc: "Smart contracts, DeFi, NFT platforms, wallet integration.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcm1sGBw0FGHhgEmLKv_6VerHQU_x9L-096w&s",
  },
];

const caseStudies = [
  {
    tag: "FASHION RETAIL · 8 WEEKS",
    title: "E-commerce Platform Rebuild",
    desc: "Replaced a slow WordPress store with a custom React + Node.js platform with real-time inventory and Stripe integrations.",
    metrics: [
      { val: "+340%", label: "Gross Sales" },
      { val: "1.8s", label: "Page Load (was 8.2s)" },
      { val: "+45%", label: "Conversion Rate" },
      { val: "-60%", label: "Bounce Rate" },
    ],
    stack: ["React", "Node.js", "Stripe", "AWS S3"],
  },
  {
    tag: "LOGISTICS · 14 WEEKS",
    title: "Enterprise Logistics Dashboard",
    desc: "Replaced spreadsheets managing 500+ daily shipments with a real-time Next.js dashboard and carrier API integrations.",
    metrics: [
      { val: "-60%", label: "Manual Processes" },
      { val: "99.9%", label: "System Uptime" },
      { val: "+45%", label: "Faster Processing" },
      { val: "3mo", label: "ROI Achieved" },
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "AWS ECS"],
  },
];

const staggerDelays = ["", "delay-100", "delay-200", "delay-300"];

function CountUp({ end, suffix, duration = 1800, start }) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [start, end, duration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

function StatsBar() {
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-orange-500 px-4 sm:px-8 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="text-center border-r border-white/20 last:border-0 px-2"
          >
            <div className="text-3xl mb-2">{s.icon}</div>
            <div className="text-3xl sm:text-4xl font-black text-white mb-1 tabular-nums">
              <CountUp
                end={s.end}
                suffix={s.suffix}
                start={started}
                duration={1800 + i * 200}
              />
            </div>
            <div className="text-xs font-semibold text-white/80 uppercase tracking-widest">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-[#fdf5ee] px-4 sm:px-8 pt-14 pb-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="flex-1">
            <Animate animation="fade-down" duration="duration-700">
              <div className="flex flex-wrap gap-2 mb-5">
                {["# WEB", "# AI", "# BLOCKCHAIN", "# HOWRAH, INDIA"].map(
                  (t) => (
                    <span
                      key={t}
                      className="text-xs font-semibold text-orange-600 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
            </Animate>
            <Animate
              animation="fade-up"
              delay="delay-100"
              duration="duration-700"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 leading-none mb-2">
                Build.
              </h1>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-orange-500 leading-none mb-2">
                Scale.
              </h1>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 leading-none mb-6">
                Dominate.
              </h1>
            </Animate>
            <Animate
              animation="fade-up"
              delay="delay-200"
              duration="duration-700"
            >
              <p className="text-base text-gray-600 max-w-md mb-8 leading-relaxed">
                From startup MVPs to enterprise platforms — we ship digital
                products that grow your business.
              </p>
            </Animate>
            <Animate
              animation="fade-up"
              delay="delay-300"
              duration="duration-700"
            >
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors inline-flex items-center gap-2"
                >
                  Get Free Consultation →
                </Link>
                <Link
                  to="/portfolio"
                  className="border border-gray-300 hover:border-orange-400 text-gray-700 hover:text-orange-600 font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
                >
                  View Our Work
                </Link>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                {[
                  "ISO 9001:2015",
                  "ISO 27001:2022",
                  "MSME Certified",
                  "15+ Projects",
                  "India & USA",
                ].map((b) => (
                  <span
                    key={b}
                    className="text-xs font-medium text-gray-500 bg-white border border-gray-200 px-3 py-1 rounded-full"
                  >
                    {b}
                  </span>
                ))}
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
              className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-full bg-white/50 p-4"
            />
          </Animate>
        </div>
      </section>

      {/* Stats bar */}
      <StatsBar />

      {/* Services */}
      <section className="bg-white px-4 sm:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <Animate animation="fade-up" duration="duration-700">
            <div className="mb-10">
              <span className="text-xs font-bold text-orange-600 tracking-widest uppercase bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
                WHAT WE DO
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-2">
                Everything to Build Your Digital Presence
              </h2>
              <p className="text-gray-500 text-base">
                8 specialized services, one trusted team. From ideation to
                launch and beyond.
              </p>
            </div>
          </Animate>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <Animate
                key={s.title}
                animation="fade-up"
                delay={staggerDelays[i % 4]}
                duration="duration-700"
              >
                <div className="border border-gray-100 rounded-xl overflow-hidden hover:border-orange-200 hover:shadow-md transition-all group h-full flex flex-col">
                  {/* Cover image */}
                  <div className="relative h-36 overflow-hidden bg-[#fdf5ee]">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                    {/* Icon badge over image */}
                    <div className="absolute bottom-3 left-3 w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow text-lg">
                      {s.icon}
                    </div>
                  </div>
                  {/* Text */}
                  <div className="p-4 flex flex-col flex-1">
                    <div className="font-bold text-gray-900 mb-1.5 text-sm group-hover:text-orange-600 transition-colors">
                      {s.title}
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-[#fdf5ee] px-4 sm:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <Animate animation="fade-up" duration="duration-700">
            <div className="mb-10">
              <span className="text-xs font-bold text-orange-600 tracking-widest uppercase bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
                RESULTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4">
                Work That Moves the Needle
              </h2>
            </div>
          </Animate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => (
              <Animate
                key={cs.title}
                animation={i === 0 ? "fade-right" : "fade-left"}
                delay="delay-100"
                duration="duration-700"
              >
                <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-orange-200 transition-all h-full">
                  <span className="text-xs font-bold text-orange-600 tracking-widest uppercase">
                    {cs.tag}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                    {cs.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                    {cs.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {cs.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="bg-[#fdf5ee] rounded-xl p-3"
                      >
                        <div className="text-2xl font-black text-orange-500">
                          {m.val}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Tech Stack
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cs.stack.map((t) => (
                        <span
                          key={t}
                          className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 px-4 sm:px-8 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <Animate animation="zoom-in" duration="duration-700">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-white/80 text-sm mb-8">
              Free consultation. No commitments. 24/7 Support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-3.5 rounded-lg text-sm transition-colors inline-flex items-center gap-2"
              >
                Get Free Consultation →
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-white/50 text-white hover:border-white font-bold px-8 py-3.5 rounded-lg text-sm transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </Animate>
        </div>
      </section>
    </Layout>
  );
}
