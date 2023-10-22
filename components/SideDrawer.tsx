"use client";
import Konten from "./Konten";
import Bawah from "./Bawah";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { side_menu } from "@prisma/client";

const pathname = usePathname;

export default function SideDrawer({
    childrenSide,
    sideMenus,
}: {
    childrenSide: React.ReactNode;
    sideMenus: side_menu[];
}) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggle = () => setDrawerOpen(!drawerOpen);
    return (
        <div className="bg-base-200 drawer lg:drawer-open">
            <input
                id="my-drawer"
                type="checkbox"
                className="drawer-toggle"
                checked={drawerOpen}
                onChange={toggle}
            />
            <div className="drawer-content">
                <div className=" flex flex-col min-h-screen">
                    <Konten childrenKonten={childrenSide} />
                    <div className="divider"></div>
                    <Bawah />
                </div>
            </div>
            <div className="drawer-side z-40 scroll min-h-screen">
                <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                    defaultChecked={true}
                ></label>
                <div className="menu w-40 min-h-full bg-base-200 text-base-content backdrop-blur shadow-sm bg-opacity-50">
                    <ul onClick={toggle} className="mt-20">
                        {sideMenus.map((menu) => (
                            <li key={menu.id}>
                                <Link
                                    href={menu.path}
                                    className={
                                        pathname() === menu.path ? "active" : ""
                                    }
                                >
                                    {menu.name}
                                </Link>
                            </li>
                        ))}

                        {/* <li>
                            <Link
                                href="/"
                                className={pathname() === "/" ? "active" : ""}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/user"}
                                className={
                                    pathname() === "/user" ? "active" : ""
                                }
                            >
                                User
                            </Link>
                        </li>
                        <li>
                            <a>Sidebar Item 2</a>
                        </li>
                        <li>
                            <a>Sidebar Item 2</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
}
