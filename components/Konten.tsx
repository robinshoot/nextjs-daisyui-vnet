export default function Konten({
    childrenKonten,
}: {
    childrenKonten: React.ReactNode;
}) {
    return (
        <div className="flex-grow bg-base-200 mt-20">
            <div className="hero bg-base-600">
                <div className="hero-content text-center">
                    <div className="max-w-3xl">{childrenKonten}</div>
                </div>
            </div>
        </div>
    );
}
