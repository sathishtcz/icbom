import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";

function Aboutus() {
    return (
        <>
            <div className="mt-30 text-center">
                <div className="flex flex-col  ">
                    <div className="flex flex-row justify-center gap-2 items-center ">
                        <div className='h-[3px] bg-[#1C826E] w-[60px]' />
                        <h3 className='hanuman-semibold text-[25px] lg:text-[40px] text-[#1C826E]'>About Us</h3>
                        <div className='h-[3px] bg-[#1C826E] w-[60px]' />
                    </div>
                    <div className="flex space-x-2 justify-center  inter-medium">
                        <p>
                            <Link to="/" className="  text-[18px]">
                                Home
                            </Link>
                        </p>
                        <p className="  text-[18px]">/</p>
                        <p className=" text-[18px]">About Us</p>
                    </div>
                </div>
            </div>


            <div className="xl:max-w-[1450px]  md:max-w-[920px] px-3 mx-auto mt-8 lg:mt-15">
                <p className="hanuman-bold text-[#1C826E] text-[25px] lg:text-[35px] mb-4 ">Shaping the Future of Business and Management</p>
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">The <span className="inter-semibold text-gray-900">International Conference on Business and Organizational Management</span> is a prestigious academic and professional gathering that brings together thought leaders, researchers, industry experts, and policymakers from around the world. With a focus on innovation, strategic leadership, and sustainable practices, the conference serves as a global platform for exchanging ideas, presenting cutting-edge research, and fostering meaningful collaborations. ICBOM is committed to advancing the frontiers of business knowledge and organizational excellence by addressing contemporary challenges and exploring future-focused opportunities. </p>
                <div className="lg:col-span-4 flex items-center justify-center  mt-5 ">
                    <img
                        src="/assets/images/Aboutus.jpg"
                        alt="Aboutus"
                        className="w-[359px] lg:hidden block"
                    />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 gap-6">
                    {/* Left Content */}
                    <div className="space-y-5 mt-8 lg:col-span-8">
                        {/* Point 1 */}
                        <div className="flex flex-col gap-3">
                            <p className="text-black inter-semibold text-[20px]">1. Global Platform for Innovation</p>
                            <div className="flex">
                                <BsDot className="text-black text-3xl flex-shrink-0" />
                                <p className="inter-regular text-gray-700 text-justify leading-[30px] text-base md:text-lg lg:text-[16px]">
                                    ICBOM brings together international scholars, researchers, and industry leaders to explore the latest trends and innovations in business and organizational management.
                                </p>
                            </div>
                        </div>

                        {/* Point 2 */}
                        <div className="flex flex-col gap-3">
                            <p className="text-black inter-semibold text-[20px]">2. Multidisciplinary Focus</p>
                            <div className="flex">
                                <BsDot className="text-black text-3xl flex-shrink-0" />
                                <p className="inter-regular text-gray-700 text-justify leading-[30px] text-base md:text-lg lg:text-[16px]">
                                    Covers a broad range of topics, including leadership, strategy, entrepreneurship, organizational behavior, digital business, and sustainability.
                                </p>
                            </div>
                        </div>

                        {/* Point 3 */}
                        <div className="flex flex-col gap-3">
                            <p className="text-black inter-semibold text-[20px]">3. Networking and Collaboration</p>
                            <div className="flex">
                                <BsDot className="text-black text-3xl flex-shrink-0" />
                                <p className="inter-regular text-gray-700 text-justify leading-[30px] text-base md:text-lg lg:text-[16px]">
                                    Facilitates professional networking, idea exchange, and future research collaborations among global participants. Selected papers are considered for publication in reputed journals, offering participants academic visibility and impact.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="lg:col-span-4 flex items-center justify-center  lg:mt-0 ">
                        <img
                            src="/assets/images/Aboutus.jpg"
                            alt="Aboutus"
                            className="w-[359px] lg:block hidden"
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Aboutus