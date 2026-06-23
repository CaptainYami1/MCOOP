import { Link } from "react-router-dom";
import { PageLayout } from "../components/PageLayout";
import { ROUTES } from "../routes/paths";

const AboutPage = () => {
  return (
    <PageLayout
      title="About MCOOP"
      subtitle="Nigeria's trusted digital cooperative platform built on community trust, not collateral."
    className="max-w-2xl"
    >
      <p>
        MCOOP is the proprietary digital platform of More Prosperity Cooperative
        Multipurpose Society, fully registered and regulated by the Lagos State
        Ministry of Commerce, Cooperatives, Trade & Investment. We are not a
        bank we are a cooperative reimagined for the digital age.
      </p>
      <p>
        Our mission is to help individuals, professionals, and communities save
        consistently, access affordable loans through collective trust, and build
        shared prosperity without traditional collateral barriers.
      </p>

      <h2 className="font-semibold text-lg text-[#1E1E1E] pt-4">What we believe</h2>
      <ul className="list-disc list-outside pl-5 space-y-2">
        <li>Financial access should be built on trust, not exclusion.</li>
        <li>Cooperative savings create stronger, more resilient communities.</li>
        <li>Technology should make cooperative finance transparent and simple.</li>
        <li>Every Nigerian deserves fair, affordable financial support.</li>
      </ul>

      <h2 className="font-semibold text-lg text-[#1E1E1E] pt-4">Who we serve</h2>
      <p>
        From employees and traders to entrepreneurs, churches, mosques, unions,
        and affinity groups MCOOP is built for every Nigerian who wants to
        save smarter and grow together with people they trust.
      </p>

      <div className="pt-6">
        <Link
          to={ROUTES.join}
          className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium rounded-full text-white bg-[#114C3B] hover:bg-[#0a3327] transition-colors shadow-md"
        >
          Join MCOOP
        </Link>
      </div>
    </PageLayout>
  );
};

export default AboutPage;
