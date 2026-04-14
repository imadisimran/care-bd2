import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import EmergencyCare from "@/components/home/EmergencyCare";
import TrainingPrograms from "@/components/home/TrainingPrograms";
import Testimonials from "@/components/home/Testimonials";


export default function Home() {
  return (
    <>
        <Hero />
        <Services />
        <EmergencyCare />
        <TrainingPrograms />
        <Testimonials />
    </>
  );
}
