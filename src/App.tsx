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
      <ApplicationForm formData={formData} addEducation={addEducation} addPracticalExperience={addPracticalExperience} onInputChange={handleInputChange} />
    </>
  )
}

