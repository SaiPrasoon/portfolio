"use client";

import { iSkill } from "@/app/utils/interfaces";
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

interface SkillFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  skill: iSkill | null;
  onSuccess: () => void;
}

export default function SkillForm({
  open,
  onOpenChange,
  skill,
  onSuccess,
}: SkillFormProps) {
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [type, setType] = useState("TECH");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (skill) {
      setName(skill.name);
      setLogo(skill.logo);
      setType(skill.type);
    } else {
      setName("");
      setLogo("");
      setType("TECH");
    }
  }, [skill, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const method = skill ? "PUT" : "POST";
    const body = skill
      ? { id: skill.id, name, logo, type }
      : { name, logo, type };

    try {
      const res = await fetch("/api/admin/skills", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        toast.success(skill ? "Skill updated" : "Skill created");
        onSuccess();
      } else {
        toast.error("Failed to save skill");
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
          <DialogTitle>{skill ? "Edit Skill" : "Add Skill"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label>Name</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <FileUpload
            label="Logo"
            value={logo}
            onChange={setLogo}
            accept="image"
            folder="skill-logos"
          />
          <div className="flex flex-col gap-2">
            <Label>Type</Label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <option value="TECH">Technical</option>
              <option value="SOFT">Soft Skill</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
