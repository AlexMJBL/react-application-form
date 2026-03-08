import EducationalExperienceCard from "./educational-experience-card";

type Props = {
    educationalExperience:
    {
        school: string;
        degree: string;
        fieldOfStudy: string;
        graduationYear: string;
    }[];
    onAdd: () => void;
    onRemove: () => void;
    onChange: (index: number, field: string, value: string) => void;
};

export default function EducationalExperienceList({ educationalExperience, onAdd, onRemove, onChange }: Props) {
    return (
        <div className="w-full max-w-lg mx-auto mt-10">

            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-[#654321] border-b-2 border-[#654321] pb-1">
                    Educational Experience
                </h2>

                <button
                    type="button"
                    onClick={() => onAdd()}
                    className="bg-[#654321] text-white px-4 py-2 rounded-lg hover:bg-[#4b2f16] transition"
                >
                    Add Experiece
                </button>

            </div>

            <div className="flex flex-col gap-6">
                {educationalExperience.map((education, index) => (
                    <EducationalExperienceCard
                        key={index}
                        education={education}
                        onChange={onChange}
                        index={index}
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