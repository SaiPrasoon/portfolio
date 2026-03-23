"use client";

import { iAward } from "@/app/utils/interfaces";
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
import FileUpload from "../FileUpload";

interface AwardFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  award: iAward | null;
  onSuccess: () => void;
}

export default function AwardForm({
  open,
  onOpenChange,
  award,
  onSuccess,
}: AwardFormProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [docUrl, setDocUrl] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (award) {
      setName(award.name);
      setDescription(award.description);
      setDocUrl(award.docUrl);
      setYear(award.year);
    } else {
      setName("");
      setDescription("");
      setDocUrl("");
      setYear(new Date().getFullYear());
    }
  }, [award, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const method = award ? "PUT" : "POST";
    const body = award
      ? { id: award.id, name, description, docUrl, year }
      : { name, description, docUrl, year };

    try {
      const res = await fetch("/api/admin/awards", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        toast.success(award ? "Award updated" : "Award created");
        onSuccess();
      } else {
        toast.error("Failed to save award");
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
          <DialogTitle>{award ? "Edit Award" : "Add Award"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label>Name</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Description</Label>
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <FileUpload
            label="Document (PDF/Image)"
            value={docUrl}
            onChange={setDocUrl}
            accept="both"
            folder="awards"
          />
          <div className="flex flex-col gap-2">
            <Label>Year</Label>
            <Input type="number" value={year} onChange={(e) => setYear(Number(e.target.value))} required />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
