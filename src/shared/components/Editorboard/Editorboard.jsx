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
                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-5 mt-13 max-w-[60rem] mx-auto h-full bg-white md:p-8 p-4 rounded-lg">
                        {[
                            {
                                name: "Ashok Kumar",
                                university: "Skyline University",
                                location: "Nigeria"
                            },
                            {
                                name: "Yanyan Huang",
                                university: " Hubei University of Technology",
                                location: "China"
                            },

                            {
                                name: "Qian Liu",
                                university: "Krirk University",
                                location: "Thailand"
                            },
                            {
                                name: "Zhao Qianyi",
                                university: "Jinan University",
                                location: "China"
                            },
                            {
                                name: "Ameer Hamza",
                                university: "HITEC University",
                                location: "Pakistan"
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
                                name: "Minhaz Uddin Emon",
                                university: "Daffodil International University",
                                location: "Bangladesh"
                            },
                            {
                                name: "Wu Xiaojun",
                                university: "Third Military Medical University",
                                location: "China"
                            },
                            {
                                name: "Ali A. Abdul saeed",
                                university: "Wasit University",
                                location: "Iraq"
                            },
                            {
                                name: "Abraham Musa Peter",
                                university: "Federal University Lokoja",
                                location: "Nigeria"
                            },
                            {
                                name: "Qianyun Zheng",
                                university: "Xi’an Peihua University",
                                location: "China"
                            },
                            // {
                            //     name: "Ahmed Rimaz Faizabadi",
                            //     university: "Unmanned Technologies",
                            //     location: "Malaysia"
                            // },
                            {
                                name: "Daniel Ekpenyong Asuquo",
                                university: "University of Uyo",
                                location: "Nigeria"
                            },

                            {
                                name: "Maryam Anwer",
                                university: " Majma University",
                                location: "Saudi Arabia"
                            },
                            {
                                name: "Zhao Qianyi",
                                university: "Jinan University",
                                location: "China "
                            },


                            {
                                name: "Karima Benhamza",
                                university: "University of Guelma",
                                location: "Algeria"
                            },


                            {
                                name: "Sapna Juneja",
                                university: "KIET Group of Institutions",
                                location: "India "
                            },
                            {
                                name: "Junaid Ahmed",
                                university: "Zhengzhou University",
                                location: "China "
                            },

                            {
                                name: "Aria Hendrawan",
                                university: "University of Semarang",
                                location: "Indonesia"
                            },

                            {
                                name: "Hung Nguyen",
                                university: "Nha Trang University",
                                location: "Vietnam"
                            },
                            {
                                name: "B. Mohammed",
                                university: "Al - Madinah International University",
                                location: "Malaysia"
                            },
                            {
                                name: "Zahra Rezaei",

                                university: "Judiciary Research Institute",
                                location: "Iran"
                            },
                            {
                                name: "Zonghai Wang",
                                university: "Nanjing Agricultural University",
                                location: "China"
                            },

                            {
                                name: "Awder Omar Abdulqadir",
                                university: " University of Halabja",
                                location: "Iraq"
                            },

                            {
                                name: "Hua Qu",
                                university: "Tianjin Medical University",
                                location: "China"
                            },

                            {
                                name: "Syed Asim Ali Shah",
                                university: "Bahria University",
                                location: "Pakistan"
                            },

                            {
                                name: "Mohammad Tolou Askari",
                                university: "Islamic Azad University",
                                location: "Iran"
                            },

                            {
                                name: "Masoud Asghari",
                                university: "University of Maragheh",
                                location: "Iran"
                            },
                            {
                                name: "Ahmed Alkhayyat",
                                university: "The Islamic University",
                                location: "Iraq"
                            },

                            {
                                name: "Hea Choon Ngo",
                                university: "Universiti Teknikal Malaysia Melaka",
                                location: "Malaysia"
                            },

                            {
                                name: "Elegbeleye Femi Abiodun",
                                university: "Walter Sisulu University",
                                location: "South Africa"
                            },



                            // {
                            //     name: "Ernesto Carrillo Arellano",
                            //     department: "Department of Electronics Engineering",
                            //     university: "Universidad Autónoma Metropolitana",
                            //     location: "Mexico"
                            // },

                            // {
                            //     name: "Leo John Baptist",
                            //     department: "Department of Information Technology",
                            //     university: "Botho University",
                            //     location: "Botswana"
                            // },
                            // {
                            //     name: "Rodrigo Augusto Ricco",
                            //     department: "Associate Professor",
                            //     university: " Federal University of Ouro Preto",
                            //     location: "Brazil"
                            // },
                            // {
                            //     name: "Qiushi Yang",
                            //     department: "Department of Electronic Engineering",
                            //     university: "City University of Hong Kong",
                            //     location: "China"
                            // },

                            // {
                            //     name: "Thendral Puyalnithi",
                            //     department: "Assistant professor, Department of Computer Science and Engineering",
                            //     university: " Kalasalingam Academy of Research and Education",
                            //     location: "India"
                            // },

                            // {
                            //     name: "Minhaz Uddin Emon",
                            //     department: " Department of Computer Science",
                            //     university: "Pattimura University",
                            //     location: "Indonesia"
                            // },
                            // {
                            //     name: "Joseph M. Mom",
                            //     department: "Department of Electrical and Electronics Engineering",
                            //     university: "Joseph Sarwuan Tarka University",
                            //     location: "Nigeria"
                            // },
                            // {
                            //     name: "Sathish kumar M",
                            //     department: "Assistant Professor, Department of computer application",
                            //     university: " Hindustan Institute of Technology and Science",
                            //     location: "India"
                            // },
                            // {
                            //     name: "Minhaz Uddin Emon",
                            //     department: " Department of Computer Science",
                            //     university: "Pattimura University",
                            //     location: "Indonesia"
                            // },
                            // {
                            //     name: "D.Angeline Benitta",
                            //     department: " Assistant Professor, Department of Computer Applications",
                            //     university: "Hindustan Institute of Technology and Science",
                            //     location: "India"
                            // },

                            // {
                            //     name: "Sirajuddin Qureshi",
                            //     department: "Faculty of Information Technology",
                            //     university: "Beijing University of Technology",
                            //     location: "China"
                            // },
                            // {
                            //     name: "Muhammad Suleman Memon",
                            //     department: "Department of Information Technology",
                            //     university: "University of Sindh",
                            //     location: "Pakistan"
                            // },
                            // {
                            //     name: "Collins N. Udanor",
                            //     department: "Department of Computer Science",
                            //     university: "University of Nigeria",
                            //     location: "Nigeria"
                            // },
                            // {
                            //     name: "Arindom Kundu",
                            //     department: " Department of Computer science and engineering",
                            //     university: "Daffodil International University",
                            //     location: "Bangladesh"
                            // },

                            // {
                            //     name: "Ijegwa David Acheme",
                            //     department: "Department of Computer Science",
                            //     university: "Edo State University",
                            //     location: "Nigeria"
                            // },
                            // {
                            //     name: "Jawwad Sami Ur Rahman",
                            //     department: "Department of Biomedical Engineering",
                            //     university: "Riphah International University",
                            //     location: "Pakistan"
                            // },

                            // {
                            //     name: "Tahir Abbas",
                            //     department: "Department of Computer Science",
                            //     university: "TIMES Institute",
                            //     location: "Pakistan"
                            // },

                            // {
                            //     name: "Hansi Gunasinghe",
                            //     department: "Department of Computing and Information Systems",
                            //     university: "Sabaragamuwa University",
                            //     location: "Sri Lanka"
                            // },
                            // {
                            //     name: "Tehreem Qasim",
                            //     department: "Department of Robotics and Artificial Intelligence",
                            //     university: "SZABIST University",
                            //     location: "Pakistan"
                            // },
                        ].map((speaker, index) => (
                            <div key={index} className="relative flex flex-col   ">
                                {/* Card */}
                                <div className="  w-full     h-full">
                                    <p className=" ">
                                        <span className="  text-black text-lg font-semibold  ">Dr. {speaker.name},</span>  {speaker.university},  {speaker.location}
                                    </p>
                                    {/* <div className="flex flex-col gap-2 mt-3">
                                        {(speaker.department && <p className="  text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-start ">
                                              {speaker.department}
                                        </p>)}

                                        <p className="  text-gray-700 sm:text-base md:text-lg lg:text-[16px]  text-start  ">
                                              {speaker.university}
                                        </p>
                                        <div className="flex gap-2">
                                            <div className="text-gray-700 sm:text-base md:text-lg lg:text-[16px]">
                                                 {speaker.location}
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>


        </>
    )
}
