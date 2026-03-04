type Props = {
  experience: {
    company: string;
    position: string;
    description: string;
    startDate: string;
    endDate: string;
  };
  index:number;
};

export default function PracticalExperienceCard({ experience }: Props) {
    return (
    <>
        <div>
            <label htmlFor="company">Company Name</label>
            <input type="text" id="company" name="company" value={experience.company} />
        </div>
        <div>
            <label htmlFor="position">Position</label>
            <input type="text" id="position" name="position" value={experience.position} />
        </div>
        <div>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description" value={experience.description} />
        </div>
        <div>
            <label htmlFor="start-date">Start Date</label>
            <input type="date" id="start-date" name="start-date" value={experience.startDate} />
        </div>
        <div>
            <label htmlFor="end-date">End Date</label>
            <input type="date" id="end-date" name="end-date" value={experience.endDate} />
        </div>
    </>
    );
}