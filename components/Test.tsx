import prisma from "@/lib/prisma";

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

export default async function TestPage() {
    const sideMenus = await getMenus();
    return (
        <div>
            {sideMenus.map((sideMenu, index) => (
                <ul key={sideMenu.id}>
                    <li>{sideMenu.name}</li>
                    <li>{sideMenu.path}</li>
                </ul>
            ))}
        </div>
    );
}
