type Props = {
    experience: {
        company: string;
        position: string;
        description: string;
        startDate: string;
        endDate: string;
    };
};

export default function PracticalExperienceCardDetail({ experience }: Props) {
    return (
        <div className="border-2 border-[#654321] rounded-xl p-4 bg-white shadow-sm">

            <p>
                <span className="font-semibold">Company:</span> {experience.company}
            </p>

            <p>
                <span className="font-semibold">Position:</span> {experience.position}
            </p>

            <p>
                <span className="font-semibold">Description:</span> {experience.description}
            </p>

            <p>
                <span className="font-semibold">Start Date:</span> {experience.startDate}
            </p>

            <p>
                <span className="font-semibold">End Date:</span> {experience.endDate}
            </p>

        </div>
    );
}