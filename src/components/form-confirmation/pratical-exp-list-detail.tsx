import PracticalExperienceCardDetail from "./pratical-exp-card-detail";

type Props = {
    practicalExperience: 
    {
        company: string;
        position: string;
        description: string;
        startDate: string;
        endDate: string;
    }[];
};

export default function PracticalExperienceListDetail({ practicalExperience }: Props) {
    return (
        <div className="w-full max-w-lg mb-6">

            <h2 className="text-xl font-semibold text-[#654321] mb-3">
                Practical Experience
            </h2>

            <div className="flex flex-col gap-4">
                {practicalExperience.map((experience, index) => (
                    <PracticalExperienceCardDetail
                        key={index}
                        experience={experience}
                    />
                ))}
            </div>

        </div>
    );
}