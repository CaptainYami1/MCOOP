
import leftdesign from "../assets/Line 1.png";
import rightdesign from "../assets/Line 2.png";
import leftPhone from "../assets/Color6.png";
import rightPhone from "../assets/Color7.png";
const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center bg-[#fdfdfc]">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-[#f4e8d2] rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-[#dcfce7] rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      {/* SVG Wavy Line (left) */}
      <img
        src={leftdesign}
        alt="Wavy Line"
        className="absolute left-0 top-[10%] md:top-[-5%] pointer-events-none"
      />

      {/* SVG Wavy Line (right) */}
      <img
        src={rightdesign}
        alt="Wavy Line"
        className="absolute right-[-3%] bottom-[-15%] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center ">
          {/* Text Content */}
          <div className="max-w-xl mx-auto text-center lg:text-left ">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900  leading-16 tracking-[0%] mb-6">
              Save Together. <br />
              Grow stronger. <br />
              Powered by trust.
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
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
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-full text-white bg-[#114C3B] hover:bg-[#0a3327] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Join MCOOP Today
              </a>
            </div>
          </div>

          {/* Image Content (Phones) */}
          <div className="relative h-[450px] sm:h-[550px] lg:h-[650px] w-full flex justify-center items-center mt-12 lg:mt-0">
            {/* Left Phone */}
            <div className="absolute left-[5%] sm:left-[15%] lg:left-[10%]  transform -rotate-[12deg] hover:-rotate-[6deg] transition-transform duration-700 z-20 w-[200px] sm:w-[260px] lg:w-[300px]">
              <img
                src={leftPhone}
                alt="MCOOP App Left"
                className="w-[400px] h-auto drop-shadow-2xl"
              />
            </div>

            {/* Right Phone */}
            <div className="absolute right-[5%] sm:right-[15%] lg:right-[10%] transform rotate-[12deg] hover:rotate-[6deg] transition-transform duration-700 z-10 w-[200px] sm:w-[260px] lg:w-[300px]">
              <img
                src={rightPhone}
                alt="MCOOP App Right"
                className="w-[400px] h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
