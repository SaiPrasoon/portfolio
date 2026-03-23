"use client";

import { ContactActionType } from "@/app/utils/constants";
import { toast } from "sonner";
import { Copy, ExternalLink } from "lucide-react";
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
    <div
      className="group flex items-center gap-4 p-4 rounded-xl border bg-card hover:shadow-lg hover:border-primary/20 cursor-pointer transition-all duration-300"
      onClick={handleClick}
    >
      <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {displayLabel}
        </div>
        <div className="text-sm font-medium truncate mt-0.5">{label}</div>
      </div>
      <div className="text-muted-foreground group-hover:text-primary transition-colors">
        {actionType === ContactActionType.COPY ? (
          <Copy size={16} />
        ) : (
          <ExternalLink size={16} />
        )}
      </div>
    </div>
  );
};

export default ContactInfoSection;
