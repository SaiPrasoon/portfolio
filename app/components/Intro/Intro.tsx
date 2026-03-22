import { fetchProfileData } from "@/app/lib/data";
import ResumeButton from "../ResumeButton";
import HeroAnimations from "./HeroAnimations";

const Intro = async () => {
  const profileData = await fetchProfileData();

  return (
    <section className="relative overflow-hidden rounded-2xl my-4">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(99,102,241,0.25),transparent_60%)]" />

      <div className="relative z-10 px-6 py-12 md:py-16">
        <HeroAnimations aboutMe={profileData.aboutMe} />
        <div className="mt-6">
          <ResumeButton resumeUrl={profileData.resumeUrl} />
        </div>
      </div>
    </section>
  );
};

export default Intro;
