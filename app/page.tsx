import EducationCard from "./components/EducationCard";
import Intro from "./components/Intro/Intro";
import RecentExperience from "./components/RecentExperience";
import SectionHeader from "./components/SectionHeader/SectionHeader";
import Separator from "./components/Separator";
import SkillCard from "./components/SkillCard";
import {
  fetchEducation,
  fetchRecentExperiences,
  fetchTechSkills,
} from "./lib/data";
import { iSkill } from "./utils/interfaces";

export default async function Home() {
  const recentExperiences = await fetchRecentExperiences();

  const techSkills = await fetchTechSkills();

  const educationList = await fetchEducation();

  return (
    <div className="flex flex-col gap-2">
      <Intro />

      <Separator />

      <SectionHeader title="My Recent Experience" viewMoreLink="/experience" />

      <div className="italic text-sm pb-2">
        My recent professional experiences.
      </div>

      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {recentExperiences.map((experience) => (
          <RecentExperience key={experience.id} experience={experience} />
        ))}
      </div>

      <Separator />

      <SectionHeader title="My Education" hideLink={true} />

      <div className="flex flex-row gap-3">
        {educationList.map((education) => (
          <EducationCard key={education.id} education={education} />
        ))}
      </div>

      <Separator />

      <SectionHeader title="Skills" viewMoreLink="/skills" />

      <div className="italic text-sm pb-2">
        Few Technical skills that I have developed throughout my professional
        experience.
      </div>

      <div className="grid xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {techSkills.map((skill: iSkill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}
