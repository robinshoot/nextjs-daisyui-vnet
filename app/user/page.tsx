import prisma from "@/lib/prisma";

const getUsers = async () => {
    const res = await prisma.users.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            address: true,
            type: true,
            hireDate: true,
            status: true,
        },
    });
    return res;
};

export default async function User() {
    const users = await getUsers();
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Email</th>
                            <th>Alamat</th>
                            <th>Tipe</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td>{user.type}</td>
                                <td>{user.status}</td>
                                <td>Actions</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
