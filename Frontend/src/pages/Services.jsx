// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Layout from "../Layout";
// import logo from "../assets/logo.png";
// import Animate from "../Animate";

// const services = [
//   {
//     icon: "</>",
//     tag: "WEB",
//     title: "Web Development",
//     subtitle: "React, Next.js, Node.js & WordPress",
//     features: [
//       "Custom UI design",
//       "CMS integration",
//       "SEO optimized",
//       "Mobile responsive",
//       "E-commerce ready",
//     ],
//     to: "/services/web-development",
//     highlight: false,
//     image:
//       "https://miro.medium.com/v2/resize:fit:720/format:webp/1*ZlCsH4m7UvjPtkOQjBlL4A.png",
//   },
//   {
//     icon: "📱",
//     tag: "MOBILE",
//     title: "Mobile App Development",
//     subtitle: "iOS, Android & cross-platform",
//     features: [
//       "React Native & Flutter",
//       "App Store deployment",
//       "Push notifications",
//       "Offline support",
//       "MVP to production",
//     ],
//     to: "/services/mobile-apps",
//     highlight: false,
//     image:
//       "https://www.brainvire.com/blog/wp-content/uploads/2025/05/React-Native-Cross-Platform-Mobile-App-Development-Your-Complete-Guide.webp",
//   },
//   {
//     icon: "✏️",
//     tag: "DESIGN",
//     title: "Product Design",
//     subtitle: "UI/UX that converts",
//     features: [
//       "User research",
//       "Figma prototyping",
//       "Design systems",
//       "User testing",
//       "Accessibility compliant",
//     ],
//     to: "/services/product-design",
//     highlight: false,
//     image:
//       "https://cdn.sanity.io/images/qyzm5ged/production/1df4e885ec140debfbc0b2d3b454ffbe3c858455-2138x1200.jpg",
//   },
//   {
//     icon: "🤖",
//     tag: "AI & ML",
//     title: "AI & Machine Learning",
//     subtitle: "Real AI, not ChatGPT wrappers",
//     features: [
//       "Custom ML models",
//       "NLP pipelines",
//       "LLM integration",
//       "Computer vision",
//       "Data pipelines",
//     ],
//     to: "/services/ai-ml",
//     highlight: false,
//     image:
//       "https://media.licdn.com/dms/image/v2/D4D12AQFxUxZkz1iSIw/article-cover_image-shrink_720_1280/B4DZuXMQMXI4AI-/0/1767768131103?e=2147483647&v=beta&t=3U0-p_lyOFyYj3IteVAHwfGmL_fMSz3ILfuOqcP0AUw",
//   },
//   {
//     icon: "☁️",
//     tag: "CLOUD",
//     title: "Cloud & DevOps",
//     subtitle: "Infrastructure that scales",
//     features: [
//       "AWS & GCP setup",
//       "CI/CD pipelines",
//       "Docker & Kubernetes",
//       "Cost optimization",
//       "24/7 monitoring",
//     ],
//     to: "/services/cloud-devops",
//     highlight: false,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFcoq65DbZxMgdTe0IHGk_ZiK9ekyS77hIIA&s",
//   },
//   {
//     icon: "🛡️",
//     tag: "SECURITY",
//     title: "Cybersecurity",
//     subtitle: "ISO 27001 certified team",
//     features: [
//       "Penetration testing",
//       "OWASP compliance",
//       "Security audits",
//       "Vulnerability scanning",
//       "Incident response",
//     ],
//     to: "/services/cybersecurity",
//     highlight: false,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLNLbfjBRWIewm1PDk29RQBr2dI4eGTK70tw&s",
//   },
//   {
//     icon: "📈",
//     tag: "MARKETING",
//     title: "Digital Marketing",
//     subtitle: "Growth that compounds",
//     features: [
//       "SEO & content",
//       "Google Ads",
//       "Social media mgmt",
//       "Conversion optimization",
//       "Analytics & reporting",
//     ],
//     to: "/services/digital-marketing",
//     highlight: false,
//     image:
//       "https://landingi.com/wp-content/uploads/2024/09/digital_marketing_types.webp",
//   },
//   {
//     icon: "🔗",
//     tag: "WEB3",
//     title: "Blockchain & Web3",
//     subtitle: "Smart contracts & DeFi",
//     features: [
//       "Smart contracts",
//       "DeFi platforms",
//       "NFT marketplaces",
//       "Solidity development",
//       "Wallet integrations",
//     ],
//     to: "/services/blockchain-web3",
//     highlight: false,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcm1sGBw0FGHhgEmLKv_6VerHQU_x9L-096w&s",
//   },
// ];

