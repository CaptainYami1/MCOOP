import img1 from "../assets/nocollateral.jpg";
import img2 from "../assets/flexible.jpg";
import img3 from "../assets/transparent.jpg";
import img4 from "../assets/loan-backed.jpg";
import img5 from "../assets/fast-approval.jpg";
import img6 from "../assets/morethanloan.jpg";
const WhyChoose = () => {
  const benefits = [
    {
      title: "No Traditional Collateral Required",
      description:
        "Your savings consistency and community guarantees support your eligibility.",
      image: img1,
    },
    {
      title: "Flexible for your Income",
      description:
        "Whether you earn daily, or monthly; employee, or entrepreneur there's a plan for you.",
      image: img2,
    },
    {
      title: "Transparent Interest and Fees",
      description:
        "All fees, interest rates and terms are discussed upfront. No hidden charges, No surprises.",
      image: img3,
    },
    {
      title: "Loans Backed by Community Trust",
      description:
        "Built on the traditional ajo system Nigerians know and trust, now digitized for transparency.",
      image: img4,
    },
    {
      title: "Fast Approval Process",
      description:
        "Your cooperative loan applications are processed quickly with 24/7 supports.",
      image: img5,
    },
    {
      title: "More than just Loans",
      description:
        "Access healthcare plans, life insurance, and shop at discounted prices all in one platform.",
      image: img6,
    },
  ];

  return (
    <section className="py-24 bg-[#114C3B] relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-emerald-800 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-emerald-800 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-2.5 h-2.5 border border-[#CECECE]/50 rounded-full"></div>
            <div className="w-5 border border-[#CECECE]/50 h-0"></div>
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#EAEAEA]/20 bg-[#EAEAEA]/10">
              <span className="text-xs handlee-regular font-semibold text-white uppercase tracking-wider">
                PRODUCT FEATURES
              </span>
            </div>
            <div className="w-5 border border-[#CECECE]/50 h-0"></div>
            <div className="w-2.5 h-2.5 border border-[#CECECE]/50 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose MCOOP
          </h2>
          <p className="text-emerald-100/80 text-lg max-w-lg mx-auto">
            No long queues. No hidden stress. Just simple, reliable financial
            support designed around your everyday needs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden h-72 md:h-80 cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/95"></div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed overflow-hidden transition-all duration-500">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
