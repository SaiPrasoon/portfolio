"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Award, Eye } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { iAward } from "../utils/interfaces";

interface AwardCardProps {
  award: iAward;
  hidePreview?: boolean;
}

const AwardCard = ({ award, hidePreview }: AwardCardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Card className="w-full h-full flex flex-col group hover:shadow-lg hover:border-primary/20 transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
            <Award size={16} />
          </div>
          <CardTitle className="text-base">{award.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-row gap-2 items-center justify-between pt-0 flex-1">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {award.description}
        </p>

        {!hidePreview ? (
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary shrink-0 gap-1.5"
              >
                <Eye size={14} />
                View
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{award.name}</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                {isLoading && (
                  <div className="flex w-inherit h-[20vh] bg-muted animate-pulse rounded-lg" />
                )}
                <Image
                  src={award.docUrl}
                  width={650}
                  height={500}
                  alt={award.name}
                  className={`w-[80vw] h-[40vh] object-contain transition-opacity duration-300 rounded-lg ${
                    isLoading ? "opacity-0" : "opacity-100"
                  }`}
                  onLoad={() => setIsLoading(false)}
                />
              </div>
            </DialogContent>
          </Dialog>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default AwardCard;