// const process = [
//   { icon: "🔍", label: "Discovery", sub: "Goals & requirements" },
//   { icon: "🎨", label: "Strategy", sub: "Planning & scoping" },
//   { icon: "✏️", label: "Design", sub: "UI/UX & prototyping" },
//   { icon: "</>", label: "Build", sub: "Development sprints" },
//   { icon: "✅", label: "QA", sub: "Testing & security" },
//   { icon: "🚀", label: "Launch", sub: "Deploy & go live" },
// ];

// const faqs = [
//   {
//     q: "Can you handle a project that needs multiple services?",
//     a: "Yes — most of our engagements span 2–4 services. We have dedicated teams for each discipline that collaborate under a single project manager, so you get one point of contact and a coherent deliverable.",
//   },
//   {
//     q: "How do you price projects?",
//     a: "Every project is custom-quoted after a discovery call. We break down cost by deliverable so you know exactly what you're paying for. No hidden fees, no retainer traps.",
//   },
//   {
//     q: "Do you work with startups or only established businesses?",
//     a: "Both. We've built MVPs for 2-person startups and delivered enterprise systems for 500+ employee companies. The process scales; the quality doesn't change.",
//   },
//   {
//     q: "What does the onboarding process look like?",
//     a: "Discovery call → scoping document → timeline & quote → contract → kickoff. Typically 5–7 business days from first call to project start.",
//   },
//   {
//     q: "Do you offer post-launch support?",
//     a: "Yes — all projects include a 30-day warranty. Ongoing retainer support is available for maintenance, updates, and scaling as your product grows.",
//   },
// ];

// const staggerDelays = ["", "delay-100", "delay-200", "delay-300"];

// export default function Services() {
//   const [openFaq, setOpenFaq] = useState(null);

//   return (
//     <Layout>
//       {/* Hero */}
//       <section className="bg-[#fdf5ee] px-4 sm:px-8 pt-12 pb-12">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
//           <div>
//             <Animate animation="fade-up" duration="duration-700">
//               <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
//                 SERVICES
//               </div>
//               <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-1">
//                 Everything You Need
//               </h1>
//               <h1 className="text-4xl sm:text-5xl font-black text-orange-500 leading-tight mb-5">
//                 to Win Online
//               </h1>
//             </Animate>
//             <Animate
//               animation="fade-up"
//               delay="delay-100"
//               duration="duration-700"
//             >
//               <p className="text-gray-500 text-base max-w-md leading-relaxed mb-7">
//                 8 specialized services. One trusted partner from Kolkata to the
//                 world.
//               </p>
//               <div className="flex flex-wrap gap-3">
//                 <Link
//                   to="/contact"
//                   className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors inline-flex items-center gap-2"
//                 >
//                   Start Your Project →
//                 </Link>
//                 <Link
//                   to="/portfolio"
//                   className="border border-gray-200 hover:border-orange-300 text-gray-700 font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
//                 >
//                   View Case Studies
//                 </Link>
//               </div>
//             </Animate>
//           </div>
//           <Animate
//             animation="zoom-in"
//             delay="delay-200"
//             duration="duration-700"
//             className="flex-shrink-0"
//           >
//             <img
//               src={logo}
//               alt="Biswa Bangla"
//               className="w-40 h-40 md:w-52 md:h-52 object-contain rounded-full bg-white/50 p-3"
//             />
//           </Animate>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="bg-white px-4 sm:px-8 py-14">
//         <div className="max-w-6xl mx-auto">
//           <Animate animation="fade-up" duration="duration-700">
//             <span className="text-xs font-bold text-orange-600 tracking-widest uppercase bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
//               WHAT WE DO
//             </span>
//             <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-5 mb-2">
//               Our Services
//             </h2>
//             <p className="text-sm text-orange-500 font-medium mb-8">
//               Specialized teams. Every scope is custom-quoted before we start.
//             </p>
//           </Animate>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {services.map((s, i) => (
//               <Animate
//                 key={s.title}
//                 animation="fade-up"
//                 delay={staggerDelays[i % 4]}
//                 duration="duration-700"
//               >
//                 <div
//                   className={`rounded-2xl border transition-all duration-300 relative flex flex-col h-full group cursor-pointer overflow-hidden ${
//                     s.highlight
//                       ? "bg-orange-500 border-orange-500"
//                       : "border-gray-100 hover:bg-orange-500 hover:border-orange-500 hover:shadow-lg"
//                   }`}
//                 >
//                   {/* Cover image */}
//                   <div className="relative h-36 overflow-hidden bg-[#fdf5ee] flex-shrink-0">
//                     <img
//                       src={s.image}
//                       alt={s.title}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                       onError={(e) => {
//                         e.target.style.display = "none";
//                       }}
//                     />
//                   </div>

