import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "Is MCOOP a bank?",
    answer:
      "MCOOP is not a bank. It is the proprietary digital platform of More Prosperity Cooperative Multipurpose Society, fully registered and regulated by the Lagos State Ministry of Commerce, Cooperatives, Trade & Investment. We leverage financial technology to efficiently administer cooperative services, credit access, and member benefits.",
  },
  {
    question: "Is my money safe with MCOOP?",
    answer:
      "Yes. MCOOP operates under the regulatory oversight of the Lagos State Ministry of Commerce, Cooperatives, Trade & Investment. Your savings are managed within a registered cooperative framework with transparent records, secure digital transactions, and community accountability.",
  },
  {
    question: "How are loans approved?",
    answer:
      "Loan approval is based on your savings consistency, membership standing, and a guarantor from your trusted circle—not traditional collateral. After meeting minimum savings requirements (as little as 30 days), you can apply and receive a fair, transparent review.",
  },
  {
    question: "What happens if a member defaults on a loan?",
    answer:
      "Default affects the member's cooperative standing and may involve their guarantor and circle. MCOOP follows clear, transparent recovery processes aligned with cooperative principles, prioritizing member support and community accountability.",
  },
];

export const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faqs" className="py-24 bg-[#fdfdfc] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 justify-center items-center">
          <div className="lg:w-2/5 shrink-0">
            

            <h2 className="font-semibold text-[30px] leading-tight tracking-normal text-[#1E1E1E] mb-4">
              Frequently Asked{" "}
              <span className="relative inline-block">
                Questions
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#114C3B] rounded-full"></span>
              </span>
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
              Learn more about our services, fees, transfers, security measures,
              and account features all in one place.
            </p>
          </div>

          <div className="lg:w-3/5 flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-[#1E1E1E]">
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-[#1E1E1E]">
                      {isOpen ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <>
                      <hr className="border-[#F0F0F0] mx-6" />
                      <div className="px-6 pb-6 pt-4">
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <svg
        className="absolute w-[331px] h-[108px] bottom-8 -left-24 rotate-[-30deg] opacity-60 pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0 100 C 50 50, 150 150, 200 100"
          stroke="#CECECE"
          strokeWidth="2"
          strokeDasharray="4 4"
          fill="none"
        />
      </svg>
      <svg
        className="absolute w-[331px] h-[108px] top-12 -right-24 rotate-[30deg] opacity-60 pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0 100 C 50 150, 150 50, 200 100"
          stroke="#CECECE"
          strokeWidth="2"
          strokeDasharray="4 4"
          fill="none"
        />
      </svg>
    </section>
  );
};
