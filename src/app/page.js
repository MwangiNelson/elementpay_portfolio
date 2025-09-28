import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import ServicesGrid from '@/components/ServicesGrid';
import UseCases from '@/components/UseCases';
import Impact from '@/components/Impact';
import Countries from '@/components/Countries';
import Features from '@/components/Features';
import Team from '@/components/Team';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <SmoothScroll />
      <Navbar />
      <Hero />
      <Partners />
      <div id="services"><ServicesGrid /></div>
      <div id="usecases"><UseCases /></div>
      <Impact />
      <div id="about"><Countries /></div>
      <Features />
      <div id="team"><Team /></div>
      <CTA />
      <div id="contact"><Footer /></div>
    </main>
  );
}