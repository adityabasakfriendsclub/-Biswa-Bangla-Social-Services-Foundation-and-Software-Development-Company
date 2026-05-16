import { useState } from "react";
import Layout from "../Layout";
import Animate from "../Animate";

const tabs = [
  "Privacy Policy",
  "Terms of Service",
  "Refund Policy",
  "Cookie Policy",
  "Disclaimer",
];

const content = {
  "Privacy Policy": {
    sections: [
      {
        title: "1. Information We Collect",
        body: `We collect information you provide directly to us, such as when you contact us through our website, request a consultation, or use our services. This includes your name, email address, phone number, and any other information you choose to provide.\n\nWe also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages visited.`,
      },
      {
        title: "2. How We Use Your Information",
        body: `We use the information we collect to provide, maintain, and improve our services, to respond to your inquiries, to send you technical notices and support messages, and to comply with legal obligations.`,
      },
      {
        title: "3. Data Security",
        body: `We implement industry-standard security measures to protect your personal information. As an ISO/IEC 27001:2022 certified organization, our information security management system meets international standards for data protection.`,
      },
      {
        title: "4. Contact Us",
        body: `If you have questions about this Privacy Policy, contact us at customercarebiswabanglasocialn@gmail.com or write to us at our Kolkata office.`,
      },
    ],
  },
  "Terms of Service": {
    sections: [
      {
        title: "1. Acceptance of Terms",
        body: `By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.`,
      },
      {
        title: "2. Services",
        body: `Biswa Bangla Social Services Foundation & Software Development provides digital development services including web development, mobile app development, AI/ML solutions, cloud services, and related consulting. All services are subject to separate project agreements.`,
      },
      {
        title: "3. Intellectual Property",
        body: `Upon full payment, clients receive ownership of all custom-developed code and assets. We retain the right to showcase work in our portfolio unless a non-disclosure agreement is in place.`,
      },
      {
        title: "4. Limitation of Liability",
        body: `Our liability is limited to the amount paid for the specific service. We are not liable for indirect, incidental, or consequential damages arising from use of our services.`,
      },
    ],
  },
  "Refund Policy": {
    sections: [
      {
        title: "1. Refund Eligibility",
        body: `Refunds are considered on a case-by-case basis. Projects cancelled within 48 hours of signing and before work begins are eligible for a full refund of any advance paid.`,
      },
      {
        title: "2. Partial Refunds",
        body: `For ongoing projects, refunds are calculated based on work completed at the time of cancellation. Completed milestones are non-refundable.`,
      },
      {
        title: "3. Non-Refundable Items",
        body: `Third-party licenses, hosting fees, domain registrations, and other out-of-pocket expenses are non-refundable.`,
      },
      {
        title: "4. Process",
        body: `To request a refund, email support@zanservices.com with your project details. We will respond within 5 business days.`,
      },
    ],
  },
  "Cookie Policy": {
    sections: [
      {
        title: "1. What Are Cookies",
        body: `Cookies are small text files stored on your device when you visit a website. We use them to improve your browsing experience and analyze website traffic.`,
      },
      {
        title: "2. Types of Cookies We Use",
        body: `Essential cookies (required for site function), analytics cookies (Google Analytics for traffic insights), and preference cookies (to remember your settings).`,
      },
      {
        title: "3. Managing Cookies",
        body: `You can control cookies through your browser settings. Disabling cookies may affect some website functionality.`,
      },
    ],
  },
  Disclaimer: {
    sections: [
      {
        title: "1. General Disclaimer",
        body: `The information on this website is provided for general informational purposes. While we strive for accuracy, we make no warranties about completeness or suitability for any purpose.`,
      },
      {
        title: "2. Results Disclaimer",
        body: `Past project results (metrics, percentages, outcomes) are specific to those projects and clients. Results may vary depending on industry, market conditions, and other factors.`,
      },
      {
        title: "3. External Links",
        body: `We are not responsible for the content of external websites linked from our site.`,
      },
    ],
  },
};

export default function Legal() {
  const [activeTab, setActiveTab] = useState("Privacy Policy");
  const current = content[activeTab];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-[#fdf5ee] px-4 sm:px-8 pt-14 pb-12">
        <div className="max-w-6xl mx-auto">
          <Animate animation="fade-up" duration="duration-700">
            <span className="text-xs font-bold text-orange-600 tracking-widest uppercase bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
              LEGAL
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-orange-500 mt-4 mb-2">
              {activeTab}
            </h1>
            <p className="text-sm text-gray-400">
              Last updated: January 2026 · Applies to all Biswa Bangla Social
              Services Foundation & Software Development products
            </p>
          </Animate>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b border-gray-100 px-4 sm:px-8 py-3 sticky top-16 z-20">
        <div className="max-w-6xl mx-auto flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-shrink-0 text-sm font-medium px-4 py-2 rounded-full transition-colors ${activeTab === tab ? "text-orange-600 border-b-2 border-orange-500 rounded-none font-semibold" : "text-gray-500 hover:text-orange-600"}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="bg-white px-4 sm:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          {current.sections.map((s, i) => (
            <Animate
              key={s.title}
              animation="fade-up"
              delay={i === 0 ? "" : "delay-100"}
              duration="duration-700"
            >
              <div className="mb-10">
                <h2 className="text-lg font-bold text-gray-900 mb-3">
                  {s.title}
                </h2>
                {s.body.split("\n\n").map((para, j) => (
                  <p
                    key={j}
                    className="text-sm text-gray-600 leading-relaxed mb-3"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </Animate>
          ))}
        </div>
      </section>
    </Layout>
  );
}
