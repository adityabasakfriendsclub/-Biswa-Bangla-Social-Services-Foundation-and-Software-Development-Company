import Navbar from "./Navbar";
import Footer from "./Footer";

const WHATSAPP_NUMBER = "+916290252067";
const WHATSAPP_ICON =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0ZbsTzoYwAkbmDEWPPkWkoydaGamePWYYw&s";

export default function Layout({ children }) {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        style={{
          position: "fixed",
          bottom: "28px",
          right: "28px",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "#25D366",
          color: "#fff",
          borderRadius: "50px",
          padding: "10px 18px 10px 10px",
          boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
          textDecoration: "none",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 600,
          fontSize: "14px",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 6px 28px rgba(37,211,102,0.55)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.4)";
        }}
      >
        <img
          src={WHATSAPP_ICON}
          alt="WhatsApp"
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            objectFit: "cover",
            flexShrink: 0,
          }}
        />
        <span>Chat with us</span>
      </a>
    </>
  );
}
