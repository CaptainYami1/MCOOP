import problem from "../assets/problem.png";
import { MapPin, ChevronRight, CircleX } from 'lucide-react';

const GoalSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden ">
      <div className="max-w-7xl mx-auto  p-8 sm:p-12 lg:p-16 border border-dashed border-[#EAEAEA] bg-white rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <div className=" flex flex-col md:flex-row items-center justify-between gap-12 border border-gray-50">

          {/* Content */}
          <div className="w-full md:w-1/2 z-10">
            <h2 className="font-semibold text-[30px] leading-none tracking-normal text-[#1E1E1E] mb-5">
              The problem most Nigerians Face
            </h2>
            <p className="font-normal text-[14px] leading-[23px] tracking-normal">
              When urgent financial need arises, getting a loan feels impossible.
            </p>
            <hr className=" my-10 h-0 border border-[#F0F0F0]" />
            <ul className="space-y-5 mb-10">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <CircleX className="w-5 h-5 text-[#141B34]" />
                </div>
                <p className="ml-3 text-[#1E1E1E]  font-normal text-sm leading-[23px] tracking-normal">Banks demand collateral you do not have,</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <CircleX className="w-5 h-5 text-[#141B34]" />
                </div>
                <p className="ml-3 text-[#1E1E1E]  font-normal text-sm leading-[23px] tracking-normal">Friends and family cannot always help</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <CircleX className="w-5 h-5 text-[#141B34]" />
                </div>
                <p className="ml-3 text-[#1E1E1E]  font-normal text-sm leading-[23px] tracking-normal">Your employer does not have the capital reserve to offer substantial loan.</p>
              </li>
            </ul>

            <a
              href="#"
              className="font-semibold text-base leading-[150%] tracking-normal text-[#0B3B2E]  hover:text-[#0a3327] transition-colors"
            >
              YOU ARE STUCK - UNTIL NOW
            </a>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <img
                src={problem}
                alt="Man looking at phone"
                className="w-full h-auto drop-shadow-xl"
              />
            </div>
          </div>

        </div>

        <hr className="border border-[#F0F0F0] w-full my-21" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-semibold text-[30px] leading-[100%] tracking-normal text-center text-[#1E1E1E] mb-6">
            MCOOP : Your Financial Community
          </h2>
          <p className="font-normal text-sm leading-[23px] tracking-normal text-center text-[#1E1E1E] ">
            We’ve reimagined cooperative finance for digital age. Save with your trusted circle, build your credit history and access loans backed by community trust - Not collateral.
          </p>
        </div>
      </div>

    </section>
  );
};

export default GoalSection;
