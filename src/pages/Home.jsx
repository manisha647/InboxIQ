import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Demo from "../components/Demo";
import Timeline from "../components/Timeline";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="relative text-white min-h-screen overflow-hidden">
    <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-violet-600/20 blur-[180px] rounded-full"></div>

<div className="absolute top-[300px] right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[180px] rounded-full"></div>

      <Navbar />

      <Hero />

      <Features />

      <Demo />

      <Timeline />

      <CTA />

      <Footer />

    </div>
  );
}

export default Home;