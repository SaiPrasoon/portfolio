"use client";

import { ContactActionType } from "@/app/utils/constants";
import { toast } from "sonner";
import { ReactNode } from "react";

interface ContactInfoSectionProps {
  icon: ReactNode;
  label: string;
  displayLabel: string;
  actionType: ContactActionType;
}

const ContactInfoSection = ({
  icon,
  label,
  displayLabel,
  actionType,
}: ContactInfoSectionProps) => {
  const handleClick = () => {
    switch (actionType) {
      case ContactActionType.COPY:
        navigator.clipboard.writeText(label).then(() => {
          toast("Copied to clipboard");
        });
        break;
      case ContactActionType.NAVIGATE:
        window.open(label, "_blank");
        break;
    }
  };

  return (
    <button
      onClick={handleClick}
      className="group flex w-full items-baseline gap-2 sm:gap-8 py-5 text-left"
    >
      <span className="meta-label sm:w-[110px] sm:shrink-0">
        {displayLabel}
      </span>
      <span className="flex flex-1 items-center gap-2 font-degular text-body-lg text-graphite group-hover:text-ink-black transition-colors min-w-0">
        <span className="text-stone shrink-0">{icon}</span>
        <span className="truncate">{label}</span>
      </span>
    </button>
  );
};

export default ContactInfoSection;
