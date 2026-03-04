import PracticalExperienceCard from "./practical-experience-card";
import ButtonSection from "./button-section";

type Props = {
  practicalExperience: [
    {
        company: string;
        position: string;
        startDate: string;
        endDate: string;
    }
  ];
  onAdd: (newExperience: any) => void;
};

export default function PracticalExperienceList({ practicalExperience, onAdd }: Props) {
            return (
    <>
        <div>
            <h2>Practical Experience</h2>
            <button onClick={() => onAdd({
                company: "",
                position: "",
                startDate: "",
                endDate: ""
            })}>Add Experience</button>
        </div>
        <PracticalExperienceCard />
        <ButtonSection />
    </>
    );
}