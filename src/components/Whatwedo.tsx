import plan1 from "../assets/shopsmart1.png";
import plan2 from "../assets/shopsmart2.png";
export const Whatwedo = () => {
  const plans = [
    {
      title: "MCOOP Marketplace",
      description: "Shop smart, save more",
      features: [
        "Airtime and data bundles",
        "Essential products at group discounted prices",
        "Pay directly from your MCOOP wallet"
      ],
      image: plan1
    },
    {
      title: "MCOOP Care & Life",
        description: "Premium Protection, Tailored for You.",
      features: [
        "Take control of tomorrow. MCOOP connects members to verified, licensed HMO and Life Insurance partners through flexible contribution plans built around your income cycle. Choose your plan, protect what matters, and let our licensed partners handle the rest."
      ],
      image: plan2
    },
    
  ];

  return (
    <section className="py-24 bg-[#fdfdfc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
    

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white pt-4 rounded-[2rem] overflow-hidden flex flex-col shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="h-80 flex-shrink-0">
                <img src={plan.image} alt={plan.title} className="w-full h-full object-cover" />
              </div>
              <div className="">
               
              </div>
              <div className="p-6 bg-white flex-grow rounded-t-2xl">
                <h3 className="font-semibold text-base leading-relaxed tracking-normal text-gray-900 mb-3.5">{plan.title}</h3>
                <p className='font-normal text-sm leading-6 tracking-normal'>{plan.description}</p>
                <hr className='my-6 w-full border border-[#F0F0F0]'/>
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
