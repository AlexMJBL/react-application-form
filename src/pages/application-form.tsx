import GeneralInfo from "../components/general-info";
import EducationalExperienceList from "../components/educational-experience-list";
import PracticalExperienceList from "../components/practical-experience-list";
import { useState } from "react";

export default function ApplicationForm() {

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        educationalExperience: [
            {
                school: "",
                degree: "",
                fieldOfStudy: "",
                graduationYear: ""
            }
        ],
        practicalExperience: [
            {
                company: "",
                position: "",
                startDate: "",
                endDate: ""
            }
        ]
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const addEducation = () => {
        setFormData(prev => ({
            ...prev,
            educationalExperience: [
            ...prev.educationalExperience,
            {
                school: "",
                degree: "",
                fieldOfStudy: "",
                graduationYear: ""
            }
            ]
        }));
    };

    const updateEducation = (index: number,field: string,value: string) => {
        setFormData(prev => ({
            ...prev,
            educationalExperience: prev.educationalExperience.map((edu, i) =>
            i === index ? { ...edu, [field]: value } : edu
            )
        }));
    };

    
     

    const addPracticalExperience = () => {
        setFormData(prev => ({
            ...prev,
            practicalExperience: [
            ...prev.practicalExperience,
            {
                company: "",
                position: "",
                startDate: "",
                endDate: ""
            }
            ]
        }));
    };



    return (
    <>
        <h1>Application Form</h1>
        <GeneralInfo name={formData.name} email={formData.email} phone={formData.phone} onChange={handleInputChange} />
        <EducationalExperienceList educationalExperience={formData.educationalExperience} onAdd={addEducation}/>
        <PracticalExperienceList practicalExperience={formData.practicalExperience} onAdd={addPracticalExperience}/>
        <button>Submit</button>
    </>
);
}