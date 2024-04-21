import React from "react";

const data = [
    {
        img_url:
            "https://s3-alpha-sig.figma.com/img/8567/a17c/ce30a4f9be32f98dae27064431959708?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e~xG-Myl3UK3vLBJfqh9iBncveW6PCFprCdd0JYAhZLHp0Zp9H7dMy8YVBeeiIqmKvevHm90sodcQo4rSLFO2WKXsemZY2MvT9S7mVLq5-Xc9qZMODsfmmz2Mzu-yq5GclGlYSF8Uavl5-sPS5nZM64zIHG3nMEJhkRphKU09ERTB32G1Ii2tTsbSNwASdV3oBsYo99K1GNSpMZZVY8jTyQ85DdtcrwP8GuOX5LQ1FGd73zE9qBo-833-E66F035McUK-EptN70KmRwNgQUwLKl9lC3TGURlIWerufhYHg4~cIh9gVv3MMFvnRtEa4oO5xgVGothCZLr~YogbqPLsg__",
        title: "Personalized Wellness",
        des: "Get treatments made just for you based on your individual doshas (body type).",
    },
    {
        img_url:
            "https://s3-alpha-sig.figma.com/img/4e2b/af21/22cc0c69eccc3be8038fe8ac40f9371f?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QpgEuo6p~TeabyHrCzF-v9ppCJ-U3lRIg1nnPhnZZaUjVU4bfWmNNPvDaKENTqznt5IFMfESNMN3S7NBJhyBeUYqoIiYR0AZCCqV1vwMpJ8~AGI0xg7x5cBuGZRXs6PsvNBa7SQSIG-DhRPGsPHWTWsivmnT0Yj-mrVktG-KBXscsvj6hY~Z9XZjVXxHPHKuAeq4TeV3R4cIqwPZcbPV4udW26DZNN8Sivu3gMJ~oXjlwxF0EwnkjMn2YVrbkrTQhx6jJJwyRVjkOmALqyQ7dj3cNlkF4UHusZBldbJajlP1fpATSEVJmDggBdQip6Srmp8EyGNKd9qrFZB-8h9irA__",
        title: "Holistic Healing",
        des: "Fix the root problem for long-lasting health.",
    },
    {
        img_url:
            "https://s3-alpha-sig.figma.com/img/2879/63ec/4b701523b3665b8db7fd2b6067eebff8?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mxmuWo2MVZMAA6mTl-D~JZVNFe0GpbNbT9YNDdIA64nSzpVD0uCMV3GI83sd3grfoYNLr9PokiFrq1IguF7qKyuLIf78XQmSbQ48FkvMvEDNVnymVc~yt7xye9m7s9WQFeSGHv6ar9~6vXq9tdKM6qFRhb3rxh4wFAfNjFKxBOrry8MwN-UV33ynyhmPbZz2prBfSgOLWA~gAGOl~cbxqv0Zvjvk584MJKHkDg5MMssi70XcDpS~NI9scWq-i-q5m49~KKBdnPZH4z5d8NJdn2eocE9KgbpU7OOSfPkdJXTPtMnYYH1WK8lpzQQq8UlEcYm3SAjOgFeGLLSqeYD0GA__",
        title: "Focus on prevention",
        des: "Stop problems even before they start.",
    },
    {
        img_url:
            "https://s3-alpha-sig.figma.com/img/8d96/7947/07f25886ba1078a16b73185d5f869ad8?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OxZCmUyTNm5SR5AV-C4oUrClhUwQCkrO4IM3jcjVo9I8sGgq7vDS2SYfJoWgyGEkPECD2giLTYWF6dB-GQ8UbxpZhalT9u8qNAaOoRbL8mEY-oAV6gaa-uA2F8dG8jmUbyKCr3f385KeYF9GkvDawEcrUbqMaXHxta-yT-jMKgIH7d1U0aZyA5Karqnr31JpM6fU0fN-PftgWYRabDPlQ31PjCGDkgUv8LXGqIxEQuwQOdCqHMCyb7fx-4jA0lFL-EkxbYCzBi~AkFHXfL~RxPCMCPujdpTy97T~Vw~uf3~7DczoCS3-KEz5AVWHMbQeP2FIuYo8tAGIa70ZjPbzBw__",
        title: "Natural Remedies",
        des: "Using herbs and natural therapies for healing.",
    },
    {
        img_url:
            "https://s3-alpha-sig.figma.com/img/2505/8cf0/56734e9ae68adcdb9d2f0667d457f069?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p40WPauDHwogNZBRuHQSNCsWnV0E7yqN22cjBXmEmMBmtlRJ1PSMrrqC4bNLljxYanP6eDCwOUQ5uPavq~kkE2Ibn~UxGuhiiH7sYwWofrntp7ZpxR8thBaG9wQe2ckE6cMs2gWfQ-0XSQzbqUl4-eZrSX~gKStEOKAhjW8FfNJe2pXWb3jcRTyyLionGsfuE-87A8EfYRT4m6qqQCwkggmUPBUfK28tNSUe62qlxwp1aNyNigtc18Pt~GWbmQORKEAOcL9gydYsTRHgdmOwRgdNY3zAp9kNDVnv15lu9QII6taUl0knWYntA0TnLmtVlKL-5jMr8pogyr6noaX3Rg__",
        title: "Mind-Body Connection",
        des: "Keep your mind and body in sync for a happy life.",
    },
    {
        img_url:
            "https://s3-alpha-sig.figma.com/img/8cfd/d829/c4e732142f1ed180d4de142f4047a6ea?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oOEQe3v9JFb~-sD5VfoKDYsKc7QmVUf7ydrmScx8T7YzaPAk3q4oECO2rFyIMzu8RaO40BCVOL63E-oUYtwr2nq0Ge-IgOii04bpQLgBSxIzL5P06epvzPDf-AsOYby1JWn2xhuoOT-k0qNnrxCK26fAqxnlbXLDuuF104vEDy9ZmAUIidorm0rWMlVhpmVhT1vKEGTBSy8cc67WHFnD83lh8zy8vpvLrczkhhPd3OhPIuw84Pa6Xi2HQcrssETSX9ZLD02ObYGR17pisd0LLkwSShb~sGcgPD0~jMackXjNDf8scPgTA2y1hz1AmKpjQ8cwC1zs-jbGo5zTrDtyQg__",
        title: "Boosting immunity",
        des: "Stay strong and healthy for life, not just for today.",
    },
];

