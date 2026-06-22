import { Link } from "react-router-dom";
import { PageLayout } from "../components/PageLayout";
import { ROUTES } from "../routes/paths";

const JoinPage = () => {
  return (
    <PageLayout
      title="Join MCOOP"
      subtitle="Create your account and start saving with your trusted circle in minutes."
    >
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-6">
        <div>
          <h2 className="font-semibold text-[#1E1E1E] mb-3">How to get started</h2>
          <ol className="list-decimal list-outside pl-5 space-y-2">
            <li>Download the MCOOP app from the App Store or Google Play.</li>
            <li>Enter your circle&apos;s group code or create a new circle with 10+ members.</li>
            <li>Create your secure member account with your name and phone number.</li>
            <li>Set your password and complete KYC with your BVN and address.</li>
            <li>Choose a savings plan and start building your financial future.</li>
          </ol>
        </div>

        <form className="space-y-4 border-t border-gray-100 pt-6">
          <h2 className="font-semibold text-[#1E1E1E]">Create your account</h2>
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full name
            </label>
            <input
              id="fullName"
              type="text"
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#114C3B]/30"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="joinPhone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone number
            </label>
            <input
              id="joinPhone"
              type="tel"
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#114C3B]/30"
              placeholder="+234 800 000 0000"
            />
          </div>
          <div>
            <label htmlFor="groupCode" className="block text-sm font-medium text-gray-700 mb-1">
              Circle group code (optional)
            </label>
            <input
              id="groupCode"
              type="text"
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#114C3B]/30"
              placeholder="Enter your organisation's group code"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-white bg-[#114C3B] hover:bg-[#0a3327] transition-colors shadow-md"
          >
            Join MCOOP
          </button>
        </form>
      </div>

      <div className="flex flex-wrap gap-4 pt-4">
        <Link
          to={ROUTES.download}
          className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-lg text-[#114C3B] border border-[#114C3B] hover:bg-[#114C3B]/5 transition-colors"
        >
          Download the app
        </Link>
        <Link
          to={ROUTES.login}
          className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-lg text-gray-700 hover:text-[#114C3B] transition-colors"
        >
          Already a member? Sign in
        </Link>
      </div>
    </PageLayout>
  );
};

export default JoinPage;
