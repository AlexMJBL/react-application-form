type Props = {
    experience: {
        company: string;
        position: string;
        description: string;
        startDate: string;
        endDate: string;
    };
    index:number;
    onChange: (index: number, field: string, value: string) => void;
};
export default function PracticalExperienceCard({ experience, index, onChange }: Props) {
    return (
        <div className="border-2 border-[#654321] rounded-xl p-5 bg-[#f5efe8] shadow-sm">

            <div className="flex flex-col gap-4">

            <div className="flex flex-col mb-2">
                <label htmlFor="company">Company Name</label>
                <input
                    className="border p-2 rounded"
                    type="text"
                    id="company"
                    value={experience.company}
                    onChange={(e) => onChange(index, "company", e.target.value)}
                />
            </div>

            <div className="flex flex-col mb-2">
                <label htmlFor="position">Position</label>
                <input
                    className="border p-2 rounded"
                    type="text"
                    id="position"
                    value={experience.position}
                    onChange={(e) => onChange(index, "position", e.target.value)}
                />
            </div>

            <div className="flex flex-col mb-2">
                <label htmlFor="description">Description</label>
                <input
                    className="border p-2 rounded"
                    type="text"
                    id="description"
                    value={experience.description}
                    onChange={(e) => onChange(index, "description", e.target.value)}
                />
            </div>

            <div className="flex gap-4">
                <div className="flex flex-col w-full">
                    <label htmlFor="start-date">Start Date</label>
                    <input
                        className="border p-2 rounded"
                        type="date"
                        id="start-date"
                        value={experience.startDate || ""}
                        onChange={(e) => onChange(index, "startDate", e.target.value)}
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label htmlFor="end-date">End Date</label>
                    <input
                        className="border p-2 rounded"
                        type="date"
                        id="end-date"
                        value={experience.endDate || ""}
                        onChange={(e) => onChange(index, "endDate", e.target.value)}
                    />
                </div>
            </div>
</div>
        </div>
    );
}