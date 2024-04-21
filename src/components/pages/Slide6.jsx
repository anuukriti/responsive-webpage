import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        id: "1",
        heading: "Appoinment",
        description:
            "You must make an appointment in advance, to choose the service and date.",
    },

    {
        id: "2",
        heading: "Consultations",
        description:
            "The next stage involves a thorough consultation with an Ayurveda practitioner.",
    },
    {
        id: "3",
        heading: "Treatment Planning",
        description:
            "The Ayurvedic practitioner creates a personalized treatment plan for you",
    },
    {
        id: "4",
        heading: "Maintenance",
        description:
            "These visits allow for assessment of progress, adjustments to the treatment.",
    },
];

function Slide6() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 0,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1284,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 548,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };
    return (
        <div className="h-auto w-full mt-[4rem] mb-2 bg-white">
            <div className="flex flex-col items-center justify-center text-center font-DINProBoldFont gap-2 px-1 xm:px-10">
                <h1 className="text-[30px] sm:text-[45px] lg:text-[65px] py-10 text-[#3A643B] underline underline-offset-4 decoration-[#C3D0C4]">
                    Our Ayurvedic Approach
                </h1>
                <p className="text-[12px] xm:text-[14px] lg:text-[18px] xl:text-[25px] font-light font-DINProLightFont mx-2 sm:mx-[3rem] lg:mx-[10rem]">
                    At Amrutam we follow a unique and personalized approach to
                    healing. Our expert practitioners begin each treatment
                    process by conducting a thorough analysis of the patient’s
                    body type, medical history, and current health conditions.
                </p>
            </div>
            <div className="mt-10 pb-5 w-[250px]  xm:w-[500px] md2:w-[600px] lg:w-[900px] h-auto m-auto">
                <Slider {...settings}>
                    {data.map((d) => (
                        <div className="py-5">
                            <div className="hover:scale-105 h-[270px] px-5 py-6 flex flex-col justify-center shadow-lg items-center gap-4 bg-[#FFF7E2] rounded-xl border-[#3A643B] border-t-4">
                                <div className="text-white font-DINProBoldFont h-[60px] w-[60px] rounded-full border-2 border-[#1a3c1a] bg-[#3A643B] opacity-50 text-[25px] flex items-center justify-center">
                                    {d.id}
                                </div>

                                <div className="flex flex-col justify-center items-center  text-[#3A643B] gap-1">
                                    <h4 className="font-DINProBoldFont text-center">
                                        {d.heading}
                                    </h4>

                                    <p className="text-[15px] font-DINProLightFont text-center">
                                        {d.description}
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

export default Slide6;
