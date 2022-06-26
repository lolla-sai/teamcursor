import Link from "next/link";

function NavLink({ text, url, className = "" }) {
    return (
        <li
            className={`text-white hover:text-black hover:bg-white rounded-lg ${className}`}
        >
            <Link href={url}>
                <a className="block px-4 py-2">{text}</a>
            </Link>
        </li>
    );
}

export default NavLink;
