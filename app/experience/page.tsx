import React from "react";
import { fetchExperiences } from "../lib/data";
import ExperienceCard from "./ExperienceCard";

const ExperiencePage = async () => {
  const experienceList = await fetchExperiences();

  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="text-base font-medium">
        {`Throughout my career, I’ve had the opportunity to work with incredible
        teams and contribute to meaningful projects across different industries.
        From building scalable web applications to leading teams and integrating
        AI-driven solutions, each experience has shaped my skills and helped me
        grow both personally and professionally. Here’s a closer look at my
        journey and the projects I’ve been proud to be a part of.`}
      </div>
      {experienceList.map((experience) => {
        return <ExperienceCard key={experience.id} experience={experience} />;
      })}
    </div>
  );
};

export default ExperiencePage;