//                   {/* Card content */}
//                   <div className="p-5 flex flex-col flex-1">
//                     <div
//                       className={`text-xs font-bold tracking-widest uppercase mb-3 ${
//                         s.highlight
//                           ? "text-white/70"
//                           : "text-orange-600 group-hover:text-white/70"
//                       }`}
//                     >
//                       {s.tag}
//                     </div>
//                     <div className="text-2xl mb-2">{s.icon}</div>
//                     <h3
//                       className={`font-black text-base leading-tight mb-1 ${
//                         s.highlight
//                           ? "text-white"
//                           : "text-gray-900 group-hover:text-white"
//                       }`}
//                     >
//                       {s.title}
//                     </h3>
//                     <p
//                       className={`text-xs mb-5 ${
//                         s.highlight
//                           ? "text-white/70"
//                           : "text-gray-500 group-hover:text-white/70"
//                       }`}
//                     >
//                       {s.subtitle}
//                     </p>
//                     <ul className="space-y-2 mb-7 flex-1">
//                       {s.features.map((f) => (
//                         <li
//                           key={f}
//                           className={`text-xs flex items-center gap-2 ${
//                             s.highlight
//                               ? "text-white/90"
//                               : "text-gray-600 group-hover:text-white/90"
//                           }`}
//                         >
//                           <span
//                             className={
//                               s.highlight
//                                 ? "text-white"
//                                 : "text-orange-500 group-hover:text-white"
//                             }
//                           >
//                             ●
//                           </span>{" "}
//                           {f}
//                         </li>
//                       ))}
//                     </ul>
//                     <Link
//                       to={s.to}
//                       className={`block text-center text-sm font-semibold py-2.5 rounded-lg transition-colors mt-auto ${
//                         s.highlight
//                           ? "bg-white text-orange-600 hover:bg-orange-50"
//                           : "border border-orange-300 text-orange-600 group-hover:bg-white group-hover:border-transparent group-hover:text-orange-600"
//                       }`}
//                     >
//                       Learn More
//                     </Link>
//                   </div>
//                 </div>
//               </Animate>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process */}
//       <section className="bg-[#fdf5ee] px-4 sm:px-8 py-14">
//         <div className="max-w-6xl mx-auto">
//           <Animate animation="fade-up" duration="duration-700">
//             <span className="text-xs font-bold text-orange-600 tracking-widest uppercase bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
//               HOW WE WORK
//             </span>
//             <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-5 mb-2">
//               Our Delivery Process
//             </h2>
//             <p className="text-sm text-orange-500 font-medium mb-10">
//               20% planning · 50% building · 15% testing · 15% launch
//             </p>
//           </Animate>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
//             {process.map((p, i) => (
//               <Animate
//                 key={p.label}
//                 animation="fade-up"
//                 delay={staggerDelays[i % 4]}
//                 duration="duration-700"
//               >
//                 <div className="flex flex-col items-center text-center">
//                   <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl mb-3 shadow-md">
//                     {p.icon}
//                   </div>
//                   <div className="font-bold text-gray-900 text-sm mb-0.5">
//                     {p.label}
//                   </div>
//                   <div className="text-xs text-gray-400">{p.sub}</div>
//                 </div>
//               </Animate>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="bg-white px-4 sm:px-8 py-14">
//         <div className="max-w-3xl mx-auto">
//           <Animate animation="fade-up" duration="duration-700">
//             <span className="text-xs font-bold text-orange-600 tracking-widest uppercase bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
//               FAQ
//             </span>
//             <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-5 mb-8">
//               Common Questions
//             </h2>
//           </Animate>
//           <div className="space-y-3">
//             {faqs.map((faq, i) => (
//               <Animate
//                 key={i}
//                 animation="fade-up"
//                 delay={i < 3 ? staggerDelays[i] : ""}
//                 duration="duration-700"
//               >
//                 <div className="border border-gray-100 rounded-xl overflow-hidden">
//                   <button
//                     onClick={() => setOpenFaq(openFaq === i ? null : i)}
//                     className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
//                   >
//                     <span className="font-semibold text-gray-900 text-sm pr-4">
//                       {faq.q}
//                     </span>
//                     <span className="text-gray-400 flex-shrink-0 text-lg">
//                       {openFaq === i ? "−" : "+"}
//                     </span>
//                   </button>
//                   {openFaq === i && (
//                     <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
//                       {faq.a}
//                     </div>
//                   )}
//                 </div>
//               </Animate>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="bg-orange-500 px-4 sm:px-8 py-16 text-center">
//         <div className="max-w-xl mx-auto">
//           <Animate animation="zoom-in" duration="duration-700">
//             <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
//               Not Sure What You Need?
//             </h2>
//             <p className="text-white/80 text-sm mb-8">
//               Book a free consultation. We'll assess your needs and recommend
//               the right approach — no sales pressure.
//             </p>
//             <Link
//               to="/contact"
//               className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-3.5 rounded-lg text-sm transition-colors inline-block"
//             >
//               Book Free Consultation →
//             </Link>
//           </Animate>
//         </div>
//       </section>
//     </Layout>
//   );
// }

