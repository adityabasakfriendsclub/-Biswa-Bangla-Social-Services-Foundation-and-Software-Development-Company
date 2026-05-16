import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "./assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/blog", label: "Blog" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur border-b border-gray-100 px-4 sm:px-6 h-16 flex items-center justify-between sticky top-0 z-50">
      {/* Logo + Company Name */}
      <Link to="/" className="flex items-center gap-2.5 min-w-0">
        <img
          src={logo}
          alt="Biswa Bangla"
          className="h-9 w-9 object-contain rounded-full flex-shrink-0"
        />
        <div className="min-w-0">
          <div className="text-xs sm:text-sm font-black text-gray-900 leading-tight">
            Biswa Bangla Social Services
          </div>
          <div className="text-[9px] sm:text-[10px] text-orange-600 font-semibold leading-tight hidden xs:block truncate max-w-[160px] sm:max-w-[240px] md:max-w-xs">
            Social Services Foundation & Software Development
          </div>
        </div>
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-6 flex-shrink-0">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`text-sm font-medium transition-colors whitespace-nowrap ${
              location.pathname === link.to ||
              location.pathname.startsWith(link.to + "/")
                ? "text-orange-600"
                : "text-gray-700 hover:text-orange-600"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          to="/about"
          className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors whitespace-nowrap"
        >
          Free Consultation
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-gray-700 hover:text-orange-600 p-1 flex-shrink-0"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          {menuOpen ? (
            <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg px-6 py-5 flex flex-col gap-4 md:hidden">
          {/* Company name in mobile menu */}
          <div className="pb-3 border-b border-gray-100">
            <div className="text-xs font-black text-gray-900">
              Biswa Bangla{" "}
            </div>
            <div className="text-[10px] text-orange-600 font-semibold leading-snug mt-0.5">
              Social Services Foundation & Software Development Company
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-orange-600"
                  : "text-gray-700 hover:text-orange-600"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-orange-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg w-fit"
            onClick={() => setMenuOpen(false)}
          >
            Free Consultation
          </Link>
        </div>
      )}
    </nav>
  );
}
