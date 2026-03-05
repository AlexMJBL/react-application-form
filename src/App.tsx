import { useState } from "react";
import ApplicationForm from "./pages/application-form";

export default function App() {
  
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
                description: "",
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

    const handleEducationChange = (index: number, field: string, value: string) => {
        setFormData(prev => {
            const updated = [...prev.educationalExperience];
            updated[index] = {
                ...updated[index],
                [field]:value
            };
            return {
                ...prev,
                educationalExperience: updated
            };
        });
    }
    
    const handlePracticalExperienceChange = (index: number, field: string, value: string) => {
        setFormData(prev => {
            const updated = [...prev.practicalExperience];
            updated[index] = {
                ...updated[index],
                [field]:value
            };
            return {
                ...prev,
                practicalExperience: updated
            };
        });
    }
    

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

    const addPracticalExperience = () => {
        setFormData(prev => ({
            ...prev,
            practicalExperience: [
            ...prev.practicalExperience,
            {
                company: "",
                position: "",
                description: "",
                startDate: "",
                endDate: ""
            }
            ]
        }));
    };

  return (
    <>
      <ApplicationForm formData={formData} addEducation={addEducation}  addPracticalExperience={addPracticalExperience} 
      onEducationChange={handleEducationChange} onPracticalExperienceChange={handlePracticalExperienceChange} onInputChange={handleInputChange} />
    </>
  )
}

