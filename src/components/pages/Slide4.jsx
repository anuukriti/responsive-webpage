import React from "react";

const img = [
    {
        url: "https://s3-alpha-sig.figma.com/img/176b/ed5d/116ec373d4d09fe1dc2dad43869868d9?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T-BS59qFdwG4k4SvtMK44hzcBrLByEYnmkLeagoMhYiknUKV2cTC2EudBwtVEJPCEbibIRnFTOHNukcm-faw7tCn6uP03T59Fvt8S2DclDtsbIuFm~jZ~3MXukjCCD3v4YpU7HW37hfU-jRaVnKESDHj46tvEKuzNdErG~LKoHsBCjjc~oGm1CpK2Z6TWLWpejl8IfLs6dLu5UH1-EGg2ev9dWCswk6VipOs-zPbHCyZXIVnDOxcvdyf1hHC8X44agxtAxehcp7CtgL-1atV~vgDTjK62eF6m-pII6ZR~mVE9cN7~Y63RVvpAW-P-XFBwBNaBPVAWJO5NKlZtg2n0Q__",
    },
    {
        url: "https://s3-alpha-sig.figma.com/img/23ad/ed32/94aa2a9dd47c19df140900a908a8c26c?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VVZXsvlPdkNnQcmWaBDKR1wBEj5MhTbDxixff0YyT~yVkxcDNymZfaKT7WpEz5C6VEYHUm6q0pOomYCTZIOiwj00dtTHdmaBZrtsuTNOg-xiy9l9m94O6drv9z6~ZiGLNNycQ36kGnuafas~RQ0PsF0hibtUOh~1XM3sqmeymgRxljEvYcNrKCbAt7G35pEyr-AXg76alPRarKrkoHP1X1u6uuywEhzwxS26JfbHQ5GgHTBlaQjUYk4F2dTA8FJYM~SvcmIfcyU1SOtWstpkLg1dputk5WkH0ksj8JXaj0LioIo8TEXSnlz9qwPQdtZ9ROYn4s6CxHHLrb9Q1zgASQ__",
    },
    {
        url: "https://s3-alpha-sig.figma.com/img/63a4/2853/caf304c4ff88f018f79dedae521d759e?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J-1ZZbmuk1M7HZBspJf95gc6mYMHoDHR6VaA62O7ilpZg0d38y2A95F8Ml-yh0psazQGZQGYnCjBHpiwNJzh6jw8CUeyk8sM5j3M9FUYolkxOJy~5qFMatrkHObjQV6coXouH8HuxGwYqk-EhKvPQBzhFTNQsSvvVzTJlv6bjILM0pAme07kvKNVsR3rl1fj33Ve1-N-TpVd1tWE9s0U9A-n5~6gG7Va22w38fFyz1wDEJKwiYFxmsbZKCPxvOF5e5t7INhf9u5hdB-duupqCDGyrkwV9jmzgh5StRasVuAer7hKi73D2-mMas5paODJos3~YCp36qWxtj-XPUnuYA__",
    },
];

const data = [
    {
        title: "स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।",
        des: "[ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]",
    },
    {
        title: "Precise Diagnosis",
        des: "Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.",
    },
    {
        title: "Zero side-effects",
        des: "Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs.",
    },
    {
        title: "Individual Treatment",
        des: "all Treatments are personalized based on a person's unique constitution and health concerns.",
    },
];

