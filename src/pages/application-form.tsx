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
    removeEducation: () => void;
    addPracticalExperience: () => void;
    removePracticalExperience: () => void;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onEducationChange: (index: number, field: string, value: string) => void;
    onPracticalExperienceChange: (index: number, field: string, value: string) => void;
    onSubmit: () => void;
};

export default function ApplicationForm({ formData, addEducation, removeEducation, addPracticalExperience,
    removePracticalExperience, onInputChange, onEducationChange, onPracticalExperienceChange, onSubmit }: Props) {

    return (
        <>
            <div className="flex items-center  ">
                <div className="flex-1 h-[4px] bg-[#654321]"></div>
                <h1 className="text-center text-white bg-[#654321] my-8 inline-block text-4xl px-20 py-4 rounded-full">Application Form</h1>
                <div className="flex-1 h-[4px] bg-[#654321]"></div>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} className="flex flex-col items-center border-4 border-[#654321] rounded-3xl p-6 max-w-[50%] mx-auto mb-4">
                <GeneralInfo name={formData.name} email={formData.email} phone={formData.phone} onChange={onInputChange} />
                <EducationalExperienceList educationalExperience={formData.educationalExperience} onAdd={addEducation} onRemove={removeEducation} onChange={onEducationChange} />
                <PracticalExperienceList practicalExperience={formData.practicalExperience} onAdd={addPracticalExperience} onRemove={removePracticalExperience} onChange={onPracticalExperienceChange} />
                <div className="w-full max-w-lg mx-auto">
        
                    <button type="submit" className="w-full h-10 max-w-lg bg-[#654321] text-white px-4 py-2 w-[57%] rounded-lg hover:bg-[#4b2f16] transition mt-2">Submit</button>
                </div>
            </form>
        </>
    );
}