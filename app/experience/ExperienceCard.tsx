import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    getExperienceDuration
} from "../services/commonService";
import { iExperience, iProject } from "../utils/interfaces";

interface ExperienceCardProps {
  experience: iExperience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const renderProjectDetails = (projectData: iProject) => {
    return (
      <div key={projectData.id} className="flex flex-col gap-1 border-b-1 p-2 last:border-b-0">
        <div className="flex w-full items-center justify-between">
          <span className="text-base font-medium">
            {projectData.projectName}
          </span>
          {/* <span className="italic text-sm">
            {getExperienceDuration(
              projectData.isCurrent,
              projectData.startDate,
              projectData.endDate
            )}
          </span> */}
        </div>
        <ul className="list-disc ml-5">
          {projectData.responsibilities.map((responsibility, index) => (
            <li key={`responsibility_${projectData.id}_${index}`}>
              <span className="text-sm">{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{experience.companyName}</CardTitle>
          <CardDescription className="italic">
            {getExperienceDuration(
              experience.isCurrent,
              experience.startDate,
              experience.endDate
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <div className="text-base font-bold underline decoration-1">Projects Worked:</div>
          <div>
            {experience.projects.map((projectData) => {
              return renderProjectDetails(projectData);
            })}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ExperienceCard;
