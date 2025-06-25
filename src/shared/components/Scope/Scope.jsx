import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";


export default function Scope() {
    return (
        <>
            <div className="mt-30 text-center">
                <div className="flex flex-col  ">
                    <div className="flex flex-row justify-center gap-2 items-center ">
                        <div className='h-[3px] bg-[#1C826E] w-[60px]' />
                        <h3 className='hanuman-semibold text-[25px] lg:text-[40px] text-[#1C826E]'>Our Scope</h3>
                        <div className='h-[3px] bg-[#1C826E] w-[60px]' />
                    </div>
                    <div className="flex space-x-2 justify-center  inter-medium">
                        <p>
                            <Link to="/" className="  text-[18px]">
                                Home
                            </Link>
                        </p>
                        <p className="  text-[18px]">/</p>
                        <p className=" text-[18px]">Our Scope</p>
                    </div>
                </div>
            </div>


            <div className="xl:max-w-[1450px]  md:max-w-[920px] px-3 mx-auto mt-8 lg:mt-15">
                <p className="hanuman-bold text-[#1C826E] text-[25px] lg:text-[35px] mb-4 ">Exploring the Dimensions of Business and Organizational Management</p>
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">The <span className="inter-semibold text-gray-900">International Conference on Business and Organizational Management</span>  serves as a dynamic and inclusive platform dedicated to the exploration, exchange, and advancement of ideas in the ever-evolving world of business and organizational studies. As global economies and organizational landscapes undergo rapid transformation, ICBOM stands at the forefront, uniting academics, researchers, industry experts, policy makers, and thought leaders to address the most pressing challenges and opportunities shaping today’s business environment.</p>
                <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 gap-6">

                    {/* left Image */}
                    <div className="lg:col-span-4 flex items-center justify-center mt-8">
                        <img
                            src="/assets/images/Mission.jpg"
                            alt="Aboutus"
                            className="w-[359px]"
                        />
                    </div>
                    {/* right Content */}
                    <div className="space-y-5 mt-3 lg:mt-8 lg:col-span-8">
                        {/* Point 1 */}
                        <div className="flex flex-col gap-3">
                            <p className="text-black inter-semibold text-[20px]">1. Organizational Behavior and Culture</p>
                            <div className="flex">
                                <BsDot className="text-black text-3xl flex-shrink-0" />
                                <p className="inter-regular text-gray-700 text-justify leading-[30px] text-base md:text-lg lg:text-[16px]">
                                    Exploring the human aspects of organizations including motivation, communication, diversity, and change management to enhance internal effectiveness and engagement.
                                </p>
                            </div>
                        </div>

                        {/* Point 2 */}
                        <div className="flex flex-col gap-3">
                            <p className="text-black inter-semibold text-[20px]">2. Strategic Management</p>
                            <div className="flex">
                                <BsDot className="text-black text-3xl flex-shrink-0" />
                                <p className="inter-regular text-gray-700 text-justify leading-[30px] text-base md:text-lg lg:text-[16px]">
                                    Examining frameworks and tools that drive strategic decision-making, competitive advantage, and responsible leadership in today’s dynamic business environment.
                                </p>
                            </div>
                        </div>

                        {/* Point 3 */}
                        <div className="flex flex-col gap-3">
                            <p className="text-black inter-semibold text-[20px]">3. Human Resource Management</p>
                            <div className="flex">
                                <BsDot className="text-black text-3xl flex-shrink-0" />
                                <p className="inter-regular text-gray-700 text-justify leading-[30px] text-base md:text-lg lg:text-[16px]">
                                    Addressing evolving HR practices, workforce planning, leadership development, and the impact of AI and remote work on employee engagement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

