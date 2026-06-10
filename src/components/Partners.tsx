import providusLogo from "../assets/partners/image 2.png";
import lapoLogo from "../assets/partners/image 3.png";
import microsoftLogo from "../assets/partners/Group 7.png";

const partners = [
  { name: "ProvidusBank", logo: providusLogo },
  { name: "LAPO Microfinance Bank", logo: lapoLogo },
  { name: "Microsoft", logo: microsoftLogo },
  { name: "Microsoft", logo: microsoftLogo },
  { name: "Microsoft", logo: microsoftLogo },
  { name: "Microsoft", logo: microsoftLogo },
];

export const Partners = () => {
  return (
    <section className="py-24 bg-[#fdfdfc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
          <div className="lg:w-1/3 shrink-0">
            <h2 className="font-semibold text-[30px] leading-tight tracking-normal text-[#1E1E1E]">
              Our Credible{" "}
              <span className="relative inline-block text-[#114C3B]">
                Partners
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#114C3B] rounded-full"></span>
              </span>
            </h2>
          </div>

          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4 flex-1">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-center justify-center min-h-[100px] hover:shadow-md transition-shadow"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 w-auto max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
