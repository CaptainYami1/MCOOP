
import {  HandCoins, UsersRound, PiggyBank, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Join a Circle",
      description:
        "Register through your employer, church, mosque, trade union, or trusted community group.",
      icon: <UsersRound className="w-6 h-6 text-[#114C3B]" />,
      stepNum: "1",
    },
    {
      title: "Start Saving",
      description:
        "Choose a savings plan that fits your income. Build your cooperative credit history.",
      icon: <PiggyBank className="w-6 h-6 text-[#114C3B]" />,
      stepNum: "2",
    },
    {
      title: "Get your Loan",
      description:
        "After consistent savings (as little as 30 days), apply for a loan with a guarantor from your circle.",
      icon: <HandCoins className="w-6 h-6 text-[#114C3B]" />,
      stepNum: "3",
    },
    {
      title: "Grow Together",
      description:
        "Repay, maintain your savings, and access bigger loans. Shop the marketplace and enjoy benefits.",
      icon: <Rocket className="w-6 h-6 text-[#114C3B]" />,
      stepNum: "4",
    },
  ];

  return (
    <section className="py-24 bg-[#fdfdfc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center mx-auto justify-center  mb-4">
            <div className="w-2.5 h-2.5 border border-[#CECECE]/50 rounded-full"></div>
            <div className="w-5 border border-[#CECECE]/50 h-0"></div>
            <div className="inline-flex items-center  px-4 py-1.5 rounded-full border border-[#EAEAEA]/30 bg-[#EAEAEA]/30">
              <span className="text-xs handlee-regular font-semibold text-[#1E1E1E] uppercase tracking-wider">
                HOW
              </span>
            </div>
            <div className="w-5 border border-[#CECECE]/50 h-0"></div>
            <div className="w-2.5 h-2.5 border border-[#CECECE]/50 rounded-full"></div>
          </div>
          <h2 className="font-semibold text-[30px] leading-[100%] tracking-normal text-center text-gray-900 mb-4 mt-2">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative z-10 flex flex-col"
            >
              <div className="flex items-center justify-between w-full mb-6">
                <div className="w-14 h-14  rounded-full border border-[0.5px] border-[#E5E5E5] flex items-center justify-center ">
                  {step.icon}
                </div>
                <div className="relative w-10 h-10 flex items-center justify-center ">
                  {/* Star */}
                  <svg
                    viewBox="0 0 24 24"
                    className="w-10 h-10 text-[#114C3B] "
                    fill="currentColor"
                  >
                    <path d="M12 2.5l2.6 5.8 6.4.6-4.8 4.4 1.4 6.3L12 16.9 6.4 19.6l1.4-6.3-4.8-4.4 6.4-.6L12 2.5z" />
                  </svg>

                  {/* Number */}
                  <span className="absolute text-white text-xs font-semibold">
                    {step.stepNum}
                  </span>
                </div>
              </div>
              <h3 className="font-semibold text-base leading-relaxed tracking-normal text-start text-[#1E1E1E] mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-[#323232] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
