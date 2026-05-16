import { Link } from "react-router-dom";
import Layout from "../Layout";
import Animate from "../Animate";

const posts = [
  {
    tag: "Web Development",
    title: "Why Next.js is the Default Choice for Modern Web Apps in 2025",
    date: "Jan 15, 2026",
    read: "6 min read",
    excerpt:
      "Server components, App Router, and edge deployment have made Next.js the go-to framework for production applications.",
  },
  {
    tag: "AI & ML",
    title: "Building LLM-Powered Apps That Actually Work in Production",
    date: "Jan 8, 2026",
    read: "9 min read",
    excerpt:
      "Most LLM integrations fail in production. Here's what we've learned from deploying 20+ AI features across client projects.",
  },
  {
    tag: "Cybersecurity",
    title: "OWASP Top 10: What Every Kolkata Startup Should Know Before Launch",
    date: "Dec 28, 2025",
    read: "7 min read",
    excerpt:
      "Security isn't an afterthought. These are the most common vulnerabilities we find in startup codebases during audits.",
  },
  {
    tag: "Cloud & DevOps",
    title: "AWS vs GCP for Startups: A Cost-First Comparison",
    date: "Dec 15, 2025",
    read: "8 min read",
    excerpt:
      "We've deployed on both. Here's a straightforward breakdown of costs, services, and when to choose which.",
  },
  {
    tag: "Mobile Apps",
    title: "React Native in 2025: Still the Best Cross-Platform Option?",
    date: "Dec 5, 2025",
    read: "5 min read",
    excerpt:
      "Flutter is gaining ground. Here's an honest comparison from a team that has shipped apps on both platforms.",
  },
  {
    tag: "Blockchain",
    title: "What Web3 Projects Actually Need vs What They Think They Need",
    date: "Nov 28, 2025",
    read: "7 min read",
    excerpt:
      "Most blockchain projects over-engineer the decentralization layer. A realistic take on what to build and what to skip.",
  },
];

const tagColors = {
  "Web Development": "bg-blue-50 text-blue-700",
  "AI & ML": "bg-purple-50 text-purple-700",
  Cybersecurity: "bg-red-50 text-red-700",
  "Cloud & DevOps": "bg-sky-50 text-sky-700",
  "Mobile Apps": "bg-green-50 text-green-700",
  Blockchain: "bg-yellow-50 text-yellow-700",
};

const tagImages = {
  "Web Development":
    "https://miro.medium.com/v2/resize:fit:720/format:webp/1*ZlCsH4m7UvjPtkOQjBlL4A.png",
  "AI & ML":
    "https://media.licdn.com/dms/image/v2/D4D12AQFxUxZkz1iSIw/article-cover_image-shrink_720_1280/B4DZuXMQMXI4AI-/0/1767768131103?e=2147483647&v=beta&t=3U0-p_lyOFyYj3IteVAHwfGmL_fMSz3ILfuOqcP0AUw",
  Cybersecurity:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLNLbfjBRWIewm1PDk29RQBr2dI4eGTK70tw&s",
  "Cloud & DevOps":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFcoq65DbZxMgdTe0IHGk_ZiK9ekyS77hIIA&s",
  "Mobile Apps":
    "https://www.brainvire.com/blog/wp-content/uploads/2025/05/React-Native-Cross-Platform-Mobile-App-Development-Your-Complete-Guide.webp",
  Blockchain:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcm1sGBw0FGHhgEmLKv_6VerHQU_x9L-096w&s",
};

const staggerDelays = ["", "delay-100", "delay-200"];

export default function Blog() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-[#fdf5ee] px-4 sm:px-8 pt-14 pb-12">
        <div className="max-w-6xl mx-auto">
          <Animate animation="fade-up" duration="duration-700">
            <span className="text-xs font-bold text-orange-600 tracking-widest uppercase bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
              INSIGHTS
            </span>
            <h3 className="text-4xl sm:text-5xl font-black text-gray-900 mt-4 mb-3">
              Biswa Bangla Social Services Foundation & Software Development
              Company
            </h3>
            <p className="text-gray-500 text-base max-w-md">
              Practical guides, technical deep-dives, and lessons from 150+
              projects.
            </p>
          </Animate>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-white px-4 sm:px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <Animate
              key={i}
              animation="fade-up"
              delay={staggerDelays[i % 3]}
              duration="duration-700"
            >
              <article className="border border-gray-100 rounded-2xl overflow-hidden hover:border-orange-200 hover:shadow-md transition-all group cursor-pointer h-full flex flex-col">
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-[#fdf5ee]">
                  <img
                    src={tagImages[post.tag]}
                    alt={post.tag}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  {/* Tag badge over image */}
                  <div className="absolute bottom-3 left-3">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagColors[post.tag] || "bg-orange-50 text-orange-700"}`}
                    >
                      {post.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-900 text-sm leading-snug mb-3 group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {post.date} · {post.read}
                    </span>
                    <span className="text-xs font-semibold text-orange-600">
                      Read →
                    </span>
                  </div>
                </div>
              </article>
            </Animate>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#fdf5ee] px-4 sm:px-8 py-14 text-center">
        <div className="max-w-md mx-auto">
          <Animate animation="zoom-in" duration="duration-700">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Stay in the loop
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Monthly insights from our engineering team. No spam.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors flex-shrink-0">
                Subscribe
              </button>
            </div>
          </Animate>
        </div>
      </section>
    </Layout>
  );
}
