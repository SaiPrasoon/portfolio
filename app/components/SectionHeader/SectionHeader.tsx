import { ChevronRight } from "lucide-react";
import TransitionLink from "../TransitionLink";

interface SectionHeaderProps {
  title: string;
  viewMoreLink?: string;
  hideLink?: boolean;
}

const SectionHeader = ({
  title,
  viewMoreLink,
  hideLink,
}: SectionHeaderProps) => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <span className="font-bold">{title}</span>
      {!hideLink ? (
        <TransitionLink
          href={viewMoreLink || ""}
          className="text-indigo-500 flex flex-row gap-1 items-center justify-center text-sm hover:font-bold  dark:text-teal-500"
        >
          <span>View More</span>
          <ChevronRight size={16} />
        </TransitionLink>
      ) : null}
    </div>
  );
};

export default SectionHeader;
