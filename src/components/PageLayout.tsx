import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/paths";

type PageLayoutProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export const PageLayout = ({ title, subtitle, children, className }: PageLayoutProps) => {
  return (
    <div className="pt-32 pb-24 bg-[#fdfdfc] min-h-screen">
      <div className="w-fit mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to={ROUTES.home}
          className="inline-flex items-center text-sm font-medium text-[#114C3B] hover:text-[#0a3327] mb-8 transition-colors"
        >
          ← Back to home
        </Link>
        <h1 className="font-semibold text-[30px] md:text-[36px] leading-tight tracking-normal text-[#1E1E1E] mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm text-gray-600 leading-relaxed mb-10 max-w-2xl">
            {subtitle}
          </p>
        )}
        <div className={`${className} space-y-6 text-sm text-gray-700 leading-relaxed`}>
          {children}
        </div>
      </div>
    </div>
  );
};
