"use client";

import { iExperience } from "@/app/utils/interfaces";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import FileUpload from "../FileUpload";

interface ExperienceFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  experience: iExperience | null;
  onSuccess: () => void;
}

const toDateStr = (d: Date | undefined) => {
  if (!d) return "";
  const date = new Date(d);
  return date.toISOString().split("T")[0];
};

export default function ExperienceForm({
  open,
  onOpenChange,
  experience,
  onSuccess,
}: ExperienceFormProps) {
  const [companyName, setCompanyName] = useState("");
  const [companyLogo, setCompanyLogo] = useState("");
  const [isCurrent, setIsCurrent] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (experience) {
      setCompanyName(experience.companyName);
      setCompanyLogo(experience.companyLogo);
      setIsCurrent(experience.isCurrent);
      setStartDate(toDateStr(experience.startDate));
      setEndDate(toDateStr(experience.endDate));
    } else {
      setCompanyName("");
      setCompanyLogo("");
      setIsCurrent(false);
      setStartDate("");
      setEndDate("");
    }
  }, [experience, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const method = experience ? "PUT" : "POST";
    const body = {
      ...(experience ? { id: experience.id } : {}),
      companyName,
      companyLogo,
      isCurrent,
      startDate,
      endDate: isCurrent ? null : endDate,
    };

    try {
      const res = await fetch("/api/admin/experience", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        toast.success(experience ? "Experience updated" : "Experience created");
        onSuccess();
      } else {
        toast.error("Failed to save experience");
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{experience ? "Edit Experience" : "Add Experience"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label>Company Name</Label>
            <Input value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
          </div>
          <FileUpload
            label="Company Logo"
            value={companyLogo}
            onChange={setCompanyLogo}
            accept="image"
            folder="logos"
          />
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="isCurrent"
              checked={isCurrent}
              onChange={(e) => setIsCurrent(e.target.checked)}
              className="rounded"
            />
            <Label htmlFor="isCurrent">Currently working here</Label>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label>Start Date</Label>
              <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
            </div>
            {!isCurrent && (
              <div className="flex flex-col gap-2">
                <Label>End Date</Label>
                <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
              </div>
            )}
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
