"use client";

import { Download } from "lucide-react";

interface ResumeButtonProps {
  hideText?: boolean;
  resumeUrl: string;
}

const ResumeButton = ({ hideText, resumeUrl }: ResumeButtonProps) => {
  const downloadResume = () => {
    if (resumeUrl) {
      window.open(resumeUrl, "_blank");
    }
  };

  if (hideText) {
    return (
      <button
        onClick={downloadResume}
        className="p-2 rounded-lg hover:bg-accent transition-colors"
      >
        <Download size={18} />
      </button>
    );
  }

  return (
    <button
      onClick={downloadResume}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity w-fit"
    >
      <Download size={16} />
      Download Resume
    </button>
  );
};

export default ResumeButton;
