import phone1 from "../assets/footerphone1.png"
import phone2 from "../assets/footerphone2.png"
const FooterCTA = () => {
    return (
        <footer className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-[3rem] shadow-xl px-8 sm:px-12 lg:px-16 py-8 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">

                    {/* Content */}
                    <div className="max-w-md z-10 text-center md:text-left">
                        <h2 className="text-2xl sm:text-3xl text-gray-900 mb-1.5 font-semibold leading-13.75 tracking-normal">
                            Your community is waiting.
                        </h2>
                        <h2 className="text-2xl sm:text-3xl text-gray-900 mb-2 font-semibold leading-13.75 tracking-normal">
                            Your future is calling.
                        </h2>
                        <p className="text-gray-600 mb-8 max-w-sm mx-auto md:mx-0">
                            Join thousands of Nigerians building secure portfolios, expanding their business and growing wealthy.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start  items-center md:items-start">
                            <a href="#" className=" transition-transform hover:scale-105">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                                    alt="Download on the App Store"
                                    className="h-12"
                                />
                            </a>
                            <a href="#" className="inline-block transition-transform hover:scale-105">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    alt="Get it on Google Play"
                                    className="h-12"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Images */}
                    <div className="relative w-full md:w-1/2 justify-center md:justify-end mt-10 md:mt-0 hidden md:flex">
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 translate-y-8 ">
                            {/* Phone 1 (Back) */}
                            <div className="absolute -left-10 bottom-0 transform translate-x-8  w-40 sm:w-48 shadow-2xl z-10">
                                <img
                                    src={phone1}
                                    alt="MCOOP App Dashboard"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Phone 2 (Front) */}
                            <div className="absolute right-0 bottom-0 transform -translate-x-4  w-40 sm:w-48 shadow-2xl ">
                                <img
                                    src={phone2}
                                    alt="MCOOP App Transfer"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default FooterCTA;
