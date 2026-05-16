import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import Animate from "../Animate";

const projects = [
  {
    category: "E-commerce",
    industry: "FASHION RETAIL",
    title: "E-commerce Platform",
    metric: "+340% Sales",
    stack: ["React", "Node.js", "Stripe"],
    image:
      "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    category: "SaaS & Dashboards",
    industry: "LOGISTICS",
    title: "Logistics Dashboard",
    metric: "60% Faster Ops",
    stack: ["Next.js", "PostgreSQL"],
    image:
      "https://www.slideteam.net/media/catalog/product/cache/1280x720/l/o/logistics_dashboard_with_fleet_and_delivery_status_slide01.jpg",
  },
  {
    category: "SaaS & Dashboards",
    industry: "HEALTHCARE",
    title: "Patient Portal",
    metric: "50K+ Users",
    stack: ["React", "Django"],
    image:
      "https://www.shutterstock.com/image-photo/person-lab-coat-holds-glowing-260nw-2662781019.jpg",
  },
  {
    category: "SaaS & Dashboards",
    industry: "FINTECH",
    title: "Payment SaaS",
    metric: "3× Revenue",
    stack: ["Next.js", "Stripe"],
    image:
      "https://img.freepik.com/free-photo/fintech-investment-financial-internet-technology-concept_53876-124767.jpg",
  },
  {
    category: "E-commerce",
    industry: "REAL ESTATE",
    title: "Property Listing Platform",
    metric: "10K+ Listings",
    stack: ["React", "MongoDB"],
    image: "https://img-c.udemycdn.com/course/480x270/5769424_345c.jpg",
  },
  {
    category: "Mobile",
    industry: "EDTECH",
    title: "Learning Management System",
    metric: "200% Engagement",
    stack: ["Vue.js", "Python"],
    image:
      "https://images.yourstory.com/cs/2/e641e900925711e9926177f451727da9/shutterstock1067946317-1592223151644.png?fm=png&auto=format&blur=500",
  },
  {
    category: "AI & ML",
    industry: "RETAIL",
    title: "AI Recommendation Engine",
    metric: "+85% CTR",
    stack: ["Python", "TensorFlow", "AWS"],
    image:
      "https://www.shutterstock.com/image-vector/recommendation-engine-web-banner-icon-260nw-2736283607.jpg",
  },
  {
    category: "Web3",
    industry: "DEFI",
    title: "DeFi Trading Platform",
    metric: "$2M+ Volume",
    stack: ["Solidity", "React", "Web3.js"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeTDgJC-8nsVK7KTznn01hruFCO718AwqAYQ&s",
  },
  {
    category: "Mobile",
    industry: "FOOD DELIVERY",
    title: "Food Delivery App",
    metric: "50K+ Downloads",
    stack: ["React Native", "Node.js"],
    image:
      "https://static.vecteezy.com/system/resources/previews/007/296/872/non_2x/online-delivery-food-by-scooter-website-on-a-mobile-food-order-concept-web-banner-free-vector.jpg",
  },
];

const tabs = [
  "All Projects",
  "E-commerce",
  "SaaS & Dashboards",
  "Mobile",
  "AI & ML",
  "Web3",
];
const staggerDelays = ["", "delay-100", "delay-200"];

export default function Portfolio() {
  const [active, setActive] = useState("All Projects");
  const filtered =
    active === "All Projects"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-[#fdf5ee] px-4 sm:px-8 pt-14 pb-12">
        <div className="max-w-6xl mx-auto">
          <Animate animation="fade-up" duration="duration-700">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-3">
              Work That <span className="text-orange-500">Delivers</span>
            </h1>
            <p className="text-gray-500 text-base mb-6 max-w-md">
              150+ projects across 12+ industries. Real outcomes, not just
              deliverables.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white border border-gray-200 text-gray-700 text-xs font-semibold px-5 py-2 rounded-full hover:border-orange-400 hover:text-orange-600 transition-colors uppercase tracking-widest"
            >
              PORTFOLIO
            </Link>
          </Animate>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white sticky top-16 z-30 border-b border-gray-100 px-4 sm:px-8 py-3">
        <div className="max-w-6xl mx-auto flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`flex-shrink-0 text-sm font-medium px-4 py-2 rounded-full transition-colors ${
                active === tab
                  ? "bg-orange-500 text-white"
                  : "bg-transparent border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-white px-4 sm:px-8 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => (
              <Animate
                key={`${p.title}-${i}`}
                animation="fade-up"
                delay={staggerDelays[i % 3]}
                duration="duration-700"
              >
                <div className="border border-gray-100 rounded-2xl overflow-hidden hover:border-orange-200 hover:shadow-md transition-all group cursor-pointer h-full flex flex-col">
                  {/* Cover image */}
                  <div className="relative h-44 overflow-hidden bg-gray-100 flex-shrink-0">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                    {/* Industry badge over image */}
                    <div className="absolute bottom-3 left-3">
                      <span className="text-xs font-bold tracking-widest text-white uppercase bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                        {p.industry}
                      </span>
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-semibold text-gray-800 text-sm mb-1 group-hover:text-orange-600 transition-colors">
                      {p.title}
                    </h3>
                    <div className="text-2xl font-black text-orange-500 mb-3">
                      {p.metric}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          className="text-xs bg-[#fdf5ee] border border-orange-100 text-gray-600 px-2.5 py-1 rounded-full"
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
      <section className="bg-[#fdf5ee] px-4 sm:px-8 py-12 text-center">
        <div className="max-w-xl mx-auto">
          <Animate animation="zoom-in" duration="duration-700">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Want results like these?
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Let's discuss your project. Free consultation, no commitment.
            </p>
            <Link
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg text-sm transition-colors inline-block"
            >
              Start Your Project →
            </Link>
          </Animate>
        </div>
      </section>
    </Layout>
  );
}
