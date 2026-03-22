import SkillCard from "../components/SkillCard";
import { FadeInUp, StaggerContainer, StaggerItem } from "../components/MotionWrapper";
import { fetchSkills } from "../lib/data";
import { iSkill } from "../utils/interfaces";

const SkillsPage = async () => {
  const skillList = await fetchSkills();

  const grouped = skillList.reduce(
    (acc: Record<string, iSkill[]>, skill: iSkill) => {
      const type = skill.type || "OTHER";
      if (!acc[type]) acc[type] = [];
      acc[type].push(skill);
      return acc;
    },
    {} as Record<string, iSkill[]>
  );

  const typeLabels: Record<string, string> = {
    TECH: "Technical Skills",
    SOFT: "Soft Skills",
    OTHER: "Other Skills",
  };

  return (
    <div className="flex flex-col gap-6 py-2">
      <FadeInUp>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Skills</h1>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-2xl">
          A collection of skills I&apos;ve built across years of professional experience —
          from modern frameworks to leadership and problem-solving.
        </p>
      </FadeInUp>

      {Object.entries(grouped).map(([type, skills]) => (
        <div key={type}>
          <FadeInUp>
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              {typeLabels[type] || type}
            </h2>
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3">
            {skills.map((skill: iSkill) => (
              <StaggerItem key={skill.id}>
                <SkillCard skill={skill} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      ))}
    </div>
  );
};

export default SkillsPage;
