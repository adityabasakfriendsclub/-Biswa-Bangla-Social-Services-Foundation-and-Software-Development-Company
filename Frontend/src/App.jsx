// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import Services from './pages/Services'
// import WebDevelopment from './pages/WebDevelopment'
// import About from './pages/About'
// import Portfolio from './pages/Portfolio'
// import Contact from './pages/Contact'
// import Legal from './pages/Legal'
// import Blog from './pages/Blog'

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/services/web-development" element={<WebDevelopment />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/legal" element={<Legal />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

//v2
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import WebDevelopment from "./pages/WebDevelopment";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
        {/* Admin — not linked in nav, accessed directly */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}
