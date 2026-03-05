type Props = {
    education: 
    {
        school: string;
        degree: string;
        fieldOfStudy: string;
        graduationYear: string; 
    },
    index: number;
    onChange: (index: number, field: string, value: string) => void;
};

export default function EducationalExperienceCard({ education, onChange, index }: Props) {
    return (
    <>
        <div>
            <label htmlFor="school">School</label>
            <input type="text" id="school" name="school" value={education.school} onChange={(e) => onChange(index, "school", e.target.value)} />
        </div>
        <div>
            <label htmlFor="degree">Degree</label>
            <input type="text" id="degree" name="degree" value={education.degree} onChange={(e) => onChange(index, "degree", e.target.value)} />
        </div>
        <div>
            <label htmlFor="field-of-study">Field of Study</label>
            <input type="text" id="field-of-study" name="field-of-study" value={education.fieldOfStudy} onChange={(e) => onChange(index, "fieldOfStudy", e.target.value)} />
        </div>
        <div>
            <label htmlFor="graduation-year">Graduation Year</label>
            <input type="date" id="graduation-year" name="graduation-year" value={education.graduationYear} onChange={(e) => onChange(index, "graduationYear", e.target.value)} />
        </div>
    </>
    );
}