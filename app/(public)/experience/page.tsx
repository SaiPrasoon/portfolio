import { FadeInUp, StaggerContainer, StaggerItem } from "@/app/components/MotionWrapper";
import { fetchExperiences } from "@/app/lib/data";
import ExperienceCard from "./ExperienceCard";

const ExperiencePage = async () => {
  const experienceList = await fetchExperiences();

  return (
    <div className="flex flex-col gap-4 py-2">
      <FadeInUp>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Experience</h1>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-2xl">
          {`Throughout my career, I've worked with incredible teams and contributed to meaningful projects across different industries — from building scalable web applications to integrating AI-driven solutions.`}
        </p>
      </FadeInUp>

      <StaggerContainer className="flex flex-col mt-4">
        {experienceList.map((experience) => (
          <StaggerItem key={experience.id}>
            <ExperienceCard experience={experience} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
};

export default ExperiencePage;
