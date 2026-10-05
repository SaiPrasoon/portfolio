"use client";

import { iAward } from "@/app/utils/interfaces";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";

interface AwardCardProps {
  award: iAward;
  hidePreview?: boolean;
}

const AwardCard = ({ award, hidePreview }: AwardCardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <article className="flex flex-col gap-2 sm:flex-row sm:gap-8">
      <div className="sm:w-[110px] sm:shrink-0 sm:pt-1">
        <span className="font-degular text-caption text-stone">
          {award.year}
        </span>
      </div>

      <div className="flex-1">
        <h3 className="font-blanco text-heading-sm text-charcoal">
          {award.name}
        </h3>
        <p className="font-degular text-body text-graphite mt-3">
          {award.description}
        </p>

        {!hidePreview && award.docUrl ? (
          <Dialog>
            <DialogTrigger asChild>
              <button className="font-degular text-caption text-ink-black hover:text-stone transition-colors mt-3">
                View certificate{" "}
                <span className="text-[0.75em] align-super">↗</span>
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[560px] bg-vellum border-ash rounded-sm">
              <DialogHeader>
                <DialogTitle className="font-blanco text-heading-sm text-charcoal text-left">
                  {award.name}
                </DialogTitle>
              </DialogHeader>
              <div className="py-2">
                {isLoading && (
                  <div className="h-[40vh] w-full bg-ash/40 animate-pulse rounded-sm" />
                )}
                <Image
                  src={award.docUrl}
                  width={650}
                  height={500}
                  alt={award.name}
                  className={`w-full h-[40vh] object-contain rounded-sm transition-opacity duration-300 ${
                    isLoading ? "opacity-0 absolute" : "opacity-100"
                  }`}
                  onLoad={() => setIsLoading(false)}
                />
              </div>
            </DialogContent>
          </Dialog>
        ) : null}
      </div>
    </article>
  );
};

export default AwardCard;
