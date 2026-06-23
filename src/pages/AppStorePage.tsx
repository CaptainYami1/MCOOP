import { Link } from "react-router-dom";
import { PageLayout } from "../components/PageLayout";
import { ROUTES } from "../routes/paths";

const AppStorePage = () => {
  return (
    <PageLayout
      title="Download on the App Store"
      subtitle="Get MCOOP for iPhone and iPad."
      className="max-w-2xl"
    >
      <p>
        Download MCOOP from the Apple App Store to manage your cooperative
        savings, apply for community-backed loans, and shop the marketplace
        all from your iOS device.
      </p>

      <div className="pt-2">
        <a
          href="https://apps.apple.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-transform hover:scale-105"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
            alt="Download on the App Store"
            className="h-14"
          />
        </a>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mt-4">
        <h2 className="font-semibold text-[#1E1E1E] mb-2">System requirements</h2>
        <ul className="list-disc list-outside pl-5 space-y-1">
          <li>iOS 14.0 or later</li>
          <li>Compatible with iPhone, iPad, and iPod touch</li>
          <li>Internet connection required</li>
        </ul>
      </div>

      <p className="pt-4">
        New to MCOOP?{" "}
        <Link to={ROUTES.join} className="text-[#114C3B] font-medium hover:underline">
          Create your account
        </Link>{" "}
        after downloading the app.
      </p>
    </PageLayout>
  );
};

export default AppStorePage;
