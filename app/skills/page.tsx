import React from "react";
import { fetchSkills } from "../lib/data";
import SkillCard from "../components/SkillCard";
import { iSkill } from "../utils/interfaces";

const SkillsPage = async () => {
  const skillList = await fetchSkills();

  return (
    <div className="flex flex-col gap-4 p-2">
      <div className="text-base font-medium">
        Over the years, I’ve built a wide range of skills that help me create
        impactful and user-friendly solutions. Whether it’s working with modern
        frameworks like Angular and ReactJS or developing leadership and
        problem-solving abilities, these skills reflect my passion for learning
        and growing as a professional. Here’s a closer look at the expertise I
        bring to every project.
      </div>

      <div className="grid xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {skillList.map((skill: iSkill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
