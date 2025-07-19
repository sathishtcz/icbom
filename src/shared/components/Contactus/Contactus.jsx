import { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


export default function Contactus() {

    const [formData, setFormData] = useState({
        Firstname: '',
        Lastname: '',
        Mobile_Number: '',
        Email_Address: '',
        Message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        if (e.target.type === 'file') {
            setFormData({ ...formData, [e.target.name]: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('Firstname', formData.Firstname);
            formDataToSend.append('Lastname', formData.Lastname);
            formDataToSend.append('Mobile_Number', formData.Mobile_Number);
            formDataToSend.append('Email_Address', formData.Email_Address);
            formDataToSend.append('Message', formData.Message);

            // if (formData.Paper_File) {
            //     formDataToSend.append('Paper_File', formData.Paper_File);
            // }

            const response = await fetch('http://192.168.29.11/ICBOM/Icbom/contact.php', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                const result = await response.text();
                setStatus(result);
                setFormData({
                    Firstname: '',
                    Lastname: '',
                    Mobile_Number: '',
                    Email_Address: '',
                    Message: '',
                });
                toast.success("Form submitted successfully!");
            } else {
                setStatus('Failed to send submission. Please try again.');
                toast.error('Failed to send submission. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred. Please try again.');
            toast.error('An error occurred. Please try again.');
        }
    };


    return (
        <>
            <div className="mt-30 text-center">
                <div className="flex flex-col  ">
                    <div className="flex flex-row justify-center gap-2 items-center ">
                        <div className='h-[3px] bg-[#1C826E] w-[60px]' />
                        <h3 className='hanuman-semibold text-[25px] lg:text-[40px] text-[#1C826E]'>Contact Us</h3>
                        <div className='h-[3px] bg-[#1C826E] w-[60px]' />
                    </div>
                    <div className="flex space-x-2 justify-center  inter-medium">
                        <p>
                            <Link to="/" className="  text-[18px]">
                                Home
                            </Link>
                        </p>
                        <p className="  text-[18px]">/</p>
                        <p className=" text-[18px]">Contact Us</p>
                    </div>
                </div>
            </div>


            <div className="xl:max-w-[1450px]  md:max-w-[920px] px-3 mx-auto mt-8 lg:mt-15">
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">If you have any questions regarding registration, paper submissions, sponsorship opportunities, or general event details, our team is here to assist you. We welcome inquiries from academics, professionals, students, and collaborators across the globe.</p>
            </div>


            <div className="xl:max-w-[1050px] md:max-w-[920px] px-3 mx-auto mt-8  ">
                <div className="flex flex-col gap-15">

                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 h-full w-full">
                        {/* <div>
                            <div className="bg-white rounded-md shadow-[0_0_10px_rgba(0,0,0,0.15)] h-full w-full px-2 py-4">
                                <div className="flex flex-col gap-2 items-center">
                                    <LiaPhoneVolumeSolid className="text-[#1C826E] text-4xl flex-shrink-0" />
                                    <p className="text-gray-600 inter-medium text-lg wrap-anywhere xl:wrap-normal">Call Support Center 24/7</p>
                                    <p className="text-black inter-medium text-lg wrap-anywhere xl:wrap-normal">+91 9745551212118</p>
                                </div>
                            </div>
                        </div> */}
                        <div>
                            <div className="bg-white rounded-md shadow-[0_0_10px_rgba(0,0,0,0.15)] h-full w-full py-4  px-2 ">
                                <div className="flex flex-col gap-2 items-center">
                                    <IoIosMail className="text-[#1C826E] text-4xl flex-shrink-0" />
                                    <p className="text-gray-600 inter-medium text-lg">Write to Us</p>
                                    <p className="text-black inter-medium text-lg wrap-anywhere xl:wrap-normal">info.icbom@gmail.com</p>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bg-white rounded-md shadow-[0_0_10px_rgba(0,0,0,0.15)] h-full w-full py-4 px-2">
                                <div className="flex flex-col gap-2 items-center">
                                    <IoLocationSharp className="text-[#1C826E] text-4xl flex-shrink-0" />
                                    <p className="text-gray-600 inter-medium text-lg">Location</p>
                                    <p className="text-black inter-medium text-lg wrap-anywhere xl:wrap-normal">Hong Kong, China</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bg-[#82D1C9] py-8 lg:px-15 px-5 rounded-lg">
                        <p className="hanuman-semibold text-2xl">Get in Touch with Us</p>
                        <div className="grid grid-cols-1 lg:grid-cols-1 lg:gap-20 gap-7  mt-8">
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col  gap-5">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        <div>
                                            <input
                                                type="text"
                                                name="Firstname"
                                                onChange={handleChange}
                                                value={formData.Firstname}
                                                placeholder="Enter Your First Name"
                                                className="w-full p-3 rounded-lg  bg-white focus:outline-none"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                name="Lastname"
                                                onChange={handleChange}
                                                value={formData.Lastname}
                                                required
                                                placeholder="Enter Your Last Name "
                                                className="w-full p-3 rounded-lg  bg-white focus:outline-none"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                onChange={handleChange}
                                                value={formData.Email_Address}
                                                required
                                                name="Email_Address"
                                                placeholder="Enter Your Email"
                                                className="w-full p-3 rounded-lg  bg-white focus:outline-none"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                onChange={handleChange}
                                                value={formData.Mobile_Number}
                                                required
                                                name="Mobile_Number"
                                                placeholder="Enter Your Phone Number"
                                                className="w-full p-3 rounded-lg  bg-white focus:outline-none"
                                            />
                                        </div>
                                        <div className='lg:col-span-2'>
                                            <textarea
                                                onChange={handleChange}
                                                value={formData.Message}
                                                required
                                                name="Message"
                                                placeholder="Enter Your Message"
                                                className="w-full p-3 rounded-lg  bg-white focus:outline-none"
                                                rows="5"
                                            >

                                            </textarea>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">

                                        <button type="submit" disabled={status === 'Sending...'} className="bg-gradient-to-r from-[#176E68] to-[#26B07C]  hanuman-medium  text-lg   text-white transition-all duration-200  rounded-md px-3 py-2 cursor-pointer">{status === 'Sending...' ? 'Submitting...' : 'Send Message'}</button>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}
