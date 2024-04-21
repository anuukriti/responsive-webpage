import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        id: "1",
        heading: "Consulted for Skin",
        name: "Sophie Moore",
        place: "Chennai",
        date: "17/02/24",
        review_title: "“One of a kind service”",
        review_des:
            "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
    },
    {
        id: "2",
        heading: "Consulted for hair",
        name: "Sophie Moore",
        place: "Mumbai",
        date: "17/02/24",
        review_title: "“One of a kind service”",
        review_des:
            "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
    },
    {
        id: "3",
        heading: "Consulted for hair",
        name: "Sophie Moore",
        place: "Mumbai",
        date: "17/02/24",
        review_title: "“One of a kind service”",
        review_des:
            "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
    },
];

function Slide7() {
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
        <div className="h-auto w-full mt-2 mb-2 pb-10 bg-[#FFF7E2]">
            <div className="flex flex-col items-center justify-center text-center font-DINProBoldFont gap-2 px-1 xm:px-10">
                <h1 className="text-[30px] sm:text-[40px] lg:text-[50px] xl:text-[60px] py-10 text-[#3A643B] underline underline-offset-4 decoration-[#C3D0C4]">
                    Stories From Our Valued Customers!
                </h1>
            </div>
            <div className="m-auto h-auto w-[270px] md:w-[650px]  lg:w-[850px] xl:w-[1000px]">
                <Slider {...settings}>
                    {data.map((d) => (
                        <div className="py-6 px-2">
                            <div className="hover:scale-105 h-[320px] pb-5 rounded-xl flex flex-col mt-2 shadow-lg gap-2 bg-white">
                                <div className="rounded-t-xl flex items-center justify-start font-DINProBoldFont p-5 h-10 w-full bg-[#ECE7FF] text-black">
                                    {d.heading}
                                </div>

                                <div className="p-5 flex justify-start gap-3 font-DINProLightFont">
                                    <div className="rounded-full h-10 w-10 bg-gray-800"></div>
                                    <div className="">
                                        <div className="flex gap-4 md:gap-[4rem] lg:gap-[9rem] xl:gap-[3rem] items-center justify-between ">
                                            <h4 className="text-[13px] lg:text-[16px] font-bold">
                                                {d.name}
                                            </h4>
                                            <p className="text-[12px] lg:text-[13px]">
                                                {d.date}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-[12px] lg:text-[13px]">
                                                {d.place}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full texy-left mt-3 md:mt-0 px-7">
                                    <p>⭐⭐⭐⭐⭐</p>
                                </div>

                                <div className=" px-4 w-full gap-2 flex flex-col justify-center mt-2  text-black gap-1pb-2">
                                    <h4 className="font-DINProBoldFont text-left lg:text-[22px] xl:text-[18px]">
                                        {d.review_title}
                                    </h4>

                                    <p className="text-[12px] lg:text-[15px] lg:w-[320px] xl:text-[13px] xl:w-auto xl:pr-3 font-DINProLightFont text-left">
                                        {d.review_des}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Slide7;
