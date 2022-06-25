import Image from "next/image";
import Link from "next/link";
import cursorLogo from "../public/static/cursorlogo.png";
import gecLogo from "../public/static/gecicon.png";

function Header() {
    return (
        <>
            <header
                className="fixed top-0 w-full z-50 shadow-lg"
                id="mainHeader"
            >
                <header
                    className="bg-white duration-500 ease-in-out transition-all"
                    id="doubleLogoHeader"
                >
                    <div className="nav__left flex space-x-4 p-4 items-center justify-between mx-auto max-w-6xl">
                        <div className="relative w-16 h-16">
                            <Link href="/">
                                <span>
                                    <Image
                                        src={cursorLogo}
                                        alt="cursor logo"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </span>
                            </Link>
                        </div>
                        <div className="center text-center text-gray-900">
                            <h3 className="text-xl font-semibold">
                                Goa College of Engineering
                            </h3>
                            <h1 className="text-3xl font-bold">
                                Computer Student's Council (CURSOR)
                            </h1>
                            <p className="text-xl">Farmagudi, Goa</p>
                        </div>
                        <div className="relative w-16 h-16">
                            <a href="https://gec.ac.in">
                                <Image
                                    src={gecLogo}
                                    alt="cursor logo"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="nav__right"></div>
                </header>
            </header>
        </>
    );
}

export default Header;
