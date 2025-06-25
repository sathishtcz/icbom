import { PiCursorClick, PiCursorClickDuotone, PiCursorClickLight } from "react-icons/pi";
import { Link } from "react-router-dom";


function Register() {
    return (
        <>
            <div className=" mt-15">
                <div className="bg-[url('/assets/images/banner.jpg')] bg-cover ">
                    <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto flex justify-start  items-start px-3">
                        <div className="flex flex-col items-start   py-8  gap-5">
                            <p className="hanuman-semibold text-white text-2xl  lg:text-3xl ">Fuel Your Business Brainpower at ICBOM</p>
                            <p className="inter-regular text-gray-200 sm:text-base md:text-lg lg:text-[16px]  leading-[30px] max-w-[45rem] text-justify">ICBOM is committed to advancing the frontiers of business knowledge and organizational excellence by addressing contemporary challenges and exploring future-focused opportunities. </p>
                            <div className="self-center lg:self-start  lg:mt-0">
                                <Link to="/paper-submission">
                                    <button className="bg-gradient-to-r from-[#176E68] to-[#26B07C] hanuman-medium text-xl text-white transition-all duration-200 rounded-md px-3 py-2 cursor-pointer flex gap-2 items-center">
                                        Register Here <PiCursorClickDuotone className="text-xl animate-ping" />
                                    </button>
                                </Link>
                            </div>

                            <div className="grid grid-cols-2 gap-6 mx-auto lg:mx-0">
                                <div className="relative rounded-md border-2 border-white lg:px-17 px-7 py-2">
                                    <div className="absolute inset-0 bg-[#000000] opacity-10"></div>
                                    <div className="flex flex-col justify-between items-center">
                                        <div><img src="/assets/images/Crowd.png" alt="Crowd" className="w-15 h-15 flex-shrink-0" /></div>
                                        <p className="inter-semibold text-white lg:text-4xl text-2xl">500+</p>
                                        <p className="inter-regular text-white sm:text-base md:text-lg lg:text-[16px]">Attendees</p>
                                    </div>
                                </div>
                                <div className="relative rounded-md border-2 border-white lg:px-17 px-7 py-2">
                                    <div className="absolute inset-0 bg-[#000000] opacity-10"></div>
                                    <div className="flex flex-col justify-between items-center">
                                        <div><img src="/assets/images/Globe.png" alt="Crowd" className="w-15 h-15 flex-shrink-0 w" /></div>
                                        <p className="inter-semibold text-white lg:text-4xl text-2xl">500+</p>
                                        <p className="inter-regular text-white sm:text-base md:text-lg lg:text-[16px]">Attendees</p>
                                    </div>
                                </div>
                                <div className="relative rounded-md border-2 border-white lg:px-17 px-7 py-2">
                                    <div className="absolute inset-0 bg-[#000000] opacity-10"></div>
                                    <div className="flex flex-col justify-between items-center">
                                        <div><img src="/assets/images/Papers.png" alt="Crowd" className="w-13 h-15 flex-shrink-0" /></div>
                                        <p className="inter-semibold text-white lg:text-4xl text-2xl">500+</p>
                                        <p className="inter-regular text-white sm:text-base md:text-lg lg:text-[16px]">Attendees</p>
                                    </div>
                                </div>
                                <div className="relative rounded-md border-2 border-white lg:px-17 px-7 py-2">
                                    <div className="absolute inset-0 bg-[#000000] opacity-10"></div>
                                    <div className="flex flex-col justify-between items-center">
                                        <div><img src="/assets/images/Calendar.png" alt="Crowd" className="w-13 h-15 flex-shrink-0" /></div>
                                        <p className="inter-semibold text-white lg:text-4xl text-2xl">500+</p>
                                        <p className="inter-regular text-white sm:text-base md:text-lg lg:text-[16px]">Attendees</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register