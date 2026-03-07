type Props = {
    experience: {
        company: string;
        position: string;
        description: string;
        startDate: string;
        endDate: string;
    };
};

export default function PracticalExperienceCardDetail({ experience}: Props) {
    return (
    <>
        <div>
            <label htmlFor="company">Company Name : {experience.company}</label>
            <label htmlFor="position">Position : {experience.position}</label>
            <label htmlFor="description">Description : {experience.description}</label>
            <label htmlFor="start-date">Start Date : {experience.startDate}</label>
            <label htmlFor="end-date">End Date : {experience.endDate}</label>
        </div>
    </>
    );
}