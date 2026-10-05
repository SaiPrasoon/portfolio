import { fetchContactInfo, fetchProfileData } from "@/app/lib/data";
import { Github, Linkedin } from "lucide-react";
import ResumeButton from "../ResumeButton";
import HeroAnimations from "./HeroAnimations";

const Intro = async () => {
  const [profileData, contactInfo] = await Promise.all([
    fetchProfileData(),
    fetchContactInfo(),
  ]);

  const actions = (
    <div className="flex flex-wrap items-center gap-5">
      <ResumeButton resumeUrl={profileData.resumeUrl} />

      <span className="h-5 w-px bg-ash" aria-hidden />

      <a
        href={contactInfo.linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-degular text-caption text-ink-black hover:text-stone transition-colors"
      >
        <Linkedin size={14} />
        LinkedIn
      </a>

      <a
        href={contactInfo.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-degular text-caption text-ink-black hover:text-stone transition-colors"
      >
        <Github size={14} />
        GitHub
      </a>
    </div>
  );

  return (
    <section>
      <HeroAnimations aboutMe={profileData.aboutMe} actions={actions} />
    </section>
  );
};

export default Intro;
