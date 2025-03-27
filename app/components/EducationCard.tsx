import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
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
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{education.degree}</CardTitle>
          <CardDescription className="italic">
            {getEducationDuration()}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 justify-center">
          <div className="text-sm">
            I have pursued my <strong>{education.degree}</strong> degree
            from&nbsp;
            <strong>{education.institution}</strong> in{" "}
            <strong>Computer Science and Engineering</strong>.
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default EducationCard;
