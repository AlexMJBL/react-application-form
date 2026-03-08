import GeneralInfoDetail from "../components/form-confirmation/general-info-detail";
import EducationalExperienceListDetail from "../components/form-confirmation/education-exp-list-detail";
import PracticalExperienceListDetail from "../components/form-confirmation/pratical-exp-list-detail";

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
    onEdit:() => void;
};

export default function Confirmation({ formData, onEdit }: Props) {

    return (
        <>
            <div className="flex items-center">
                <div className="flex-1 h-[4px] bg-[#654321]"></div>
                <h1 className="text-center text-white bg-[#654321] my-8 inline-block text-4xl px-20 py-4 rounded-full">
                    Confirmation
                </h1>
                <div className="flex-1 h-[4px] bg-[#654321]"></div>
            </div>

            <form className="flex flex-col items-center border-4 border-[#654321] rounded-3xl p-6 max-w-2xl mx-auto mb-6 bg-[#f5efe8] shadow-sm">

                <GeneralInfoDetail
                    name={formData.name}
                    email={formData.email}
                    phone={formData.phone}
                />

                <EducationalExperienceListDetail
                    educationalExperience={formData.educationalExperience}
                />

                <PracticalExperienceListDetail
                    practicalExperience={formData.practicalExperience}
                />

                <div className="flex gap-4 w-full max-w-lg mt-6">

                    <button
                        type="button"
                        onClick={onEdit}
                        className="flex-1 h-10 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
                    >
                        Edit
                    </button>

                    <button
                        type="submit"
                        onClick={() => alert("Form submitted")}
                        className="flex-1 h-10 bg-[#654321] text-white rounded-lg hover:bg-[#4b2f16] transition"
                    >
                        Confirm
                    </button>

                </div>
            </form>
        </>
    );
}