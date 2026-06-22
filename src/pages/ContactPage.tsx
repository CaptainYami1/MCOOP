import { PageLayout } from "../components/PageLayout";

const ContactPage = () => {
  return (
    <PageLayout
      title="Contact Us"
      subtitle="We're here to help. Reach out to our team for questions about membership, savings, loans, or support."
    className="max-w-2xl"
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-semibold text-[#1E1E1E] mb-3">General enquiries</h2>
          <p className="mb-1">Email: support@mcoop.ng</p>
          <p className="mb-1">Phone: +234 (0) 800 MCOOP NG</p>
          <p>Hours: Monday – Friday, 8:00 AM – 6:00 PM WAT</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-semibold text-[#1E1E1E] mb-3">Office</h2>
          <p className="mb-1">More Prosperity Cooperative Multipurpose Society</p>
          <p className="mb-1">Lagos State, Nigeria</p>
          <p>Registered under the Lagos State Ministry of Commerce, Cooperatives, Trade & Investment</p>
        </div>
      </div>

      <h2 className="font-semibold text-lg text-[#1E1E1E] pt-4" id="social-media">
        Connect with us
      </h2>
      <p>
        Follow MCOOP on social media for updates, member stories, and financial
        tips. Find us on Twitter, Facebook, Instagram, and LinkedIn.
      </p>

      <form className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4 mt-4">
        <h2 className="font-semibold text-[#1E1E1E]">Send us a message</h2>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full name
          </label>
          <input
            id="name"
            type="text"
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#114C3B]/30"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email address
          </label>
          <input
            id="email"
            type="email"
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#114C3B]/30"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#114C3B]/30"
            placeholder="How can we help?"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-lg text-white bg-[#114C3B] hover:bg-[#0a3327] transition-colors"
        >
          Send message
        </button>
      </form>
    </PageLayout>
  );
};

export default ContactPage;
