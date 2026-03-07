type Props = {
    name: string;
    email: string;
    phone: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function GeneralInfo({ name, email, phone, onChange }: Props) {
    return (
    <>
        <h2>General Information</h2>
        <div>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" placeholder="John Doe" value={name} onChange={onChange} name="name" />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" placeholder="JohnDoe@gmail.com" value={email} onChange={onChange} name="email" />
        </div>
        <div>
            <label htmlFor="phone">Phone Number:</label>
            <input id="phone" type="text" placeholder="(123) 456-7890" value={phone} onChange={onChange} name="phone" />
        </div>
    </>
);
}