import React from "react";

function Slide1() {
    return (
        <div>
            {/* for large screen */}
            <div className="hidden sm:block relative w-full bg-[#7A2721]  md:h-[450px] lg:h-[530px] xl:h-[650px] sm:h-[350px] 2xl:h-[42rem] 3xl:h-[56rem]">
                {/* content */}
                <div className="absolute top-0 right-0 sm:h-full w-full sm:px-[32px] sm:py-[60px] lg:px-[50px] xl:py-[100px] xl:px-[60px] lg:py-[80px] z-50 flex flex-col gap-5 xl:gap-7 2xl:py-[8rem] 2xl:px-[6rem]">
                    <p className="text-[#FFF7E2] sm:text-[12px] md:text-[15px] lg:text-[16px] xl:text-[20px] font-light tracking-wider font-DINProLightFont 2xl:text-[30px]">
                        Namaste, Welcome to Amrutam{" "}
                    </p>
                    <h1 className="text-[#FFF7E2] 3xl:text-[65px] 3xl:w-[1200px] sm:text-[23px] sm:w-[500px] md:text-[25px] md:w-[500px] lg:text-[30px] lg:w-[650px] xl:text-[45px] xl:w-[900px] tracking-wide text-left font-bold font-DINProBoldFont 2xl:text-[3rem] 2xl:w-[60rem]">
                        Step into Holistic Healing with{" "}
                        <span className="underline cursor-pointer">
                            Ayurveda
                        </span>{" "}
                        Book Consultation with certified Experts.
                    </h1>
                    <p className="text-[#FFF7E2] sm:text-[12px] sm:w-[450px] md:text-[11px] md:w-[450px] lg:text-[13px] lg:w-[560px] xl:text-[18px] xl:w-[700px] font-light tracking-wider font-DINProLightFont 2xl:text-[22px] 2xl:w-[50rem]">
                        Dive into the world of ayurveda and Experience
                        Personalized Health Solutions and Holistic Guidance from
                        Trusted Ayurvedic Doctors Anytime, anywhere.
                    </p>
                    <button
                        className="hover:scale-105 cursor-pointer hover:bg-[#549b56] uppercase sm:text-[10px] md:text-[15px] sm:h-[50px] sm:w-[150px] md:w-[250px] xl:h-[60px] xl:w-[300px] xl:text-[20px] p-3 
bg-[#3A643B] rounded-xl text-white font-semibold mt-5 xl:mt-8 2xl:h-[100px] 2xl:w-[450px] 2xl:text-[30px] font-DINProBoldFont 2xl:rounded-3xl"
                    >
                        Book an Appointment
                    </button>
                </div>

                {/* image */}
                <div className="absolute top-0 right-0 h-full w-full bg-[#250b0b] flex justify-end">
                    <div className="absolute top-0 right-0 h-full w-full bg-gradient-to-r from-[#250b0b] via-[#2b0101] to-transparent z-30"></div>
                    <img
                        className="h-full object-contain transform -scale-x-100"
                        src="https://s3-alpha-sig.figma.com/img/c1af/953f/807faed30071845860b212ed47717559?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IHZz7ngJyjHmSF3Xm~Mbmvsh6XIGK9xbBYq-L7n5ZTjCHFEQbQr1XyMV0WG-YCDnhsIkxbvKacEjSMcM7IEPcK3Q4Jd4BbMPu19w7-T5~mzrToEY558ThHLz3JHbOgpzwhLkbcD37ZT9hFAnO3yx98Fm4By3YMFtyS-53wCc7Ew8wt4EBlyLzKbMuXck9MiKZLQuUo9Ix-dAeooFTnes0gZmB6JwfOhpz8JPT1jASjmtgXJ1UKtMpOGHh-jGZtoSSRJYYD8cGJDRcnOYTjke7b~xJ4DhrZaWzU-tX~Z35mdUZSoItA9bH8nbD0rWXmKnMiL84ppuGNQxQYEo9uhJjA__"
                        alt="img"
                    />
                </div>
            </div>
            {/* for mobile view content*/}
            <div className="sm:hidden">
                <div className="relative h-[550px] xxm:h-[650px] w-full bg-cover bg-center bg-[url(https://s3-alpha-sig.figma.com/img/adfc/8fd0/85372b9b89239293b1c75db89c0bf0f4?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q1rIxTK5MKUTBuvjEOpyrpRQPwjs11G6P-NjmCfBd9Vhf0B1zmwEpXwG9GdRGvzMe5KAD3z7~arEnhyN0niNssklq5eLsMhPaFV27YisXZVSD5VxtoY6cl5E4tRjlpgQRLCzknnbIGBxIIVSYXDSxCTv5RV9reC44TJCVAIrLESIWy7lE4biLYpAdk4LNqt0u53L~KzcShK7CTt6n74CBVneLObKaRhYoAsAtzzmJQWic9qfw9o0wIf-AAsgx3QQJ~d~vqFnMIiQtsKmZ4~QWceI~y0cvbScH1ZUDPdMOdGnxF~4XtKbBxdDzA377J7uBfanQ9cROeNbtMkNgoSjZg__)]">
                    <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0 z-40"></div>
                    <div className="absolute top-0 left-0 h-full w-full px-[40px] py-[80px] z-50 flex flex-col gap-6 xxm:gap-7 item-left">
                        <p className="text-[13px] xxm:text-[18px] w-auto text-[#FFF7E2] font-light tracking-wider">
                            Namaste, Welcome to Amrutam{" "}
                        </p>
                        <h1 className="text-[#FFF7E2] text-[21px] xxm:text-[24px] w-auto tracking-wide text-left font-bold">
                            Step into Holistic Healing with{" "}
                            <span className="underline">Ayurveda</span> <br />{" "}
                            Book Consultation with certified Experts.
                        </h1>
                        <p className="text-[#FFF7E2] text-[12px] xxm:text-[15px] w-auto font-light tracking-wider">
                            Dive into the world of ayurveda and Experience
                            Personalized Health Solutions and Holistic Guidance
                            from Trusted Ayurvedic Doctors Anytime, anywhere.
                        </p>
                        <button className="hover:scale-105 cursor-pointer hover:bg-[#549b56] uppercase text-[13px] h-[50px] w-[200px] xxm:text-[17px] xxm:h-[60px] xxm:w-[250px] p-3  bg-[#3A643B] rounded-xl text-white font-semibold mt-5 xl:mt-8">
                            Book an Appointment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slide1;
