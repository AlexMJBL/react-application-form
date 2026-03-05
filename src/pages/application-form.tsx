import GeneralInfo from "../components/general-info";
import EducationalExperienceList from "../components/educational-experience-list";
import PracticalExperienceList from "../components/practical-experience-list";

type Props = {
    formData:{
        name:string,
        email:string,
        phone:string,
        educationalExperience: 
            {
                school: string,
                degree: string,
                fieldOfStudy: string,
                graduationYear: string
            }[],
        practicalExperience: 
            {
                company: string,
                position: string,
                description: string,
                startDate: string,
                endDate: string
            }[]
        
    },
    addEducation: () => void;
    addPracticalExperience: () => void;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onEducationChange: (index: number, field: string, value: string) => void;
    onPracticalExperienceChange: (index: number, field: string, value: string) => void;
};

export default function ApplicationForm({ formData, addEducation, addPracticalExperience,
    onInputChange, onEducationChange, onPracticalExperienceChange }: Props) {

    return (
    <>
        <h1>Application Form</h1>
        <GeneralInfo name={formData.name} email={formData.email} phone={formData.phone} onChange={onInputChange} />
        <EducationalExperienceList educationalExperience={formData.educationalExperience} onAdd={addEducation} onChange={onEducationChange} />
        <PracticalExperienceList practicalExperience={formData.practicalExperience} onAdd={addPracticalExperience} onChange={onPracticalExperienceChange} />
        <button>Submit</button>
    </>
);
}