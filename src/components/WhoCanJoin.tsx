import employees from "../assets/employees.png";
import traders from "../assets/traders.png";
import entrepreneurs from "../assets/entrepreneur.png";
import worship from "../assets/worship.png";
import unions from "../assets/union.png";
import affinity from "../assets/groups.png";

const WhoCanJoin = () => {
  const cards = [
    {
      title: "Employees",
      description:
        "Public and private sector workers who need affordable loans without the bank stress.",
      image: employees,
    },
    {
      title: "Traders and Artisans",
      description:
        "Market women and daily income earners who need flexible savings and quick loans.",
      image: traders,
    },
    {
      title: "Entrepreneurs and SMEs",
      description:
        "Small business owners who need working capital backed by cooperative trust.",
      image: entrepreneurs,
    },
    {
      title: "Churches and Mosques",
      description:
        "Religious organizations providing financial empowerment for their members.",
      image: worship,
    },
    {
      title: "Association and Unions",
      description:
        "Trade unions, professional groups, and communities supporting their members.",
      image: unions,
    },
    {
      title: "Affinity Groups",
      description:
        "Alumni groups, clubs, and trusted circles of 10+ people who guarantee each other.",
      image: affinity,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* <div className="flex items-center justify-center mb-4">
            <div className="w-2.5 h-2.5 border border-[#CECECE] rounded-full"></div>
            <div className="w-5 border border-[#CECECE] h-0"></div>
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider handlee-regular">
                WHO WE CATER TO
              </span>
            </div>
            <div className="w-5 border border-[#CECECE] h-0"></div>
            <div className="w-2.5 h-2.5 border border-[#CECECE] rounded-full"></div>
          </div> */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who Can Join MCOOP?
          </h2>
          <p className="text-lg text-gray-600">
            MCOOP is built for every Nigerian.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group rounded-4xl overflow-hidden border border-gray-100 bg-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Card Image */}
              <div className="h-50 w-full relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-8 flex-1 flex flex-col rounded-2xl relative bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-16 text-center relative z-10">
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium rounded-full text-white bg-[#114C3B] hover:bg-[#0a3327] transition-colors shadow-md hover:shadow-lg"
          >
            Get Started
          </a>
        </div>

        {/* Decorative elements */}
        <svg
          className="absolute w-[331.804px] h-[108.075px] top-1/2 mt-8 -right-31 rotate-38 opacity-100"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 100 C 50 50, 150 150, 200 100"
            stroke="#0B3B2E"
            strokeWidth="2"
            strokeDasharray="4 4"
            fill="none"
          />
        </svg>
        <svg
          className="absolute w-[331.804px] z-0 scale-x-[-1] h-[108.075px] top-2/5 left-[-124.25px] rotate-38  opacity-100 "
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 100 C 50 150, 150 50, 200 100"
            stroke="#0B3B2E"
            strokeWidth="2"
            strokeDasharray="4 4"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
};

export default WhoCanJoin;
