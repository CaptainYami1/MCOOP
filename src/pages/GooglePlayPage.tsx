import { Link } from "react-router-dom";
import { PageLayout } from "../components/PageLayout";
import { ROUTES } from "../routes/paths";

const GooglePlayPage = () => {
  return (
    <PageLayout
      title="Get it on Google Play"
      subtitle="Get MCOOP for Android devices."
      className="max-w-2xl"
    >
      <p>
        Download MCOOP from Google Play to join your circle, save consistently,
        access affordable loans, and manage your cooperative finances from
        anywhere.
      </p>

      <div className="pt-2">
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-transform hover:scale-105"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
            className="h-14"
          />
        </a>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mt-4">
        <h2 className="font-semibold text-[#1E1E1E] mb-2">System requirements</h2>
        <ul className="list-disc list-outside pl-5 space-y-1">
          <li>Android 8.0 or later</li>
          <li>Compatible with phones and tablets</li>
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

export default GooglePlayPage;
