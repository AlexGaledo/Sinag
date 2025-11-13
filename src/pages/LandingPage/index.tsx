import Hero from "../../components/Hero";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import { Header } from "@/components";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header/>
      <Hero />
    </div>
  );
};

export default LandingPage;