function Slide4() {
    return (
        <div>
            <div className="h-auto w-full bg-[#FFFAEE] py-10 px-5">
                {/* heading */}
                <div className="pt-10">
                    <h1 className="2xl:text-[60px]  text-center xl:text-[50px] lg:text-[40px]  sm:text-[30px] font-DINProBoldFont text-[#3A643B] underline underline-offset-2 decoration-[#C3D0C4]">
                        What sets Ayurvedic consultations apart?
                    </h1>
                </div>
                {/* images */}
                <div className="py-5 hidden sm:block">
                    <div className="flex justify-center items-center px-[15px] 2xl:gap-10 lg:gap-5 gap-2 py-2 mt-8">
                        <div className="hover:scale-105 w-[400px] bg-white h-[160px] shadow-xl md:h-[180px] px-10 py-5 rounded-3xl md:border-t-[5px] border-t-[3px] border-[#3A643B] flex justify-center items-center flex-col gap-4 xl:w-[550px] xl:h-[250px] 2xl:w-[600px]">
                            <h1 className="font-InknutAntiqua_Regular text-[#3A643B] text-center text-[18px] md:text-[20px] xl:text-[30px]">
                                {data[0].title}
                            </h1>
                            <p className="text-[11px] md:text-[12px] font-DINProLightFont text-center text-[#3A643B] xl:text-[18px]">
                                {data[0].des}
                            </p>
                        </div>
                        <div className="hover:scale-105 w-[210px] bg-white h-[160px] md:h-[180px] shadow-xl rounded-3xl xl:h-[250px] xl:w-[270px] 2xl:w-[300px]">
                            <img
                                className="h-full w-full object-cover object-center rounded-3xl"
                                src={img[0].url}
                                alt="img"
                            />
                        </div>
                        <div className="hover:scale-105 w-[180px] bg-white h-[160px] md:h-[180px] shadow-xl flex flex-col items-start gap-2 justify-center rounded-3xl md:border-t-[5px] border-t-[3px] border-[#3A643B] xl:h-[250px] xl:w-[260px] 2xl:w-[270px]">
                            <h3 className="text-left font-DINProBoldFont text-[12px] md:text-[14px] text-[#3A643B] px-4 xl:text-[25px]">
                                {data[1].title}
                            </h3>
                            <p className="text-[8px] md:text-[10px] text-left text-[#3A643B] font-DINProLightFont px-4 xl:text-[15px]">
                                {data[1].des}
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center px-[15px] lg:gap-5 gap-2 py-2 mt-8 2xl:gap-10">
                        <div className="hover:scale-105 w-[180px] bg-white h-[160px] md:h-[180px] shadow-xl flex flex-col items-start gap-2 justify-center rounded-3xl md:border-t-[5px] border-t-[3px] border-[#3A643B] xl:h-[250px] xl:w-[260px] 2xl:w-[270px]">
                            <h3 className="text-left font-DINProBoldFont text-[12px] md:text-[14px] text-[#3A643B] px-4 xl:text-[25px]">
                                {data[2].title}
                            </h3>
                            <p className="text-[8px] md:text-[10px] text-left text-[#3A643B] font-DINProLightFont px-4 xl:text-[15px]">
                                {data[2].des}
                            </p>
                        </div>
                        <div className="hover:scale-105 w-[210px] bg-white h-[160px] md:h-[180px] shadow-xl rounded-3xl xl:h-[250px] xl:w-[270px] 2xl:w-[300px]">
                            <img
                                className="h-full w-full object-cover object-center rounded-3xl"
                                src={img[1].url}
                                alt="img"
                            />
                        </div>
                        <div className="hover:scale-105 w-[180px] bg-white h-[160px] md:h-[180px] shadow-xl flex flex-col items-start gap-2 justify-center rounded-3xl md:border-t-[5px] border-t-[3px] border-[#3A643B] xl:h-[250px] xl:w-[260px] 2xl:w-[270px]">
                            <h3 className="text-left font-DINProBoldFont text-[12px] md:text-[14px] text-[#3A643B] px-4 xl:text-[25px]">
                                {data[3].title}
                            </h3>
                            <p className="text-[8px] md:text-[10px] text-left text-[#3A643B] font-DINProLightFont px-4 xl:text-[15px]">
                                {data[3].des}
                            </p>
                        </div>
                        <div className="hover:scale-105 w-[210px] bg-white h-[160px] md:h-[180px] shadow-xl rounded-3xl xl:h-[250px] xl:w-[270px] 2xl:w-[300px]">
                            <img
                                className="h-full w-full object-cover object-center rounded-3xl"
                                src={img[2].url}
                                alt="img"
                            />
                        </div>
                    </div>
                </div>
                <div className="sm:hidden flex flex-col px-2 py-5 h-auto">
                    <div className="flex flex-col items-center gap-8">
                        <div className="hover:scale-105 w-[300px] flex flex-col items-center justify-center gap-6 bg-white h-[250px] shadow-xl border-t-[4px] border-[#3A643B] rounded-3xl ">
                            <h1 className="font-InknutAntiqua_Regular text-[#3A643B] text-center text-[20px] px-8">
                                {data[0].title}
                            </h1>
                            <p className="text-[13px] font-DINProLightFont text-center text-[#3A643B] px-8">
                                {data[0].des}
                            </p>
                        </div>
                        <div className="hover:scale-105 w-[300px] bg-white h-[250px] rounded-3xl shadow-xl">
                            <img
                                className="h-full w-full object-cover object-center rounded-3xl"
                                src={img[0].url}
                                alt="img"
                            />
                        </div>
                        <div className="hover:scale-105 w-[300px] flex flex-col items-start justify-center gap-5 bg-white h-[250px] shadow-xl border-t-[4px] border-[#3A643B] rounded-3xl ">
                            <h1 className="text-[#3A643B] font-DINProBoldFont text-left text-[25px] px-8">
                                {data[1].title}
                            </h1>
                            <p className="text-[15px] font-DINProLightFont text-left font-semibold text-black px-8">
                                {data[1].des}
                            </p>
                        </div>
                        <div className="hover:scale-105 w-[300px] bg-white h-[250px] rounded-3xl shadow-xl">
                            <img
                                className="h-full w-full object-cover object-center rounded-3xl"
                                src={img[1].url}
                                alt="img"
                            />
                        </div>
                        <div className="hover:scale-105 w-[300px] flex flex-col items-start justify-center gap-5 bg-white h-[250px] shadow-xl border-t-[4px] border-[#3A643B] rounded-3xl ">
                            <h1 className="text-[#3A643B] font-DINProBoldFont text-left text-[25px] px-8">
                                {data[2].title}
                            </h1>
                            <p className="text-[15px] font-DINProLightFont text-left font-semibold text-black px-8">
                                {data[2].des}
                            </p>
                        </div>
                        <div className="hover:scale-105 w-[300px] bg-white h-[250px] rounded-3xl shadow-xl">
                            <img
                                className="h-full w-full object-cover object-center rounded-3xl"
                                src={img[2].url}
                                alt="img"
                            />
                        </div>
                        <div className="hover:scale-105 w-[300px] flex flex-col items-start justify-center gap-5 bg-white h-[250px] shadow-xl border-t-[4px] border-[#3A643B] rounded-3xl ">
                            <h1 className="text-[#3A643B] font-DINProBoldFont text-left text-[24px] px-8">
                                {data[3].title}
                            </h1>
                            <p className="text-[15px] font-DINProLightFont text-left font-semibold text-black px-8">
                                {data[3].des}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slide4;
