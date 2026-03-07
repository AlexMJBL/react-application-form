import { useState } from "react";
import ApplicationForm from "./pages/application-form";
import Confirmation from "./pages/confirmation-page";

export default function App() {

    const [page, setPage] = useState<"form" | "confirmation">("form");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
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

    const handleSubmit = () => {
        if(validateForm()){
            setPage("confirmation");
        }

        alert("Please fill all fields.");
        return;
    };

    const handleEdit = () => {
        setPage("form");
    };

    const validateForm = () => {
        if (!formData.name.trim()) return false;
        if (!formData.phone.trim()) return false;
        if (!formData.phone.trim()) return false;

        for (const edu of formData.educationalExperience) {
            if (!edu.school.trim()) return false;
            if (!edu.degree.trim()) return false;
            if (!edu.fieldOfStudy.trim()) return false;
            if (!edu.graduationYear.trim()) return false;
        }

        for (const exp of formData.practicalExperience) {
            if (!exp.company.trim()) return false;
            if (!exp.position.trim()) return false;
            if (!exp.description.trim()) return false;
            if (!exp.startDate.trim()) return false;
            if (!exp.endDate.trim()) return false;
        }

        return true;
    };

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
                [field]: value
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
                [field]: value
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
        <div className="bg-[#f2e8dc]">{page === "form" ? (
            <ApplicationForm formData={formData} addEducation={addEducation} addPracticalExperience={addPracticalExperience} onSubmit={handleSubmit}
                onEducationChange={handleEducationChange} onPracticalExperienceChange={handlePracticalExperienceChange} onInputChange={handleInputChange} />
        ) : (
            <Confirmation formData={formData} onEdit={handleEdit} />
        )}
        </div>
    )
}

