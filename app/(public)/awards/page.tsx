import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/app/components/MotionWrapper";
import { fetchAwards } from "@/app/lib/data";
import AwardCard from "./AwardCard";

const Awards = async () => {
  const awardsList = await fetchAwards();

  return (
    <div className="flex flex-col">
      <FadeInUp>
        <h1 className="font-blanco text-heading-lg text-charcoal">
          Recognition
        </h1>
        <p className="font-degular text-body-lg text-graphite mt-6">
          Awards received along the way — for delivery velocity, team
          leadership, and measurable business impact.
        </p>
      </FadeInUp>

      <StaggerContainer className="mt-12 divide-y divide-ash">
        {awardsList.map((award) => (
          <StaggerItem key={award.id} className="block py-8 first:pt-0">
            <AwardCard award={award} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
};

export default Awards;
