import { FadeInUp, StaggerContainer, StaggerItem } from "@/app/components/MotionWrapper";
import { fetchAwards } from "@/app/lib/data";
import AwardCard from "./AwardCard";

const Awards = async () => {
  const awardsList = await fetchAwards();

  return (
    <div className="flex flex-col gap-4 py-2">
      <FadeInUp>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          Awards & Accomplishments
        </h1>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-2xl">
          Recognition received throughout my career — reflecting dedication,
          teamwork, and the impact of my work.
        </p>
      </FadeInUp>

      <StaggerContainer className="grid xs:grid-cols-1 md:grid-cols-2 gap-4 mt-2 auto-rows-fr">
        {awardsList.map((award) => (
          <StaggerItem key={award.id} className="h-full">
            <AwardCard award={award} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
};

export default Awards;
