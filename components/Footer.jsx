import Image from "next/image";
import cursorLogo from "../public/static/cursorlogo.png";

function Footer() {
    return (
        <footer className="bg-white py-16 px-10 border-t-2 border-gray-300">
            <div className="flex items-center justify-between">
                <div className="brand flex space-x-4 items-center">
                    {/* <Image
                        src={cursorLogo}
                        alt="cursor logo"
                        layout="fixed"
                        width={100}
                        height={100}
                        objectFit="contain"
                    /> */}
                    <h3 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-teal-500">
                        CURSOR
                    </h3>
                    <p className="addr">The Computer Stude</p>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2047.9621042206609!2d73.97837828349716!3d15.42393095445034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x413acca8e6df29a7!2sComputer%20Engineering%20Department!5e1!3m2!1sen!2sin!4v1656099992212!5m2!1sen!2sin"
                    width={400}
                    height={300}
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </footer>
    );
}

export default Footer;
