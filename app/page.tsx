import { Card, CardContent } from "@/components/ui/card";
import Intro from "./components/Intro/Intro";
import SectionHeader from "./components/SectionHeader/SectionHeader";
import { fetchRecentExperiences, fetchTechSkills } from "./lib/data";
import Image from "next/image";
import RecentExperience from "./components/RecentExperience";

export default async function Home() {
  const recentExperiences = await fetchRecentExperiences();

  const techSkills = await fetchTechSkills();

  return (
    <div className="flex flex-col gap-2">
      <Intro />

      <SectionHeader title="My Recent Experience" viewMoreLink="/experience" />

      <div className="flex flex-row gap-3">
        {recentExperiences.map((experience) => (
          <RecentExperience key={experience.id} experience={experience} />
        ))}
      </div>

      <SectionHeader title="Skills" viewMoreLink="/experience" />

      <div className="italic text-sm pb-2">
        Technical skills I have developed throughout my professional experience.
      </div>

      <div className="flex flex-row gap-3 flex-wrap">
        {techSkills.map((skill) => (
          <Card key={skill.name}>
            <CardContent className="flex flex-col gap-2 justify-center items-center">
              <Image
                src={skill.logo}
                width={75}
                height={75}
                alt={skill.name}
              />
              <div className="text-sm">{skill.name}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
