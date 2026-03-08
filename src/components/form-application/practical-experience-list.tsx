import PracticalExperienceCard from "./practical-experience-card";

type Props = {
    practicalExperience:
    {
        company: string;
        position: string;
        description: string;
        startDate: string;
        endDate: string;
    }[];
    onAdd: () => void;
    onRemove: () => void;
    onChange: (index: number, field: string, value: string) => void;
};
export default function PracticalExperienceList({ practicalExperience, onAdd, onRemove, onChange }: Props) {
    return (
        <div className="w-full max-w-lg mx-auto mt-10">

            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-[#654321] border-b-2 border-[#654321] pb-1">Practical Experience</h2>

                <button
                    type="button"
                    onClick={onAdd}
                    className="bg-[#654321] text-white px-4 py-2 rounded-lg hover:bg-[#4b2f16] transition"
                >
                    Add Experience
                </button>
            </div>
            <div className="flex flex-col gap-6">
                {practicalExperience.map((experience, index) => (
                    <PracticalExperienceCard
                        key={index}
                        experience={experience}
                        index={index}
                        onChange={onChange}
                    />

                ))}
            </div>
            <div className="flex flex-col my-2">
                <button
                    type="button"
                    onClick={onRemove}
                    className="bg-[#654321] text-white px-4 py-2 rounded-lg hover:bg-[#4b2f16] transition "
                >
                    Remove Experience
                </button>
            </div>
        </div>
    );
}