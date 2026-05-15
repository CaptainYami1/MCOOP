import { IdCard, ScanText, Smartphone, Atom } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: "Download and signup",
      description: "Create your account with your name, phone number and password.",
      icon: <IdCard className="w-6 h-6 text-emerald-100" />
    },
    {
      title: "Verify your identity",
      description: "Complete KYC with your BVN and residential address",
      icon: <ScanText className="w-6 h-6 text-emerald-100" />
    },
    {
      title: "Group Code",
      description: "Enter your organisation’s group code or create a new community with 10+ members.",
      icon: <Smartphone className="w-6 h-6 text-emerald-100" />
    },
    {
      title: "Choose your Plan",
      description: "Choose savings plan and build your financial future",
      icon: <Atom className="w-6 h-6 text-emerald-100" />
    }
  ];

  return (
    <section className="py-24 bg-[#114C3B] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-2.5 h-2.5 border border-[#CECECE]/50 rounded-full"></div>
            <div className="w-5 border border-[#CECECE]/50 h-0"></div>
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#EAEAEA]/20 bg-[#EAEAEA]/10">
              <span className="text-xs handlee-regular font-semibold text-white uppercase tracking-wider">
                HOW TO USE THE MCOOP APP
              </span>
            </div>
            <div className="w-5 border border-[#CECECE]/50 h-0"></div>
            <div className="w-2.5 h-2.5 border border-[#CECECE]/50 rounded-full"></div>
          </div>
          <h2 className="font-semibold text-[30px] leading-none tracking-normal text-center text-white mt-4 mb-4">Get Started in 3 MINUTES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#EAEAEA1A] border border-[#EAEAEA33] rounded-3xl p-8 hover:bg-[#EAEAEA]/20 transition-colors">
              <div className="w-12 h-12 bg-emerald-800/50 rounded-xl flex items-center justify-center mb-6 border border-[#E5E5E5]/80">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-base leading-[150%] tracking-normal text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-emerald-100/80 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
