import ButtonSection from "./button-section";
import EducationalExperienceCard from "./educational-experience-card";

type Props = {
  educationalExperience: [
    {
        school: string;
        degree: string;
        fieldOfStudy: string;
        graduationYear: string; 
    }
  ];
  onAdd: (newEducation: any) => void;
};

export default function EducationalExperienceList({ educationalExperience, onAdd }: Props) {
    return (
    <>
        <div>
            <h2>Educational Experience</h2>
            <button>Add Experience</button>
        </div>
        <EducationalExperienceCard />
        <ButtonSection />
    </>
    );
}