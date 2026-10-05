import { getExperienceDuration, getYearRange } from "../services/commonService";
import { iExperience } from "../utils/interfaces";

interface ResumeEntryProps {
  experience: iExperience;
  /** Home page: role, company and project names only — no bullets. */
  compact?: boolean;
}

/**
 * Date-anchored experience block. Narrow left rail carries the year range,
 * the generous right column carries the role title and prose.
 */
const ResumeEntry = ({ experience, compact }: ResumeEntryProps) => {
  return (
    <article className="flex flex-col gap-2 sm:flex-row sm:gap-8 py-8">
      <div className="sm:w-[110px] sm:shrink-0 sm:pt-1">
        <span className="font-degular text-caption text-stone">
          {getYearRange(
            experience.isCurrent,
            experience.startDate,
            experience.endDate
          )}
        </span>
      </div>

      <div className="flex-1">
        {experience.role && (
          <h3 className="font-blanco text-heading-sm text-charcoal">
            {experience.role}
          </h3>
        )}
        <p className="font-degular text-caption text-stone mt-1">
          {experience.companyName} ·{" "}
          {getExperienceDuration(
            experience.isCurrent,
            experience.startDate,
            experience.endDate
          )}
        </p>

        {compact ? (
          experience.projects.length > 0 && (
            <p className="font-degular text-body text-graphite mt-4">
              {experience.projects.map((p) => p.projectName).join(", ")}
            </p>
          )
        ) : (
          <div className="mt-6 flex flex-col gap-6">
            {experience.projects.map((project) => (
              <div key={project.id}>
                <p className="meta-label">{project.projectName}</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {project.responsibilities.map((responsibility, index) => (
                    <li
                      key={`${project.id}_${index}`}
                      className="font-degular text-body text-graphite flex gap-3"
                    >
                      <span
                        className="mt-[0.65em] h-px w-3 shrink-0 bg-pebble"
                        aria-hidden
                      />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default ResumeEntry;
