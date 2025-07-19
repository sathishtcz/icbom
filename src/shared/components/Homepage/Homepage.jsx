import { PiCalendarCheckFill } from "react-icons/pi";
import { IoLocationSharp, IoNewspaperOutline } from "react-icons/io5";
import { IoIosAlarm } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import { RxSpeakerLoud } from "react-icons/rx";
import { RiLightbulbFlashLine } from "react-icons/ri";

function Homepage() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#176E68] to-[#26B07C] lg:h-[42rem] flex items-center">
        <div className="w-full xl:max-w-[1450px]  md:max-w-[920px] mx-auto mt-23 lg:px-3 px-3 py-3 relative">
          <div className="">
            <div className="flex flex-col lg:gap-12 gap-7">
              <h1 className="hanuman-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight lg:leading-[60px] text-white xl:max-w-[48rem]">International Conference on Business and Organizational Management</h1>
              <div className=" lg:hidden block flex items-center justify-center">
                <img src="assets/images/Hero.png" alt="image1" className=" md:w-[500px] w-[250px] rounded-lg " loading='lazy' />

                <div className="flex items-center justify-center relative">
                  <div className="absolute md:bottom-45 md:-ml-10 bottom-23 -ml-9">
                    <svg className="w-25 h-25 md:w-40 md:h-40" viewBox="0 0 200 200">
                      <circle cx="100" cy="100" r="90" fill="#FFFFFF" className="drop-shadow-lg" stroke="#26AD7C"
                        strokeWidth="8" />
                      <defs>
                        <path id="top-circle" d="M 30,100 A 70,70 0 0,1 170,100" />
                        <path id="bottom-circle" d="M 170,100 A 70,70 0 0,1 30,100" />
                      </defs>

                      <g className="animate-spin" style={{ transformOrigin: '100px 100px', animationDuration: '10s' }}>
                        <text className="fill-black font-bold text-lg tracking-widest">
                          <textPath href="#top-circle" startOffset="50%" textAnchor="middle">
                            ICBOM 2025
                          </textPath>
                        </text>
                        <text className="fill-black font-bold text-lg tracking-widest">
                          <textPath href="#bottom-circle" startOffset="50%" textAnchor="middle">
                            CHENNAI
                          </textPath>
                        </text>
                      </g>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img src="/assets/images/Trophy.png" alt="Trophy" className="md:w-15 md:h-15 w-10 h-10" />
                    </div>
                  </div>
                </div>

              </div>
              <div className="flex flex-col gap-5 -ml-2 xl:max-w-[45rem]">
                <div className="flex flex-row ">
                  <BsDot className=" text-white text-3xl flex-shrink-0" />
                  <p className="inter-regular text-white sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">Where Ideas Meet Impact – Join the Business and Organizational Management Conference</p>
                </div>
                <div className="flex flex-row ">
                  <BsDot className=" text-white text-3xl flex-shrink-0" />
                  <p className="inter-regular text-white sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">Join global visionaries, academic leaders, industry professionals, and change-makers at the premier platform for exploring transformative ideas in business and organizational management.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 xl:max-w-[45rem] lg:gap-14 gap-8 mx-auto lg:mx-0">
                <div className="flex flex-row gap-2 items-center">
                  <RxSpeakerLoud className=" text-white text-3xl flex-shrink-0" />
                  <p className="inter-regular text-white sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">World Class Speaker</p>
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <IoNewspaperOutline className=" text-white text-3xl flex-shrink-0" />
                  <p className="inter-regular text-white sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">Research Excellence</p>
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <RiLightbulbFlashLine className=" text-white text-3xl flex-shrink-0" />
                  <p className="inter-regular text-white sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">Innovation Showcase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full xl:max-w-[1450px]  md:max-w-[920px] px-3 mx-auto relative">
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">

          <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.15)] p-5 mt-6  rounded-md">
            <div className="flex flex-col gap-4 lg:gap-8">
              <h2 className="hanuman-semibold text-center text-2xl">Date and Venue</h2>
              <div className="grid sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 mx-auto">
                <div className="bg-gradient-to-r from-[#176E68] to-[#26B07C] px-4 py-6 rounded-md">
                  <div className="flex items-center gap-2  text-white">
                    <PiCalendarCheckFill className="text-2xl md:text-5xl flex-shrink-0" />
                    <p className="text-lg lg:text-xl hanuman-semibold">31<sup>st</sup> July, 2025</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#176E68] to-[#26B07C] px-4 py-6 rounded-md">
                  <div className="flex items-center gap-2  text-white">
                    <IoLocationSharp className="text-2xl md:text-5xl flex-shrink-0" />
                    <p className="text-lg lg:text-xl hanuman-semibold">Hong Kong, China</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="xl:max-w-[1450px]  md:max-w-[920px] px-3  absolute right-0 -top-[540px] xl:block hidden">
            <img src="/assets/images/Hero.png" alt="Hero" className="2xl:w-[635px] 2xl:h-[773px] xl:w-[500px] xl:h-[773px]" />
          </div>

        </div>
      </div>

      <div className="2xl:block hidden">
        <div className="flex items-center justify-center relative">
          <div className="absolute bottom-35 ml-41">
            <svg className="w-40 h-40" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="90" fill="#FFFFFF" className="drop-shadow-lg" stroke="#26AD7C"
                strokeWidth="8" />
              <defs>
                <path id="top-circle" d="M 30,100 A 70,70 0 0,1 170,100" />
                <path id="bottom-circle" d="M 170,100 A 70,70 0 0,1 30,100" />
              </defs>

              <g className="animate-spin" style={{ transformOrigin: '100px 100px', animationDuration: '10s' }}>
                <text className="fill-black font-bold text-lg tracking-widest">
                  <textPath href="#top-circle" startOffset="50%" textAnchor="middle">
                    ICBOM 2025
                  </textPath>
                </text>
                <text className="fill-black font-bold text-lg tracking-widest">
                  <textPath href="#bottom-circle" startOffset="50%" textAnchor="middle">
                    HONG KONG, CHINA
                  </textPath>
                </text>
              </g>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <img src="/assets/images/Trophy.png" alt="Trophy" className="w-15 h-15" />
            </div>
          </div>
        </div>
      </div>



      {/* About the Conference */}
      <div className="lg:mt-18 mt-10 text-center">
        <div className="flex flex-row justify-center gap-2 items-center ">
          <div className='h-[3px] bg-[#1C826E] w-[60px]' />
          <h3 className='hanuman-semibold text-[25px] lg:text-[35px] text-[#1C826E]'>About Us</h3>
          <div className='h-[3px] bg-[#1C826E] w-[60px]' />
        </div>
      </div>
      <div className="xl:max-w-[1450px]  md:max-w-[920px] px-3 mx-auto mt-3">
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


      {/*Our Mission*/}
      <div className="lg:mt-18 mt-10 text-center">
        <div className="flex flex-row justify-center gap-2 items-center ">
          <div className='h-[3px] bg-[#1C826E] w-[60px]' />
          <h3 className='hanuman-semibold text-[25px] lg:text-[35px] text-[#1C826E]'>Our Mission</h3>
          <div className='h-[3px] bg-[#1C826E] w-[60px]' />
        </div>
      </div>
      <div className="xl:max-w-[1450px]  md:max-w-[920px] px-3 mx-auto mt-3">
        <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">At the <span className="inter-semibold text-gray-900">International Conference on Business and Organizational Management</span>  , our mission is to cultivate a dynamic and forward-thinking ecosystem where academic excellence and industry innovation intersect. We envision a world where collaborative knowledge and practical insight drive meaningful progress in business practices, organizational strategy, and leadership development. We are committed to empowering individuals, academic institutions, and industry organizations by promoting ethical leadership, strategic innovation, and sustainable growth. ICBOM strives to be more than just an event — it is a movement toward building a smarter, more agile, and socially responsible business ecosystem for the future.</p>
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
              <p className="text-black inter-semibold text-[20px]">1. Advance Academic Research</p>
              <div className="flex">
                <BsDot className="text-black text-3xl flex-shrink-0" />
                <p className="inter-regular text-gray-700 text-justify leading-[30px] text-base md:text-lg lg:text-[16px]">
                  Promote high-quality, impactful research that addresses emerging trends, challenges, and opportunities in business and organizational studies. ICBOM encourages scholars to explore interdisciplinary perspectives, and global challenges.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex flex-col gap-3">
              <p className="text-black inter-semibold text-[20px]">2. Global Collaboration</p>
              <div className="flex">
                <BsDot className="text-black text-3xl flex-shrink-0" />
                <p className="inter-regular text-gray-700 text-justify leading-[30px] text-base md:text-lg lg:text-[16px]">
                  ICBOM believes in the power of collaboration beyond borders. We bring together a diverse community of academics, business professionals, policy experts, and students from around the world to share ideas and best practices.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex flex-col gap-3">
              <p className="text-black inter-semibold text-[20px]">3. Strategic Leadership</p>
              <div className="flex">
                <BsDot className="text-black text-3xl flex-shrink-0" />
                <p className="inter-regular text-gray-700 text-justify leading-[30px] text-base md:text-lg lg:text-[16px]">
                  We recognize the vital role of leadership in shaping ethical, sustainable, and forward-looking organizations. ICBOM promotes values-driven leadership by encouraging open dialogue on integrity, transparency, accountability, and social responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <div className="px-3 lg:mt-18 mt-10 bg-[#82D1C9]">
        <div className="xl:max-w-[1430px]  md:max-w-[920px] mx-auto py-8">
          <h3 className="hanuman-semibold text-[25px] lg:text-[35px] text-black text-center">Our Featured Speaker</h3>
          <p className="inter-regular text-black sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-3">We are honored to welcome our Featured Speaker, a globally respected thought leader in business and organizational management. With a distinguished career marked by groundbreaking research, visionary leadership, and impactful contributions to industry and academia, our speaker brings a wealth of knowledge and experience to the conference.</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-13">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="relative flex flex-col items-center mt-20">
                Circular Icon Positioned at Top Center
                <div className="absolute -top-22 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white rounded-full border-[3px] border-[#1C826E] p-4 shadow-md ">
                    <img src="/assets/images/Speaker.png" alt="Speaker" className="w-35 object-contain" />
                  </div>
                </div>

                Card
                <div className="mx-auto bg-[#1C826E] rounded-md h-full w-full">
                  <div className="bg-white rounded-tr-[60px] rounded-br-[60px] rounded-tl-[60px] rounded-bl-[60px] shadow-[0_0_10px_rgba(0,0,0,0.15)] w-full pt-30 pb-6 px-4 text-center">
                    <p className="hanuman-semibold text-black text-xl sm:text-2xl md:text-2xl lg:text-3xl">
                      John Matthews
                    </p>
                    <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-black mt-2">
                      Senior Research Analyst
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div> */}
      {/* Join Us at ICBOM 2025 */}
      <div className="lg:mt-14 mt-10 text-center">
        <div className="flex flex-row justify-center gap-2 items-center ">
          <div className='h-[3px] bg-[#1C826E] w-[60px]' />
          <h3 className='hanuman-semibold text-[25px] lg:text-[40px] text-[#1C826E]'>ICBOM 2025</h3>
          <div className='h-[3px] bg-[#1C826E] w-[60px]' />
        </div>
      </div>
      <div className="max-w-[70rem] mx-auto px-3">
        <div className="grid grid-cols-1 lg:grid-cols-3  place-items-center mt-8 gap-7  h-full w-full">
          <div className=" mx-auto bg-[#1C826E] rounded-md h-full w-full">
            <div className="bg-white rounded-tl-[60px] rounded-br-[60px] py-5  border-2 border-[#1C826E] ">
              <div className="flex flex-row items-center gap-2 px-7">
                <IoLocationSharp className='text-4xl text-[#1C826E]' />
                <div className="flex flex-col gap-2">
                  <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-gray-700">Location</p>
                  <p className="inter-medium sm:text-base md:text-lg lg:text-[16px] text-black">Hong Kong, China</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" mx-auto bg-[#1C826E] rounded-md h-full w-full">
            <div className="bg-white rounded-tl-[60px] rounded-br-[60px]  py-5 border-2 border-[#1C826E] ">
              <div className="flex flex-row items-center gap-2 px-7">
                <PiCalendarCheckFill className='text-4xl text-[#1C826E]' />
                <div className="flex flex-col gap-2">
                  <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-gray-700">Date</p>
                  <p className="inter-medium sm:text-base md:text-lg lg:text-[16px] text-black">31<sup>st</sup> July, 2025</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" mx-auto bg-[#1C826E] rounded-md h-full w-full">
            <div className="bg-white rounded-tl-[60px] rounded-br-[60px] py-5  border-2 border-[#1C826E] ">
              <div className="flex flex-row items-center gap-2 px-7">
                <IoIosAlarm className='text-4xl text-[#1C826E]' />
                <div className="flex flex-col gap-2">
                  <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-gray-700">Duration</p>
                  <p className="inter-medium sm:text-base md:text-lg lg:text-[16px] text-black">9:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage