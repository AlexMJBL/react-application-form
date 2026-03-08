type Props = {
    education: 
    {
        school: string;
        degree: string;
        fieldOfStudy: string;
        graduationYear: string; 
    }
};

export default function EducationalExperienceCardDetail({ education }: Props) {
  return (
    <div className="border-2 border-[#654321] rounded-xl p-4 bg-white shadow-sm">

      <p>
        <span className="font-semibold">School:</span> {education.school}
      </p>

      <p>
        <span className="font-semibold">Degree:</span> {education.degree}
      </p>

      <p>
        <span className="font-semibold">Field of Study:</span> {education.fieldOfStudy}
      </p>

      <p>
        <span className="font-semibold">Graduation Date:</span> {education.graduationYear}
      </p>

    </div>
  );
}