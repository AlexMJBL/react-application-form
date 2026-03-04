type Props = {
  education: 
    {
        school: string;
        degree: string;
        fieldOfStudy: string;
        graduationYear: string; 
    }
};

export default function EducationalExperienceCard({ education }: Props) {
    return (
    <>
        <div>
            <label htmlFor="school">School</label>
            <input type="text" id="school" name="school" value={education.school} />
        </div>
        <div>
            <label htmlFor="degree">Degree</label>
            <input type="text" id="degree" name="degree" value={education.degree} />
        </div>
        <div>
            <label htmlFor="field-of-study">Field of Study</label>
            <input type="text" id="field-of-study" name="field-of-study" value={education.fieldOfStudy}  />
        </div>
        <div>
            <label htmlFor="graduation-year">Graduation Year</label>
            <input type="date" id="graduation-year" name="graduation-year" value={education.graduationYear} />
        </div>
    </>
    );
}