import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { iSkill } from "../utils/interfaces";

interface SkillCardProps {
  skill: iSkill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <Card className="group hover:shadow-md hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
      <CardContent className="flex flex-col gap-2 justify-center items-center py-4">
        <div className="relative">
          <Image
            src={skill.logo}
            width={60}
            height={60}
            alt={skill.name}
            className="w-[60px] h-[60px] group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="text-xs font-medium text-center">{skill.name}</div>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
