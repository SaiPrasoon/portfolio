"use client";

import { Download } from "lucide-react";
import React from "react";

interface ResumeButtonProps {
  hideText?: boolean;
}

const ResumeButton = ({ hideText }: ResumeButtonProps) => {
  const resumeUrl =
    "https://firebasestorage.googleapis.com/v0/b/portfolio-images-13699.firebasestorage.app/o/Bandi%20Mani%20Sai%20Prasoon_Resume.pdf?alt=media";

  const downloadResume = () => {
    window.open(resumeUrl, "_blank");
  };

  return (
    <div
      className={`flex flex-row gap-2 items-center p-1 px-2 rounded-md w-fit cursor-pointer ${
        hideText ? "" : "border"
      }`}
      onClick={downloadResume}
    >
      {!hideText ? <span className="font-bold text-sm">Resume</span> : null}

      <Download size={"18px"} className="cursor-pointer"/>
    </div>
  );
};

export default ResumeButton;
