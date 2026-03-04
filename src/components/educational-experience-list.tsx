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
};

export default function EducationalExperienceList({ educationalExperience, onAdd }: Props) {
    return (
    <>
        <div>
            <h2>Educational Experience</h2>
            <button onClick={() => onAdd()}>Add Experience</button>
        </div>
        {educationalExperience.map((education, index) => (
            <EducationalExperienceCard key={index} education={education} />
        ))}
    </>
    );
}