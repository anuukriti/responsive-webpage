import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        id: "1",
        name: "Dr. Vaishali sharma",
        education: "Ayurveda Practitioner(BAMS, MD)",
        experience: "25 years of experience",
        specialization: "Skin Specialist",
        rating: "4.5",
    },
    {
        id: "2",
        name: "Dr. Vaishali sharma",
        education: "Ayurveda Practitioner(BAMS, MD)",
        experience: "25 years of experience",
        specialization: "Skin Specialist",
        rating: "4.5",
    },
    {
        id: "3",
        name: "Dr. Vaishali sharma",
        education: "Ayurveda Practitioner(BAMS, MD)",
        experience: "25 years of experience",
        specialization: "Skin Specialist",
        rating: "4.5",
    },
];

function Slide8() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 0,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },

            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };

    return (
        <div className="mb-10">
            {" "}
            <div className="h-auto w-full mt-2 mb-2 bg-white">
                <div className="flex flex-col items-center justify-center text-center font-DINProBoldFont gap-2 px-1 xm:px-10">
                    <h1 className="text-[30px] sm:text-[40px] lg:text-[50px] xl:text-[60px] py-10 text-[#3A643B] underline underline-offset-4 decoration-[#C3D0C4]">
                        Meet our Ayurveda experts
                    </h1>
                </div>
                <div className="m-auto h-auto w-[260px] xs:w-[310px] md:w-[560px] xl:w-[850px] mb-10">
                    <Slider {...settings}>
                        {data.map((d) => (
                            <div className="py-6 hover:scale-105">
                                <div className="bg-[#FFF7E2] p-2 xs:p-4 pt-[1.5rem] xs:pt-[3rem] rounded-t-[2rem] flex flex-col items-center  xs:justify-center gap-2">
                                    <div>
                                        <div className="relative bg-cover bg-center bg-red-600 rounded-full w-[120px] xs:w-[150px] h-[120px] xs:h-[150px] bg-[url(https://s3-alpha-sig.figma.com/img/5af8/78e5/09217e175d69b8cfd3da49cb2a8a6437?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FRkxIUxyvW2RatMzBt~P6NZo1YRjHdFXOzZmnEF0Sfzp0JQrIokQJJBqtA~FMDouN0H2v4y42oqp--x1XueS4SOeBCZ4eAMq9-bU9fyhAmZ83lbN0nCzMasn5rqC40xuBIPcd8EoguUSlVNhqAx-27Lix9d4bbx4cf28MeD0zD~INTfEgcQNEn5ZeTyq-c8z0seXwA1rHimsyeUQDOr60~iUsmNLQxJS1zeH1LHnY5~5jZiFpYzAmapv6y5jhPERcbVkbQ3qXlsVpePFBDRoYgXUsvJXGXcbVTJsakGF-ZUuArOus6RBJXahlKmpyOmjm-htXMpmFTl1xHEXGLC1Ig__)]">
                                            <div className="text-white gap-1 font-DINProBoldFont absolute xs:top-[8rem] xs:left-[2.5rem] top-[6.5rem] left-[1.7rem]  flex justify-center items-center rounded-3xl h-[1.5rem] w-[4rem] xs:h-[1.8rem] xs:w-[4.4rem] p-[1px] bg-[#0B0B0B]">
                                                {" "}
                                                <p className="text-[13px]">
                                                    {d.rating}
                                                </p>
                                                <p className="text-[13px]">
                                                    star
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center font-DINProLightFont mt-5 gap-1 xs:gap-2 mb-2 xs:mb-3">
                                        <div>
                                            <h1 className="text-[19px] font-DINProBoldFont">
                                                {d.name}
                                            </h1>
                                        </div>
                                        <div>
                                            <h2 className="text-[14px] xs:text-[16px] text-[#838383]">
                                                {d.education}
                                            </h2>
                                        </div>
                                        <div>
                                            <h3 className="text-[13px] xs:text-[14px] font-semibold">
                                                {d.experience}
                                            </h3>
                                        </div>
                                        <div className="bg-[#3a643b20] mt-2 px-[16px] py-[2.6px] rounded-xl flex items-center justify-center">
                                            <p className="text-[12px] xs:text-[14px] font-semibold text-[#3A643B]">
                                                {d.specialization}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <button className="hover:bg-[#559256] h-[3.5rem] rounded-b-[2rem] bg-[#3A643B] w-full flex justify-center items-center">
                                    <h1 className="text-[18px] font-DINProLightFont font-medium text-white text-center">
                                        Book a session
                                    </h1>
                                </button>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="flex flex-col items-center justify-center text-center font-semibold font-DINProLightFont gap-2 px-1 xm:px-10">
                    <button className="hover:bg-[#6cb86d87] text-[20px] text-[#3A643B] bg-[#3a643b16] h-[50px] w-[230px] rounded-lg border-[1.58px] border-[#3A643B]">
                        Finds more experts {">"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Slide8;
