import NavLink from "./NavLink";

function Sidebar({ setIsOpen, open = false, navLinks = [] }) {
    return (
        <div
            className={`absolute md:hidden top-0 left-0 h-screen bg-gray-800 z-50 w-full overflow-hidden transition-all duration-500 ease-in-out ${
                open ? "max-w-md p-4 opacity-100" : "max-w-0 opacity-0"
            }`}
        >
            <h2 className="font-bold text-3xl text-white my-4">CURSOR</h2>
            <ul className="">
                {navLinks.map((navLink) => (
                    <NavLink
                        text={navLink.linkText}
                        url={navLink.link}
                        key={navLink.link}
                    />
                ))}
            </ul>
            <div className="absolute bottom-10 left-4">
                <button
                    onClick={() => setIsOpen(false)}
                    className="underline rounded text-white"
                >
                    Close Sidebar
                </button>
            </div>
        </div>
    );
}

export default Sidebar;
