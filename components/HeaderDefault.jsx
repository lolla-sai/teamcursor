import Image from "next/image";
import Link from "next/link";
import cursorLogo from "../public/static/cursorlogo.png";
import gecLogo from "../public/static/gecicon.png";

function Header({ fixed = true, transparentOnTop = true }) {
    return (
        <>
            <header
                className={`${
                    fixed ? "fixed" : "sticky"
                } top-0 w-full z-40 shadow-lg`}
                id="mainHeader"
            >
                <header className="bg-white" id="doubleLogoHeader">
                    <div className="nav__left flex space-x-4 p-4 items-center justify-between mx-auto max-w-6xl">
                        <div className="relative w-16 h-16 cursor-pointer">
                            <Link href="/">
                                <span>
                                    <Image
                                        src={cursorLogo}
                                        alt="cursor logo"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </span>
                            </Link>
                        </div>
                        <div className="center text-center text-gray-900">
                            <h3 className="md:text-xl text-sm font-semibold">
                                Goa College of Engineering
                            </h3>
                            <h1 className="md:text-3xl font-bold">
                                Computer Student's Council
                            </h1>
                            <p className="md:text-xl text-sm">Farmagudi, Goa</p>
                        </div>
                        <div className="relative w-16 h-16">
                            <a href="https://gec.ac.in">
                                <span>
                                    <Image
                                        src={gecLogo}
                                        alt="cursor logo"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </span>
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
