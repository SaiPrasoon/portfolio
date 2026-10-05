import { FadeInUp } from "@/app/components/MotionWrapper";
import SkillCard from "@/app/components/SkillCard";
import { fetchSkills } from "@/app/lib/data";
import { iSkill } from "@/app/utils/interfaces";

const typeLabels: Record<string, string> = {
  TECH: "Technical",
  DESIGN: "Design",
  SOFT: "Soft Skills",
  OTHER: "Tooling & Process",
};

const SkillsPage = async () => {
  const skillList = await fetchSkills();

  const grouped = skillList.reduce(
    (acc: Record<string, iSkill[]>, skill: iSkill) => {
      const type = skill.type || "OTHER";
      (acc[type] ||= []).push(skill);
      return acc;
    },
    {} as Record<string, iSkill[]>
  );

  return (
    <div className="flex flex-col">
      <FadeInUp>
        <h1 className="font-blanco text-heading-lg text-charcoal">Skills</h1>
        <p className="font-degular text-body-lg text-graphite mt-6">
          The tools and practices I reach for, built up across years of shipping
          production software.
        </p>
      </FadeInUp>

      <div className="mt-12 flex flex-col">
        {Object.entries(grouped).map(([type, skills], index) => (
          <div
            key={type}
            className={index > 0 ? "hairline pt-10 mt-10" : undefined}
          >
            <h2 className="meta-label">{typeLabels[type] || type}</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill: iSkill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
