import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getExperienceDuration } from "../services/commonService";
import { iExperience } from "../utils/interfaces";

interface RecentExperienceProps {
  experience: iExperience;
}

const RecentExperience = ({ experience }: RecentExperienceProps) => {
  return (
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
        <div className="text-base font-bold underline">Projects Worked:</div>
        <ul className="list-disc ml-5">
          {experience.projects.map((projectData) => {
            return (
              <li key={projectData.id} className="text-sm">
                {projectData.projectName}
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
};

export default RecentExperience;
