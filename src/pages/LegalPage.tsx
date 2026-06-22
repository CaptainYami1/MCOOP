import { Link } from "react-router-dom";
import { PageLayout } from "../components/PageLayout";
import { ROUTES } from "../routes/paths";

const LegalPage = () => {
  return (
    <PageLayout
      title="Legal"
      subtitle="Policies and agreements that govern your use of the MCOOP platform and cooperative services."
    className="max-w-2xl"
    >
      <p>
        MCOOP is operated by More Prosperity Cooperative Multipurpose Society,
        registered and regulated by the Lagos State Ministry of Commerce,
        Cooperatives, Trade & Investment. The documents below explain your
        rights, responsibilities, and how we protect your information.
      </p>

      <div className="grid gap-4 pt-2">
        <Link
          to={ROUTES.terms}
          className="block bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <h2 className="font-semibold text-[#1E1E1E] mb-2">Terms & Conditions</h2>
          <p>
            Read the terms governing membership, savings, loans, platform use,
            and cooperative obligations.
          </p>
        </Link>
        <Link
          to={ROUTES.privacy}
          className="block bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <h2 className="font-semibold text-[#1E1E1E] mb-2">Privacy Policy</h2>
          <p>
            Learn how MCOOP collects, uses, stores, and protects your personal
            and financial information.
          </p>
        </Link>
      </div>

      <p className="pt-4 text-gray-600">
        For legal enquiries, contact{" "}
        <a href="mailto:legal@mcoop.ng" className="text-[#114C3B] font-medium hover:underline">
          legal@mcoop.ng
        </a>
        .
      </p>
    </PageLayout>
  );
};

export default LegalPage;
