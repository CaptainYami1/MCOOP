import leftdesign from "../assets/Line 1.png";
import rightdesign from "../assets/Line 2.png";
import leftPhone from "../assets/Color6.png";
import rightPhone from "../assets/Color7.png";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden flex flex-col items-center justify-center bg-[#fdfdfc]">

      {/* SVG Wavy Line (left) */}
      <img
        src={leftdesign}
        alt="Wavy Line"
        className="absolute left-0 top-[10%] md:top-[5%] pointer-events-none opacity-50"
      />

      {/* SVG Wavy Line (right) */}
      <img
        src={rightdesign}
        alt="Wavy Line"
        className="absolute right-[-3%] md:right-0 top-1/2 pointer-events-none opacity-50"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center">
        {/* Text Content */}
        <h1 className="font-semibold text-[40px] leading-16 tracking-normal text-[#1E1E1E] text-center mb-6">
          Save Together.<br />
          Grow stronger. Powered by trust.
        </h1>
        <p className="font-normal text-[16px] leading-6 tracking-normal text-center text-[#1E1E1E] mb-10  max-w-2xl mx-auto">
          Nigeria’s trusted digital cooperative platform that empowers
          everyday Nigerians to save consistently, access affordable loans
          backed by community trust and shop smart - all without traditional
          collateral.
          <br />
          <br />
          MCOOP is the digital platform of More Prosperity Cooperative
          Multipurpose Society, registered and regulated by the Lagos State
          Ministry of Commerce, Cooperatives, Trade & Investment.
        </p>
        <div className="flex justify-center mb-16">
          <a
            href="#"
            className="inline-flex items-center justify-center px-10 py-4 text-base font-medium rounded-full text-white bg-[#114C3B] hover:bg-[#0a3327] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Join MCOOP
          </a>
        </div>

        {/* Image Content (Phones) */}
        <div className="relative h-[350px] sm:h-[450px] lg:h-[550px] w-full max-w-[600px] mx-auto flex justify-center items-center mt-4">
          {/* Left Phone */}
          <div className="absolute left-[5%] sm:left-[10%] transform  hover:-rotate-[6deg] transition-transform duration-700 z-20 w-[200px] sm:w-[260px] lg:w-[320px]">
            <img
              src={leftPhone}
              alt="MCOOP App Left"
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>

          {/* Right Phone */}
          <div className="absolute right-[5%] sm:right-[4%] transform  hover:rotate-[6deg] transition-transform duration-700 z-10 w-[200px] sm:w-[260px] lg:w-[320px]">
            <img
              src={rightPhone}
              alt="MCOOP App Right"
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
