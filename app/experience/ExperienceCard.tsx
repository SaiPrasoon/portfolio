import { getExperienceDuration } from "../services/commonService";
import { iExperience, iProject } from "../utils/interfaces";
import { Briefcase, ExternalLink } from "lucide-react";

interface ExperienceCardProps {
  experience: iExperience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const renderProjectDetails = (projectData: iProject) => {
    return (
      <div
        key={projectData.id}
        className="flex flex-col gap-2 py-3 border-b border-border/50 last:border-b-0"
      >
        <div className="flex w-full items-center justify-between">
          <span className="text-sm font-semibold flex items-center gap-2">
            {projectData.projectName}
            {projectData.projectUrl && (
              <a href={projectData.projectUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={12} className="text-primary" />
              </a>
            )}
          </span>
        </div>
        <ul className="space-y-1 ml-4">
          {projectData.responsibilities.map((responsibility, index) => (
            <li
              key={`responsibility_${projectData.id}_${index}`}
              className="text-sm text-muted-foreground flex items-start gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-primary/40 mt-2 shrink-0" />
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="relative flex gap-6">
      {/* Timeline line */}
      <div className="hidden md:flex flex-col items-center">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
            experience.isCurrent
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
              : "bg-muted text-muted-foreground"
          }`}
        >
          <Briefcase size={18} />
        </div>
        <div className="w-px flex-1 bg-border/50 mt-2" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="rounded-xl border bg-card p-5 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
          <div className="flex items-start justify-between mb-1">
            <div>
              <h3 className="text-lg font-bold">{experience.companyName}</h3>
              <p className="text-sm text-muted-foreground">
                {getExperienceDuration(
                  experience.isCurrent,
                  experience.startDate,
                  experience.endDate
                )}
              </p>
            </div>
            {experience.isCurrent && (
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                Current
              </span>
            )}
          </div>

          <div className="mt-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Projects
            </div>
            {experience.projects.map((projectData) =>
              renderProjectDetails(projectData)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