//v2
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import logo from "../assets/logo.png";
import Animate from "../Animate";

const services = [
  {
    icon: "</>",
    tag: "WEB",
    title: "Web Development",
    subtitle: "React, Next.js, Node.js & WordPress",
    features: [
      "Custom UI design",
      "CMS integration",
      "SEO optimized",
      "Mobile responsive",
      "E-commerce ready",
    ],
    to: "/services/web-development",
    highlight: false,
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*ZlCsH4m7UvjPtkOQjBlL4A.png",
  },
  {
    icon: "📱",
    tag: "MOBILE",
    title: "Mobile App Development",
    subtitle: "iOS, Android & cross-platform",
    features: [
      "React Native & Flutter",
      "App Store deployment",
      "Push notifications",
      "Offline support",
      "MVP to production",
    ],
    to: "/services/mobile-apps",
    highlight: false,
    image:
      "https://www.brainvire.com/blog/wp-content/uploads/2025/05/React-Native-Cross-Platform-Mobile-App-Development-Your-Complete-Guide.webp",
  },
  {
    icon: "✏️",
    tag: "DESIGN",
    title: "Product Design",
    subtitle: "UI/UX that converts",
    features: [
      "User research",
      "Figma prototyping",
      "Design systems",
      "User testing",
      "Accessibility compliant",
    ],
    to: "/services/product-design",
    highlight: false,
    image:
      "https://cdn.sanity.io/images/qyzm5ged/production/1df4e885ec140debfbc0b2d3b454ffbe3c858455-2138x1200.jpg",
  },
  {
    icon: "🤖",
    tag: "AI & ML",
    title: "AI & Machine Learning",
    subtitle: "Real AI, not ChatGPT wrappers",
    features: [
      "Custom ML models",
      "NLP pipelines",
      "LLM integration",
      "Computer vision",
      "Data pipelines",
    ],
    to: "/services/ai-ml",
    highlight: false,
    image:
      "https://media.licdn.com/dms/image/v2/D4D12AQFxUxZkz1iSIw/article-cover_image-shrink_720_1280/B4DZuXMQMXI4AI-/0/1767768131103?e=2147483647&v=beta&t=3U0-p_lyOFyYj3IteVAHwfGmL_fMSz3ILfuOqcP0AUw",
  },
  {
    icon: "☁️",
    tag: "CLOUD",
    title: "Cloud & DevOps",
    subtitle: "Infrastructure that scales",
    features: [
      "AWS & GCP setup",
      "CI/CD pipelines",
      "Docker & Kubernetes",
      "Cost optimization",
      "24/7 monitoring",
    ],
    to: "/services/cloud-devops",
    highlight: false,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFcoq65DbZxMgdTe0IHGk_ZiK9ekyS77hIIA&s",
  },
  {
    icon: "🛡️",
    tag: "SECURITY",
    title: "Cybersecurity",
    subtitle: "ISO 27001 certified team",
    features: [
      "Penetration testing",
      "OWASP compliance",
      "Security audits",
      "Vulnerability scanning",
      "Incident response",
    ],
    to: "/services/cybersecurity",
    highlight: false,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLNLbfjBRWIewm1PDk29RQBr2dI4eGTK70tw&s",
  },
  {
    icon: "📈",
    tag: "MARKETING",
    title: "Digital Marketing",
    subtitle: "Growth that compounds",
    features: [
      "SEO & content",
      "Google Ads",
      "Social media mgmt",
      "Conversion optimization",
      "Analytics & reporting",
    ],
    to: "/services/digital-marketing",
    highlight: false,
    image:
      "https://landingi.com/wp-content/uploads/2024/09/digital_marketing_types.webp",
  },
  {
    icon: "🔗",
    tag: "WEB3",
    title: "Blockchain & Web3",
    subtitle: "Smart contracts & DeFi",
    features: [
      "Smart contracts",
      "DeFi platforms",
      "NFT marketplaces",
      "Solidity development",
      "Wallet integrations",
    ],
    to: "/services/blockchain-web3",
    highlight: false,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcm1sGBw0FGHhgEmLKv_6VerHQU_x9L-096w&s",
  },
];

