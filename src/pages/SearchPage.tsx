import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { PageLayout } from "../components/PageLayout";
import { ROUTES } from "../routes/paths";

const quickLinks = [
  { label: "About MCOOP", to: ROUTES.about },
  { label: "Products & Services", to: ROUTES.products },
  { label: "How to join", to: ROUTES.join },
  { label: "Support", to: ROUTES.support },
  { label: "FAQs", to: `${ROUTES.home}#faqs` },
  { label: "Contact us", to: ROUTES.contact },
];

const SearchPage = () => {
  return (
    <PageLayout
      title="Search"
      subtitle="Find pages, topics, and help resources across the MCOOP website."
    >
      <div className="relative max-w-xl">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="search"
          className="w-full rounded-xl border border-gray-200 pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#114C3B]/30"
          placeholder="Search MCOOP..."
          autoFocus
        />
      </div>

      <div className="pt-4">
        <h2 className="font-semibold text-[#1E1E1E] mb-3">Popular pages</h2>
        <ul className="space-y-2">
          {quickLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className="block bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 hover:shadow-md transition-shadow text-[#114C3B] font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
};

export default SearchPage;
