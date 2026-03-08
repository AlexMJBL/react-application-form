type Props = {
    name: string;
    email: string;
    phone: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function GeneralInfo({ name, email, phone, onChange }: Props) {
    return (
        <div className="w-full max-w-lg mx-auto mt-6">
            
            <h2 className="text-2xl font-semibold text-[#654321] mb-6 border-b-2 border-[#654321] pb-2">
                General Information
            </h2>

            <div className="flex flex-col gap-4">

                <div className="flex flex-col">
                    <label htmlFor="name" className="text-[#654321] font-medium mb-1">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={onChange}
                        name="name"
                        className="border border-[#654321] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#654321]"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="text-[#654321] font-medium mb-1">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="JohnDoe@gmail.com"
                        value={email}
                        onChange={onChange}
                        name="email"
                        className="border border-[#654321] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#654321]"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="phone" className="text-[#654321] font-medium mb-1">
                        Phone Number
                    </label>
                    <input
                        id="phone"
                        type="text"
                        placeholder="(123) 456-7890"
                        value={phone}
                        onChange={onChange}
                        name="phone"
                        className="border border-[#654321] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#654321]"
                    />
                </div>

            </div>
        </div>
    );
}