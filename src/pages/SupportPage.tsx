import { Link } from "react-router-dom";
import { PageLayout } from "../components/PageLayout";
import { ROUTES } from "../routes/paths";

const supportTopics = [
  {
    title: "Getting started",
    description:
      "Learn how to download the app, create your account, join a circle, and choose your first savings plan.",
  },
  {
    title: "Savings & contributions",
    description:
      "Understand savings plans, contribution schedules, wallet top-ups, and how to track your cooperative balance.",
  },
  {
    title: "Loans & guarantors",
    description:
      "Find out how to apply for a loan, what guarantors need to do, and how repayments work within your circle.",
  },
  {
    title: "Account & security",
    description:
      "Manage your profile, reset your password, verify your identity (KYC), and keep your account secure.",
  },
  {
    title: "Marketplace & utilities",
    description:
      "Get help with airtime, data purchases, marketplace orders, and payments from your MCOOP wallet.",
  },
  {
    title: "Disputes & complaints",
    description:
      "Report an issue, escalate a concern, or request help with a transaction or membership matter.",
  },
];

const SupportPage = () => {
  return (
    <PageLayout
      title="Support"
      subtitle="Find answers, get help, and learn how to make the most of your MCOOP membership."
    className="max-w-2xl"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {supportTopics.map((topic) => (
          <div
            key={topic.title}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
          >
            <h2 className="font-semibold text-[#1E1E1E] mb-2">{topic.title}</h2>
            <p>{topic.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#114C3B]/5 rounded-2xl border border-[#114C3B]/10 p-6 mt-4">
        <h2 className="font-semibold text-[#1E1E1E] mb-2">Still need help?</h2>
        <p className="mb-4">
          Our support team is available Monday through Friday, 8:00 AM – 6:00 PM
          WAT. You can also browse our frequently asked questions on the home page.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to={ROUTES.contact}
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-lg text-white bg-[#114C3B] hover:bg-[#0a3327] transition-colors"
          >
            Contact support
          </Link>
          <Link
            to={`${ROUTES.home}#faqs`}
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-lg text-[#114C3B] border border-[#114C3B] hover:bg-[#114C3B]/5 transition-colors"
          >
            View FAQs
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default SupportPage;
