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

export default function Confirmation({ formData , onEdit}: Props) {

    return (
    <>
        <h1 >Confirmation Form</h1>
        <form>
            <GeneralInfoDetail name={formData.name} email={formData.email} phone={formData.phone} />
            <EducationalExperienceListDetail educationalExperience={formData.educationalExperience} />
            <PracticalExperienceListDetail practicalExperience={formData.practicalExperience} />
            <button type="button" onClick={onEdit} >Edit</button>
            <button type="submit" onClick={() => alert("Form submitted")}>Submit</button>
        </form>
    </>
);
}