import { Link } from "react-router-dom";

export default function Organizingcommittee() {
  return (
    <>
      <div className="mt-30 text-center">
        <div className="flex flex-col  ">
          <div className="flex flex-row justify-center gap-2 items-center ">
            <div className='h-[3px] bg-[#1C826E] w-[60px]' />
            <h3 className='hanuman-semibold text-[25px] lg:text-[40px] text-[#1C826E]'>Organizing Committee</h3>
            <div className='h-[3px] bg-[#1C826E] w-[60px]' />
          </div>
          <div className="flex space-x-2 justify-center  inter-medium">
            <p>
              <Link to="/" className="  text-[18px]">
                Home
              </Link>
            </p>
            <p className="  text-[18px]">/</p>
            <p className=" text-[18px]">Organizing Committee</p>
          </div>
        </div>
      </div>

      <div className="xl:max-w-[1450px]  md:max-w-[920px] px-3 mx-auto mt-8 lg:mt-15">
        <p className="hanuman-bold text-[#1C826E] text-[25px] lg:text-[35px] mb-4 ">Meet the Minds Behind ICBOM 2025 </p>
        <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">The Organizing Committee of the <span className="inter-semibold text-gray-900">International Conference on Business and Organizational Management</span> is a dedicated team of professionals, academicians, and institutional leaders responsible for planning, executing, and overseeing every aspect of the conference. Their collective efforts ensure the smooth coordination of logistics, programming, communication, and delegate engagement throughout the event. The Organizing Committee collaborates closely with the Editorial Board, sponsors, partners, and volunteers to uphold the values and mission of ICBOM.</p>
        <div className="flex flex-col gap-4 mt-7">
          <p className="text-black inter-semibold text-[20px]">Roles and Responsibilities</p>
          <div className="space-y-2">
            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">1. Develop the overall vision, structure, and timeline of the conference in alignment with the academic and professional goals of ICBOM.</p>
            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">2. Manage the budget, registration fees, and sponsorships while ensuring transparency and optimal allocation of resources.</p>
            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">3. Collect feedback from participants and stakeholders to evaluate the event’s success and identify areas for future improvement.</p>
            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">4. Ensure seamless execution of the event through real-time management of sessions, technical troubleshooting, and attendee support.</p>
          </div>       
        </div>
      </div>




{/*
      <h3 className="hanuman-bold text-[#1C826E] text-[25px] lg:text-[35px] text-center mt-8 lg:mt-15">Planning & Coordination Committee</h3>
      <div className="xl:max-w-[1150px]  md:max-w-[920px] mx-auto lg:px-3   lg:mt-8 mt-5">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 md:gap-10 lg:gap-20 p-4 ">
          {[
            ["Chairman", "Dr John Smith", "Principal", "M.E., Ph.D.", "Chennai"],
            ["Convenors", "Dr Jane Doe", "Dean", "M.Tech, Ph.D.", "Mumbai"],
            ["Coordinator", "Dr Alan Walker", "Professor", "MBA, Ph.D.", "Delhi"],
            ["Convenors", "Dr Sarah Lee", "HOD", "M.E., Ph.D.", "Hyderabad"],
          ].map(([committee, Name, position, quali, place], index) => (
            <div
              key={index}
              className="bg-[#82D1C9] rounded-lg relative flex items-start lg:justify-center gap-4 sm:gap-6 py-6 sm:py-8 md:py-10 md:pl-10 lg:pl-25 xl:pl-10 "
            >
              Profile Image Box Positioned Absolutely
              <div className="absolute -left-8 sm:-left-10 md:-left-13 top-1/2 transform -translate-y-1/2 hidden   lg:block">
                <div className="bg-white border-4 border-[#82D1C9] p-2 sm:p-3 md:p-4 rounded-lg shadow-md">
                  <img src="/assets/images/editor1.png" alt="Editor" className="w-20 sm:w-24 md:w-36" />
                </div>
              </div>

              Content
              <div className="space-y-2 pl-6 sm:pl-8 md:pl-10">
                <p className="inter-semibold  text-base md:text-lg text-gray-700">{committee}</p>
                <p className="inter-medium text-lg sm:text-xl md:text-2xl">{Name}</p>
                <p className="text-gray-700">
                  <span className="text-black inter-medium text-sm sm:text-base md:text-lg">Position</span> : {position}
                </p>
                <p className="text-gray-700">
                  <span className="text-black inter-medium text-sm sm:text-base md:text-lg">Qualification</span> : {quali}
                </p>
                <p className="text-gray-700">
                  <span className="text-black inter-medium text-sm sm:text-base md:text-lg">Location</span> : {place}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>*/}
    </>
  )
}
{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-25">
          {[
            ["Chairman", "Dr John Smith", "Principal", "M.E., Ph.D.,", "Chennai"],
            ["Convenors", "Dr John Smith", "Principal", "M.E., Ph.D.,", "Chennai"],
            ["Coordinator", "Dr John Smith", "Principal", "M.E., Ph.D.,", "Chennai"],
            ["Convenors", "Dr John Smith", "Principal", "M.E., Ph.D.,", "Chennai"],
            ["Members", "Dr John Smith", "Principal", "M.E., Ph.D.,", "Chennai"],
            ["Members", "Dr John Smith", "Principal", "M.E., Ph.D.,", "Chennai"],
          ].map(([committee, Name, position, quali, place], index) => (
            <div key={index} className="bg-white border-3 border-gray-300 rounded-lg">
              <div className="bg-[#22367C] h-48 rounded-t z-10 flex items-start justify-center">
                <p className="text-white inter-semibold text-center text-4xl mt-7">{committee}</p>
              </div>
              <div className="flex flex-col gap-3 items-center p-3 -mt-29 z-20">
                <div className="border-2 border-[#22367C] p-8 rounded-full bg-white ">
                  <img src="/assets/images/editor1.png" alt="User" className='w-30 h-32' />
                </div>
                <p className="inter-medium text-2xl text-black">{Name}</p>
                <div className="flex flex-col gap-2"> <p className="inter-semibold text-gray-900 sm:text-base md:text-lg lg:text-[18px] text-justify leading-[30px]">Prince Mohammed Bin Fahd University</p>
                  <div className="flex gap-2">
                    <div className='text-gray-600'><span className='inter-medium text-md text-gray-900'>Position :</span> {position}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className='text-gray-600'><span className='inter-medium text-md text-gray-900'>Qualification    :</span> {quali}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className='text-gray-600'><span className='inter-medium text-md text-gray-900'>Location :</span> {place}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div> */}