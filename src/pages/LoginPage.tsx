import { Link } from "react-router-dom";
import { PageLayout } from "../components/PageLayout";
import { ROUTES } from "../routes/paths";

const LoginPage = () => {
  return (
    <PageLayout
      title="Login"
      subtitle="Sign in to your MCOOP account to manage savings, loans, and cooperative activities."
    >
      <form className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4 max-w-md">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone number
          </label>
          <input
            id="phone"
            type="tel"
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#114C3B]/30"
            placeholder="+234 800 000 0000"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#114C3B]/30"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg text-white bg-[#114C3B] hover:bg-[#0a3327] transition-colors"
        >
          Sign in
        </button>
        <p className="text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <Link to={ROUTES.join} className="text-[#114C3B] font-medium hover:underline">
            Join MCOOP
          </Link>
        </p>
      </form>

      <p className="text-gray-600 pt-4">
        Forgot your password?{" "}
        <Link to={ROUTES.support} className="text-[#114C3B] font-medium hover:underline">
          Contact support
        </Link>{" "}
        for assistance.
      </p>
    </PageLayout>
  );
};

export default LoginPage;
