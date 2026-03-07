import GeneralInfo from "../components/form-application/general-info";
import EducationalExperienceList from "../components/form-application/educational-experience-list";
import PracticalExperienceList from "../components/form-application/practical-experience-list";

type Props = {
    formData: {
        name: string,
        email: string,
        phone: string,
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
    onSubmit: () => void;
};

export default function ApplicationForm({ formData, addEducation, addPracticalExperience,
    onInputChange, onEducationChange, onPracticalExperienceChange, onSubmit }: Props) {

    return (
        <>
            <div className="text-center">
                <h1 className="text-center bg-[#D2B48C] my-8 inline-block text-4xl px-8 py-4 rounded-full">Application Form</h1>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} className="flex flex-col">
                <GeneralInfo name={formData.name} email={formData.email} phone={formData.phone} onChange={onInputChange} />
                <EducationalExperienceList educationalExperience={formData.educationalExperience} onAdd={addEducation} onChange={onEducationChange} />
                <PracticalExperienceList practicalExperience={formData.practicalExperience} onAdd={addPracticalExperience} onChange={onPracticalExperienceChange} />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}