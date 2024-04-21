import React from "react";

function Navbar() {
    return (
        <div>
            {/* navbar */}
            <div className="relative h-[120px] sm:h-[70px] bg-[#FFF7E2] w-full flex items-end justify-center py-7">
                <img
                    className="sm:hidden absolute top-[60px] left-7"
                    width="35"
                    height="35"
                    src="https://img.icons8.com/ios/50/000000/menu--v1.png"
                    alt="menu--v1"
                />
                <img
                    className=" sm:hidden h-[30px] object-contain"
                    src="https://s3-alpha-sig.figma.com/img/503f/f9c0/bff6fd7d5705b1c51f69ea8e8c5ac172?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FtvcqIh0Zk3rjG2~mAzdN6TBJMvkoe8RNA697ccuf6bjSHERbJH~zyeQlIh8frOPlHxN63G3cXnt6XIp2EvfkPLJN7WoAyMJMPX6Tsm7WdO2y~C6v85wN9Cv6qLiR2yWPiD-RXFAhYudm1PetPy0GPjCIbbCXUYjjE4L~7xiGBT79Qanj1GwUhKYwuEtNkPtfC5SMKh7iocOVRQa-ItwPwGZWN4x9f~05x1fFx-~YBrlG0AkIP90~CzRNqt31f3o5pFEynoQ1ORV~kgu1doeWEcIA8oqVxWfi4mamKQf1nI7x5kXhoBra4D-phaK1RNHkvdLqiQwQvsnAUkK4Ery-g__"
                    alt="img"
                />
            </div>
        </div>
    );
}

export default Navbar;
