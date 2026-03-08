import EducationalExperienceCardDetail from "./education-exp-card-detail";


type Props = {
  educationalExperience: 
    {
        school: string;
        degree: string;
        fieldOfStudy: string;
        graduationYear: string; 
    }[];
};

export default function EducationalExperienceListDetail({ educationalExperience }: Props) {
  return (
    <div className="w-full max-w-lg mb-6">

      <h2 className="text-xl font-semibold text-[#654321] mb-3">
        Educational Experience
      </h2>

      <div className="flex flex-col gap-4">
        {educationalExperience.map((education, index) => (
          <EducationalExperienceCardDetail
            key={index}
            education={education}
          />
        ))}
      </div>

    </div>
  );
}