const process = [
  {
    label: "Discovery",
    sub: "Goals & requirements",
    image:
      "https://thumbs.dreamstime.com/b/discovery-magnifying-glass-focused-word-33238864.jpg",
  },
  {
    label: "Strategy",
    sub: "Planning & scoping",
    image:
      "https://sophiacollege.ac.in/wp-content/uploads/2023/06/bigstock-166383731-e1512672027778-1.jpg",
  },
  {
    label: "Design",
    sub: "UI/UX & prototyping",
    image:
      "https://media.licdn.com/dms/image/v2/D4D12AQG-sUAocG4u2g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1694146524062?e=2147483647&v=beta&t=Chj0ZizejlkAeuKSi4f3_902t7jumHCDl6h7rfJwGHg",
  },
  {
    label: "Build",
    sub: "Development sprints",
    image:
      "https://www.shutterstock.com/image-vector/agile-methodology-lifecycle-diagram-three-260nw-1726769038.jpg",
  },
  {
    label: "QA",
    sub: "Testing & security",
    image:
      "https://www.puredome.com/hubfs/2Thumb-Understanding%20QA%20Security%20Testing2%20%281%29.jpg",
  },
  {
    label: "Launch",
    sub: "Deploy & go live",
    image: "https://www.erpadvisorsgroup.com/hubfs/successful-erp-go-live.jpg",
  },
];

const faqs = [
  {
    q: "Can you handle a project that needs multiple services?",
    a: "Yes — most of our engagements span 2–4 services. We have dedicated teams for each discipline that collaborate under a single project manager, so you get one point of contact and a coherent deliverable.",
  },
  {
    q: "How do you price projects?",
    a: "Every project is custom-quoted after a discovery call. We break down cost by deliverable so you know exactly what you're paying for. No hidden fees, no retainer traps.",
  },
  {
    q: "Do you work with startups or only established businesses?",
    a: "Both. We've built MVPs for 2-person startups and delivered enterprise systems for 500+ employee companies. The process scales; the quality doesn't change.",
  },
  {
    q: "What does the onboarding process look like?",
    a: "Discovery call → scoping document → timeline & quote → contract → kickoff. Typically 5–7 business days from first call to project start.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes — all projects include a 30-day warranty. Ongoing retainer support is available for maintenance, updates, and scaling as your product grows.",
  },
];

