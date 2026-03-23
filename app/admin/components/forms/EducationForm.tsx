"use client";

import { iEducation } from "@/app/utils/interfaces";
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

interface EducationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  education: iEducation | null;
  onSuccess: () => void;
}

const toDateStr = (d: Date | undefined) => {
  if (!d) return "";
  const date = new Date(d);
  return date.toISOString().split("T")[0];
};

export default function EducationForm({
  open,
  onOpenChange,
  education,
  onSuccess,
}: EducationFormProps) {
  const [degree, setDegree] = useState("");
  const [institution, setInstitution] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [grade, setGrade] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (education) {
      setDegree(education.degree);
      setInstitution(education.institution);
      setStartDate(toDateStr(education.startDate));
      setEndDate(toDateStr(education.endDate));
      setGrade(education.grade);
    } else {
      setDegree("");
      setInstitution("");
      setStartDate("");
      setEndDate("");
      setGrade("");
    }
  }, [education, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const method = education ? "PUT" : "POST";
    const body = education
      ? { id: education.id, degree, institution, startDate, endDate, grade }
      : { degree, institution, startDate, endDate, grade };

    try {
      const res = await fetch("/api/admin/education", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        toast.success(education ? "Education updated" : "Education created");
        onSuccess();
      } else {
        toast.error("Failed to save education");
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
          <DialogTitle>{education ? "Edit Education" : "Add Education"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label>Degree</Label>
            <Input value={degree} onChange={(e) => setDegree(e.target.value)} required />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Institution</Label>
            <Input value={institution} onChange={(e) => setInstitution(e.target.value)} required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label>Start Date</Label>
              <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
            </div>
            <div className="flex flex-col gap-2">
              <Label>End Date</Label>
              <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label>Grade</Label>
            <Input value={grade} onChange={(e) => setGrade(e.target.value)} />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
