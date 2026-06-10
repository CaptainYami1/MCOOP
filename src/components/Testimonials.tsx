import { Star } from "lucide-react";
import person1 from "../assets/test/Ellipse 9.png"
import person2 from "../assets/test/Ellipse 9 (1).png"
import person3 from "../assets/test/Ellipse 9 (2).png"
import person4 from "../assets/test/Ellipse 9 (3).png"
import person5 from "../assets/test/Ellipse 9 (4).png"
import person6 from "../assets/test/Ellipse 9 (5).png"

const testimonials = [
  {
    title: "All-in-One Management",
    quote:
      "This app consolidates all my cooperative activities—savings, loans, and discount purchases—with a real-time dashboard that captures everything instantly",
    name: "Mr. Sunday Adebowale",
    avatarSeed: person1,
  },
  {
    title: "Rapid Project Funding",
    quote:
      "MCOOP is the bedrock of my projects. Whenever I need capital for critical milestones, the platform delivers immediately without delays or friction",
    name: "Mrs. Happy Akinwoleade",
    avatarSeed: person2,
  },
  {
    title: "Seamless Inventory Capital",
    quote:
      "Restocking my commodity business is now completely stress-free. With MCOOP, I secure business capital to buy goods in bulk without missing a single market day",
    name: "Mrs. Sherifat Olayinka",
    avatarSeed: person3,
  },
  {
    title: "Instant Digital Utilities",
    quote:
      "I never run out of airtime or data thanks to the MCOOP app. It truly modernizes the cooperative experience",
    name: "Miss Chima Okoro",
    avatarSeed: person4,
  },
  {
    title: "Better Savings, Bigger Business",
    quote:
      "MCOOP showed me how to save my money without mistakes and grow my business. It is the best support for any artisan who wants to move forward",
    name: "Alhaji Sadiq",
    avatarSeed: person5,
  },
  {
    title: "Fast and Reliable Support",
    quote:
      "Applying for loans used to feel complicated, but now the process is transparent and quick. Everything I need is accessible right from my phone.",
    name: "Mr. Daniel Ogunleye",
    avatarSeed: person6,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-[#fdfdfc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          
          <h2 className="font-semibold text-[30px] leading-[100%] tracking-normal text-[#1E1E1E] mb-4">
            Member Testimonials
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
            Real stories from members who are saving smarter, growing
            financially, and achieving more with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <h3 className="font-semibold text-[#1E1E1E] mb-3">
                {testimonial.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-3">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-3  border-t border-[#F0F0F0]">
                <img
                  src={testimonial.avatarSeed}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover bg-gray-100"
                />
                <span className="text-sm font-semibold text-[#1E1E1E]">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
