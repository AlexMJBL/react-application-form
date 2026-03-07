type Props = {
    name: string;
    email: string;
    phone: string;
};

export default function GeneralInfoDetail({ name, email, phone,}: Props) {
    return (
    <>
        <h2>General Information</h2>
        <div>
            <label htmlFor="name">Name: {name}</label>
            <label htmlFor="email">Email: {email}</label>
            <label htmlFor="phone">Phone Number: {phone}</label>
        </div>
    </>
);
}