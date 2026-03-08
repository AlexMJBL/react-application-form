type Props = {
    name: string;
    email: string;
    phone: string;
};

export default function GeneralInfoDetail({ name, email, phone }: Props) {
    return (
        <div className="w-full max-w-lg mb-6">

            <h2 className="text-xl font-semibold text-[#654321] mb-3">
                General Information
            </h2>

            <div className="flex flex-col gap-2 border-2 border-[#654321] rounded-lg p-4 bg-white">

                <p>
                    <span className="font-semibold">Name:</span> {name}
                </p>

                <p>
                    <span className="font-semibold">Email:</span> {email}
                </p>

                <p>
                    <span className="font-semibold">Phone Number:</span> {phone}
                </p>

            </div>

        </div>
    );
}