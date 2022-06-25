import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import cursorLogo from "../public/static/cursorlogo.png";
import gecLogo from "../public/static/gecicon.png";

function Header() {
    useEffect(() => {
        let prevScrollpos = window.pageYOffset;

        function handleScroll() {
            let currentScrollPos = window.pageYOffset;
            if (currentScrollPos === 0) {
                document.querySelector("nav").classList.remove("scrolledNav");
                document.querySelector("#doubleLogoHeader").style.maxHeight =
                    "0";
                document.getElementById("mainHeader").style.boxShadow = "none";
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

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {/* <header className="bg-blue-600 text-white p-2">
                <span>cursorcouncil2122@gmail.com</span>
            </header> */}
            <style global jsx>{`
                .scrolledNav {
                    background: white;
                }
                .scrolledNav li {
                    color: black;
                }
                .scrolledNav li:hover {
                    color: white;
                    background: black;
                }
            `}</style>
            <header
                className="fixed top-0 w-full z-50 shadow-lg"
                id="mainHeader"
            >
                <header
                    className="bg-white max-h-0 overflow-hidden duration-500 ease-in-out transition-all"
                    id="doubleLogoHeader"
                >
                    <div className="nav__left flex space-x-4 p-4 items-center justify-between mx-auto max-w-6xl">
                        <div className="relative w-16 h-16 cursor-pointer">
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
                                <span>
                                    <Image
                                        src={gecLogo}
                                        alt="cursor logo"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="nav__right"></div>
                </header>
                <nav className="bg-transparent py-4 px-8 transition-all ease-in-out duration-200">
                    <ul className="flex items-center justify-evenly p-2">
                        <li className="text-white hover:text-black hover:bg-white rounded-lg">
                            <Link href="/">
                                <a className="block px-4 py-2">Home</a>
                            </Link>
                        </li>
                        {/* <li className="text-white hover:text-black hover:bg-white rounded-lg">
                            <Link href="#">
                                <a className="block px-4 py-2">Contact</a>
                            </Link>
                        </li> */}
                        <li className="text-white hover:text-black hover:bg-white rounded-lg">
                            <Link href="/team">
                                <a className="block px-4 py-2">Team</a>
                            </Link>
                        </li>
                        <li className="text-white hover:text-black hover:bg-white rounded-lg">
                            <Link href="/students-corner">
                                <a className="block px-4 py-2">
                                    Student's Corner
                                </a>
                            </Link>
                        </li>
                        <li className="text-white hover:text-black hover:bg-white rounded-lg">
                            <Link href="/technix">
                                <a className="block px-4 py-2">Technix 2022</a>
                            </Link>
                        </li>
                        <li className="text-white hover:text-black hover:bg-white rounded-lg">
                            <Link href="/pixel">
                                <a className="block px-4 py-2">
                                    Pixel Magazine
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
