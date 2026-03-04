export default function PracticalExperienceCard() {
    return (
    <>
        <div>
            <label htmlFor="company">Company Name</label>
            <input type="text" id="company" name="company" />
        </div>
        <div>
            <label htmlFor="position">Position</label>
            <input type="text" id="position" name="position" />
        </div>
        <div>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description" />
        </div>
        <div>
            <label htmlFor="start-date">Start Date</label>
            <input type="date" id="start-date" name="start-date" />
        </div>
        <div>
            <label htmlFor="end-date">End Date</label>
            <input type="date" id="end-date" name="end-date" />
        </div>
    </>
    );
}