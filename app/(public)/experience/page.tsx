import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/app/components/MotionWrapper";
import ResumeEntry from "@/app/components/ResumeEntry";
import { fetchExperiences } from "@/app/lib/data";

const ExperiencePage = async () => {
  const experienceList = await fetchExperiences();

  return (
    <div className="flex flex-col">
      <FadeInUp>
        <h1 className="font-blanco text-heading-lg text-charcoal">Experience</h1>
        <p className="font-degular text-body-lg text-graphite mt-6">
          {`Seven years across fintech, legaltech, and AI-driven SaaS — from case-management tooling for law firms to real-time interfaces over live ML models.`}
        </p>
      </FadeInUp>

      <StaggerContainer className="mt-12 divide-y divide-ash">
        {experienceList.map((experience) => (
          <StaggerItem key={experience.id}>
            <ResumeEntry experience={experience} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
};

export default ExperiencePage;
