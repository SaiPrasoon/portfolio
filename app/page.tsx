import { Card, CardContent } from "@/components/ui/card";
import Intro from "./components/Intro/Intro";
import RecentExperience from "./components/RecentExperience";
import SectionHeader from "./components/SectionHeader/SectionHeader";
import { Experience, Skills } from "./utils/constants";

export default function Home() {
  const recentExperienceList = Experience.slice(0, 3);

  return (
    <div className="flex flex-col gap-2">
      <Intro />

      <SectionHeader title="My Recent Experience" viewMoreLink="/experience" />

      <div className="flex flex-row gap-3">
        {recentExperienceList.map((experience) => (
          <RecentExperience key={experience.id} experience={experience} />
        ))}
      </div>

      <SectionHeader title="Skills" viewMoreLink="/experience" />

      <div className="italic text-sm pb-2">
        Skills I have developed throughout my professional experience.
      </div>

      <div className="flex flex-row gap-3 w-100">
        {Skills.map((skill) => (
          <Card key={skill.name}>
            <CardContent className="justify-center items-center">
              <div className="text-sm">{skill.name}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
