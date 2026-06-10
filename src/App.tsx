import Header from './components/Header';
import Hero from './components/Hero';
import GoalSection from './components/GoalSection';
import ComparisonSection from './components/ComparisonSection';
import HowItWorks from './components/HowItWorks';
import FeaturesSection from './components/FeaturesSection';
import SavingsPlans from './components/SavingsPlans';
import WhoCanJoin from './components/WhoCanJoin';
import WhyChoose from './components/WhyChoose';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';
import './App.css';
import FlexibleRepayment from './components/FlexibleRepayment';
import { Whatwedo } from './components/Whatwedo';
import { Testimonials } from './components/Testimonials';
import { Partners } from './components/Partners';
import { Faqs } from './components/Faqs';

function App() {
  return (
    <div className="font-sans text-gray-900 antialiased bg-[#FAFAFA] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <GoalSection />
        <ComparisonSection />
        <HowItWorks />
        <FeaturesSection />
        <SavingsPlans />
        <FlexibleRepayment />
        <Whatwedo />
        <WhoCanJoin />
        
        <WhyChoose />
        <Testimonials />
        <Partners/>
        <Faqs/>
      </main>
      <FooterCTA />
      <Footer />
    </div>
  );
}

export default App;
