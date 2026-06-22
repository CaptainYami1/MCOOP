import Hero from "../components/Hero";
import GoalSection from "../components/GoalSection";
import ComparisonSection from "../components/ComparisonSection";
import HowItWorks from "../components/HowItWorks";
import FeaturesSection from "../components/FeaturesSection";
import SavingsPlans from "../components/SavingsPlans";
import FlexibleRepayment from "../components/FlexibleRepayment";
import { Whatwedo } from "../components/Whatwedo";
import WhoCanJoin from "../components/WhoCanJoin";
import WhyChoose from "../components/WhyChoose";
import { Testimonials } from "../components/Testimonials";
import { Partners } from "../components/Partners";
import { Faqs } from "../components/Faqs";

const HomePage = () => {
  return (
    <>
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
      <Partners />
      <Faqs />
    </>
  );
};

export default HomePage;
