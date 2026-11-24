import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import detailPhoto from "./assets/optimized/detail.webp";
import permitsPhoto from "./assets/optimized/permits.webp";
import professionalismPhoto from "./assets/optimized/professionalism.webp";
import servicesSlide1 from "./assets/optimized/carousel-services-1.webp";
import servicesSlide2 from "./assets/optimized/carousel-services-2.webp";
import servicesSlide3 from "./assets/optimized/carousel-services-3.webp";
import servicesSlide4 from "./assets/optimized/carousel-services-4.webp";
import servicesSlide5 from "./assets/optimized/carousel-services-5.webp";
import areasSlide1 from "./assets/optimized/carousel-areas-1.webp";
import areasSlide2 from "./assets/optimized/carousel-areas-2.webp";
import areasSlide3 from "./assets/optimized/carousel-areas-3.webp";
import areasSlide4 from "./assets/optimized/carousel-areas-4.webp";
import areasSlide5 from "./assets/optimized/carousel-areas-5.webp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { navGroups, pageData, routes } from "./data/siteData";
import HomePage from "./pages/HomePage";
import StandardPage from "./pages/StandardPage";
import GeneralConstructionPage from "./pages/GeneralConstructionPage";
import "./styles.css";

const hero = "/hero.webp";
const serviceSlides = [[servicesSlide1, "Coral Springs FL home renovation project photo"], [servicesSlide2, "Coral Springs FL home renovation project photo"], [servicesSlide3, "Top Construction and Design flooring project"], [servicesSlide4, "Top Construction and Design general construction project"], [servicesSlide5, "Coral Springs FL home renovation project photo"]];
const areaSlides = [[areasSlide1, "Paver installation by Top Construction and Design"], [areasSlide2, "Top Construction and Design work van at a job site"], [areasSlide3, "South Florida residential construction project"], [areasSlide4, "Outdoor hardscaping work by Top Construction and Design"], [areasSlide5, "Top Construction and Design service area project"]];
const cardPhotos = [detailPhoto, permitsPhoto, professionalismPhoto];

function App() {
  const [route, setRoute] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const update = () => {
      const pathSlug = window.location.pathname.replace(/^\/+|\/+$/g, "");
      const hashSlug = window.location.hash.replace(/^#\/?/, "");
      const slug = (hashSlug || pathSlug || "home") === "general-construction" ? "services" : (hashSlug || pathSlug || "home");
      setRoute(routes.some(([key]) => key === slug) ? slug : "home");
      document.title = slug === "services"
        ? "General Contractor in Broward County | Top Construction and Design"
        : "Home Remodeling Contractor South Florida | Top Construction";
      const description = slug === "services"
        ? "General construction for Broward County homes: open layouts, room expansions, roof work and outdoor projects, managed start to finish. Call (954) 318-2322."
        : "Top Construction and Design is a licensed, BBB-accredited remodeling contractor serving Fort Lauderdale, Broward, Miami-Dade, and Palm Beach.";
      let meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", description);
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) canonical.setAttribute("href", slug === "services" ? "https://topconstructionanddesign.com/general-construction/" : "https://topconstructionanddesign.com/");
      window.scrollTo(0, 0);
    };
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  return (
    <main>
      <Header route={route} setMenuOpen={setMenuOpen} menuOpen={menuOpen} navGroups={navGroups} />
      {route === "home" ? (
        <HomePage hero={hero} serviceSlides={serviceSlides} areaSlides={areaSlides} detailPhoto={detailPhoto} permitsPhoto={permitsPhoto} professionalismPhoto={professionalismPhoto} />
      ) : route === "services" ? (
        <GeneralConstructionPage />
      ) : (
        <StandardPage route={route} pageData={pageData} cardPhotos={cardPhotos} />
      )}
      <Footer routes={routes} />
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
