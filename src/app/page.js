import AboutSection from "@/components/AboutSection";
import EmailSection from "@/components/EmailSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <Navbar></Navbar>
            <div className="container mx-auto px-12 py-4 mt-24">
                <HeroSection></HeroSection>
                <AboutSection></AboutSection>
                <ProjectsSection></ProjectsSection>
                <EmailSection></EmailSection>
            </div>
        </main>
    );
}
