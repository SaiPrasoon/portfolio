import EducationCard from "@/app/components/EducationCard";
import Intro from "@/app/components/Intro/Intro";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/app/components/MotionWrapper";
import ResumeEntry from "@/app/components/ResumeEntry";
import SectionHeader from "@/app/components/SectionHeader/SectionHeader";
import Separator from "@/app/components/Separator";
import SkillCard from "@/app/components/SkillCard";
import {
  fetchEducation,
  fetchRecentAwards,
  fetchRecentExperiences,
  fetchTechSkills,
} from "@/app/lib/data";
import { iSkill } from "@/app/utils/interfaces";
import AwardCard from "./awards/AwardCard";

export default async function Home() {
  const [recentExperiences, techSkills, educationList, recentAwards] =
    await Promise.all([
      fetchRecentExperiences(),
      fetchTechSkills(),
      fetchEducation(),
      fetchRecentAwards(),
    ]);

  return (
    <div className="flex flex-col">
      <Intro />

      <Separator />

      <FadeInUp>
        <SectionHeader title="Experience" viewMoreLink="/experience" />
      </FadeInUp>
      <StaggerContainer className="mt-2 divide-y divide-ash">
        {recentExperiences.map((experience) => (
          <StaggerItem key={experience.id}>
            <ResumeEntry experience={experience} compact />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <Separator />

      <FadeInUp>
        <SectionHeader title="Recognition" viewMoreLink="/awards" />
      </FadeInUp>
      <StaggerContainer className="mt-8 flex flex-col gap-10">
        {recentAwards.map((award) => (
          <StaggerItem key={award.id}>
            <AwardCard award={award} hidePreview />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <Separator />

      <FadeInUp>
        <SectionHeader title="Education" hideLink />
      </FadeInUp>
      <div className="mt-8 flex flex-col gap-10">
        {educationList.map((education) => (
          <EducationCard key={education.id} education={education} />
        ))}
      </div>

      <Separator />

      <FadeInUp>
        <SectionHeader title="Skills" viewMoreLink="/skills" />
      </FadeInUp>
      <div className="mt-8 flex flex-wrap gap-2">
        {techSkills.map((skill: iSkill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}
