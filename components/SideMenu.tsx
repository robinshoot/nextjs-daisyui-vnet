import Link from "next/link";
import { usePathname } from "next/navigation";
import prisma from "@/lib/prisma";

const pathname = usePathname;

const getMenus = async () => {
    const res = await prisma.side_menu.findMany({
        select: {
            id: true,
            name: true,
            path: true,
        },
    });
    return res;
};

export default async function SideMenu() {
    const sideMenus = await getMenus();
    return (
        <div className="menu w-40 min-h-full bg-base-200 text-base-content backdrop-blur shadow-sm bg-opacity-50">
            <div className="h-20"></div>
            <ul>
                {/* <ul onClick={toggle}> */}
                {/* {sideMenus.map((sideMenu, index) => (
                    <li key={sideMenu.id}>
                        <Link
                            href={sideMenu.path}
                            className={
                                pathname() === sideMenu.path ? "active" : ""
                            }
                        >
                            {sideMenu.name}
                        </Link>
                    </li>
                ))} */}
            </ul>
        </div>
    );
}
