import { useState } from "react";
import Layout from "../Layout";
import Animate from "../Animate";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-orange-500 px-4 sm:px-8 pt-14 pb-16">
        <div className="max-w-6xl mx-auto">
          <Animate animation="fade-up" duration="duration-700">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-4">
              Let's Build Something
              <br />
              Amazing
            </h1>
            <p className="text-white/80 text-base">
              Book a free consultation. We respond within 24 hours.
            </p>
          </Animate>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="bg-white px-4 sm:px-8 py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <Animate animation="fade-right" duration="duration-700">
            <div>
              {submitted ? (
                <div className="text-center py-16">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-500">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 or +1"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                      Service Interest
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) =>
                        setForm({ ...form, service: e.target.value })
                      }
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-orange-400 transition-colors bg-white"
                    >
                      {[
                        "Web Development",
                        "Mobile Apps",
                        "Product Design",
                        "AI & Machine Learning",
                        "Cloud & DevOps",
                        "Cybersecurity",
                        "Digital Marketing",
                        "Blockchain & Web3",
                      ].map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your project — what are you building and when do you need it?"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3 rounded-lg text-sm transition-colors inline-flex items-center gap-2"
                  >
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </Animate>

          <Animate
            animation="fade-left"
            delay="delay-100"
            duration="duration-700"
          >
            <div className="bg-gray-950 rounded-2xl p-7 text-white">
              <div className="text-xs font-bold text-orange-500 tracking-widest uppercase mb-6">
                GET IN TOUCH
              </div>
              <div className="space-y-5">
                {[
                  {
                    icon: "📍",
                    label: "India Office",
                    val: "3rd Floor, Plot-AA-IID/2980, PRE-30-0684\nNew Town, North Twenty Four Parganas\nWest Bengal 700161",
                  },
                  {
                    icon: "📍",
                    label: "US Office",
                    val: "2108 N St, Sacramento\nCA 95816",
                  },
                  {
                    icon: "📞",
                    label: "Phone",
                    val: "+91 6290252067",
                    href: "tel:+91 6290252067",
                  },
                  {
                    icon: "✉️",
                    label: "Email",
                    val: "customercarebiswabanglasocialn@gmail.com",
                    href: "mailto:customercarebiswabanglasocialn@gmail.com",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-400 mb-0.5">
                        {item.label}
                      </div>
                      <div className="text-sm text-white/80 leading-relaxed whitespace-pre-line">
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-orange-400 hover:text-orange-300 transition-colors"
                          >
                            {item.val}
                          </a>
                        ) : (
                          item.val
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 mt-6 pt-6">
                <div className="text-xs font-semibold text-gray-400 mb-1">
                  Company
                </div>
                <div className="text-sm font-bold text-white leading-snug">
                  Biswa Bangla Social Services Foundation & Software Development
                  Company
                </div>
                <div className="text-xs font-semibold text-gray-400 mt-4 mb-1">
                  Response time
                </div>
                <div className="text-2xl font-black text-orange-500">
                  Within 24 hours
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </section>
    </Layout>
  );
}
