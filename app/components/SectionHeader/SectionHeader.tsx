import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
    <div className="flex flex-row items-center justify-between">
      <h2 className="text-xl md:text-2xl font-bold tracking-tight">{title}</h2>
      {!hideLink ? (
        <Link
          href={viewMoreLink || ""}
          className="text-primary flex flex-row gap-1.5 items-center text-sm font-medium hover:gap-2.5 transition-all duration-200"
        >
          <span>View More</span>
          <ArrowRight size={14} />
        </Link>
      ) : null}
    </div>
  );
};

export default SectionHeader;
