import React from "react";

const data = [
    {
        img_url:
            "https://s3-alpha-sig.figma.com/img/f4ba/b0ae/b3be65721ad15db48b42ced1fe1add76?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=faHBPWq9kP9y91C89iR~Yy6vOnCHXarmrshY5RQDMzA52R8fmPdKF5m2wtC68NEQtodwY1ObnJHRduYCajFIdWzeNneIhAkIzFlrAoQ2w~fX1IMmJcBQhsfdvsQVphqvlkVBywbW9qe-PvBfeFZ0MfKPwtNFS2ckclZPYLF7TKF1aSWfhZ6SpUPV0EgTjrt8EmYbXbI93Lv5Tv33Kqqz7W4cSOSNrOiSDu-gUnZ~IBTzn9tDyDgSZrjiVZHh-GUrlQVDr5~QULGsgd67ELmqZkdEltTNrz5xtibtFLxwYn-YHzJZvB1~2bNLREahyJbFRirMemovZS3wgsJGq8jCLQ__",
        title: "Convenient online & In-clinic consultations",
    },
    {
        img_url:
            "https://s3-alpha-sig.figma.com/img/2c5e/d627/8cf1f869d2e948b71cdcdb14c7c4413f?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=foRFBF~H2jxfZEa~ctSIYZtoZ2s9SsF3JNC668wiMnC1hzp6Lu6mCSy~Im~CbgVNzg2XMLLjEowDSHl5lHO6Op4foGfQCleMjTPWKaJr4peA9JtgxI-JayRDueEcDgPyh5DYySTVtwcQKGGujbpscOLwX-skxLuJHJre3qb3PgLn637-e-s8y2Uo0rTqfftOLHA1hKm5Sw048FAqRSzK0pYkfgdDyJ~KcKKQJVGSYwiEiuzP2hA-FKV6pk-L4Slk3e8ajZ3FIDAHuffLrr8W58CRpDNjUMh3KwZfzCnlFpwQxL2hC5RzcYD3MVKwgObrb~opE2d6aEU5bHR0i-nfnw__",
        title: "Safe and effective treatment",
    },
    {
        img_url:
            "https://s3-alpha-sig.figma.com/img/0854/69db/3d23d6085aab3b3dbe1b662f60051d85?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LeiH9pljHOvIS9K7Ra1HfDU-0de7rMvEtNV~I3iCz6FcPpReWWEOC0UStZVmuhqk38RkKP8Y~Alus1JiDZnCNyCAeDyaRSHNwE~vS45ENw0Pg1WZcdSlzfwfdI4JbWcpQ3RJ7KLkcKZExE00rGBJoHFAunkEYSOj8aqwxtQPYKtEOBqMoaG7fbAg6ebi57bhINXjDw0Yd58HeBdAEs7N9bZoCkIG6rABsSNWJJlVpjcWj3ydVatttg1dZBbilTErNmDCga20Z02t3wo7Gvqwv6xkPYjXKXxTMzgY1lW3Rp9~hVELOqKLCOUsWbJLLVN1Jr9qQTPoYQeFMapxRtzJIQ__",
        title: "Experienced Ayurvedic Practitioners",
    },
    {
        img_url:
            "https://s3-alpha-sig.figma.com/img/cd8d/62a9/52ed6e4cba8b811d1e2a2336dfc266d0?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pJ47BXHwOiUgdyGfVNczoszh3lAGEGHHuPRCdTDTUTBYHtkG~NkDOgfNAPtxoMKwv8NDCeXz5w8bMab6UnHI377Nwk~9Bv-BhprhyKocHASAFnU0CicIgr2adomONyebS2sbzH4yCuxKFmooVyzZcuq1VtagjwjX0F34eYWlZ4p~4KUhjRZMhs3POPuuCx0ZpxnTukjKe37b5Gm549zs7P1o5JbsmNmhRKhoartEiCVFj3vYSS848kMoeBNoWdEPq6KXcs40g3ZigNnwPYQlnpFVKa0QoI3M6y-FA5A7lHDtqYs1w6QNI6FOwrE2bb64RrmgtjKw17bXAVzgwszH5A__",
        title: "personalized Treatment Plans & Guidance",
    },
];

function Slide2() {
    return (
        <div>
            {/* for large screen */}
            <div className="hidden h-[70px] md:h-[100px] 2xl:h-[180px] 3xl:h-[210px] lg2:h-[150px] bg-[#FFF7E2] w-full sm:flex sm:flex-row flex-col items-center justify-center gap-2">
                {data.map((d) => (
                    <div className="w-[160px] md:w-[190px] lg2:w-[280px] 3xl:w-[480px] 2xl:w-[360px] flex lg2:gap-3 gap-1 px-1 items-center justify-center">
                        <div className="hover:scale-105 bg-white lg2:p-4 p-2 2xl:p-6 rounded-full w-auto h-auto">
                            <img
                                className="md:h-8 md:w-8 h-6 w-6 lg2:h-10 2xl:h-[60px] 2xl:w-[60px] lg2:w-10 object-contain object-center"
                                src={d.img_url}
                            />
                        </div>
                        <h4 className="text-[8px] w-[100px] md:text-[10px] lg2:text-[15px] lg2:w-[200px] md:w-[120px] 3xl:text-[24px] 3xl:w-[250px] 2xl:text-[20px] 2xl:w-[220px] font-DINProBoldFont">
                            {d.title}
                        </h4>
                    </div>
                ))}
            </div>
            {/* for small screen */}
            <div className="sm:hidden w-full h-auto bg-[#FFF7E2]">
                {data.map((d) => (
                    <div className="hover:scale-105 h-auto w-auto p-3 xxm:p-5 flex justify-center  items-center border-b-2 border-[#a07f2c1c]">
                        <div className="xxm:ml-10">
                            <div className="flex gap-2  items-center justify-start h-auto ">
                                <div className="w-[4rem] h-[4rem] xxm:w-[4rem] xxm:h-[4rem] rounded-full bg-white flex items-center justify-center border-2">
                                    <img className="h-8 w-8" src={d.img_url} />
                                </div>
                                <h4 className="text-left  text-[14px] w-[200px] xxm:text-[15px] xxm:w-[250px] font-DINProBoldFont capitalize">
                                    {d.title}
                                </h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Slide2;
