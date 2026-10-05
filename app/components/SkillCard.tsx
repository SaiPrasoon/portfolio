import { iSkill } from "../utils/interfaces";

interface SkillCardProps {
  skill: iSkill;
}

/** A quiet tag on the vellum — no card, no fill, 3px radius hairline only. */
const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <span className="inline-flex rounded-sm border border-ash px-3 py-1.5 font-degular text-caption text-graphite">
      {skill.name}
    </span>
  );
};

export default SkillCard;
