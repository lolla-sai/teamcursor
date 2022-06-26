import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import cursorLogo from "../public/static/cursorlogo.png";
import gecLogo from "../public/static/gecicon.png";
import NavLink from "./NavLink";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Sidebar from "./Sidebar";

function Header({ transparentOnTop = true, fixed = true, navLinks = [] }) {
    const [sideNavOpened, setSideNavOpened] = useState(false);

    useEffect(() => {
        let prevScrollpos = window.pageYOffset;

        function handleScroll() {
            let currentScrollPos = window.pageYOffset;
            if (
                document.querySelector("nav") &&
                document.querySelector("#doubleLogoHeader")
            ) {
                if (currentScrollPos === 0) {
                    document
                        .querySelector("nav")
                        .classList.remove("scrolledNav");
                    document.querySelector(
                        "#doubleLogoHeader"
                    ).style.maxHeight = "0";
                    document.getElementById("mainHeader").style.boxShadow =
                        "none";
                } else {
                    document.querySelector("nav").classList.add("scrolledNav");
                    document.getElementById("mainHeader").style.boxShadow = "";
                    if (prevScrollpos > currentScrollPos) {
                        document.querySelector(
                            "#doubleLogoHeader"
                        ).style.maxHeight = "500px";
                    } else {
                        document.querySelector(
                            "#doubleLogoHeader"
                        ).style.maxHeight = "0";
                    }
                }
                prevScrollpos = currentScrollPos;
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <style global jsx>{`
                .scrolledNav,
                .defaultScrolled {
                    background: white;
                }
                .scrolledNav li,
                .defaultScrolled li {
                    color: black;
                }
                .scrolledNav li:hover,
                .defaultScrolled li:hover {
                    color: white;
                    background: black;
                }
            `}</style>
            <header
                className={`${
                    fixed ? "fixed" : "sticky"
                } top-0 w-full z-40 shadow-lg transition-shadow`}
                id="mainHeader"
            >
                <Sidebar
                    open={sideNavOpened}
                    setIsOpen={setSideNavOpened}
                    navLinks={navLinks}
                />
                <header
                    className="bg-white max-h-0 overflow-hidden duration-500 ease-in-out transition-all"
                    id="doubleLogoHeader"
                >
                    <div className="nav__left flex space-x-4 p-4 items-center justify-between mx-auto max-w-6xl">
                        <div className="relative md:w-16 md:h-16 w-12 h-12 cursor-pointer">
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
                        <div className="relative md:w-16 md:h-16 w-12 h-12">
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
                <nav
                    className={`${
                        transparentOnTop ? "bg-transparent" : "defaultScrolled"
                    } md:py-4 md:px-8 transition-all ease-in-out duration-200`}
                >
                    <div className="flex items-center bg-white p-2 md:hidden">
                        <button
                            className="text-2xl mr-4"
                            onClick={() => setSideNavOpened(!sideNavOpened)}
                        >
                            <GiHamburgerMenu />
                        </button>
                        <Image
                            src={cursorLogo}
                            alt="cursor logo"
                            layout="fixed"
                            objectFit="contain"
                            width={50}
                            height={50}
                        />
                        <div className="links ml-auto flex items-center space-x-4">
                            <a
                                href="https://www.instagram.com/teamcursor/"
                                className="text-lg text-black hover:text-orange-400"
                            >
                                <AiFillInstagram />
                            </a>
                            <a
                                href="mailto:cursor.council2122@gmail.com"
                                className="text-lg text-black hover:text-red-600"
                            >
                                <MdEmail />
                            </a>
                        </div>
                    </div>
                    <ul className="hidden md:flex md:flex-row flex-col items-center justify-evenly p-2">
                        {navLinks.map((navLink) => (
                            <NavLink
                                text={navLink.linkText}
                                url={navLink.link}
                                key={navLink.link}
                            />
                        ))}
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
