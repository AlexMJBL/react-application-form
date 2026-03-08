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
        <div className="border-2 border-[#654321] rounded-xl p-5 bg-[#f5efe8] shadow-sm">

            <div className="flex flex-col gap-4">

                <div className="flex flex-col">
                    <label className="text-[#654321] font-medium">School</label>
                    <input
                        type="text"
                        value={education.school}
                        onChange={(e) => onChange(index, "school", e.target.value)}
                        className="border border-[#654321] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#654321]"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-[#654321] font-medium">Degree</label>
                    <input
                        type="text"
                        value={education.degree}
                        onChange={(e) => onChange(index, "degree", e.target.value)}
                        className="border border-[#654321] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#654321]"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-[#654321] font-medium">Field of Study</label>
                    <input
                        type="text"
                        value={education.fieldOfStudy}
                        onChange={(e) => onChange(index, "fieldOfStudy", e.target.value)}
                        className="border border-[#654321] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#654321]"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-[#654321] font-medium">Graduation Year</label>
                    <input
                        type="date"
                        value={education.graduationYear}
                        onChange={(e) => onChange(index, "graduationYear", e.target.value)}
                        className="border border-[#654321] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#654321]"
                    />
                </div>

            </div>

        </div>
    );
}