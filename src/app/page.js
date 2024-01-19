import AboutSection from "@/components/AboutSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#0e0e0e] text-white">
            <Navbar></Navbar>
            <div className="container mx-auto px-6 md:px-12 py-4 mt-24 overflow-hidden">
                <HeroSection></HeroSection>
                <AboutSection></AboutSection>
                <ProjectsSection></ProjectsSection>
                <EmailSection></EmailSection>
                <Footer></Footer>
            </div>
        </main>
    );
}
