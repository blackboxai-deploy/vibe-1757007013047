import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import NewsSection from "@/components/NewsSection";
import QuickLinks from "@/components/QuickLinks";

export default function Home() {
  return (
    <div>
      <Hero />
      <StatsSection />
      <AboutSection />
      <NewsSection />
      <QuickLinks />
    </div>
  );
}