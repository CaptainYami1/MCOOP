import { Link } from "react-router-dom";
import { PageLayout } from "../components/PageLayout";
import { ROUTES } from "../routes/paths";

const DownloadPage = () => {
  return (
    <PageLayout
      title="Download MCOOP"
      subtitle="Get the MCOOP app and start saving, borrowing, and growing with your community."
    className="max-w-2xl"
    >
      <p>
        The MCOOP mobile app puts your entire cooperative experience in your
        pocket — savings, loans, marketplace purchases, airtime, data, and a
        real-time dashboard that captures everything instantly.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <Link
          to={ROUTES.appStore}
          className="transition-transform hover:scale-105"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
            alt="Download on the App Store"
            className="h-12"
          />
        </Link>
        <Link
          to={ROUTES.googlePlay}
          className="inline-block transition-transform hover:scale-105"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
            className="h-12"
          />
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mt-4">
        <h2 className="font-semibold text-[#1E1E1E] mb-3">What you can do in the app</h2>
        <ul className="list-disc list-outside pl-5 space-y-2">
          <li>Join or create a trusted savings circle</li>
          <li>Track savings and loan applications in real time</li>
          <li>Buy airtime, data, and discounted marketplace products</li>
          <li>Manage repayments and cooperative contributions</li>
          <li>Access MCOOP Care & Life insurance plans</li>
        </ul>
      </div>

      <div className="pt-4">
        <Link
          to={ROUTES.join}
          className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium rounded-full text-white bg-[#114C3B] hover:bg-[#0a3327] transition-colors shadow-md"
        >
          Create your account
        </Link>
      </div>
    </PageLayout>
  );
};

export default DownloadPage;