const staggerDelays = ["", "delay-100", "delay-200", "delay-300"];

export default function Services() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-[#fdf5ee] px-4 sm:px-8 pt-12 pb-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <Animate animation="fade-up" duration="duration-700">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                SERVICES
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-1">
                Everything You Need
              </h1>
              <h1 className="text-4xl sm:text-5xl font-black text-orange-500 leading-tight mb-5">
                to Win Online
              </h1>
            </Animate>
            <Animate
              animation="fade-up"
              delay="delay-100"
              duration="duration-700"
            >
              <p className="text-gray-500 text-base max-w-md leading-relaxed mb-7">
                8 specialized services. One trusted partner from Kolkata to the
                world.
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

      {/* Services Grid */}
      <section className="bg-white px-4 sm:px-8 py-14">
        <div className="max-w-6xl mx-auto">
          <Animate animation="fade-up" duration="duration-700">
            <span className="text-xs font-bold text-orange-600 tracking-widest uppercase bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
              WHAT WE DO
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-5 mb-2">
              Our Services
            </h2>
            <p className="text-sm text-orange-500 font-medium mb-8">
              Specialized teams. Every scope is custom-quoted before we start.
            </p>
          </Animate>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <Animate
                key={s.title}
                animation="fade-up"
                delay={staggerDelays[i % 4]}
                duration="duration-700"
              >
                <div
                  className={`rounded-2xl border transition-all duration-300 relative flex flex-col h-full group cursor-pointer overflow-hidden ${
                    s.highlight
                      ? "bg-orange-500 border-orange-500"
                      : "border-gray-100 hover:bg-orange-500 hover:border-orange-500 hover:shadow-lg"
                  }`}
                >
                  {/* Cover image */}
                  <div className="relative h-36 overflow-hidden bg-[#fdf5ee] flex-shrink-0">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>

                  {/* Card content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div
                      className={`text-xs font-bold tracking-widest uppercase mb-3 ${
                        s.highlight
                          ? "text-white/70"
                          : "text-orange-600 group-hover:text-white/70"
                      }`}
                    >
                      {s.tag}
                    </div>
                    <div className="text-2xl mb-2">{s.icon}</div>
                    <h3
                      className={`font-black text-base leading-tight mb-1 ${
                        s.highlight
                          ? "text-white"
                          : "text-gray-900 group-hover:text-white"
                      }`}
                    >
                      {s.title}
                    </h3>
                    <p
                      className={`text-xs mb-5 ${
                        s.highlight
                          ? "text-white/70"
                          : "text-gray-500 group-hover:text-white/70"
                      }`}
                    >
                      {s.subtitle}
                    </p>
                    <ul className="space-y-2 mb-7 flex-1">
                      {s.features.map((f) => (
                        <li
                          key={f}
                          className={`text-xs flex items-center gap-2 ${
                            s.highlight
                              ? "text-white/90"
                              : "text-gray-600 group-hover:text-white/90"
                          }`}
                        >
                          <span
                            className={
                              s.highlight
                                ? "text-white"
                                : "text-orange-500 group-hover:text-white"
                            }
                          >
                            ●
                          </span>{" "}
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={s.to}
                      className={`block text-center text-sm font-semibold py-2.5 rounded-lg transition-colors mt-auto ${
                        s.highlight
                          ? "bg-white text-orange-600 hover:bg-orange-50"
                          : "border border-orange-300 text-orange-600 group-hover:bg-white group-hover:border-transparent group-hover:text-orange-600"
                      }`}
                    >
                      Learn More
                    </Link>
                  </div>
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
              Our Delivery Process
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
                  <div className="w-20 h-20 rounded-xl overflow-hidden mb-3 shadow-md border border-orange-100">
                    <img
                      src={p.image}
                      alt={p.label}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
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
              Not Sure What You Need?
            </h2>
            <p className="text-white/80 text-sm mb-8">
              Book a free consultation. We'll assess your needs and recommend
              the right approach — no sales pressure.
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
