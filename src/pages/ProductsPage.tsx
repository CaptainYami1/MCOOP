import { Link } from "react-router-dom";
import { PageLayout } from "../components/PageLayout";
import { ROUTES } from "../routes/paths";

const ProductsPage = () => {
  return (
    <PageLayout
      title="Products & Services"
      subtitle="Everything you need to save, borrow, and grow — all in one cooperative platform."
    className="max-w-2xl"
    >
      <div className="space-y-6">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-semibold text-[#1E1E1E] mb-2">Cooperative Savings</h2>
          <p>
            Choose a savings plan that fits your income cycle — daily, weekly, or
            monthly. Build your cooperative credit history and unlock access to
            affordable loans backed by community trust.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-semibold text-[#1E1E1E] mb-2">Community-Backed Loans</h2>
          <p>
            Apply for loans without traditional collateral. Approval is based on
            your savings consistency, membership standing, and a guarantor from
            your trusted circle — with transparent interest and fees discussed
            upfront.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-semibold text-[#1E1E1E] mb-2">MCOOP Marketplace</h2>
          <p>
            Shop smart and save more. Purchase airtime, data bundles, and
            essential products at group discounted prices — paid directly from
            your MCOOP wallet.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-semibold text-[#1E1E1E] mb-2">MCOOP Care & Life</h2>
          <p>
            Access verified, licensed HMO and Life Insurance partners through
            flexible contribution plans built around your income cycle. Choose
            your plan, protect what matters, and let our licensed partners
            handle the rest.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-semibold text-[#1E1E1E] mb-2">Digital Utilities</h2>
          <p>
            Never run out of airtime or data. Top up instantly from the MCOOP app
            and manage your cooperative activities from a real-time dashboard.
          </p>
        </div>
      </div>

      <div className="pt-6 flex flex-wrap gap-4">
        <Link
          to={ROUTES.join}
          className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium rounded-full text-white bg-[#114C3B] hover:bg-[#0a3327] transition-colors shadow-md"
        >
          Get Started
        </Link>
        <Link
          to={ROUTES.download}
          className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium rounded-full text-[#114C3B] border border-[#114C3B] hover:bg-[#114C3B]/5 transition-colors"
        >
          Download the app
        </Link>
      </div>
    </PageLayout>
  );
};

export default ProductsPage;
