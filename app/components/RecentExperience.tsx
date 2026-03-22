import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getExperienceDuration } from "../services/commonService";
import { iExperience } from "../utils/interfaces";
import { Briefcase } from "lucide-react";

interface RecentExperienceProps {
  experience: iExperience;
}

const RecentExperience = ({ experience }: RecentExperienceProps) => {
  return (
    <Card className="w-full h-full group hover:shadow-lg hover:border-primary/20 transition-all duration-300">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <Briefcase size={16} />
          </div>
          <div>
            <CardTitle className="text-base">{experience.companyName}</CardTitle>
            <CardDescription className="text-xs mt-0.5">
              {getExperienceDuration(
                experience.isCurrent,
                experience.startDate,
                experience.endDate
              )}
            </CardDescription>
          </div>
        </div>
        {experience.isCurrent && (
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 w-fit mt-2">
            Current
          </span>
        )}
      </CardHeader>
    </Card>
  );
};

export default RecentExperience;
