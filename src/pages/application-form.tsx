import GeneralInfo from "../components/general-info";
import EducationalExperienceList from "../components/educational-experience-list";
import PracticalExperienceList from "../components/practical-experience-list";
import { useState } from "react";

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


};

export default function ApplicationForm({ formData, addEducation, addPracticalExperience, onInputChange }: Props) {

    return (
    <>
        <h1>Application Form</h1>
        <GeneralInfo name={formData.name} email={formData.email} phone={formData.phone} onChange={onInputChange} />
        <EducationalExperienceList educationalExperience={formData.educationalExperience} onAdd={addEducation}/>
        <PracticalExperienceList practicalExperience={formData.practicalExperience} onAdd={addPracticalExperience}/>
        <button>Submit</button>
    </>
);
}