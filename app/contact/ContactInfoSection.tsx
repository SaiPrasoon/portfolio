"use client";

import React from "react";
import { ContactActionType } from "../utils/constants";
import { toast } from "sonner";

interface ContactInfoSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  label: string;
  actionType: ContactActionType;
}

const ContactInfoSection = ({
  icon,
  label,
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
      default:
        break;
    }
    console.log({ actionType });
  };

  return (
    <div
      className="flex flex-row gap-2 items-center w-100"
      onClick={handleClick}
    >
      {icon}

      <span className="cursor-pointer hover:underline hover:font-bold">{label}</span>
    </div>
  );
};

export default ContactInfoSection;
