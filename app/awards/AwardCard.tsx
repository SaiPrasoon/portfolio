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
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{award.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row gap-2 items-center">
        <div className="text-lg w-full font-medium">{award.description}</div>

        {!hidePreview ? (
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="link"
                className="text-sky-800 font-bold dark:text-teal-500"
              >
                View Award
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{award.name}</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                {isLoading && (
                  <div className="flex w-inherit h-[20vh] bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
                )}
                <Image
                  src={award.docUrl}
                  width={650}
                  height={500}
                  alt={award.name}
                  className={`w-[80vw] h-[40vh] object-contain transition-opacity duration-300 rounded ${isLoading ? "opacity-0" : "opacity-100"}`}
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
