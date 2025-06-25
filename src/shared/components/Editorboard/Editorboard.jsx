import { Link } from "react-router-dom";


export default function Editorboard() {
    return (
        <>

            <div className="mt-30 text-center">
                <div className="flex flex-col  ">
                    <div className="flex flex-row justify-center gap-2 items-center ">
                        <div className='h-[3px] bg-[#1C826E] w-[60px]' />
                        <h3 className='hanuman-semibold text-[25px] lg:text-[40px] text-[#1C826E]'>Editorial Board</h3>
                        <div className='h-[3px] bg-[#1C826E] w-[60px]' />
                    </div>
                    <div className="flex space-x-2 justify-center  inter-medium">
                        <p>
                            <Link to="/" className="  text-[18px]">
                                Home
                            </Link>
                        </p>
                        <p className="  text-[18px]">/</p>
                        <p className=" text-[18px]">Editorial Board</p>
                    </div>
                </div>
            </div>

            <div className="xl:max-w-[1450px]  md:max-w-[920px] px-3 mx-auto mt-8 lg:mt-15">
                <p className="hanuman-bold text-[#1C826E] text-[25px] lg:text-[35px] mb-4 ">Upholding Academic Excellence and Integrity</p>
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">The Editorial Board of the <span className="inter-semibold text-gray-900">International Conference on Business and Organizational Management</span>  comprises a distinguished panel of scholars, researchers, and academic leaders from renowned institutions across the globe. Tasked with maintaining the highest standards of academic integrity, the board plays a critical role in shaping the intellectual direction of the conference. Our board members bring a wealth of expertise across diverse disciplines in business, economics, human resources, and innovation. Their combined insights and experience ensure that all submitted research undergoes a rigorous peer-review process, fostering quality, relevance, and originality.</p>
            </div>

            <div className="px-3 lg:mt-18 mt-10 bg-[#82D1C9]">
                <div className="xl:max-w-[1430px]  md:max-w-[920px] mx-auto py-8">
                    <h3 className="hanuman-semibold text-[25px] lg:text-[35px] text-black text-center">Editorial Minds of ICBOM</h3>
                    <p className="inter-regular text-black sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-3">Our board members bring a wealth of expertise across diverse disciplines in business, economics, organizational behavior, strategic management, marketing, finance, human resources, and innovation. Their combined insights and experience ensure that all submitted research undergoes a rigorous peer-review process, fostering quality, relevance, and originality.</p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-13 max-w-[80rem] mx-auto h-full">
                        {[
                            {
                                name: "V Srinivasa Naresh",
                                institution: "Sri Vasavi Engineering College",
                                country: "India",
                                image: "/assets/images/Speaker.png"
                            },
                            {
                                name: "Sangar Gopal",
                                institution: "SRM Institute of Science and Technology",
                                country: "India",
                                image: "/assets/images/Speaker.png"
                            },
                            {
                                name: "Xi Zhang",
                                institution: "University of KU Leuven",
                                country: "Belgium",
                                image: "/assets/images/Speaker.png"
                            }
                        ].map((speaker, index) => (
                            <div key={index} className="relative flex flex-col items-center mt-20">
                                {/* Circular Icon Positioned at Top Center */}
                                <div className="absolute -top-22 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-white rounded-full border-[3px] border-[#1C826E] p-4 shadow-md">
                                        <img
                                            src={speaker.image}
                                            alt={speaker.name}
                                            className="w-35 object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Card */}
                                <div className="bg-white rounded-md shadow-[0_0_10px_rgba(0,0,0,0.15)] w-full pt-30 pb-6 px-4 text-center h-full">
                                    <p className="hanuman-medium text-black text-xl sm:text-2xl md:text-2xl lg:text-2xl">
                                        {speaker.name}
                                    </p>
                                    <div className="flex flex-col gap-2 mt-2">
                                        <p className="inter-medium text-gray-900 sm:text-base md:text-lg lg:text-[18px] text-justify leading-[30px]">
                                            {speaker.institution}
                                        </p>
                                        <div className="flex gap-2">
                                            <div className="text-gray-600">
                                                <span className="inter-medium text-md text-gray-900">Country:</span> {speaker.country}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>


        </>
    )
}
