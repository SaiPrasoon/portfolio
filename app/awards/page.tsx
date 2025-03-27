import { fetchAwards } from "../lib/data";
import AwardCard from "./AwardCard";

const Awards = async () => {
  const awardsList = await fetchAwards();

  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="text-base font-medium">
        Over the course of my career, I’ve been fortunate to receive recognition
        for my contributions and achievements. These awards represent not just
        milestones in my professional journey, but also the dedication,
        teamwork, and passion that drive me every day. Below are some of the
        honors I’ve received, which reflect the impact of my work and the value
        I strive to bring to every project.
      </div>
      {awardsList.map((award) => {
        return <AwardCard key={award.id} award={award} />;
      })}
    </div>
  );
};

export default Awards;
