import AboutHero from "@/components/about/AboutHero";
import CoreValues from "@/components/about/CoreValues";
import OurJourney from "@/components/about/OurJourney";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import Impact from "@/components/about/Impact";
import MissionVision from "@/components/about/MissionVision";
import ValuesBento from "@/components/about/ValuesBento";
import NotReadyAlert from "@/components/NotReadyAlert";

export default function About() {
  return (
    <div className="py-section px-6 max-w-7xl mx-auto space-y-section">
      <NotReadyAlert message="The data in this page is a placeholder only"></NotReadyAlert>
      <AboutHero />
      <CoreValues />
      <OurJourney />
      <LeadershipTeam />
      <Impact />
      <MissionVision />
      <ValuesBento />
    </div>
  );
}
