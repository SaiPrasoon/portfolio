import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface SectionHeaderProps {
  title: string;
  viewMoreLink: string;
}

const SectionHeader = ({ title, viewMoreLink }: SectionHeaderProps) => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <span className="font-bold">{title}</span>
      <Link href={viewMoreLink}>
        <Button variant='ghost'>
          <span>View More</span>
          <ChevronRight />
        </Button>
      </Link>
    </div>
  );
};

export default SectionHeader;
