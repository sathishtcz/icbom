import { BsDot } from "react-icons/bs";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Keydates() {
  return (
    <>
      <div className="mt-30 text-center">
        <div className="flex flex-col  ">
          <div className="flex flex-row justify-center gap-2 items-center ">
            <div className='h-[3px] bg-[#1C826E] w-[60px]' />
            <h3 className='hanuman-semibold text-[25px] lg:text-[40px] text-[#1C826E]'>Key Dates</h3>
            <div className='h-[3px] bg-[#1C826E] w-[60px]' />
          </div>
          <div className="flex space-x-2 justify-center  inter-medium">
            <p>
              <Link to="/" className="  text-[18px]">
                Home
              </Link>
            </p>
            <p className="  text-[18px]">/</p>
            <p className=" text-[18px]">Key Dates</p>
          </div>
        </div>
      </div>

      <div className="xl:max-w-[1450px]  md:max-w-[920px] px-3 mx-auto mt-8 lg:mt-15">
        <div className="space-y-4">
          <p className="hanuman-bold text-[#1C826E] text-[25px] lg:text-[35px] ">Countdown to ICBOM 2025</p>
          <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">Stay on track with these important milestones for the International Conference on Business and Organizational Management. This timeline highlights all the key deadlines for abstract submissions, paper reviews and acceptance, participant registrations, and final arrangements. Whether you're presenting, attending, or partnering as a sponsor, these dates will guide your planning and ensure a smooth and successful conference experience.</p>

          <div className="space-y-5 max-w-3xl w-full">
            {[
              // { label: "Abstract Submission Deadline", date: "August 10, 2025" },
              { label: "Full Paper Submission Deadline", date: "2nd July, 2025" },
              { label: "Notification of Acceptance", date: "14th July, 2025" },
              { label: "Final Paper Submission", date: "21st July, 2025" },
              // { label: "Registration Deadline", date: "September 15, 2025" },
              { label: "Conference Dates", date: "31st July, 2025" }
            ].map((item, index) => (
              <div key={index} className="flex gap-2 items-start">
                <BsDot className="text-black text-3xl flex-shrink-0 " />
                <div className="grid grid-cols-1 sm:grid-cols-[280px_1fr] inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] leading-[30px] w-full">
                  <span className="inter-medium text-black whitespace-nowrap">{item.label}</span>
                  <span>: {item.date}</span>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>


      <div className="xl:max-w-[1450px]  md:max-w-[920px] px-3 mx-auto mt-8 lg:mt-15">
        <div className="space-y-4">
          <p className="hanuman-bold text-[#1C826E] text-[25px] lg:text-[35px] ">Secure Your Spot</p>
          <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">Join a global network of innovators, scholars, industry professionals, and thought leaders at the International Conference on Business and Organizational Management.
            Register now to be part of one of the most anticipated events in the fields of business strategy, organizational development, and management science. Whether you’re presenting your research, attending to broaden your knowledge, or seeking meaningful collaborations, your registration ensures access to a rich and engaging conference experience.</p>

          <div className="space-y-5 max-w-3xl w-full">
            {[
              { label: "Account Name", date: "ICBOM Conference" },
              { label: "Account Number", date: "123456789" },
              { label: "Branch", date: "Chennai" },
              { label: "IFSC Code", date: "TMBL03000045" },
              { label: "MICR", date: "605060005" },
            ].map((item, index) => (
              <div key={index} className="flex gap-2 items-start">
                <BsDot className="text-black text-3xl flex-shrink-0 " />
                <div className="grid grid-cols-1 sm:grid-cols-[280px_1fr] inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] leading-[30px] w-full">
                  <span className="inter-medium text-black whitespace-nowrap">{item.label}</span>
                  <span>: {item.date}</span>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </>
  )
}
