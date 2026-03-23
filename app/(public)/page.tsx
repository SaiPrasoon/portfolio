import AwardCard from "./awards/AwardCard";
import EducationCard from "@/app/components/EducationCard";
import Intro from "@/app/components/Intro/Intro";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/app/components/MotionWrapper";
import RecentExperience from "@/app/components/RecentExperience";
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

export default async function Home() {
  const recentExperiences = await fetchRecentExperiences();
  const techSkills = await fetchTechSkills();
  const educationList = await fetchEducation();
  const recentAwards = await fetchRecentAwards();

  return (
    <div className="flex flex-col">
      <Intro />

      <Separator />

      <FadeInUp>
        <SectionHeader title="Recent Experience" viewMoreLink="/experience" />
        <p className="text-sm text-muted-foreground mt-1 mb-4">
          My recent professional experiences and projects.
        </p>
      </FadeInUp>

      <StaggerContainer className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
        {recentExperiences.map((experience) => (
          <StaggerItem key={experience.id} className="h-full">
            <RecentExperience experience={experience} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <Separator />

      <FadeInUp>
        <SectionHeader title="Accomplishments" viewMoreLink="/awards" />
      </FadeInUp>

      <StaggerContainer className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 auto-rows-fr">
        {recentAwards.map((award) => (
          <StaggerItem key={award.id} className="h-full">
            <AwardCard award={award} hidePreview={true} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <Separator />

      <FadeInUp>
        <SectionHeader title="Education" hideLink={true} />
      </FadeInUp>

      <StaggerContainer className="flex flex-row gap-4 mt-4">
        {educationList.map((education) => (
          <StaggerItem key={education.id} className="w-full">
            <EducationCard education={education} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <Separator />

      <FadeInUp>
        <SectionHeader title="Skills" viewMoreLink="/skills" />
        <p className="text-sm text-muted-foreground mt-1 mb-4">
          Technical skills developed throughout my professional experience.
        </p>
      </FadeInUp>

      <StaggerContainer className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3">
        {techSkills.map((skill: iSkill) => (
          <StaggerItem key={skill.id}>
            <SkillCard skill={skill} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