function Slide3() {
    return (
        <div>
            <div className=" h-auto bg-white w-full pt-5 pb-5 mb-10">
                {/* heading */}
                <div className="h-auto w-full p-5 flex flex-col items-center gap-5 justify-center  mb-11">
                    <h1 className="px-10 xl:text-[60px] text-[26px] sm:text-[40px] text-center text-[#3A643B] font-DINProBoldFont underline underline-offset-2 decoration-[#C3D0C4]">
                        Discover Ayurveda’s magic with us{" "}
                    </h1>
                    <p className="xl:px-[20rem]  md:px-[10rem] px-20  text-[14px] xxm:text-[25px] text-center font-DINProLightFont text-[#666666] pt-2">
                        Ayurvedic treatment aims to balance your body and mind,
                        bringing harmony and vitality. It's like a journey to
                        better health using ancient wisdom, a totally effective
                        approach for a better life.{" "}
                    </p>
                </div>

                {/* img with content*/}
                <div className="relative flex justify-center items-center">
                    <div className="3xl:h-[650px] 3xl:w-[650px] flex justify-center h-[250px] w-[250px] xxm:h-[450px] xxm:w-[450px] bg-cover bg-center bg-[url(https://s3-alpha-sig.figma.com/img/328a/02bf/246a02b2aac7549c73dbe7dacc8e2553?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=At43ZTnzGBKlNZcO3HM-gs9bM-xqYrMdWUbt1zAiqyVSXE3AWUuj99tcNRN1Wb0VwBDb1o~nxNdknjmxhm-jMvANC7aI2Lb2SgnSa44pHYM1BAMj5~loCKlvNeex96TZ7OIwxv4yQV8JciYI8PB~g5YEBciduiLC-tMPcrkXboGKV~obUMn5Q9qTzXBkuNmgWL5WC6O7YyD4wlXK2aHbrq8yL7sgC2Wwmh0GuOukHvmwl2oQgTAI94MRyLPbxAcXS~tLXG6Bvcn9L~A46YfNxRpmAOHgHCJ8y~oLxhKJl5bKSw4uOoKoh3gogPEtanhV0f11E490SKr25ktVz6d-Uw__)]">
                        <img
                            className="3xl:h-[750px] 3xl:w-[750px] h-[300px] w-[300px] xxm:h-[500px] xxm:w-[500px] object-cover object-center"
                            src="https://s3-alpha-sig.figma.com/img/940c/90b2/b036ab89705f9413d552418bf0f9fa8f?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UPeCzSF~nlDZ-GboDvCUPnd1bBQVIEq8l9URmKhqCnz-skcSLCsaWhLIXxLIaUejl0gGKjJ8zyc-2P7UmeY3VgRn~MaJyd8W0~2NDAMuZtN8eF3t7d5fspcP6yp-4rV0WC8Mq1SIhpba7Wkkd~sAowi70A5AEmIiHvJdbgpRpWdWe9rRJyWQo22I0RsFq6ZaUGw2UxXg4QHhCa~Z07blH6JGtyd32rLQ5H1vvMdxa1ji1tYfffBxk5GhqrRzDQ64GzXaXq6x6OhDBDfVOaOSnawIljFLZJ9NaP-ZLVEw7k8HaAN2Bo~VSC0V2DEeXJGa5rcwIllS5hZZlgU7bLlFeg__"
                        />
                    </div>
                    <div className="absolute top-0 left-0 z-50 h-full flex flex-col gap-20 lg:gap-[6rem] justify-center items-center w-full">
                        <div className="lg:flex hidden w-full h-auto  items-center xl:px-[10rem] px-10 ">
                            <div className="flex w-full h-auto items-center justify-start">
                                <div className="flex justify-center items-center gap-4 w-[350px] xl:w-[400px]">
                                    <div className="w-[200px] xl:w-[250px] text-right flex flex-col gap-1">
                                        <h2 className="font-DINProBoldFont text-[19px] xl:text-[22px]">
                                            {data[0].title}
                                        </h2>
                                        <p className="text-[13px] xl:text-[15px]">
                                            {data[0].des}
                                        </p>
                                    </div>
                                    <div className="hover:scale-105 h-[80px] w-[80px] xl:h-[100px] xl:w-[100px] rounded-full bg-[#EDF5FA] flex items-center justify-center">
                                        <img
                                            className="h-[50px] w-[50px] xl:h-[60px] xl:w-[60px] object-cover object-center"
                                            src={data[0].img_url}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full h-auto items-center justify-end">
                                <div className="flex justify-center items-center gap-4 w-[350px] xl:w-[400px]">
                                    <div className="hover:scale-105 h-[80px] w-[80px] xl:h-[100px] xl:w-[100px] rounded-full bg-[#EDF5FA] flex items-center justify-center">
                                        <img
                                            className="h-[50px] w-[50px] xl:h-[60px] xl:w-[60px] object-cover object-center"
                                            src={data[1].img_url}
                                        />
                                    </div>
                                    <div className="w-[200px] xl:w-[250px] text-left flex flex-col gap-1">
                                        <h2 className="font-DINProBoldFont text-[19px] xl:text-[22px]">
                                            {data[1].title}
                                        </h2>
                                        <p className="text-[13px] xl:text-[15px]">
                                            {data[1].des}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex hidden w-full h-auto  items-center xl:px-[5rem] ">
                            <div className="flex w-full h-auto items-center justify-start">
                                <div className="flex justify-center items-center gap-4 xl:gap-4 lg:gap-2 w-[350px] xl:w-[400px]">
                                    <div className="w-[180px] xl:w-[250px] text-right flex flex-col gap-1">
                                        <h2 className="font-DINProBoldFont text-[19px] xl:text-[22px]">
                                            {data[2].title}
                                        </h2>
                                        <p className="text-[13px] lg:pl-[5px] xl:text-[15px]">
                                            {data[2].des}
                                        </p>
                                    </div>
                                    <div className="hover:scale-105 h-[80px] w-[80px] xl:h-[100px] xl:w-[100px] rounded-full bg-[#EDF5FA] flex items-center justify-center">
                                        <img
                                            className=" h-[50px] w-[50px] xl:h-[60px] xl:w-[60px] object-cover object-center"
                                            src={data[2].img_url}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full h-auto items-center justify-end">
                                <div className="flex justify-center items-center xl:gap-4 lg:gap-2  gap-4 w-[350px] xl:w-[400px]">
                                    <div className="hover:scale-105 h-[80px] w-[80px] xl:h-[100px] xl:w-[100px] rounded-full bg-[#EDF5FA] flex items-center justify-center">
                                        <img
                                            className="h-[50px] w-[50px] xl:h-[60px] xl:w-[60px] object-cover object-center"
                                            src={data[3].img_url}
                                        />
                                    </div>
                                    <div className="w-[160px] xl:w-[250px] text-left flex flex-col gap-1">
                                        <h2 className="font-DINProBoldFont text-[19px] xl:text-[22px]">
                                            {data[3].title}
                                        </h2>
                                        <p className="text-[13px] xl:text-[15px]">
                                            {data[3].des}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex hidden w-full h-auto  items-center xl:px-[10rem] px-10 ">
                            <div className="flex w-full h-auto items-center justify-start">
                                <div className="flex justify-center items-center gap-4 w-[350px] xl:w-[400px]">
                                    <div className="w-[200px] xl:w-[250px] text-right flex flex-col gap-1">
                                        <h2 className="font-DINProBoldFont text-[19px] xl:text-[22px]">
                                            {data[4].title}
                                        </h2>
                                        <p className="text-[13px] xl:text-[15px]">
                                            {data[4].des}
                                        </p>
                                    </div>
                                    <div className="hover:scale-105 h-[80px] w-[80px] xl:h-[100px] xl:w-[100px] rounded-full bg-[#EDF5FA] flex items-center justify-center">
                                        <img
                                            className="h-[50px] w-[50px] xl:h-[60px] xl:w-[60px] object-cover object-center"
                                            src={data[4].img_url}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full h-auto items-center justify-end">
                                <div className="flex justify-center items-center gap-4 w-[350px] xl:w-[400px]">
                                    <div className="hover:scale-105 h-[80px] w-[80px] xl:h-[100px] xl:w-[100px] rounded-full bg-[#EDF5FA] flex items-center justify-center">
                                        <img
                                            className="h-[50px] w-[50px] xl:h-[60px] xl:w-[60px] object-cover object-center"
                                            src={data[5].img_url}
                                        />
                                    </div>
                                    <div className="w-[200px] xl:w-[250px] text-left flex flex-col gap-1">
                                        <h2 className="font-DINProBoldFont text-[19px] xl:text-[22px]">
                                            {data[5].title}
                                        </h2>
                                        <p className="text-[13px] xl:text-[15px]">
                                            {data[5].des}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" w-full">
                    <div className=" flex flex-wrap gap-2 sm:gap-6 lg:gap-20 justify-center lg:hidden lg:px-0 px-1 md:px-[90px]">
                        <div className="flex flex-col justify-center items-center gap-2 border-4 rounded-xl w-[150px] lg:p-5 py-6 h-aut0">
                            <div className=" relative rounded-full h-[80px] w-[80px] bg-[#EDF5FA] p-4 flex items-center justify-center">
                                <img
                                    className="h-full"
                                    src="https://s3-alpha-sig.figma.com/img/8567/a17c/ce30a4f9be32f98dae27064431959708?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e~xG-Myl3UK3vLBJfqh9iBncveW6PCFprCdd0JYAhZLHp0Zp9H7dMy8YVBeeiIqmKvevHm90sodcQo4rSLFO2WKXsemZY2MvT9S7mVLq5-Xc9qZMODsfmmz2Mzu-yq5GclGlYSF8Uavl5-sPS5nZM64zIHG3nMEJhkRphKU09ERTB32G1Ii2tTsbSNwASdV3oBsYo99K1GNSpMZZVY8jTyQ85DdtcrwP8GuOX5LQ1FGd73zE9qBo-833-E66F035McUK-EptN70KmRwNgQUwLKl9lC3TGURlIWerufhYHg4~cIh9gVv3MMFvnRtEa4oO5xgVGothCZLr~YogbqPLsg__"
                                    alt="img"
                                />
                            </div>
                            <h3 className="font-bold text-center text-[15px] w-[150px] px-[1px] tracking-wider font-DINProBoldFont">
                                Personalized Wellness
                            </h3>
                            <p className="text-center font-semibold font-DINProLightFont text-[10px] text-[#515151] w-[120px] ">
                                Treatments made just for you based on your
                                individual doshas, (body type)
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 border-4 rounded-xl w-[150px] lg:p-5 py-6 h-aut0">
                            <div className=" relative rounded-full h-[80px] w-[80px] bg-[#EDF5FA] p-4 flex items-center justify-center">
                                <img
                                    className="h-full"
                                    src="https://s3-alpha-sig.figma.com/img/2879/63ec/4b701523b3665b8db7fd2b6067eebff8?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mxmuWo2MVZMAA6mTl-D~JZVNFe0GpbNbT9YNDdIA64nSzpVD0uCMV3GI83sd3grfoYNLr9PokiFrq1IguF7qKyuLIf78XQmSbQ48FkvMvEDNVnymVc~yt7xye9m7s9WQFeSGHv6ar9~6vXq9tdKM6qFRhb3rxh4wFAfNjFKxBOrry8MwN-UV33ynyhmPbZz2prBfSgOLWA~gAGOl~cbxqv0Zvjvk584MJKHkDg5MMssi70XcDpS~NI9scWq-i-q5m49~KKBdnPZH4z5d8NJdn2eocE9KgbpU7OOSfPkdJXTPtMnYYH1WK8lpzQQq8UlEcYm3SAjOgFeGLLSqeYD0GA__"
                                    alt="img"
                                />
                            </div>
                            <h3 className="font-bold text-center text-[15px] w-[150px] px-[1px] tracking-wider font-DINProBoldFont">
                                Focus on prevention
                            </h3>
                            <p className="text-center font-semibold font-DINProLightFont text-[10px] text-[#515151] w-[120px] ">
                                Stop problems even before they start.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 border-4 rounded-xl w-[150px] lg:p-5 py-6 h-aut0">
                            <div className=" relative rounded-full h-[80px] w-[80px] bg-[#EDF5FA] p-4 flex items-center justify-center">
                                <img
                                    className="h-full"
                                    src="https://s3-alpha-sig.figma.com/img/2505/8cf0/56734e9ae68adcdb9d2f0667d457f069?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p40WPauDHwogNZBRuHQSNCsWnV0E7yqN22cjBXmEmMBmtlRJ1PSMrrqC4bNLljxYanP6eDCwOUQ5uPavq~kkE2Ibn~UxGuhiiH7sYwWofrntp7ZpxR8thBaG9wQe2ckE6cMs2gWfQ-0XSQzbqUl4-eZrSX~gKStEOKAhjW8FfNJe2pXWb3jcRTyyLionGsfuE-87A8EfYRT4m6qqQCwkggmUPBUfK28tNSUe62qlxwp1aNyNigtc18Pt~GWbmQORKEAOcL9gydYsTRHgdmOwRgdNY3zAp9kNDVnv15lu9QII6taUl0knWYntA0TnLmtVlKL-5jMr8pogyr6noaX3Rg__"
                                    alt="img"
                                />
                            </div>
                            <h3 className="font-bold text-center text-[15px] w-[150px] px-[1px] tracking-wider font-DINProBoldFont">
                                Mind-Body Connection
                            </h3>
                            <p className="text-center font-semibold font-DINProLightFont text-[10px] text-[#515151] w-[120px] ">
                                Keep your mind and body in sync for a happy
                                life.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 border-4 rounded-xl w-[150px] lg:p-5 py-6 h-aut0">
                            <div className=" relative rounded-full h-[80px] w-[80px] bg-[#EDF5FA] p-4 flex items-center justify-center">
                                <img
                                    className="h-full"
                                    src="https://s3-alpha-sig.figma.com/img/4e2b/af21/22cc0c69eccc3be8038fe8ac40f9371f?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QpgEuo6p~TeabyHrCzF-v9ppCJ-U3lRIg1nnPhnZZaUjVU4bfWmNNPvDaKENTqznt5IFMfESNMN3S7NBJhyBeUYqoIiYR0AZCCqV1vwMpJ8~AGI0xg7x5cBuGZRXs6PsvNBa7SQSIG-DhRPGsPHWTWsivmnT0Yj-mrVktG-KBXscsvj6hY~Z9XZjVXxHPHKuAeq4TeV3R4cIqwPZcbPV4udW26DZNN8Sivu3gMJ~oXjlwxF0EwnkjMn2YVrbkrTQhx6jJJwyRVjkOmALqyQ7dj3cNlkF4UHusZBldbJajlP1fpATSEVJmDggBdQip6Srmp8EyGNKd9qrFZB-8h9irA__"
                                    alt="img"
                                />
                            </div>
                            <h3 className="font-bold text-center text-[15px] w-[150px] px-[1px] tracking-wider font-DINProBoldFont">
                                Holistic Healing
                            </h3>
                            <p className="text-center font-semibold font-DINProLightFont text-[10px] text-[#515151] w-[120px] ">
                                Fix the root problem for long-lasting health.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 border-4 rounded-xl w-[150px] lg:p-5 py-6 h-aut0">
                            <div className=" relative rounded-full h-[80px] w-[80px] bg-[#EDF5FA] p-4 flex items-center justify-center">
                                <img
                                    className="h-full"
                                    src="https://s3-alpha-sig.figma.com/img/8d96/7947/07f25886ba1078a16b73185d5f869ad8?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OxZCmUyTNm5SR5AV-C4oUrClhUwQCkrO4IM3jcjVo9I8sGgq7vDS2SYfJoWgyGEkPECD2giLTYWF6dB-GQ8UbxpZhalT9u8qNAaOoRbL8mEY-oAV6gaa-uA2F8dG8jmUbyKCr3f385KeYF9GkvDawEcrUbqMaXHxta-yT-jMKgIH7d1U0aZyA5Karqnr31JpM6fU0fN-PftgWYRabDPlQ31PjCGDkgUv8LXGqIxEQuwQOdCqHMCyb7fx-4jA0lFL-EkxbYCzBi~AkFHXfL~RxPCMCPujdpTy97T~Vw~uf3~7DczoCS3-KEz5AVWHMbQeP2FIuYo8tAGIa70ZjPbzBw__"
                                    alt="img"
                                />
                            </div>
                            <h3 className="font-bold text-center text-[14px] w-[150px] px-[1px] tracking-wider font-DINProBoldFont">
                                Natural Remedies
                            </h3>
                            <p className="text-center font-semibold font-DINProLightFont text-[10px] text-[#515151] w-[120px] ">
                                Using herbs and natural therapies for healing.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 border-4 rounded-xl w-[150px] lg:p-5 py-6 h-aut0">
                            <div className=" relative rounded-full h-[80px] w-[80px] bg-[#EDF5FA] p-4 flex items-center justify-center">
                                <img
                                    className="h-full"
                                    src="https://s3-alpha-sig.figma.com/img/8cfd/d829/c4e732142f1ed180d4de142f4047a6ea?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oOEQe3v9JFb~-sD5VfoKDYsKc7QmVUf7ydrmScx8T7YzaPAk3q4oECO2rFyIMzu8RaO40BCVOL63E-oUYtwr2nq0Ge-IgOii04bpQLgBSxIzL5P06epvzPDf-AsOYby1JWn2xhuoOT-k0qNnrxCK26fAqxnlbXLDuuF104vEDy9ZmAUIidorm0rWMlVhpmVhT1vKEGTBSy8cc67WHFnD83lh8zy8vpvLrczkhhPd3OhPIuw84Pa6Xi2HQcrssETSX9ZLD02ObYGR17pisd0LLkwSShb~sGcgPD0~jMackXjNDf8scPgTA2y1hz1AmKpjQ8cwC1zs-jbGo5zTrDtyQg__"
                                    alt="img"
                                />
                            </div>
                            <h3 className="font-bold text-center text-[14px] w-[150px] px-[1px] tracking-wider font-DINProBoldFont">
                                Boosting immunity
                            </h3>
                            <p className="text-center font-semibold font-DINProLightFont text-[10px] text-[#515151] w-[120px] ">
                                Stay strong and healthy for life, not just for
                                today.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slide3;
