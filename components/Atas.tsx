"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pathname = usePathname;

export default function Navbar() {
    return (
        <nav className="w-full navbar">
            <div className="flex flex-1 md:gap-1 lg:gap-2">
                <label
                    htmlFor="my-drawer"
                    aria-label="open sidebar"
                    className="btn btn-square btn-ghost lg:hidden flex items-center gap-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-6 h-6 stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </label>
                <div className="font-title inline-flex text-lg md:text-2xl">
                    Navbar Title
                </div>
            </div>

            <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                    {/* Navbar menu content here */}
                    <li>
                        <a>Navbar Item 1</a>
                    </li>
                    <li>
                        <Link
                            href="/signin"
                            className={pathname() === "/signin" ? "active" : ""}
                        >
                            Sign In
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
