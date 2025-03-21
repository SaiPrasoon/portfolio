import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { iExperience } from "../utils/interfaces";

interface RecentExperienceProps {
  experience: iExperience;
}

const RecentExperience = ({ experience }: RecentExperienceProps) => {
  const getExperienceDuration = () => {
    let duration: string = new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    })
      .format(experience.startDate)
      .toString();

    if (experience.isCurrent) {
      duration += " - Present";
    } else {
      const formattedEndDate = new Intl.DateTimeFormat("en-US", {
        month: "long",
        year: "numeric",
      })
        .format(experience.endDate)
        .toString();
      duration = duration + " - " + formattedEndDate;
    }

    return duration;
  };


  return (
    <Card className="w-100">
      <CardHeader>
        <CardTitle>{experience.companyName}</CardTitle>
        <CardDescription className="italic">
          {getExperienceDuration()}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="text-base font-bold">Projects Worked:</div>
        <div>
        {
            experience.projects.map((projectData)=>{
              return (
                <div key={projectData.id} className="text-sm">
                  {projectData.projectName}

                </div>
              )
            })
          }
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentExperience;
