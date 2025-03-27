import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { iSkill } from "../utils/interfaces";

interface SkillCardProps {
  skill: iSkill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <>
      <Card>
        <CardContent className="flex flex-col gap-2 justify-center items-center">
          <Image
            src={skill.logo}
            width={75}
            height={75}
            alt={skill.name}
            className="w-[75px] h-[75px]"
          />
          <div className="text-sm">{skill.name}</div>
        </CardContent>
      </Card>
    </>
  );
};

export default SkillCard;
