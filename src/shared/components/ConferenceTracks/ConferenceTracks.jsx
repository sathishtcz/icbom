import { Link } from "react-router-dom";

export default function ConferenceTracks() {
    return (
        <>
            <div className="mt-30 text-center">
                <div className="flex flex-col  ">
                    <div className="flex flex-row justify-center gap-2 items-center ">
                        <div className='h-[3px] bg-[#1C826E] w-[60px]' />
                        <h3 className='hanuman-semibold text-[25px] lg:text-[40px] text-[#1C826E]'>Conference Tracks</h3>
                        <div className='h-[3px] bg-[#1C826E] w-[60px]' />
                    </div>
                    <div className="flex space-x-2 justify-center  inter-medium">
                        <p>
                            <Link to="/" className="  text-[18px]">
                                Home
                            </Link>
                        </p>
                        <p className="  text-[18px]">/</p>
                        <p className=" text-[18px]">Conference Tracks</p>
                    </div>
                </div>
            </div>

            <div className="xl:max-w-[1450px]  md:max-w-[920px] px-3 mx-auto mt-8 lg:mt-15">
                <p className="hanuman-bold text-[#1C826E] text-[25px] lg:text-[35px] mb-4 ">Academic and Industry Focus Areas</p>
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">The  <span className="inter-semibold text-gray-900">International Conference on Business and Organizational Management</span> offers a wide range of thoughtfully curated tracks that reflect the dynamic and interdisciplinary nature of modern business practices and organizational challenges. Each track is designed to spark meaningful discussion, present cutting-edge research, and foster collaborative learning across academic and professional communities.</p>
            </div>

            <div className="xl:max-w-[1450px]  md:max-w-[920px] px-3 mx-auto mt-8 lg:mt-12">
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 items-center '>
                    <div className="col-span-3 lg:block hidden">
                        <img className="w-[450px]  rounded-lg" src='/assets/images/Conference.jpg' alt='Tracks' />
                    </div>


                    <div className='lg:col-span-9 flex flex-col gap-6'>
                        <div className="flex items-center gap-4">
                            <p className="text-8xl hanuman-semibold text-gray-300">1</p>
                            <div className="space-y-1">
                                <p className=" text-[#1C826E] hanuman-semibold text-xl lg:text-2xl ">Strategic Management and Leadership</p>
                                <p className="text-gray-700 text-justify ">Exploring frameworks, tools, and practices for developing visionary leadership and sustainable strategic decision-making.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <p className="text-8xl hanuman-semibold text-gray-300">2</p>
                            <div className="space-y-1">
                                <p className=" text-[#1C826E] hanuman-semibold text-xl  lg:text-2xl">Startups and Innovation</p>
                                <p className="text-gray-700 text-justify">Focusing on entrepreneurial ecosystems, startup growth models, disruptive innovation, and digital business ventures.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <p className="text-8xl hanuman-semibold text-gray-300">3</p>
                            <div className="space-y-1">
                                <p className=" text-[#1C826E] hanuman-semibold text-xl lg:text-2xl ">Financial Management</p>
                                <p className="text-gray-700 text-justify">Examining financial planning, investment strategies, risk management, ethical governance, and sustainable finance.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <p className="text-8xl hanuman-semibold text-gray-300">4</p>
                            <div className="space-y-1">
                                <p className=" text-[#1C826E] hanuman-semibold text-xl lg:text-2xl ">Organizational Development</p>
                                <p className="text-gray-700 text-justify">Addressing talent acquisition, leadership development, diversity and inclusion, remote work, and evolving HR trends.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
