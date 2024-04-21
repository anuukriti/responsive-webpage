import React from "react";

function Slide9() {
    return (
        <div>
            {/* for large screen */}
            <div className="hidden md:flex h-[550px] w-full bg-[#FFF7E2] justify-center items-center px-10 xl:px-20 gap-3 xl:gap-5 ">
                <div className="xl:px-10 flex flex-col items-start justify-center gap-5 ">
                    <h1 className="text-[30px] lg:text-[40px] font-DINProBoldFont text-[#3A643B] text-left">
                        Amrutam Home App
                    </h1>
                    <p className=" text-[12px] lg:text-[16px] text-left font-DINProLightFont">
                        The Amrutam Home App is your one-stop app for all things
                        Ayurveda! Apart from mimicking the significant
                        characteristics of our website, this app offers a wide
                        range of additional features.
                    </p>
                    <h2 className="text-[20px] lg:text-[26px] capitalize font-DINProLightFont font-bold text-black">
                        Get a diet & lifestyle consultation with ayurvedic
                        experts across the globe{" "}
                    </h2>
                    <h1 className="text-[18px] lg:text-[25px] font-DINProBoldFont font-extrabold text-black">
                        Get The App Now
                    </h1>
                    <div className="flex gap-4">
                        <div className="hover:bg-[#2c532d] cursor-pointer bg-black rounded-lg pb-2 pt-1 px-3 flex gap-2 justify-center items-center">
                            <div className="h-auto w-auto">
                                <img
                                    className="lg:block hidden"
                                    width="40"
                                    height="40"
                                    src="https://img.icons8.com/fluency/48/google-play.png"
                                    alt="google-play"
                                />
                                <img
                                    className="lg:hidden"
                                    width="30"
                                    height="30"
                                    src="https://img.icons8.com/fluency/48/google-play.png"
                                    alt="google-play"
                                />
                            </div>
                            <div className="lg:leading-[18px] leading-[15px] text-white h-auto w-auto flex flex-col items-start justify-center">
                                <p className="uppercase font-DINProLightFont text-[8px] lg:text-[11px] text-left">
                                    GET IT ON
                                </p>
                                <h4 className="text-[16px] lg:text-[20px] tracking-wider font-DINProLightFont font-semibold">
                                    Google Play
                                </h4>
                            </div>
                        </div>
                        <div className="hover:bg-[#2c532d] cursor-pointer bg-black rounded-lg pb-2 pt-1 px-3 flex gap-2 justify-center items-center">
                            <div className="h-auto w-auto">
                                <img
                                    className="lg:block hidden"
                                    width="40"
                                    height="40"
                                    src="https://img.icons8.com/ios-filled/50/FFFFFF/mac-os.png"
                                    alt="mac-os"
                                />
                                <img
                                    className="lg:hidden"
                                    width="30"
                                    height="30"
                                    src="https://img.icons8.com/ios-filled/50/FFFFFF/mac-os.png"
                                    alt="mac-os"
                                />
                            </div>
                            <div className="lg:leading-[18px] leading-[15px] tracking-wider text-white h-auto w-auto flex flex-col items-start justify-center">
                                <p className="font-DINProLightFont text-[8px] lg:text-[11px] text-left">
                                    Download on the
                                </p>
                                <h4 className="text-[16px] lg:text-[20px] tracking-widest font-DINProLightFont font-semibold">
                                    App Store
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full relative mt-2 ">
                    <div className="z-30 absolute  xl:top-[1.6rem]  xl:left-[1rem] top-[4rem] lg:left-0  xl:w-[450px] md:w-[250px] lg:w-[350px]">
                        <div className="w-full flex justify-start lg:mb-[40px] mb-[90px]">
                            <div className="md:h-[120px] md:w-[120px] lg:h-[180px] xl:h-[220px] lg:w-[180px] xl:w-[220px] rounded-full bg-[#3a643b26]"></div>
                        </div>
                        <div className="w-full flex justify-end">
                            <div className="md:h-[120px] md:w-[120px] lg:h-[180px] xl:h-[220px] lg:w-[180px] xl:w-[220px] rounded-full bg-[#3a643b26]"></div>
                        </div>
                    </div>
                    <div className="absolute  top-[4rem] xl:top-0.5  lg:left-[-8rem] xl:left-[-4rem] left-[-5rem] z-50">
                        <img
                            className="md:h-[350px] lg:h-[400px] xl:h-[500px] w-full object-center object-cover z-50"
                            src="https://s3-alpha-sig.figma.com/img/8c1b/9dae/35e943f21e799601f8a2e985c6f1894f?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CDLbBHGHjvDkP8I5rzZc8~JPkoRjbEpoD6B34Y4GcottkEZIkH4VVa1rvzDl87R9pd316LdfpdsEk1Sax2fUf86CK9hR2K2J5vg0dcRccx6jQDOyCG0tbo1ANAS13T3h1w0k1iTUPcJiKldVAxOXd1XFLz4UAR-yiZKXXzxFqFmHUZoOy4mPot6uiYlGyrMofR7ZunUZhivzOTlLQtwGxhjQhwPCeFWRaW7cKxec7yyXHsZE9jOpWFo-eOX4O71pQfxzv6r3eTx9Gwl~f1ctCMoL2qt4CvEHLv85jORmvgRRIZc7If-i3Id3S73Rk3T3sRxivsNmOj9M2HM-5upZnQ__"
                        />
                    </div>
                </div>
            </div>

            {/* for mobile and tabs */}
            <div className="md:hidden flex flex-col justify-center items-center gap-4 pb-10 pt-10 bg-[#FFF7E2]">
                <div className="mx-5">
                    <h1 className="text-[25px] sm:text-[30px] font-DINProBoldFont capitalize text-[#3A643B] px-2 text-center mb-5">
                        Amrutam home App
                    </h1>
                    <p className="text-[12px] xxm:text-[15px] xm:text-[16px] sm:text-[18px] font-DINProLightFont text-[#676767] text-center px-4">
                        The Amrutam Home App is your one-stop app for all things
                        Ayurveda! Apart from mimicking the significant
                        characteristics of our website, this app offers a wide
                        range of additional features.
                    </p>
                </div>
                <div className=" xm:h-[380px] xxm:h-[350px] h-[240px] w-full sm:h-[500px] p-2 m-auto bg-[url(https://s3-alpha-sig.figma.com/img/8c1b/9dae/35e943f21e799601f8a2e985c6f1894f?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CDLbBHGHjvDkP8I5rzZc8~JPkoRjbEpoD6B34Y4GcottkEZIkH4VVa1rvzDl87R9pd316LdfpdsEk1Sax2fUf86CK9hR2K2J5vg0dcRccx6jQDOyCG0tbo1ANAS13T3h1w0k1iTUPcJiKldVAxOXd1XFLz4UAR-yiZKXXzxFqFmHUZoOy4mPot6uiYlGyrMofR7ZunUZhivzOTlLQtwGxhjQhwPCeFWRaW7cKxec7yyXHsZE9jOpWFo-eOX4O71pQfxzv6r3eTx9Gwl~f1ctCMoL2qt4CvEHLv85jORmvgRRIZc7If-i3Id3S73Rk3T3sRxivsNmOj9M2HM-5upZnQ__)] bg-contain bg-center"></div>
                <h2 className="text-[20px] sm:text-[28px] font-DINProLightFont font-bold capitalize text-black text-center px-5">
                    Get a diet & lifestyle consultation with ayurvedic experts
                    across the globe{" "}
                </h2>
                <h1 className="text-[25px] sm:text-[32px] font-DINProBoldFont font-black capitalize">
                    Get the App now
                </h1>

                <div className="flex flex-col gap-4">
                    <div className="hover:bg-[#2c532d] cursor-pointer bg-black rounded-lg pb-2 pt-1 px-16 flex gap-2 justify-center items-center">
                        <div className="h-auto w-auto">
                            <img
                                width="40"
                                height="40"
                                src="https://img.icons8.com/fluency/48/google-play.png"
                                alt="google-play"
                            />
                        </div>
                        <div className=" leading-[15px] text-white h-auto w-auto flex flex-col items-start justify-center">
                            <p className="uppercase font-DINProLightFont text-[8px]  text-left">
                                GET IT ON
                            </p>
                            <h4 className="text-[16px] tracking-wider font-DINProLightFont font-semibold">
                                Google Play
                            </h4>
                        </div>
                    </div>
                    <div className="hover:bg-[#2c532d] cursor-pointer bg-black rounded-lg pb-2 pt-1 px-16 flex gap-2 justify-center items-center">
                        <div className="h-auto w-auto">
                            <img
                                width="40"
                                height="40"
                                src="https://img.icons8.com/ios-filled/50/FFFFFF/mac-os.png"
                                alt="mac-os"
                            />
                        </div>
                        <div className=" leading-[15px] tracking-wider text-white h-auto w-auto flex flex-col items-start justify-center">
                            <p className="font-DINProLightFont text-[8px]  text-left">
                                Download on the
                            </p>
                            <h4 className="text-[16px]  tracking-widest font-DINProLightFont font-semibold">
                                App Store
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slide9;
