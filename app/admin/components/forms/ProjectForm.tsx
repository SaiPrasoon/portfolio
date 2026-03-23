"use client";

import { iProject } from "@/app/utils/interfaces";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { toast } from "sonner";

interface ProjectFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: iProject | null;
  experienceId: number | null;
  onSuccess: () => void;
}

const toDateStr = (d: Date | undefined) => {
  if (!d) return "";
  const date = new Date(d);
  return date.toISOString().split("T")[0];
};

export default function ProjectForm({
  open,
  onOpenChange,
  project,
  experienceId,
  onSuccess,
}: ProjectFormProps) {
  const [projectName, setProjectName] = useState("");
  const [projectUrl, setProjectUrl] = useState("");
  const [isCurrent, setIsCurrent] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (project) {
      setProjectName(project.projectName);
      setProjectUrl(project.projectUrl || "");
      setIsCurrent(project.isCurrent);
      setStartDate(toDateStr(project.startDate));
      setEndDate(toDateStr(project.endDate));
      setResponsibilities(project.responsibilities.join("\n"));
    } else {
      setProjectName("");
      setProjectUrl("");
      setIsCurrent(false);
      setStartDate("");
      setEndDate("");
      setResponsibilities("");
    }
  }, [project, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const method = project ? "PUT" : "POST";
    const responsibilitiesArr = responsibilities
      .split("\n")
      .map((r) => r.trim())
      .filter(Boolean);

    const body = {
      ...(project ? { id: project.id } : {}),
      projectName,
      projectUrl: projectUrl || null,
      isCurrent,
      startDate,
      endDate: isCurrent ? null : endDate,
      responsibilities: responsibilitiesArr,
      experienceId: experienceId,
    };

    try {
      const res = await fetch("/api/admin/projects", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        toast.success(project ? "Project updated" : "Project created");
        onSuccess();
      } else {
        toast.error("Failed to save project");
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
          <DialogTitle>{project ? "Edit Project" : "Add Project"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label>Project Name</Label>
            <Input value={projectName} onChange={(e) => setProjectName(e.target.value)} required />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Project URL</Label>
            <Input value={projectUrl} onChange={(e) => setProjectUrl(e.target.value)} />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="projIsCurrent"
              checked={isCurrent}
              onChange={(e) => setIsCurrent(e.target.checked)}
              className="rounded"
            />
            <Label htmlFor="projIsCurrent">Currently active</Label>
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
          <div className="flex flex-col gap-2">
            <Label>Responsibilities (one per line)</Label>
            <Textarea
              value={responsibilities}
              onChange={(e) => setResponsibilities(e.target.value)}
              rows={5}
              placeholder="Enter each responsibility on a new line"
            />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
