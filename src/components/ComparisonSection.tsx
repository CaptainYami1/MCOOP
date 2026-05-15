import { BadgeCent, CircleDivide, House, Package, SquareCheck, SquareX, ChartNoAxesCombined, FileCheckCorner, Bubbles, Zap, Rotate3d, BanknoteX, BanknoteArrowUp } from 'lucide-react';


const ComparisonSection = () => {
  return (
    <section className="py-16 bg-[#fdfdfc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center mx-auto justify-center  mb-4">
            <div className="w-2.5 h-2.5 border border-[#CECECE]/50 rounded-full"></div>
            <div className="w-5 border border-[#CECECE]/50 h-0"></div>
            <div className="inline-flex items-center  px-4 py-1.5 rounded-full border border-[#EAEAEA]/30 bg-[#EAEAEA]/30">
              <span className="text-xs handlee-regular font-semibold text-[#1E1E1E] uppercase tracking-wider">
                why MCOOP
              </span>
            </div>
            <div className="w-5 border border-[#CECECE]/50 h-0"></div>
            <div className="w-2.5 h-2.5 border border-[#CECECE]/50 rounded-full"></div>
          </div>
          <h2 className="text-3xl font-bold text-[#1E1E1E] mb-4">How MCOOP is Different</h2>
          <p className="text-gray-600 ">Not a bank. Not a loan shark. A true cooperative</p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-[2rem] shadow-sm border border-gray-100">
          <table className="w-full text-center border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-[#114C3B] text-white border-0">
                <th className="py-6 px-8 font-semibold text-lg first:rounded-tl-[2rem] w-1/4 text-start border-0"></th>
                <th className="py-6 px-8 font-semibold text-lg w-1/4 text-start border-0">Traditional Bank</th>
                <th className="py-6 px-8 font-semibold text-lg w-1/4 text-start border-0">Loan Apps</th>
                <th className="py-6 px-8 font-semibold text-lg last:rounded-tr-[2rem] w-1/4 text-start border-0">MCOOP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">

              <tr className="hover:bg-gray-50/50 transition-colors divide-x divide-gray-100">
                <td className="py-6 px-8 text-gray-700">
                  <div className="flex items-center  gap-3">
                    <span className="text-[#1E1E1E]"><House className="w-5 h-5" /></span> Require Collateral
                  </div>
                </td>
                <td className=" text-start py-6 px-8 text-red-500"><SquareCheck className="inline w-4 h-4 mr-1 mb-0.5" /> Yes</td>
                <td className="text-start py-6 px-8 text-gray-700"><SquareX className="inline w-4 h-4 mr-1 mb-0.5 text-[#114C3B]" /> No</td>
                <td className="text-start py-6 px-8 text-[#114C3B] text-[14px]"><SquareX className="inline w-4 h-4 mr-1 mb-0.5" /> No</td>
              </tr>

              <tr className="hover:bg-gray-50/50 transition-colors divide-x divide-gray-100">
                <td className="py-6 px-8 text-[#1E1E1E]">
                  <div className="flex items-center  gap-3">
                    <span className="text-[#114C3B]"><CircleDivide className="w-5 h-5" /></span> Interest Rates
                  </div>
                </td>
                <td className="py-6 px-8 text-red-500">
                  <div className="flex items-center  gap-2">
                    <ChartNoAxesCombined className="w-5 h-5" /> High
                  </div>
                </td>
                <td className="py-6 px-8 text-red-500">
                  <div className="flex items-center  gap-2">
                    <ChartNoAxesCombined className="w-5 h-5" /> Very High
                  </div>
                </td>
                <td className="py-6 px-8 text-[#114C3B] text-[14px]">
                  <div className="flex items-center  gap-2">
                    <FileCheckCorner className="w-5 h-5" /> Fair and Affordable
                  </div>
                </td>
              </tr>

              <tr className="hover:bg-gray-50/50 transition-colors divide-x divide-gray-100">
                <td className="py-6 px-8 text-[#1E1E1E]">
                  <div className="flex items-center  gap-3">
                    <span className="text-[#114C3B]"><Package className="w-5 h-5" /></span> Process
                  </div>
                </td>
                <td className="py-6 px-8 text-red-500">
                  <div className="flex items-center  gap-2">
                    <Bubbles className="w-5 h-5" /> Complex
                  </div>
                </td>
                <td className="py-6 px-8 text-red-500">
                  <div className="flex items-center  gap-2">
                    <Zap className="w-5 h-5" /> Quick but Risky
                  </div>
                </td>
                <td className="py-6 px-8 text-[#114C3B] text-[14px]">
                  <div className="flex items-center  gap-2">
                    <Rotate3d className="w-5 h-5" /> Simple & Transparent
                  </div>
                </td>
              </tr>

              <tr className="hover:bg-gray-50/50 transition-colors divide-x divide-gray-100">
                <td className="py-6 px-8 text-[#1E1E1E]">
                  <div className="flex items-center  gap-3">
                    <span className="text-[#114C3B]"><BadgeCent className="w-5 h-5" /></span> Charges & Fees
                  </div>
                </td>
                <td className="text-start py-6 px-8 text-red-500"><BanknoteX className="inline w-4 h-4 mr-1 mb-0.5" /> Hidden Charges</td>
                <td className="text-start py-6 px-8 text-red-500"><BanknoteX className="inline w-4 h-4 mr-1 mb-0.5" /> Hidden Charges</td>
                <td className="text-start py-6 px-8 text-[#114C3B] text-[14px]"><BanknoteArrowUp className="inline w-4 h-4 mr-1 mb-0.5" /> Transparent Pricing</td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default ComparisonSection;
