export default function EducationalExperienceCard() {
    return (
    <>
        <div>
            <label htmlFor="school">School</label>
            <input type="text" id="school" name="school" />
        </div>
        <div>
            <label htmlFor="degree">Degree</label>
            <input type="text" id="degree" name="degree" />
        </div>
        <div>
            <label htmlFor="field-of-study">Field of Study</label>
            <input type="text" id="field-of-study" name="field-of-study" />
        </div>
        <div>
            <label htmlFor="graduation-year">Graduation Year</label>
            <input type="date" id="graduation-year" name="graduation-year" />
        </div>
    </>
    );
}