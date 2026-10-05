import { getYearRange } from "../services/commonService";
import { iEducation } from "../utils/interfaces";

interface EducationCardProps {
  education: iEducation;
}

const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <article className="flex flex-col gap-2 sm:flex-row sm:gap-8">
      <div className="sm:w-[110px] sm:shrink-0 sm:pt-1">
        <span className="font-degular text-caption text-stone">
          {getYearRange(false, education.startDate, education.endDate)}
        </span>
      </div>

      <div className="flex-1">
        <h3 className="font-blanco text-heading-sm text-charcoal">
          {education.degree}
        </h3>
        <p className="font-degular text-caption text-stone mt-1">
          {education.institution}
        </p>
        {education.grade && (
          <p className="font-degular text-body text-graphite mt-4">
            Graduated with an {education.grade} CGPA.
          </p>
        )}
      </div>
    </article>
  );
};

export default EducationCard;
