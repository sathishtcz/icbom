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
                                name: "Ernesto Carrillo Arellano",
                                department: "Department of Electronics Engineering",
                                university: "Universidad Autónoma Metropolitana",
                                location: "Mexico"
                            },
                            {
                                name: "Qianyun Zheng",
                                university: "Xi’an Peihua University",
                                location: "China"
                            },
                            {
                                name: "Leo John Baptist",
                                department: "Department of Information Technology",
                                university: "Botho University",
                                location: "Botswana"
                            },
                            {
                                name: "Rodrigo Augusto Ricco",
                                department: "Associate Professor",
                                university: " Federal University of Ouro Preto",
                                location: "Brazil"
                            },
                            {
                                name: "Qiushi Yang",
                                department: "Department of Electronic Engineering",
                                university: "City University of Hong Kong",
                                location: "China"
                            },
                            {
                                name: "K. Ramesh",
                                university: "V.R.S. College of Engineering and Technology",
                                location: "India"
                            },
                            {
                                name: "Waseem",
                                university: "Jiangsu University",
                                location: "China"
                            },
                            {
                                name: "Thendral Puyalnithi",
                                department: "Assistant professor, Department of Computer Science and Engineering",
                                university: " Kalasalingam Academy of Research and Education",
                                location: "India"
                            },
                            {
                                name: "Minhaz Uddin Emon",
                                university: "Daffodil International University",
                                location: "Bangladesh"
                            },
                            {
                                name: "Minhaz Uddin Emon",
                                department: " Department of Computer Science",
                                university: "Pattimura University",
                                location: "Indonesia"
                            },
                            {
                                name: "Joseph M. Mom",
                                department: "Department of Electrical and Electronics Engineering",
                                university: "Joseph Sarwuan Tarka University",
                                location: "Nigeria"
                            },
                            {
                                name: "Sathish kumar M",
                                department: "Assistant Professor, Department of computer application",
                                university: " Hindustan Institute of Technology and Science",
                                location: "India"
                            },
                            {
                                name: "Minhaz Uddin Emon",
                                department: " Department of Computer Science",
                                university: "Pattimura University",
                                location: "Indonesia"
                            },
                            {
                                name: "D.Angeline Benitta",
                                department: " Assistant Professor, Department of Computer Applications",
                                university: "Hindustan Institute of Technology and Science",
                                location: "India"
                            },
                            {
                                name: "Ali A.Abdul saeed",
                                university: "Wasit University",
                                location: "Iraq"
                            },
                            {
                                name: "Abraham Musa Peter ",
                                university: "Federal University Lokoja",
                                location: "Nigeria"
                            },
                            {
                                name: "Ahmed Rimaz Faizabadi",
                                university: "Unmanned Technologies",
                                location: "Malaysia"
                            },
                            {
                                name: "Sirajuddin Qureshi",
                                department: "Faculty of Information Technology",
                                university: "Beijing University of Technology",
                                location: "China"
                            },
                               {
                                name: "Muhammad Suleman Memon",
                                department: "Department of Information Technology",
                                university: "University of Sindh",
                                location: "Pakistan"
                            },
                            {
                                name: "Collins N. Udanor",
                                department: "Department of Computer Science",
                                university: "University of Nigeria",
                                location: "Nigeria"
                            },
                            {
                                name: "Arindom Kundu",
                                department: " Department of Computer science and engineering",
                                university: "Daffodil International University",
                                location: "Bangladesh"
                            },
                            {
                                name: "Daniel Ekpenyong Asuquo",
                                university: "University of Uyo",
                                location: "Nigeria"
                            },
                            {
                                name: "Ameer Hamza",
                                university: "HITEC University",
                                location: "Pakistan"
                            },
                            {
                                name: "Ijegwa David Acheme",
                                department: "Department of Computer Science",
                                university: "Edo State University",
                                location: "Nigeria"
                            },
                            {
                                name: "Jawwad Sami Ur Rahman",
                                department: "Department of Biomedical Engineering",
                                university: "Riphah International University",
                                location: "Pakistan"
                            },
                            {
                                name: "Maryam Anwer",
                                university: " Majma University",
                                location: "Saudi Arabia"
                            },
                            {
                                name: "Tahir Abbas",
                                department: "Department of Computer Science",
                                university: "TIMES Institute",
                                location: "Pakistan"
                            },

                            {
                                name: "Hansi Gunasinghe",
                                department: "Department of Computing and Information Systems",
                                university: "Sabaragamuwa University of Sri Lanka",
                                location: "Sri Lanka"
                            },
                            {
                                name: "Tehreem Qasim",
                                department: "Department of Robotics and Artificial Intelligence",
                                university: "SZABIST University",
                                location: "Pakistan"
                            },
                            {
                                name: "Maryam Anwer",
                                university: " Majma University",
                                location: "Saudi Arabia"
                            },

                        ].map((speaker, index) => (
                            <div key={index} className="relative flex flex-col items-center  ">


                                {/* Card */}
                                <div className="bg-white rounded-md shadow-[0_0_10px_rgba(0,0,0,0.15)] w-full  p-6 text-center h-full">
                                    <p className="hanuman-medium text-black text-xl sm:text-2xl md:text-2xl lg:text-2xl">
                                        Dr. {speaker.name}
                                    </p>
                                    <div className="flex flex-col gap-2 mt-3">
                                        {(speaker.department && <p className="  text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-start ">
                                            <span className="inter-semibold text-md text-gray-900">Department:</span>   {speaker.department}
                                        </p>)}

                                        <p className="  text-gray-700 sm:text-base md:text-lg lg:text-[16px]  text-start  ">
                                            <span className="inter-semibold text-md text-gray-900">University:</span>  {speaker.university}
                                        </p>
                                        <div className="flex gap-2">
                                            <div className="text-gray-700 sm:text-base md:text-lg lg:text-[16px]">
                                                <span className="inter-semibold text-md text-gray-900">Country:</span> {speaker.location}
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
