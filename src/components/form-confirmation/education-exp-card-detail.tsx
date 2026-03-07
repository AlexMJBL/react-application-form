type Props = {
    education: 
    {
        school: string;
        degree: string;
        fieldOfStudy: string;
        graduationYear: string; 
    }
};

export default function EducationalExperienceCardDetail({ education}: Props) {
    return (
    <>
        <div>
            <label htmlFor="school">School : {education.school}</label>
            <label htmlFor="degree">Degree : {education.degree}</label>
            <label htmlFor="field-of-study">Field of Study : {education.fieldOfStudy}</label>
            <label htmlFor="graduation-year">Graduation Year : {education.graduationYear}</label>
        </div>
    </>
    );
}