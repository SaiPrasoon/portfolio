import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface SectionHeaderProps {
  title: string;
  viewMoreLink: string;
}

const SectionHeader = ({ title, viewMoreLink }: SectionHeaderProps) => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <span className="font-bold">{title}</span>
      <Link
        href={viewMoreLink}
        className="text-indigo-500 flex flex-row gap-1 items-center justify-center text-sm hover:font-bold"
      >
        <span>View More</span>
        <ChevronRight size={16} />
      </Link>
    </div>
  );
};

export default SectionHeader;
