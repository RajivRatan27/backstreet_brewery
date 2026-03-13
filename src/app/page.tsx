import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BeerMenu from "@/components/BeerMenu";
import FoodMenuPreview from "@/components/FoodMenuPreview";
import EventsSection from "@/components/EventsSection";
import GallerySection from "@/components/GallerySection";
import ReservationForm from "@/components/ReservationForm";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-darker">
      <Navbar />
      <HeroSection />
      <div className="divider-glow" />
      <AboutSection />
      <div className="divider-glow" />
      <BeerMenu />
      <div className="divider-glow" />
      <FoodMenuPreview />
      <div className="divider-glow" />
      <EventsSection />
      <div className="divider-glow" />
      <GallerySection />
      <div className="divider-glow" />
      <ReservationForm />
      <div className="divider-glow" />
      <LocationSection />
      <Footer />
    </main>
  );
}
