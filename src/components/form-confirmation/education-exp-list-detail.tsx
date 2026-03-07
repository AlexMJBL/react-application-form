import EducationalExperienceCardDetail from "./education-exp-card-detail";


type Props = {
  educationalExperience: 
    {
        school: string;
        degree: string;
        fieldOfStudy: string;
        graduationYear: string; 
    }[];
};

export default function EducationalExperienceListDetail({ educationalExperience}: Props) {
    return (
    <>
        <div>
            <h2>Educational Experience</h2>
            
        </div>
        {educationalExperience.map((education, index) => (
            <EducationalExperienceCardDetail key={index} education={education} />
        ))}
    </>
    );
}