"use client";

import { Download } from "lucide-react";

interface ResumeButtonProps {
  hideText?: boolean;
  resumeUrl: string;
}

/**
 * The single filled action on the page. Pressed ink on vellum is the only
 * moment of visual weight in the system — keep it to one per viewport.
 */
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
        aria-label="Download resume"
        className="p-2 rounded-sm text-ink-black hover:text-stone transition-colors"
      >
        <Download size={18} />
      </button>
    );
  }

  return (
    <button
      onClick={downloadResume}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-pressed-ink text-vellum font-degular text-caption font-medium hover:bg-midnight transition-colors w-fit"
    >
      <Download size={14} />
      Download Résumé
    </button>
  );
};

export default ResumeButton;
