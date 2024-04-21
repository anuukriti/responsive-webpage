import React from "react";

function Footer() {
    return (
        <div>
            {/* for large screens */}
            {/* <div className="h-[400px] w-full bg-[#3a643b34] md:flex hidden"></div> */}

            {/* for small screens */}
            <div className="text-sm h-auto w-full bg-[#3a643b34]  pt-10">
                <div className="px-10 flex flex-col justify-center items-start gap-2 text-left font-DINProLightFont md2:flex-row md2:px-10 md2:py-10 md:justify-between xl:px-20">
                    <div className="flex flex-col gap-2">
                        <h3 className="md:text-[16px] text-bold font-DINProBoldFont text-[#3A643B]">
                            Get in touch
                        </h3>
                        <p className="font-semibold">support@amrutam.co.in</p>
                        <p className="py-4 font-semibold md2:w-[300px]">
                            Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj,
                            Nai Sadak, Lashkar, Gwalior - 474001
                        </p>
                        <p className="font-semibold">+91 9713171999</p>

                        <div className="flex gap-[5px] py-5">
                            <img
                                className="h-10 w-10 hover:scale-105 cursor-pointer  bg-[#3A643B] rounded-full p-1"
                                width="20"
                                height="20"
                                src="https://img.icons8.com/ios/50/000000/facebook-new.png"
                                alt="facebook-new"
                            />
                            <img
                                className="h-10 w-10 hover:scale-105 cursor-pointer  bg-[#3A643B] rounded-full p-1"
                                width="20"
                                height="20"
                                src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"
                                alt="instagram-new--v1"
                            />
                            <img
                                className="h-10 w-10 hover:scale-105 cursor-pointer  bg-[#3A643B] rounded-full p-1"
                                width="20"
                                height="20"
                                src="https://img.icons8.com/ios/50/000000/youtube-play--v1.png"
                                alt="youtube-play--v1"
                            />
                            <img
                                className="h-10 w-10 hover:scale-105 cursor-pointer  bg-[#3A643B] rounded-full p-1"
                                width="20"
                                height="20"
                                src="https://img.icons8.com/ios/50/000000/twitter-circled--v1.png"
                                alt="twitter-circled--v1"
                            />
                            <img
                                className="h-10 w-10 hover:scale-105 cursor-pointer  bg-[#3A643B] rounded-full p-1"
                                width="20"
                                height="20"
                                src="https://img.icons8.com/ios/50/000000/linkedin-circled--v1.png"
                                alt="linkedin-circled--v1"
                            />
                            <img
                                className="h-10 w-10 hover:scale-105 cursor-pointer  bg-[#3A643B] rounded-full p-1"
                                width="20"
                                height="20"
                                src="https://img.icons8.com/ios/50/000000/pinterest--v1.png"
                                alt="pinterest--v1"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="md:text-[16px] text-bold font-DINProBoldFont text-[#3A643B]">
                            Information
                        </h3>
                        <p className="font-semibold">About Us</p>
                        <p className="font-semibold">Terms and Conditions</p>
                        <p className="font-semibold">Privacy Policy</p>
                        <p className="font-semibold">
                            Privacy Policy for Mobile Apps
                        </p>
                        <p className="font-semibold">
                            Shipping and Returns Policy
                        </p>
                        <p className="font-semibold">International Delivery</p>
                        <p className="font-semibold">
                            For Businesses, Hotels and Resorts
                        </p>
                    </div>
                    <div className="flex flex-col md2:items-end md2:text-right md:w-[300px]">
                        <h3 className="md:text-[16px] pt-5  text-bold font-DINProBoldFont text-[#3A643B]">
                            Subscribe to our Newsletter and join Amrutam Family
                            today!
                        </h3>

                        <div className="md2:w-[280px] xl:w-[320px] flex items-center rounded-full mt-2 mb-5">
                            <input
                                type="email"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your Email Address"
                                className="flex-grow px-4 py-2 rounded-l-full outline-none  border-2 border-[#3A643B] text-gray-700"
                            />
                            <button className="hover:bg-lime-900 bg-black border-2 border-[#3A643B] text-white px-4 py-2 rounded-r-full transition duration-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
