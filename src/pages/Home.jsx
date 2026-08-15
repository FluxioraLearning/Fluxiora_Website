import Header from '../components/Header';
import Hero from '../components/Hero';
import WhatWeProvide from '../components/FeatureCard';
import VisionStrip from '../components/VisionStrip';
import LiveWorkshops from '../components/LiveWorkshops';
import UpcomingWorkshops from '../components/UpcomingWorkshops';
import Internships from '../components/Internships';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="main-content-layer">
        <main>
          <WhatWeProvide />
          <VisionStrip />
          <LiveWorkshops />
          <UpcomingWorkshops />
          <Internships />
          <AboutUs />
          <ContactUs />
        </main>
        <Footer />
      </div>
    </>
  );
}
