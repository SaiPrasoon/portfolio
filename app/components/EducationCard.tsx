import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { iEducation } from "../utils/interfaces";

interface EducationCardProps {
  education: iEducation;
}

const EducationCard = ({ education }: EducationCardProps) => {
  const getEducationDuration = () => {
    const startDate: string = new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    })
      .format(education.startDate)
      .toString();

    const endDate = new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    })
      .format(education.endDate)
      .toString();

    return `${startDate} - ${endDate}`;
  };

  return (
    <Card className="w-full group hover:shadow-lg hover:border-primary/20 transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
            <GraduationCap size={20} />
          </div>
          <div>
            <CardTitle className="text-base">{education.degree}</CardTitle>
            <CardDescription className="text-xs mt-0.5">
              {getEducationDuration()}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Pursued <strong className="text-foreground">{education.degree}</strong> from{" "}
          <strong className="text-foreground">{education.institution}</strong> in{" "}
          <strong className="text-foreground">Computer Science and Engineering</strong>.
        </p>
      </CardContent>
    </Card>
  );
};

export default EducationCard;
