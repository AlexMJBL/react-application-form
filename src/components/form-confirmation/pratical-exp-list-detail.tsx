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

export default function PracticalExperienceListDetail({ practicalExperience}: Props) {
            return (
    <>
        <div>
            <h2>Practical Experience</h2>
            <button type="button">Add Experience</button>
        </div>
        {practicalExperience.map((experience, index) => (
            <PracticalExperienceCardDetail key={index} experience={experience} />
        ))}
    </>
    );
}