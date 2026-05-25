import plan1 from "../assets/plan1.png";
import plan2 from "../assets/plan2.png";
import plan3 from "../assets/plan-3.png";

const SavingsPlans = () => {
  const plans = [
    {
      title: "PaySave (For salary earners)",
      features: [
        "Monthly savings from ₦5,000.",
        "Perfect for employees and professionals building long term financial security."
      ],
      image: plan1
    },
    {
      title: "Ajoflex (For daily earners)",
      features: [
        "Daily or weekly contributions from ₦1,000.",
        "Ideal for traders, artisans, and informal workers with daily cash flow."
      ],
      image: plan2
    },
    {
      title: "PrimeSave (Total flexibility)",
      features: [
        "Save anytime, any amount.",
        "For freelancers and irregular income earners who need complete control."
      ],
      image: plan3
    }
  ];

  return (
    <section className="py-24 bg-[#fdfdfc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          
          <h2 className="font-semibold text-[30px] leading-[100%] tracking-normal text-center text-gray-900 mb-4 mt-2">
            Co-operative Savings Plans
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-[#F5F5F580] rounded-[2rem] overflow-hidden flex flex-col shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="h-48 flex-shrink-0">
                <img src={plan.image} alt={plan.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 bg-white flex-grow rounded-t-2xl">
                <h3 className="font-semibold text-base leading-relaxed tracking-normal text-gray-900 mb-4">{plan.title}</h3>
                <ul className="text-sm text-gray-600 leading-relaxed space-y-2 list-disc list-outside pl-4">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SavingsPlans;
