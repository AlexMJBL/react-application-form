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
};

export default function PracticalExperienceList({ practicalExperience, onAdd }: Props) {
            return (
    <>
        <div>
            <h2>Practical Experience</h2>
            <button onClick={() => onAdd()}>Add Experience</button>
        </div>
        {practicalExperience.map((experience, index) => (
            <PracticalExperienceCard key={index} experience={experience} index={index}/>
        ))}
    </>
    );
}