type Props = {
    experience: {
        company: string;
        position: string;
        description: string;
        startDate: string;
        endDate: string;
    };
    index:number;
    onChange: (index: number, field: string, value: string) => void;
};

export default function PracticalExperienceCard({ experience, index, onChange }: Props) {
    return (
    <>
        <div>
            <label htmlFor="company">Company Name</label>
            <input type="text" id="company" name="company" value={experience.company} onChange={(e) => onChange(index, "company", e.target.value)}   />
        </div>
        <div>
            <label htmlFor="position">Position</label>
            <input type="text" id="position" name="position" value={experience.position} onChange={(e) => onChange(index, "position", e.target.value)} />
        </div>
        <div>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description" value={experience.description} onChange={(e) => onChange(index, "description", e.target.value)} />
        </div>
        <div>
            <label htmlFor="start-date">Start Date</label>
            <input type="date" id="start-date" name="start-date" value={experience.startDate} onChange={(e) => onChange(index, "startDate", e.target.value)} />
        </div>
        <div>
            <label htmlFor="end-date">End Date</label>
            <input type="date" id="end-date" name="end-date" value={experience.endDate} onChange={(e) => onChange(index, "endDate", e.target.value)} />
        </div>
    </>
    );
}