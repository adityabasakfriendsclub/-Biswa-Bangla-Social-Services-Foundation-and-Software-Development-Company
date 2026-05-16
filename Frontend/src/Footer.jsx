import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#fdf5ee] border-t border-orange-100 px-4 sm:px-8 pt-12 pb-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-10 border-b border-orange-100">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="text-xl  text-gray-900 mb-3">
              {/* BiswaBangla */}
              Biswa Bangla Social Services
              <br />
              Foundation and Software
              <br />
              Development Company
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-5 max-w-xs">
              Building the future of digital innovation. Your trusted partner
              for Web, Blockchain, AI, and Digital Marketing from Kolkata &
              Sacramento.
            </p>
            <div className="flex flex-wrap gap-2">
              {["ISO 9001:2015", "ISO 27001:2022", "MSME Certified"].map(
                (c) => (
                  <span
                    key={c}
                    className="bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full border border-orange-200"
                  >
                    {c}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">
              Services
            </div>
            {[
              "Web Development",
              "Mobile Apps",
              "AI & ML",
              "Blockchain",
              "Cloud & DevOps",
              "Cybersecurity",
            ].map((s) => (
              <Link
                key={s}
                to="/services"
                className="block text-sm text-gray-500 hover:text-orange-600 mb-2.5 transition-colors"
              >
                {s}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <div className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">
              Company
            </div>
            {[
              ["About Us", "/about"],
              ["Portfolio", "/portfolio"],
              ["Careers", "/about"],
              ["Blog", "/blog"],
            ].map(([label, to]) => (
              <Link
                key={label}
                to={to}
                className="block text-sm text-gray-500 hover:text-orange-600 mb-2.5 transition-colors"
              >
                {label}
              </Link>
            ))}
            <div className="mt-5">
              <div className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-3">
                Get In Touch
              </div>
              <div className="text-sm text-gray-500 mb-1">
                3rd Floor, Plot-AA-IID/2980,
                <br /> PRE-30-0684
              </div>
              <div className="text-sm text-gray-500 mb-1">
                New Town, North Twenty Four Parganas
              </div>
              <div className="text-sm text-gray-500 mb-1">
                West Bengal 700161, India
              </div>
              <div className="text-sm text-gray-500 mb-1">+91 6290252067</div>
              {/* <div className="text-sm text-orange-600">support@zanservices.com</div> */}
              <a
                href="mailto:customercarebiswabanglasocialn@gmail.com"
                className="text-sm text-orange-600 hover:text-orange-500 transition-colors"
              >
                customercarebiswabanglasocialn@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 gap-3">
          <span className="text-xs text-blue-400">
            © 2026{" "}
            <a href="" className="hover:text-orange-600">
              {" "}
              Biswa Bangla Social Services Foundation and Software Development
              Company{" "}
            </a>
            — All Rights Reserved. Built with ♥ in Kolkata, India.
          </span>
          <div className="flex gap-4">
            <Link
              to="/legal"
              className="text-xs text-blue-400 hover:text-orange-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/legal"
              className="text-xs text-blue-400 hover:text-orange-600 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/contact"
              className="text-xs text-blue-400 hover:text-orange-600 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
